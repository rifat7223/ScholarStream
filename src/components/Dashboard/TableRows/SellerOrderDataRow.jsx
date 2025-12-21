import useAxiosSecure from '../../../hooks/useAxiosSecure'
import toast from 'react-hot-toast'
import { useState } from 'react'

const SellerOrderDataRow = ({ order, refetch }) => {
  const axiosSecure = useAxiosSecure()
  const [loading, setLoading] = useState(false)

  const handleChangeStatus = async e => {
    const newStatus = e.target.value
    try {
      await axiosSecure.patch(`/orders/status/${order._id}`, {
        status: newStatus,
      })
      toast.success('Order status updated')
      refetch()
    } catch (err) {
      toast.error('Failed to update status')
    }
  }

  const handleCancel = async () => {
    const confirm = window.confirm('Are you sure you want to cancel this order?')
    if (!confirm) return

    try {
      setLoading(true)
      await axiosSecure.delete(`/orders/${order._id}`)
      toast.success('Order cancelled')
      refetch()
    } catch (err) {
      toast.error('Failed to cancel order')
    } finally {
      setLoading(false)
    }
  }

  return (
    <tr className="border-b">
      <td className="px-4 py-3">{order.studentEmail}</td>
      <td className="px-4 py-3">{order.transactionId}</td>
      <td className="px-4 py-3">৳{order.amountPaid}</td>

      {/* Status */}
      <td className="px-4 py-3">
        <select
          value={order.status}
          onChange={handleChangeStatus}
          className="border px-2 py-1 rounded text-sm"
        >
          <option value="Pending">Pending</option>
          <option value="In Progress">In Progress</option>
          <option value="Delivered">Delivered</option>
        </select>
      </td>

      {/* Payment */}
      <td className="px-4 py-3">
        <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs">
          {order.paymentStatus}
        </span>
      </td>

      {/* Cancel */}
      <td className="px-4 py-3">
        <button
          onClick={handleCancel}
          disabled={loading}
          className="px-3 py-1 text-sm bg-red-500 text-white rounded hover:bg-red-600 disabled:opacity-50"
        >
          Cancel
        </button>
      </td>

      <td className="px-4 py-3">
        {new Date(order.timestamp).toLocaleDateString()}
      </td>
    </tr>
  )
}

export default SellerOrderDataRow
