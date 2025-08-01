import { Card, CardContent } from "@/components/ui/card"

export default function About() {
  return (
    <section id="about" className="py-16 px-4 bg-white">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">ABOUT ME</h2>

        <Card className="border-0 shadow-lg">
          <CardContent className="p-8">
            <p className="text-lg text-gray-700 leading-relaxed">
            Systems and Informatics Engineering student with a solid background in full-stack web development, databases, and 
            data analysis. Passionate about solving complex problems through scalable and efficient technological solutions.
            </p>
            <br />
            <p className="text-lg text-gray-700 leading-relaxed">
            I have experience in web application design and maintenance, microservices management, and agile methodologies (SCRUM). 
            My collaborative and results-oriented approach allows me to add value to multidisciplinary development teams.
            </p>
            <br />
            <p className="text-lg text-gray-700 leading-relaxed">
            I seek to apply my knowledge to generate a positive impact on real-world technology projects.
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
