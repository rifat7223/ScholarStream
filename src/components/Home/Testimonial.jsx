import React from 'react';

const Testimonial = () => {
    
const testimonials = [
  {
    name: "Sarah Ahmed",
    role: "Computer Science Student",
    image: "https://i.pravatar.cc/100?img=32",
    review:
      "This platform helped me secure a scholarship abroad. The process was smooth and well-guided.",
    rating: 5,
  },
  {
    name: "Rahim Khan",
    role: "Software Engineering Graduate",
    image: "https://i.pravatar.cc/100?img=12",
    review:
      "Amazing support and clear instructions. I highly recommend it to anyone applying for scholarships.",
    rating: 4,
  },
  {
    name: "Nusrat Jahan",
    role: "MBA Student",
    image: "https://i.pravatar.cc/100?img=47",
    review:
      "I got accepted within two months! The guidance and updates were very helpful.",
    rating: 5,
  },
];
    return (
        <div>
               <section className="bg-gray-50 py-16">
      <div className="max-w-screen-xl mx-auto px-4">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800">
            Success Stories
          </h2>
          <p className="text-gray-600 mt-3">
            Hear from students who achieved their dreams
          </p>
        </div>

        {/* Cards */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-md p-6 hover:shadow-lg transition"
            >
              <div className="flex items-center gap-4 mb-4">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-14 h-14 rounded-full object-cover"
                />
                <div>
                  <h4 className="font-semibold text-lg text-gray-800">
                    {item.name}
                  </h4>
                  <p className="text-sm text-gray-500">{item.role}</p>
                </div>
              </div>

              <p className="text-gray-600 mb-4">
                “{item.review}”
              </p>

              {/* Rating */}
              <div className="flex">
                {Array(item.rating)
                  .fill(0)
                  .map((_, i) => (
                    <span key={i} className="text-yellow-400 text-lg">
                      ★
                    </span>
                  ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
        </div>
    );
};

export default Testimonial;