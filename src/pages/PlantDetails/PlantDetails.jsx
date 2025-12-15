import Container from '../../components/Shared/Container'
import Heading from '../../components/Shared/Heading'
import Button from '../../components/Shared/Button/Button'
import PurchaseModal from '../../components/Modal/PurchaseModal'
import { useState } from 'react'
import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import {  useParams } from 'react-router'

const PlantDetails = () => {
  let [isOpen, setIsOpen] = useState(false)
const{id}=useParams()

  const {data:scholar={}}=useQuery({
    queryKey:['scholar',id],
    queryFn:async ()=>{
      const result= await axios(`${import.meta.env.VITE_API_URL}/scholar/${id}`,)
      return result.data
    }
  })
console.log(scholar)

 const {
    scholarshipName,
    universityName,
    universityImage,
    universityCountry,
    universityCity,
    universityWorldRank,
    subjectCategory,
    scholarshipCategory,
    degree,
    tuitionFees,
    applicationFees,
    serviceCharge,
    applicationDeadline,
    scholarshipPostDate,
    postedUserEmail,
  } = scholar;

  const closeModal = () => {
    setIsOpen(false)
  }

  return (
    <Container>
       <div className="max-w-5xl mx-auto p-6">
      <div className="bg-white rounded-2xl shadow p-6">

        {/* Header */}
        <div className="flex items-center gap-4 mb-6">
          <img
            src={universityImage}
            onError={(e) => (e.target.src = "/university.png")}
            className="w-20 h-20 rounded-full object-cover"
          />
          <div>
            <h1 className="text-2xl font-bold">{scholarshipName}</h1>
            <p className="text-gray-600">{universityName}</p>
          </div>
        </div>

        {/* Info Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
          <p><b>Country:</b> {universityCountry}</p>
          <p><b>City:</b> {universityCity}</p>
          <p><b>World Rank:</b> {universityWorldRank}</p>
          <p><b>Subject:</b> {subjectCategory}</p>
          <p><b>Degree:</b> {degree}</p>
          <p><b>Category:</b> {scholarshipCategory}</p>
          <p><b>Tuition Fee:</b> {tuitionFees || "Not Provided"}</p>
          <p><b>Application Fee:</b> ${applicationFees}</p>
          <p><b>Service Charge:</b> ${serviceCharge}</p>
          <p><b>Deadline:</b> {applicationDeadline}</p>
          <p><b>Posted On:</b> {scholarshipPostDate}</p>
          <p><b>Posted By:</b> {postedUserEmail}</p>
        </div>

        {/* Action */}
          <button onClick={() => setIsOpen(true)} className="mt-6 bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-lg">
          Apply Now
        </button>
       
                 <PurchaseModal scholar={scholar} closeModal={closeModal} isOpen={isOpen} />
      </div>
    </div>
    </Container>
  )
}
 
             
export default PlantDetails
