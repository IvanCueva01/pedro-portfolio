import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Code, Database, BarChart3, Settings, Shield, Wrench } from "lucide-react"

export default function Skills() {
  const skillCategories = [
    {
      title: "Programming languages",
      icon: <Code className="w-6 h-6" />,
      skills: ["Python", "JavaScript", "TypeScript", "Java", "C#"],
    },
    {
      title: "Frameworks & Libraries",
      icon: <Settings className="w-6 h-6" />,
      skills: [
        "React",
        "Node.js",
        "Express",
        ".NET",
        "Spring Boot",
        "Flask",
        "Django",
        "Bootstrap",
        "Tailwind CSS",
        "JQuery",
        "EJS",
      ],
    },
    {
      title: "Databases",
      icon: <Database className="w-6 h-6" />,
      skills: ["SQL Server", "MySQL", "PostgreSQL", "MongoDB"],
    },
    {
      title: "Data Analysis & BI",
      icon: <BarChart3 className="w-6 h-6" />,
      skills: ["Pandas", "NumPy", "Power BI", "Tableau", "R", "BigQuery", "ETL", "Google Sheets"],
    },
    {
      title: "DevOps & Tools",
      icon: <Wrench className="w-6 h-6" />,
      skills: ["Git", "GitHub", "Docker", "Linux", "Windows", "SCRUM", "Trello", "Microsoft Project", "Visio"],
    },
    {
      title: "Cibersecurity & Others",
      icon: <Shield className="w-6 h-6" />,
      skills: ["Security Principles", "Vulnerability Analysis", "WordPress", "Lucidchart", "Bizagi", "Figma"],
    },
  ]

  return (
    <section id="skills" className="py-16 px-4 bg-gray-50">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">My Skills</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader className="pb-4">
                <CardTitle className="flex items-center gap-3 text-lg">
                  <div className="p-2 bg-blue-100 rounded-lg text-blue-600">{category.icon}</div>
                  {category.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <Badge key={skillIndex} variant="secondary" className="bg-blue-50 text-blue-700 hover:bg-blue-100">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
