import Card from './Card'
import Container from '../Shared/Container'
import { Link } from 'react-router'
import {useQuery} from '@tanstack/react-query'
import axios from 'axios'

const Plants = () => {
  const {data:scholars=[]}=useQuery({
    queryKey:['scholars'],
    queryFn:async ()=>{
      const result= await axios(`${import.meta.env.VITE_API_URL}/scholar`,)
      return result.data
    }
  })
  // console.log(data)
  return (
    <Container>
          <div className='my-7 '>
          <h1><span className='text-5xl font-extrabold'>Featured</span> <span className='text-5xl'>Scholarships</span></h1>
          <p className='mt-8'>Here are some of the best college scholarships with approaching deadlines.</p>
          <Link to='/allScholar'>
          <button className=" border-2 px-4 mt-5 font-bold border-solid text-[#0f7771] border-[#0f7771] hover:bg-[#0f7771] hover:text-white  py-2 rounded-lg ">
        See All Scholarship
      </button>
          </Link>
        </div>
      {
        scholars && scholars.length?(<div className='grid grid-cols-3'>
       {scholars.map(scholar=><Card key={scholar._id} scholar={scholar} ></Card>)}
      </div>):null
      }
    </Container>
  )
}

export default Plants
