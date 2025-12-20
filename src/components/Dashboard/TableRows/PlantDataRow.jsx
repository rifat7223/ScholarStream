import { useState } from 'react';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import useAuth from '../../../hooks/useAuth';
import { toast } from 'react-hot-toast';
import UpdatePlantForm from '../../Form/UpdatePlantForm';

const PlantDataRow = ({ scholar }) => {
  const { scholarshipName, universityImage, universityName, tuitionFees, _id } = scholar;
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const queryClient = useQueryClient();

  const [isEditing, setIsEditing] = useState(false);

  // DELETE Mutation
  const deleteMutation = useMutation({
    mutationFn: async (id) => {
      const res = await axiosSecure.delete(`/scholar/${id}`);
      return res.data;
    },
    onSuccess: (data) => {
      if (data.success || data.deletedCount > 0) {
        queryClient.invalidateQueries(['inventory', user?.email]);
        toast.success('Scholarship deleted successfully!');
      } else {
        toast.error(data.message || 'Failed to delete');
      }
    },
    onError: (err) => {
      toast.error(err.response?.data?.message || err.message || 'Server error');
    }
  });

  const handleDelete = async () => {
    if (!_id) return toast.error('Invalid scholar ID');
    await deleteMutation.mutateAsync(_id.toString());
  };

  return (
    <>
      <tr>
        {/* University Image */}
        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
          <img
            src={universityImage}
            alt={universityName}
            className="mx-auto object-cover rounded h-10 w-15"
          />
        </td>

        {/* Scholarship Name */}
        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
          {scholarshipName}
        </td>

        {/* University Name */}
        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
          {universityName}
        </td>

        {/* Tuition Fees */}
        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
          ${tuitionFees}
        </td>

        {/* Delete Button */}
        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
          <button
            onClick={handleDelete}
            disabled={deleteMutation.isLoading}
            className={`relative inline-block px-3 py-1 font-semibold leading-tight ${
              deleteMutation.isLoading ? 'text-gray-400' : 'text-red-900 cursor-pointer'
            }`}
          >
            <span aria-hidden="true" className="absolute inset-0 bg-red-200 opacity-50 rounded-full"></span>
            <span className="relative">{deleteMutation.isLoading ? 'Deleting...' : 'Delete'}</span>
          </button>
        </td>

        {/* Update Button */}
        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
          <button
            onClick={() => setIsEditing(!isEditing)}
            className="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight"
          >
            <span aria-hidden="true" className="absolute inset-0 bg-green-200 opacity-50 rounded-full"></span>
            <span className="relative">{isEditing ? 'Cancel' : 'Update'}</span>
          </button>
        </td>
      </tr>

      {/* Inline Update Form */}
      {isEditing && (
        <tr>
          <td colSpan={5} className="bg-gray-50 p-4">
            <UpdatePlantForm
             scholar={scholar}
             closeForm={() =>
              setIsEditing(false)} />
          </td>
        </tr>
      )}
    </>
  );
};

export default PlantDataRow;
