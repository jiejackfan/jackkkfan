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
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-3">
              <h1 className="text-2xl font-bold">Jie Jack Fan</h1>
            </div>
            <nav className="flex gap-6">
              <Link href="/" className="text-foreground hover:text-muted-foreground transition-colors font-medium">
                Home
              </Link>
              <Link
                href="/photography"
                className="text-muted-foreground hover:text-foreground transition-colors font-medium"
              >
                Photography
              </Link>
            </nav>
          </div>
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
                    <CardTitle>Software Engineer II</CardTitle>
                    <CardDescription className="text-base">VMware Inc.</CardDescription>
                  </div>
                  <Badge variant="secondary">2022.6 - Present</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-3">
                  At VMware Inc., I engineered scalable backend services and APIs using Node.js, SQL, AWS, and Angular to power
                  real-time license and order management systems, optimize data performance, and automate customer notifications, 
                  enhancing reliability and responsiveness for 1000+ enterprise users.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline">Angular</Badge>
                  <Badge variant="outline">Node.js</Badge>
                  <Badge variant="outline">TypeScript</Badge>
                  <Badge variant="outline">AWS</Badge>
                  <Badge variant="outline">MySQL</Badge>
                  <Badge variant="outline">Redis</Badge>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle>Software Engineer Intern</CardTitle>
                    <CardDescription className="text-base">Glimmer 411</CardDescription>
                  </div>
                  <Badge variant="secondary">2021.5 - 2021.8</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-3">
                  At Glimmer411, I built scalable and secure backend services using Firebase, Cloud Functions, and Angular to streamline 
                  user routine logging, automate data consistency, and enforce role-based access, supporting fast and reliable access for 
                  over 100 users.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline">JavaScript</Badge>
                  <Badge variant="outline">Python</Badge>
                  <Badge variant="outline">PostgreSQL</Badge>
                  <Badge variant="outline">Docker</Badge>
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
                    Astronomy Picture of the Day
                    <Link href="#" className="text-muted-foreground hover:text-foreground">
                      <ExternalLink className="w-4 h-4" />
                    </Link>
                  </CardTitle>
                </div>
                <CardDescription>
                  A full-stack social media website for space lovers
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-3">
                  Built a complete social media platform with user authentication, posting, commenting.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline">React</Badge>
                  <Badge variant="outline">Java</Badge>
                  <Badge variant="outline">Spring</Badge>
                  <Badge variant="outline">HTML</Badge>
                </div>
              </CardContent>
            </Card>

            {/* <Card>
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
            </Card> */}

            {/* <Card>
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
            </Card> */}
          </div>
        </section>

        {/* Education Section */}
        <section className="mb-12">
          <h3 className="text-2xl font-bold mb-6">Education</h3>
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle>University of Virginia</CardTitle>
                    <CardDescription className="text-base">Master of Engineering in Computer Science</CardDescription>
                  </div>
                  <Badge variant="secondary">2020.8 - 2022.5</Badge>
                </div>
              </CardHeader>
              {/* <CardContent>
                <p className="text-muted-foreground mb-3">
                  Led development of scalable web applications serving enterprises users. Collaborated with
                  cross-functional teams to deliver high-quality software solutions.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline">Angular</Badge>
                  <Badge variant="outline">Node.js</Badge>
                  <Badge variant="outline">TypeScript</Badge>
                  <Badge variant="outline">AWS</Badge>
                  <Badge variant="outline">MySQL</Badge>
                  <Badge variant="outline">Redis</Badge>
                </div>
              </CardContent> */}
            </Card>

            <Card>
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle>Northeastern University</CardTitle>
                    <CardDescription className="text-base">Bachelor of Science in Computer Engineering</CardDescription>
                  </div>
                  <Badge variant="secondary">2016.9 - 2020.6</Badge>
                </div>
              </CardHeader>
              {/* <CardContent>
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
              </CardContent> */}
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
