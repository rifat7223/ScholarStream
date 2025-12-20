import { useEffect } from "react";
import { useForm } from "react-hook-form";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";

const UpdatePlantForm = ({ scholar, closeForm }) => {
  const axiosSecure = useAxiosSecure();
  const queryClient = useQueryClient();

  const { register, handleSubmit, reset, formState: { isSubmitting } } = useForm();

  // Populate the form when scholar is available
  useEffect(() => {
    if (scholar) {
      reset({
        scholarshipName: scholar.scholarshipName,
        universityName: scholar.universityName,
        universityCountry: scholar.universityCountry,
        universityCity: scholar.universityCity,
        universityWorldRank: scholar.universityWorldRank,
        subjectCategory: scholar.subjectCategory,
        scholarshipCategory: scholar.scholarshipCategory,
        degree: scholar.degree,
        tuitionFees: scholar.tuitionFees,
        applicationFees: scholar.applicationFees,
        serviceCharge: scholar.serviceCharge,
        applicationDeadline: scholar.applicationDeadline,
        scholarshipPostDate: scholar.scholarshipPostDate,
        postedUserEmail: scholar.postedUserEmail,
        universityImage: scholar.universityImage,
      });
    }
  }, [scholar, reset]);

  // Mutation to update scholarship
  const updateMutation = useMutation({
    mutationFn: async (data) => axiosSecure.patch(`/scholar/${scholar._id}`, data),
    onSuccess: () => {
      toast.success("Scholarship updated successfully!");
      queryClient.invalidateQueries(["inventory"]); // adjust query key
      closeForm();
    },
    onError: (err) => {
      toast.error(err.response?.data?.message || "Failed to update");
    },
  });

  const onSubmit = async (data) => {
    try {
      // if you want to handle new image upload, integrate your imageUpload logic here
      await updateMutation.mutateAsync({
        ...data,
        tuitionFees: Number(data.tuitionFees),
        applicationFees: Number(data.applicationFees),
        serviceCharge: Number(data.serviceCharge),
      });
    } catch (error) {
      console.error(error);
      toast.error("Update failed");
    }
  };

  if (!scholar) return null;

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-xl shadow my-4">
      <h2 className="text-2xl font-bold mb-6">Update Scholarship</h2>

      <form onSubmit={handleSubmit(onSubmit)} className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Scholarship Name */}
        <div>
          <label className="label">Scholarship Name</label>
          <input {...register("scholarshipName", { required: true })} className="input" />
        </div>

        {/* University Name */}
        <div>
          <label className="label">University Name</label>
          <input {...register("universityName", { required: true })} className="input" />
        </div>

        {/* University Image */}
        <div>
          <label className="label">University Image URL</label>
          <input {...register("universityImage", { required: true })} className="input" />
        </div>

        {/* Country */}
        <div>
          <label className="label">Country</label>
          <input {...register("universityCountry", { required: true })} className="input" />
        </div>

        {/* City */}
        <div>
          <label className="label">City</label>
          <input {...register("universityCity", { required: true })} className="input" />
        </div>

        {/* World Rank */}
        <div>
          <label className="label">World Rank</label>
          <input type="number" {...register("universityWorldRank", { required: true })} className="input" />
        </div>

        {/* Subject Category */}
        <div>
          <label className="label">Subject Category</label>
          <input {...register("subjectCategory", { required: true })} className="input" />
        </div>

        {/* Scholarship Category */}
        <div>
          <label className="label">Scholarship Category</label>
          <select {...register("scholarshipCategory", { required: true })} className="input">
            <option value="">Select</option>
            <option value="Full Fund">Full Fund</option>
            <option value="Partial">Partial</option>
            <option value="Self-fund">Self-fund</option>
          </select>
        </div>

        {/* Degree */}
        <div>
          <label className="label">Degree</label>
          <select {...register("degree", { required: true })} className="input">
            <option value="">Select</option>
            <option value="Diploma">Diploma</option>
            <option value="Bachelor">Bachelor</option>
            <option value="Masters">Masters</option>
          </select>
        </div>

        {/* Tuition Fees */}
        <div>
          <label className="label">Tuition Fees</label>
          <input type="number" {...register("tuitionFees")} className="input" />
        </div>

        {/* Application Fees */}
        <div>
          <label className="label">Application Fees</label>
          <input type="number" {...register("applicationFees", { required: true })} className="input" />
        </div>

        {/* Service Charge */}
        <div>
          <label className="label">Service Charge</label>
          <input type="number" {...register("serviceCharge", { required: true })} className="input" />
        </div>

        {/* Application Deadline */}
        <div>
          <label className="label">Application Deadline</label>
          <input type="date" {...register("applicationDeadline", { required: true })} className="input" />
        </div>

        {/* Post Date */}
        <div>
          <label className="label">Post Date</label>
          <input type="date" {...register("scholarshipPostDate", { required: true })} className="input" />
        </div>

        {/* Posted User Email */}
        <div className="md:col-span-2">
          <label className="label">Posted User Email</label>
          <input type="email" {...register("postedUserEmail", { required: true })} className="input" />
        </div>

        {/* Submit */}
        <div className="md:col-span-2">
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-green-500 text-white py-3 rounded-lg font-semibold"
          >
            {isSubmitting ? "Updating..." : "Update Scholarship"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default UpdatePlantForm;
