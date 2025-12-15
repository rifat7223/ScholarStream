import Card from './Card'
import Container from '../Shared/Container'
import { Link } from 'react-router'


const Plants = () => {
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
      <div className='grid grid-cols-3'>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        
       
      
        
      </div>
    </Container>
  )
}

export default Plants
