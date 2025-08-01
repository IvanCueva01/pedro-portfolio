import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { GraduationCap, Calendar } from "lucide-react"

export default function Education() {
  const education = [
    {
      institution: "Technological University of Peru (UTP)",
      degree: " Systems and Informatics Engineering",
      period: "August 2019 – Present",
      description: "Training focused on software development, networks, data analysis, and cybersecurity.",
      status: "In progress",
      color: "bg-yellow-100 text-yellow-700",
    },
    {
      institution: "Alas Peruanas Language Center",
      degree: "English Intermediate Level B2",
      period: "January 2019 – January 2022",
      description: "Intermediate level English language certification.",
      status: "Finished",
      color: "bg-green-100 text-green-700",
    },
  ]

  return (
    <section id="education" className="py-16 px-4 bg-white">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">Academic Training</h2>

        <div className="space-y-6">
          {education.map((edu, index) => (
            <Card key={index} className="border-0 shadow-lg">
              <CardHeader>
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div>
                    <CardTitle className="text-xl text-gray-900 mb-2 flex items-center gap-3">
                      <div className="p-2 bg-blue-100 rounded-lg text-blue-600">
                        <GraduationCap className="w-5 h-5" />
                      </div>
                      {edu.degree}
                    </CardTitle>
                    <div className="text-blue-600 font-semibold mb-2">{edu.institution}</div>
                    <div className="flex items-center gap-1 text-sm text-gray-500">
                      <Calendar className="w-4 h-4" />
                      {edu.period}
                    </div>
                  </div>
                  <Badge className={edu.color}>
                    {edu.status}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">{edu.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
