
import CustomerOrderDataRow from '../../../components/Dashboard/TableRows/CustomerOrderDataRow'
import { useQuery } from '@tanstack/react-query'
import useAuth from '../../../hooks/useAuth'
import useAxiosSecure from '../../../hooks/useAxiosSecure'

const MyOrders = () => {
  const {user}=useAuth()
const axiosSecure=  useAxiosSecure()
  const { data: orders = [],  } = useQuery({
  queryKey: ['orders', user?.email],
  enabled: !!user?.email, 
  queryFn: async () => {
    const result = await  axiosSecure( `/my-orders`);
     

    return result.data;
  }
});

  console.log(orders)
  return (
    <>
       <div className="p-6">
      <h2 className="text-2xl font-bold mb-6">
        My Orders ({orders.length})
      </h2>

      {orders.length === 0 ? (
        <p>No orders found</p>
      ) : (
        <div className="overflow-x-auto bg-white rounded-xl shadow">
          <table className="table w-full">
            <thead className="bg-gray-100">
              <tr>
                <th>#</th>
                <th>Scholar ID</th>
                <th>Transaction</th>
                <th>Amount</th>
                <th>Status</th>
                <th>Payment</th>
                <th>Date</th>
              </tr>
            </thead>

            <tbody>
              {orders.map((order, index) => (
                <tr key={order._id}>
                  <td>{index + 1}</td>
                  <td className="text-xs">{order.scholarId}</td>
                  <td className="text-xs">{order.transactionId}</td>
                  <td>৳{order.amountPaid}</td>

                  <td>
                    <span
                      className={`px-3 py-1 rounded-full text-sm font-medium
                        ${
                          order.status === "pending"
                            ? "bg-yellow-100 text-yellow-700"
                            : "bg-green-100 text-green-700"
                        }
                      `}
                    >
                      {order.status}
                    </span>
                  </td>

                  <td>
                    <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm">
                      {order.paymentStatus}
                    </span>
                  </td>

                  <td>
                    {new Date(order.timestamp).toLocaleDateString()}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
    </>
  )
}

export default MyOrders
