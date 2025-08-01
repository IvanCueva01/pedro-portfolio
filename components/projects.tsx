import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github, Bot, BookOpen, Users, User } from "lucide-react"

export default function Projects() {
  const projects = [
    {
      title: "Chatbot AI App",
      description:
        "I developed a chatbot for WhatsApp using OpenAI and RAG for automated handling of business inquiries.",
      technologies: ["Python", "SQLite3", "Faiss", "WhatsApp Cloud API"],
      icon: <Bot className="w-6 h-6" />,
      color: "bg-green-100 text-green-600",
      link: "https://github.com/IvanCueva01/whatsapp-bot-ai"
    },
    {
      title: "Blog Web App",
      description:
        "Full-stack application for blog content creation and management with authentication and relational database.",
      technologies: ["React", "TypeScript", "Node.js", "Express", "PostgreSQL"],
      icon: <BookOpen className="w-6 h-6" />,
      color: "bg-blue-100 text-blue-600",
      link: "https://github.com/IvanCueva01/web-blog-app"
    },
    {
      title: "Gamified Educational Platform",
      description:
        "University group project for virtual teaching with an achievement system and progress tracking.",
      technologies: ["React", "Java", "Spring Boot", "PostgreSQL"],
      icon: <Users className="w-6 h-6" />,
      color: "bg-purple-100 text-purple-600",
      link: "https://github.com/IvanCueva01/TechClass-FrontEnd"
    },
    {
      title: "Personal Portfolio",
      description: "Design and development of a responsive web portfolio deployed in Vercel.",
      technologies: ["React", "Tailwind CSS"],
      icon: <User className="w-6 h-6" />,
      color: "bg-orange-100 text-orange-600",
    },
  ]

  return (
    <section id="projects" className="py-16 px-4 bg-gray-50">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
          Personal Projects
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <CardHeader>
                <div className="flex items-center gap-3 mb-3">
                  <div className={`p-2 rounded-lg ${project.color}`}>{project.icon}</div>
                  <CardTitle className="text-xl">{project.title}</CardTitle>
                </div>
                <p className="text-gray-600 leading-relaxed">{project.description}</p>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <Badge key={techIndex} variant="secondary" className="bg-gray-100 text-gray-700">
                      {tech}
                    </Badge>
                  ))}
                </div>
                <div className="flex gap-2">
                  <Button variant="outline" size="sm" className="flex items-center gap-2 bg-transparent">
                    <Github className="w-4 h-4" />
                    Código
                  </Button>
                  <Button variant="outline" size="sm" className="flex items-center gap-2 bg-transparent">
                    <ExternalLink className="w-4 h-4" />
                    Demo
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
