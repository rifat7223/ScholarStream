import { useForm } from "react-hook-form";
import { imageUpload } from "../../Utils";
import useAuth from "../../hooks/useAuth";
import axios from "axios";
import { useMutation } from "@tanstack/react-query";

import LoadingSpinner from "../Shared/LoadingSpinner";
import toast from "react-hot-toast";

const AddPlantForm = () => {
  const { user } = useAuth();
const {isPending,isError,reset:mutationreset, mutateAsync}=useMutation({
  mutationFn:async playload=>
    await axios.post(`${import.meta.env.VITE_API_URL}/scholar`, playload),
  onSuccess:data =>{
    toast.success('success fully added')
    console.log(data)
    mutationreset()
  },
  onError:error =>{
    console.log(error)
  },
  onMutate:playload=>{
    console.log('i will post this data',playload)
  },
  onSettled:(data,error)=>{
    if(data) console.log(data)
    if(error) console.log(error)
  },
retry:3,
})
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      const {
        image,
        universityWorldRank,
        universityName,
        universityCountry,
        universityCity,
        tuitionFees,
        subjectCategory,
        serviceCharge,
        scholarshipPostDate,
        scholarshipName,
        applicationDeadline,
        scholarshipCategory,
        postedUserEmail,
        degree,
        applicationFees,
      } = data;

      // image upload
      const imageFile = image[0];
      const imageUrl = await imageUpload(imageFile);

      // final scholarship object
      const scholarData = {
        scholarshipName,
        universityName,
        universityCountry,
        universityCity,
        universityWorldRank,
        subjectCategory,
        scholarshipCategory,
        degree,
        tuitionFees:Number(tuitionFees),
        applicationFees:Number(applicationFees),
        serviceCharge:Number(  serviceCharge),
        applicationDeadline,
        scholarshipPostDate,
        postedUserEmail,

        universityImage: imageUrl, 

        moderator: {
          image: user?.photoURL || "",
          name: user?.displayName || "",
          email: user?.email || "",
        },
     
      };

await mutateAsync(scholarData)


      alert("Scholarship Added Successfully!");
      reset();
    } catch (error) {
      console.error(error);
      alert("Failed to add scholarship");
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-xl shadow">
      <h2 className="text-2xl font-bold mb-6">Add Scholarship</h2>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="grid grid-cols-1 md:grid-cols-2 gap-4"
      >
        {/* Scholarship Name */}
        <div>
          <label className="label">Scholarship Name</label>
          <input
            {...register("scholarshipName", { required: true })}
            className="input"
          />
          {errors.scholarshipName && (
            <p className="error">Required</p>
          )}
        </div>

        {/* University Name */}
        <div>
          <label className="label">University Name</label>
          <input
            {...register("universityName", { required: true })}
            className="input"
          />
        </div>

        {/* University Image */}
        <div>
          <label className="label">University Image</label>
          <input
            type="file"
            {...register("image", { required: true })}
            className="input"
          />
        </div>

        {/* Country */}
        <div>
          <label className="label">Country</label>
          <input
            {...register("universityCountry", { required: true })}
            className="input"
          />
        </div>

        {/* City */}
        <div>
          <label className="label">City</label>
          <input
            {...register("universityCity", { required: true })}
            className="input"
          />
        </div>

        {/* World Rank */}
        <div>
          <label className="label">World Rank</label>
          <input
            type="number"
            {...register("universityWorldRank", { required: true })}
            className="input"
          />
        </div>

        {/* Subject Category */}
        <div>
          <label className="label">Subject Category</label>
          <input
            {...register("subjectCategory", { required: true })}
            className="input"
          />
        </div>

        {/* Scholarship Category */}
        <div>
          <label className="label">Scholarship Category</label>
          <select
            {...register("scholarshipCategory", { required: true })}
            className="input"
          >
            <option value="">Select</option>
            <option value="Full Fund">Full Fund</option>
            <option value="Partial">Partial</option>
            <option value="Self-fund">Self-fund</option>
          </select>
        </div>

        {/* Degree */}
        <div>
          <label className="label">Degree</label>
          <select
            {...register("degree", { required: true })}
            className="input"
          >
            <option value="">Select</option>
            <option value="Diploma">Diploma</option>
            <option value="Bachelor">Bachelor</option>
            <option value="Masters">Masters</option>
          </select>
        </div>

        {/* Tuition Fees */}
        <div>
          <label className="label">Tuition Fees</label>
          <input
            type="number"
            {...register("tuitionFees")}
            className="input"
          />
        </div>

        {/* Application Fees */}
        <div>
          <label className="label">Application Fees</label>
          <input
            type="number"
            {...register("applicationFees", { required: true })}
            className="input"
          />
        </div>

        {/* Service Charge */}
        <div>
          <label className="label">Service Charge</label>
          <input
            type="number"
            {...register("serviceCharge", { required: true })}
            className="input"
          />
        </div>

        {/* Deadline */}
        <div>
          <label className="label">Application Deadline</label>
          <input
            type="date"
            {...register("applicationDeadline", { required: true })}
            className="input"
          />
        </div>

        {/* Post Date */}
        <div>
          <label className="label">Post Date</label>
          <input
            type="date"
            {...register("scholarshipPostDate", { required: true })}
            className="input"
          />
        </div>

        {/* Email */}
        <div className="md:col-span-2">
          <label className="label">Posted User Email</label>
          <input
            type="email"
            {...register("postedUserEmail", { required: true })
          }
            className="input"
          />
        </div>

        <div className="md:col-span-2">
          <button className="w-full bg-orange-500 text-white py-3 rounded-lg font-semibold">
            Add Scholarship
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddPlantForm;
