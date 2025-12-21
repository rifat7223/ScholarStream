import { useQuery } from '@tanstack/react-query'
import useAuth from '../../../hooks/useAuth'
import useAxiosSecure from '../../../hooks/useAxiosSecure'

const MyOrders = () => {
  const { user } = useAuth()
  const axiosSecure = useAxiosSecure()

  const { data: orders = [] } = useQuery({
    queryKey: ['my-orders', user?.email],
    enabled: !!user?.email,
    queryFn: async () => {
      const res = await axiosSecure.get('/my-orders')
      return res.data
    },
    refetchInterval: 10000,
  })

  return (
    <div className="p-6 bg-white rounded-xl shadow">
      <h2 className="text-xl font-semibold mb-4">
        My Orders ({orders.length})
      </h2>

      <div className="overflow-x-auto">
        <table className="w-full border border-gray-200 rounded-lg">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-4 py-3 text-left text-sm font-medium">#</th>
              <th className="px-4 py-3 text-left text-sm font-medium">
                Transaction
              </th>
              <th className="px-4 py-3 text-left text-sm font-medium">
                Amount
              </th>
              <th className="px-4 py-3 text-left text-sm font-medium">
                Status
              </th>
              <th className="px-4 py-3 text-left text-sm font-medium">
                Payment
              </th>
              <th className="px-4 py-3 text-left text-sm font-medium">
                Date
              </th>
            </tr>
          </thead>

          <tbody className="divide-y">
            {orders.map((order, i) => (
              <tr
                key={order._id}
                className="hover:bg-gray-50 transition"
              >
                <td className="px-4 py-3 text-sm">{i + 1}</td>
                <td className="px-4 py-3 text-sm text-gray-600">
                  {order.transactionId}
                </td>
                <td className="px-4 py-3 text-sm font-medium">
                  ৳{order.amountPaid}
                </td>
                <td className="px-4 py-3">
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-medium
                      ${
                        order.status === 'Pending'
                          ? 'bg-yellow-100 text-yellow-700'
                          : order.status === 'In Progress'
                          ? 'bg-blue-100 text-blue-700'
                          : 'bg-green-100 text-green-700'
                      }
                    `}
                  >
                    {order.status}
                  </span>
                </td>
                <td className="px-4 py-3">
                  <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-medium">
                    Paid
                  </span>
                </td>
                <td className="px-4 py-3 text-sm text-gray-600">
                  {new Date(order.timestamp).toLocaleDateString()}
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {orders.length === 0 && (
          <p className="text-center text-gray-500 py-6">
            No orders found
          </p>
        )}
      </div>
    </div>
  )
}

export default MyOrders
