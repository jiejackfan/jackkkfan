import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { MapPin, Mail, Github, Linkedin, ExternalLink } from "lucide-react"
import Link from "next/link"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b">
        <div className="container mx-auto px-4 py-4">
          <h1 className="text-2xl font-bold">Jie Jack Fan</h1>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8 max-w-4xl">
        {/* Hero Section */}
        <section className="mb-12">
          <div className="flex flex-col md:flex-row items-start gap-8">
            <div className="w-24 h-24 md:w-32 md:h-32 mx-auto md:mx-0 rounded-full overflow-hidden border-2 border-border">
              <img src="/profile.jpg" alt="Jie Fan" className="w-full h-full object-cover" />
            </div>
            <div className="flex-1 text-center md:text-left">
              <h2 className="text-3xl font-bold mb-4">Hello, I'm Jie Jack Fan</h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                I'm a passionate software developer with expertise in building modern web applications. I love creating
                efficient, scalable solutions and am always eager to learn new technologies and tackle challenging
                problems.
              </p>
              <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                <div className="flex items-center gap-2 text-muted-foreground">
                  <MapPin className="w-4 h-4" />
                  <span>San Francisco, CA</span>
                </div>
                <Link
                  href="mailto:jackfan1998@gmail.com"
                  className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
                >
                  <Mail className="w-4 h-4" />
                  <span>jackfan1998@gmail.com</span>
                </Link>
                <Link
                  href="https://github.com/jiejackfan"
                  className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
                >
                  <Github className="w-4 h-4" />
                  <span>GitHub</span>
                </Link>
                <Link
                  href="https://www.linkedin.com/in/jiejackfan/"
                  className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
                >
                  <Linkedin className="w-4 h-4" />
                  <span>LinkedIn</span>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Work Experience Section */}
        <section className="mb-12">
          <h3 className="text-2xl font-bold mb-6">Work Experience</h3>
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle>Senior Software Engineer</CardTitle>
                    <CardDescription className="text-base">Tech Company Inc.</CardDescription>
                  </div>
                  <Badge variant="secondary">2022 - Present</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-3">
                  Led development of scalable web applications serving millions of users. Collaborated with
                  cross-functional teams to deliver high-quality software solutions.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline">React</Badge>
                  <Badge variant="outline">Node.js</Badge>
                  <Badge variant="outline">TypeScript</Badge>
                  <Badge variant="outline">AWS</Badge>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle>Software Engineer</CardTitle>
                    <CardDescription className="text-base">Startup Solutions</CardDescription>
                  </div>
                  <Badge variant="secondary">2020 - 2022</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-3">
                  Developed and maintained full-stack applications. Implemented new features and optimized existing
                  systems for better performance.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline">JavaScript</Badge>
                  <Badge variant="outline">Python</Badge>
                  <Badge variant="outline">PostgreSQL</Badge>
                  <Badge variant="outline">Docker</Badge>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle>Junior Developer</CardTitle>
                    <CardDescription className="text-base">Digital Agency</CardDescription>
                  </div>
                  <Badge variant="secondary">2019 - 2020</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-3">
                  Built responsive websites and web applications for various clients. Gained experience in modern web
                  development practices and agile methodologies.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline">HTML/CSS</Badge>
                  <Badge variant="outline">JavaScript</Badge>
                  <Badge variant="outline">PHP</Badge>
                  <Badge variant="outline">MySQL</Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Projects Section */}
        <section className="mb-12">
          <h3 className="text-2xl font-bold mb-6">Projects</h3>
          <div className="grid gap-6 md:grid-cols-2">
            <Card>
              <CardHeader>
                <div className="flex justify-between items-start">
                  <CardTitle className="flex items-center gap-2">
                    E-Commerce Platform
                    <Link href="#" className="text-muted-foreground hover:text-foreground">
                      <ExternalLink className="w-4 h-4" />
                    </Link>
                  </CardTitle>
                </div>
                <CardDescription>
                  A full-stack e-commerce solution with modern UI and secure payment processing
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-3">
                  Built a complete e-commerce platform with user authentication, product catalog, shopping cart, and
                  payment integration. Features responsive design and admin dashboard.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline">Next.js</Badge>
                  <Badge variant="outline">Stripe</Badge>
                  <Badge variant="outline">Prisma</Badge>
                  <Badge variant="outline">Tailwind CSS</Badge>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex justify-between items-start">
                  <CardTitle className="flex items-center gap-2">
                    Task Management App
                    <Link href="#" className="text-muted-foreground hover:text-foreground">
                      <ExternalLink className="w-4 h-4" />
                    </Link>
                  </CardTitle>
                </div>
                <CardDescription>A collaborative task management application with real-time updates</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-3">
                  Developed a team collaboration tool with drag-and-drop functionality, real-time notifications, and
                  project analytics dashboard.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline">React</Badge>
                  <Badge variant="outline">Socket.io</Badge>
                  <Badge variant="outline">Express</Badge>
                  <Badge variant="outline">MongoDB</Badge>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex justify-between items-start">
                  <CardTitle className="flex items-center gap-2">
                    Weather Dashboard
                    <Link href="#" className="text-muted-foreground hover:text-foreground">
                      <ExternalLink className="w-4 h-4" />
                    </Link>
                  </CardTitle>
                </div>
                <CardDescription>A responsive weather application with location-based forecasts</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-3">
                  Created a weather dashboard that provides current conditions and forecasts with interactive maps and
                  data visualizations.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline">Vue.js</Badge>
                  <Badge variant="outline">Chart.js</Badge>
                  <Badge variant="outline">OpenWeather API</Badge>
                  <Badge variant="outline">Geolocation</Badge>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex justify-between items-start">
                  <CardTitle className="flex items-center gap-2">
                    Portfolio Website
                    <Link href="#" className="text-muted-foreground hover:text-foreground">
                      <ExternalLink className="w-4 h-4" />
                    </Link>
                  </CardTitle>
                </div>
                <CardDescription>A personal portfolio website showcasing projects and skills</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-3">
                  Designed and developed a personal portfolio with smooth animations, dark mode support, and optimized
                  performance.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline">Gatsby</Badge>
                  <Badge variant="outline">GraphQL</Badge>
                  <Badge variant="outline">Framer Motion</Badge>
                  <Badge variant="outline">Netlify</Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t mt-12">
        <div className="container mx-auto px-4 py-6 text-center text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Jie Fan. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
