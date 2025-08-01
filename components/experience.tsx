import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Building, Calendar, MapPin } from "lucide-react"

export default function Experience() {
  return (
    <section id="experience" className="py-16 px-4 bg-white">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">Professional Experience</h2>

        <Card className="border-0 shadow-lg">
          <CardHeader>
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div>
                <CardTitle className="text-2xl text-gray-900 mb-2">IT Intern</CardTitle>
                <div className="flex items-center gap-2 text-blue-600 mb-2">
                  <Building className="w-4 h-4" />
                  <span className="font-semibold">Barco Perú SAC</span>
                </div>
                <div className="flex flex-wrap gap-4 text-sm text-gray-500">
                  <div className="flex items-center gap-1">
                    <MapPin className="w-4 h-4" />
                    Lima, Surco
                  </div>
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    April 2024 – December 2024
                  </div>
                </div>
              </div>
              <Badge variant="outline" className="w-fit">
                8 months
              </Badge>
            </div>
          </CardHeader>
          <CardContent>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                <span>
                I resolved monthly technical issues in internal systems.</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                <span>
                I updated and optimized corporate websites in WordPress, improving performance and user experience.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                <span>
                I segmented and refined the customer database in CRM to increase campaign effectiveness.
                </span>
              </li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
