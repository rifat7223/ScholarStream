import Card from './Card'
import Container from '../Shared/Container'
import { Link } from 'react-router'
import { useQuery } from '@tanstack/react-query'
import axios from 'axios'

// Swiper
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import { Navigation, Pagination, Autoplay } from 'swiper/modules'

// Framer Motion
import { motion } from 'framer-motion'

const Plants = () => {
  const { data: scholars = [] } = useQuery({
    queryKey: ['scholars'],
    queryFn: async () => {
      const result = await axios(`${import.meta.env.VITE_API_URL}/scholar`)
      return result.data
    },
  })

  return (
    <Container>
      {/* Animated Heading */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="my-7"
      >
        <h1>
          <span className="text-5xl font-extrabold">Featured</span>{' '}
          <span className="text-5xl">Scholarships</span>
        </h1>
        <p className="mt-8">
          Here are some of the best college scholarships with approaching deadlines.
        </p>
        <Link to="/allScholar">
          <button className="border-2 px-4 mt-5 font-bold border-solid text-[#0f7771] border-[#0f7771] hover:bg-[#0f7771] hover:text-white py-2 rounded-lg">
            See All Scholarship
          </button>
        </Link>
      </motion.div>

      {/* Carousel */}
      {scholars.length > 0 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="my-10"
        >
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={20}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            breakpoints={{
              640: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
          >
            {scholars.map((scholar) => (
              <SwiperSlide key={scholar._id}>
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <Card scholar={scholar} />
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>
      )}
    </Container>
  )
}

export default Plants
