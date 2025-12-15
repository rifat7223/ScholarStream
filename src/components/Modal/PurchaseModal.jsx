import { Dialog, DialogPanel, DialogTitle } from '@headlessui/react'
import axios from 'axios'
import useAuth from '../../hooks/useAuth'

const PurchaseModal = ({ closeModal, isOpen,scholar }) => {
  const {user}=useAuth()
 const  {_id,scholarshipName,
    universityName,
    universityCountry,
    universityCity,
    degree,
    scholarshipCategory,
    applicationFees,
    serviceCharge,
    applicationDeadline,
  } = scholar ||{}

  const handlePayment= async()=>{
const paymentInfo={
  scholarId:_id,
  scholarshipName,
    universityName,
    universityCountry,
    universityCity,
    degree,
    scholarshipCategory,
    applicationFees,
    serviceCharge,
    applicationDeadline,
    student:{
      name:user?.displayName,
      email:user?.email
    }
}
 const {data}= await axios.post(`${import.meta.env.VITE_API_URL}/create-checkout-session`,paymentInfo)
      
       if (data?.url) {
     window.location.href = data.url
    }
  }

  // Total Price Calculation
 const totalPrice =
    Number(applicationFees || 0) + Number(serviceCharge || 0)
  return (
      <Dialog
      open={isOpen}
      as='div'
      className='relative z-10 focus:outline-none'
      onClose={closeModal}
    >
      <div className='fixed inset-0 z-10 w-screen overflow-y-auto'>
        <div className='flex min-h-full items-center justify-center p-4'>
          <DialogPanel
            transition
            className='w-full max-w-md bg-white p-6 shadow-xl rounded-2xl duration-300 ease-out'
          >
            <DialogTitle
              as='h3'
              className='text-lg font-semibold text-center text-gray-900'
            >
              Review Scholarship Before Apply
            </DialogTitle>

            <div className='mt-4 space-y-2 text-sm text-gray-600'>
              <p><span className='font-medium'>Scholarship:</span> {scholarshipName}</p>

              <p>
                <span className='font-medium'>University:</span>{' '}
                {universityName}, {universityCity}, {universityCountry}
              </p>

              <p><span className='font-medium'>Degree:</span> {degree}</p>

              <p>
                <span className='font-medium'>Category:</span>{' '}
                {scholarshipCategory}
              </p>

              <p>
                <span className='font-medium'>Application Fee:</span> $
                {applicationFees || 0}
              </p>

              <p>
                <span className='font-medium'>Service Charge:</span> $
                {serviceCharge || 0}
              </p>

              <p className='font-semibold text-gray-800'>
                Total Payable: ${totalPrice}
              </p>

              <p>
                <span className='font-medium'>Deadline:</span>{' '}
                {applicationDeadline}
              </p>
            </div>

            <div className='flex mt-6 justify-around'>
              <button
                onClick={handlePayment}
                type='button'
                className='inline-flex justify-center rounded-md bg-green-100 px-4 py-2 text-sm font-medium text-green-900 hover:bg-green-200'
              >
                Pay Now
              </button>

              <button
                type='button'
                onClick={closeModal}
                className='inline-flex justify-center rounded-md bg-red-100 px-4 py-2 text-sm font-medium text-red-900 hover:bg-red-200'
              >
                Cancel
              </button>
            </div>
          </DialogPanel>
        </div>
      </div>
    </Dialog>
  )
}

export default PurchaseModal
