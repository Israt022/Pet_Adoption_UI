import { PawPrint } from "lucide-react"
import Cat from '../../assets/images/AboutCat.jpeg'

const About = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        {/* Paw Print Icon */}
        <div className="flex justify-center mb-4">
          <PawPrint size={48} className="text-red-400" />
        </div>

        {/* Section Title */}
        <h2 className="text-4xl font-bold text-center text-gray-700 mb-12">About Us</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Left Column - Text Content */}
          <div className="relative">
            {/* Dog Silhouette */}
            <div className="absolute -left-16 -top-20 opacity-10 pointer-events-none hidden md:block">
              <svg
                width="150"
                height="150"
                viewBox="0 0 200 200"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="text-gray-400"
              >
                <path
                  d="M165.193 52.7334C162.186 51.1166 158.5 51.3166 155.679 53.2834L142.857 62.3834C138.857 65.2834 133.857 66.1834 129.179 64.7834L116.179 60.7834C111.143 59.2834 105.679 60.3834 101.679 63.7834L87.6786 75.7834C84.3214 78.6834 82.1429 82.7834 81.6786 87.2834L80.1429 100.783C79.5 106.783 76.1429 112.183 70.8571 115.283L59.3214 121.783C54.4643 124.683 51.2857 129.983 50.8214 135.783L49.6786 151.783C49.1429 158.683 53.5 165.083 60.1071 167.183L103.036 181.183C110 183.383 117.5 180.883 121.857 174.683L157.857 124.683C161.143 120.083 162.143 114.183 160.679 108.683L155.857 91.6834C154.679 87.2834 155.5 82.5834 158.143 78.7834L168.143 64.2834C170.5 60.9834 169.5 56.2834 166.143 54.0834L165.193 52.7334Z"
                  fill="currentColor"
                />
              </svg>
            </div>

            {/* Subheading */}
            <h3 className="text-2xl font-semibold text-gray-700 mb-4">Caring for Your Pets with Love</h3>

            {/* Paragraphs */}
            <p className="text-gray-600 mb-4">
            At PetBond, we believe every pet deserves a loving home and every person deserves a loyal companion. 
            We're committed to helping you find the perfect match for your lifestyle while promoting responsible pet ownership.
            </p>

            <p className="text-gray-600 mb-6">
            Our dedicated team ensures that each pet receives the care, attention, and love they need before finding their forever home. 
            From vaccinations to behavioral support, we prioritize the well-being of every animal in our care.
            </p>

            {/* Bullet Points */}
            <ul className="space-y-3">
            <li className="flex items-center">
                <PawPrint size={16} className="text-red-400 mr-2 flex-shrink-0" />
                <span className="text-gray-600">Trusted and compassionate pet adoption services.</span>
            </li>
            <li className="flex items-center">
                <PawPrint size={16} className="text-red-400 mr-2 flex-shrink-0" />
                <span className="text-gray-600">Health-checked and vaccinated animals.</span>
            </li>
            <li className="flex items-center">
                <PawPrint size={16} className="text-red-400 mr-2 flex-shrink-0" />
                <span className="text-gray-600">Supportive team ready to guide your adoption journey.</span>
            </li>
            </ul>

          </div>

          {/* Right Column - Image */}
          <div className="rounded-3xl overflow-hidden shadow-lg">
            <img
              src={Cat}
              alt="Cat with paws up on blue blanket"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default About;