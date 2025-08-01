import { Mail, Phone, Linkedin, Github, MapPin, Heart } from "lucide-react"

const currentDate = new Date()
const currentYear = currentDate.getFullYear()

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12 px-4">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-8">
          <h3 className="text-2xl font-bold mb-4">Pedro Cueva</h3>
          <p className="text-gray-400 mb-6">Full Stack Developer | Systems and Informatics Engineering</p>

          <div className="flex flex-wrap justify-center gap-6 mb-8">
            <a
              href="mailto:pedrocuevaof@gmail.com"
              className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors"
            >
              <Mail className="w-5 h-5" />
              pedrocuevaof@gmail.com
            </a>
            <a
              href="https://w.app/5lo2ae"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors"
            >
              <Phone className="w-5 h-5" />
              +51 989 400 982
            </a>
            <div className="flex items-center gap-2 text-gray-300">
              <MapPin className="w-5 h-5" />
              Lima, Perú
            </div>
          </div>

          <div className="flex justify-center gap-6 mb-8">
            <a
              href="https://linkedin.com/in/ivan-cueva"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-gray-800 rounded-full hover:bg-gray-700 transition-colors"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a
              href="https://github.com/IvanCueva01"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-gray-800 rounded-full hover:bg-gray-700 transition-colors"
            >
              <Github className="w-6 h-6" />
            </a>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center">
          <p className="text-gray-400 flex items-center justify-center gap-2">
            Hecho con <Heart className="w-4 h-4 text-red-500" /> por Pedro Cueva © {currentYear}
          </p>
        </div>
      </div>
    </footer>
  )
}
