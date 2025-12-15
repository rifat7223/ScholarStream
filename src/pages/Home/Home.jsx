import FaqQuestion from '../../components/Home/FaqQuestion'
import Hero from '../../components/Home/Hero'
import Plants from '../../components/Home/Plants'

const Home = () => {
  return (
    <div>
      <Hero></Hero>
      <Plants />
      {/* More components */}
      <FaqQuestion></FaqQuestion>
    </div>
  )
}

export default Home
