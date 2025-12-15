const Footer = () => {
  return (
     <footer className="bg-[#344645] text-white py-6 mt-10">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-6">
        
        {/* Logo / Title */}
        <div>
          <h2 className="text-2xl font-bold">ScholarHub</h2>
          <p className="mt-2 text-sm text-gray-200">
            Your gateway to global scholarships.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:underline">Home</a></li>
            <li><a href="#" className="hover:underline">Scholarships</a></li>
            <li><a href="#" className="hover:underline">Contact</a></li>
            <li><a href="#" className="hover:underline">About</a></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Contact</h3>
          <p>Email: support@scholarhub.com</p>
          <p>Phone: +880 1234-567890</p>
        </div>

      </div>

      <hr className="border-gray-500 mt-6" />

      <p className="text-center text-sm mt-4">
        © {new Date().getFullYear()} ScholarHub. All Rights Reserved.
      </p>
    </footer>
  )
}

export default Footer
