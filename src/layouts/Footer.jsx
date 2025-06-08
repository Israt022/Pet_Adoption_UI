import { Facebook, Twitter, Instagram, Phone, Mail, MapPin } from "lucide-react"

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Brand Section */}
          <div className="flex flex-col items-center md:items-start">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-12 h-12 text-lg rounded-full flex items-center justify-center">
                <span className="text-6xl text-yellow-400 mb-2">🐾</span>
              </div>
              <div>
                <h3 className="text-xl font-bold">PetBond</h3>
                <h3 className="text-xl font-bold">BD</h3>
              </div>
            </div>
            <div className="flex gap-4">
              <a href="#" className="text-blue-400 hover:text-blue-300 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-blue-400 hover:text-blue-300 transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-pink-400 hover:text-pink-300 transition-colors">
                <Instagram size={20} />
              </a>
            </div>
          </div>

          {/* About Us Section */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-gray-300">About us</h4>
            <p className="text-gray-400 text-sm leading-relaxed">
              We are passionate about connecting pets with loving families. Our mission is to provide a safe and caring environment for all animals, ensuring they find their forever homes.
            </p>
          </div>

          {/* Contact Us Section */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-gray-300">Contact Us</h4>
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-gray-400 text-sm">
                <Phone size={16} />
                <span>(123) 456-789</span>
              </div>
              <div className="flex items-center gap-2 text-gray-400 text-sm">
                <Mail size={16} />
                <a href="mailto:email@yoursite.com" className="hover:text-blue-400 transition-colors">
                  email@yoursite.com
                </a>
              </div>
              <div className="flex items-start gap-2 text-gray-400 text-sm">
                <MapPin size={16} className="mt-0.5" />
                <span>Pet Street 123 - Bangladesh</span>
              </div>
            </div>
          </div>

          {/* Business Hours Section */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-gray-300">About us</h4>
            <div className="space-y-2 text-gray-400 text-sm">
              <p>Open from 9am - 6pm</p>
              <p>Holidays - Closed</p>
              <p>Weekends - Closed</p>
            </div>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="border-t border-gray-700 mt-8 pt-6 text-center">
          <p className="text-gray-400 text-sm">
            © 2023 - 2025 <span className="text-blue-400">PetBond BD</span>. All Rights Reserved by{" "}
            <span className="text-blue-400">YourCompanyName</span>.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
