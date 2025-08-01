import { Mail, Phone, Linkedin, Github, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Hero() {
  return (
    <section className="pt-24 pb-16 px-4">
      <div className="container mx-auto max-w-4xl text-center">
        <div className="mb-8">
          <img
            src="/LinkedinProfile.jpeg"
            alt="Pedro Cueva"
            className="w-32 h-32 rounded-full mx-auto my-6 border-4 border-white shadow-lg"
          />
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-4">Hi, I'm Pedro Cueva</h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-6">🎓 Systems and Informatics Engineering</p>
          <p className="text-lg text-gray-500 mb-8 max-w-3xl mx-auto">
          💻 Full Stack Developer passionate about building scalable and efficient tech solutions.
          </p>
          <p className="text-lg text-gray-500 mb-8 max-w-3xl mx-auto">
          I specialize in designing and developing modern web applications using technologies like React, TypeScript, Node.js, Python and Spring Boot.
          I enjoy turning complex problems into clean, intuitive, and impactful software.
          </p>
          <p className="text-lg text-gray-500 mb-8 max-w-3xl mx-auto">
          📍 Based in Lima, Peru — Open to remote and hybrid opportunities.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4">
          <a href="mailto:pedrocuevaof@gmail.com">
            <Button variant="outline" className="flex items-center cursor-pointer gtfgap-2 bg-transparent">
              <Mail className="w-4 h-4" />
              Contact Me
            </Button>
          </a>
          <a href="https://linkedin.com/in/ivan-cueva" target="_blank" rel="noopener noreferrer">
            <Button variant="outline" className="flex items-center cursor-pointer gap-2 bg-transparent">
              <Linkedin className="w-4 h-4" />
              LinkedIn
            </Button>
          </a>
          <a href="https://github.com/IvanCueva01" target="_blank" rel="noopener noreferrer">
            <Button className="flex items-center cursor-pointer gap-2">
              <Github className="w-4 h-4" />
              See My Projects
            </Button>
          </a>
        </div>
      </div>
    </section>
  )
}
