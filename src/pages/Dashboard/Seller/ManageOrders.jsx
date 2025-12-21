import { useQuery } from '@tanstack/react-query';
import useAuth from '../../../hooks/useAuth';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import SellerOrderDataRow from '../../../components/Dashboard/TableRows/SellerOrderDataRow';

const ManageOrders = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();

  const { data: orders = [], refetch } = useQuery({
    queryKey: ['moderator-orders', user?.email],
    enabled: !!user?.email,
    queryFn: async () => {
      const res = await axiosSecure.get('/my-moderator');
      return res.data;
    },
  });

  return (
    <table className="table-auto w-full">
      <thead>
        <tr>
          <th>Email</th>
          <th>Transaction</th>
          <th>Amount</th>
          <th>Status</th>
          <th>Payment</th>
          <th>Date</th>
        </tr>
      </thead>
      <tbody>
        {orders.map(order => (
          <SellerOrderDataRow key={order._id} order={order} refetch={refetch} />
        ))}
      </tbody>
    </table>
  );
};

export default ManageOrders;
