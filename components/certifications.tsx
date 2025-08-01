import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Award, Calendar, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Certifications() {
  const certifications = [
    {
      title: "Google Data Analytics Certificate",
      provider: "Coursera",
      date: "Jan. 2025",
      status: "Completed",
      color: "bg-green-100 text-green-700",
      link: "https://www.coursera.org/account/accomplishments/professional-cert/JCU2QN9DQ3WQ"
    },
    {
      title: "Google Cybersecurity Certificate",
      provider: "Coursera",
      date: "Jun. 2025",
      status: "Completed",
      color: "bg-green-100 text-green-700",
      link: "https://www.coursera.org/account/accomplishments/professional-cert/SQKLVNDBKA2H"
    },
    {
      title: "Full Stack Web Development Bootcamp",
      provider: "Udemy",
      date: "Aug. 2025",
      status: "Completed",
      color: "bg-green-100 text-green-700",
      link: "https://www.udemy.com/certificate/UC-eec618e3-78f4-4e43-a8a9-fa8375524bce/"
    },
    {
      title: "Full Stack Web Development (React, TypeScript, Express)",
      provider: "HolaMundo",
      date: "Nov. 2024",
      status: "Completed",
      color: "bg-green-100 text-green-700",
      link: "https://academia.holamundo.io/certificates/emjlttsgbb"
    },
    {
      title: "Python, Flask y Django",
      provider: "HolaMundo",
      date: "Dec. 2024",
      status: "Completed",
      color: "bg-green-100 text-green-700",
      link: "https://academia.holamundo.io/certificates/6g57v6lpvc"
    },
    {
      title: "Linux Operating System",
      provider: "HolaMundo",
      date: "Nov. 2024",
      status: "Completed",
      color: "bg-green-100 text-green-700",
      link: "https://academia.holamundo.io/certificates/awgtb1akz2"
    },
  ]

  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">Relevant Certifications</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader className="pb-4">
                <div className="flex items-start justify-between gap-2 mb-3">
                  <div className="p-2 bg-blue-100 rounded-lg text-blue-600">
                    <Award className="w-5 h-5" />
                  </div>
                  <Badge className={cert.color}>{cert.status}</Badge>
                </div>
                <CardTitle className="text-lg leading-tight">{cert.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="text-blue-600 font-semibold">{cert.provider}</div>
                  <div className="flex items-center gap-1 text-sm text-gray-500">
                    <Calendar className="w-4 h-4" />
                    {cert.date}
                  </div>
                  <a href={cert.link} target="_blank" rel="noopener noreferrer">
                    <Button variant="outline" size="sm" className="w-full flex items-center gap-2 bg-transparent">
                      <ExternalLink  className="w-4 h-4" />
                      View Certificate
                    </Button>
                  </a>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
