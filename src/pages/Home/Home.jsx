import FaqQuestion from '../../components/Home/FaqQuestion'
import Hero from '../../components/Home/Hero'
import Plants from '../../components/Home/Plants'
import Testimonial from '../../components/Home/testimonial'

const Home = () => {
  return (
    <div>
      <Hero></Hero>
      <Plants />
      {/* More components */}
      <Testimonial></Testimonial>
      <FaqQuestion></FaqQuestion>
    </div>
  )
}

export default Home
