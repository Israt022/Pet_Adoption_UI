import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import dogcat from "../../../assets/images/dog-cat.jpg"
import cat1 from "../../../assets/images/cat1.jpg"
import cat2 from "../../../assets/images/cat2.jpg"
import bird from "../../../assets/images/bird.jpg"

const CarouselSlide = () => {
  const [currentSlide, setCurrentSlide] = useState(0)

  const slides = [
  {
    id: 1,
    title: "FIND YOUR NEW BEST FRIEND",
    subtitle: "Thousands of loving pets are waiting for a forever home. Adopt, don't shop!",
    buttonText: "ADOPT NOW",
    image: dogcat,
  },
  {
    id: 2,
    title: "GIVE A PET A SECOND CHANCE",
    subtitle: "Help save lives by opening your heart and home to rescue animals in need.",
    buttonText: "HOW TO HELP",
    image: cat1,
  },
  {
    id: 3,
    title: "COMPASSIONATE CARE FOR EVERY PET",
    subtitle: "We provide support and resources to ensure pets get the love and care they deserve.",
    buttonText: "OUR SERVICES",
    image: cat2,
  },
  {
    id: 4,
    title: "JOIN OUR PET COMMUNITY",
    subtitle: "Connect with fellow pet lovers and share your adoption stories and tips.",
    buttonText: "GET INVOLVED",
    image: bird,
  },
]

  // Auto-play functionality
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 5000) // Change slide every 5 seconds

    return () => clearInterval(timer)
  }, [slides.length])

  const goToSlide = (index) => {
    setCurrentSlide(index)
  }

  const goToPrevious = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }

  const goToNext = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }

  return (
    <div className="relative w-full h-[600px] overflow-hidden rounded-lg shadow-lg">
      {/* Slides Container */}
      <div
        className="flex transition-transform duration-500 ease-in-out h-full"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {slides.map((slide) => (
          <div
            key={slide.id}
            className="min-w-full h-full relative bg-gradient-to-r from-gray-800 via-gray-600 to-transparent"
          >
            {/* Background Image */}
            <div
              className="absolute inset-0 bg-cover bg-center bg-no-repeat"
              style={{
                backgroundImage: `url(${slide.image})`,
                filter: "brightness(0.7)",
              }}
            />

            {/* Diagonal Overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent" />

            {/* Content */}
            <div className="relative z-10 h-full flex items-center justify-center sm:justify-start text-center sm:text-left">
              <div className="max-w-6xl mx-auto px-4 sm:px-6 w-full">
                <div className="max-w-lg">
                  <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight">
                    {slide.title}
                  </h1>
                  <p className="text-sm sm:text-base md:text-lg text-gray-200 mb-6 leading-relaxed">
                    {slide.subtitle}
                  </p>
                  <button
                    className="bg-yellow-500 hover:bg-yellow-600 text-white font-semibold px-8 py-3 rounded transition-colors duration-300"
                    onClick={slide.buttonAction}
                  >
                    {slide.buttonText}
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={goToPrevious}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-2 rounded-full transition-colors duration-300"
        aria-label="Previous slide"
      >
        <ChevronLeft size={24} />
      </button>

      <button
        onClick={goToNext}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-2 rounded-full transition-colors duration-300"
        aria-label="Next slide"
      >
        <ChevronRight size={24} />
      </button>

      {/* Dots Navigation */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-colors duration-300 ${
              index === currentSlide ? "bg-yellow-500" : "bg-white/50 hover:bg-white/70"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}

export default CarouselSlide
