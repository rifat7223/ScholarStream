import { Link } from 'react-router'

const Card = ({scholar,Allscholar}) => {
   const data = scholar || Allscholar;
  const{_id, scholarshipName,
  universityName,
  universityImage,
  universityCountry,
  universityCity,
  universityWorldRank,
  subjectCategory,
  scholarshipCategory,  
  tuitionFees,
  degree,
  applicationFees,
  serviceCharge,
  applicationDeadline,
  scholarshipPostDate,
  postedUserEmail,}=data
  // console.log(scholar,Allscholar)
  return (
    
    <div>
      
      <Link
      to={`/plant/${_id}`}
      className='cursor-pointer group shadow-xl p-3 rounded-xl'>
        
   <div className="w-full max-w-sm bg-white rounded-2xl shadow p-5 border border-gray-100">

      {/* University */}
      <div className="flex items-center gap-3 mb-4">
        <img
          src={universityImage}
          alt="University Logo"
          className="w-14 h-14 object-cover rounded-full"
        />
        <div>
          <h2 className="text-lg font-semibold">{scholarshipName}</h2>
          <p className="text-sm text-gray-600">{universityName}</p>
        </div>
      </div>

      {/* Financial Info */}
      <div className="grid grid-cols-2 gap-3 mb-4 text-sm">
        <div>
          <p className="text-gray-600">💲 Tuition Fee</p>
          <p className="font-semibold">
            {tuitionFees ? `$${tuitionFees}` : "Not Provided"}
          </p>
        </div>

        <div>
          <p className="text-gray-600">🧾 Application Fee</p>
          <p className="font-semibold">${applicationFees}</p>
        </div>

        <div>
          <p className="text-gray-600">🧾 Service Charge</p>
          <p className="font-semibold">${serviceCharge}</p>
        </div>

        <div>
          <p className="text-gray-600">📅 Deadline</p>
          <p className="font-semibold">{applicationDeadline}</p>
        </div>
      </div>

      {/* Location */}
      <p className="text-sm text-gray-700 mb-3">
        📍 {universityCity}, {universityCountry} • 🌍 Rank {universityWorldRank}
      </p>

      {/* Tags */}
      <div className="flex flex-wrap gap-2 mb-4">
        <span className="px-3 py-1 bg-blue-50 text-blue-600 text-xs font-medium rounded-full">
          {subjectCategory}
        </span>

        <span className="px-3 py-1 bg-purple-50 text-purple-600 text-xs font-medium rounded-full">
          {degree}
        </span>

        <span className="px-3 py-1 bg-green-50 text-green-600 text-xs font-medium rounded-full">
          {scholarshipCategory}
        </span>
      </div>

      {/* Footer Info */}
      <div className="text-xs text-gray-500 mb-4">
        <p>🕒 Posted on: <span className="font-medium">{scholarshipPostDate}</span></p>
        <p>👤 Posted by: <span className="font-medium">{postedUserEmail}</span></p>
      </div>

      {/* Apply Button */}
      <button className="w-full bg-orange-500 hover:bg-orange-600 text-white py-2 rounded-lg font-medium">
        Apply Now
      </button>
    </div>
    </Link>
    </div>
  )
}

export default Card
