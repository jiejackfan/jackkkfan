import Link from "next/link"
import Image from "next/image"
import { Instagram } from "lucide-react"


export default function PhotographyPage() {
  const photos = [
    {
      id: 1,
      src: "/photos/what.jpg",
      title: "Portrait of Jack",
      description:
        "Captured by my good friend HN, showcases the prime colors of Kodak 200 film with my Olumpus u2 camera.",
    },
    // {
    //   id: 2,
    //   src: "/photos/street-1.jpg",
    //   title: "City Life",
    //   description:
    //     "A candid moment captured on the busy streets of downtown San Francisco. I love how street photography allows you to freeze fleeting moments that tell a story about urban life and human connection.",
    // },
    // {
    //   id: 3,
    //   src: "/photos/nature-1.jpg",
    //   title: "Morning Dew",
    //   description:
    //     "Early morning macro photography in my local park. The dew drops on this spider web caught the first rays of sunlight, creating natural prisms. Macro photography has taught me to appreciate the small details we often overlook.",
    // },
    // {
    //   id: 4,
    //   src: "/photos/portrait-1.jpg",
    //   title: "Natural Portrait",
    //   description:
    //     "A portrait session with natural lighting during the blue hour. I prefer working with available light rather than artificial lighting - it creates more authentic and emotional connections in portraits.",
    // },
    // {
    //   id: 5,
    //   src: "/photos/architecture-1.jpg",
    //   title: "Modern Lines",
    //   description:
    //     "The geometric patterns of modern architecture fascinate me. This shot was taken at the SFMOMA, focusing on how light and shadow interact with the building's angular design to create abstract compositions.",
    // },
    // {
    //   id: 6,
    //   src: "/photos/sunset-1.jpg",
    //   title: "Ocean Sunset",
    //   description:
    //     "Taken at Half Moon Bay during a particularly spectacular sunset. The waves were crashing against the rocks, and I used a longer exposure to capture the smooth water movement while keeping the dramatic sky sharp.",
    // },
  ]

  return (
    <div className="min-h-screen bg-background">
      {/* Header with Navigation */}
      <header className="border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-3">
              <h1 className="text-2xl font-bold">Jie Jack Fan</h1>
            </div>
            <nav className="flex gap-6">
              <Link href="/" className="text-muted-foreground hover:text-foreground transition-colors font-medium">
                Home
              </Link>
              <Link
                href="/photography"
                className="text-foreground hover:text-muted-foreground transition-colors font-medium"
              >
                Photography
              </Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 md:px-6 py-8 max-w-6xl">
        {/* Page Header */}
        <section className="mb-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Photography</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Photography is my creative outlet outside of coding. I enjoy capturing moments, exploring different
            perspectives, and telling stories through images. Here's a collection of some of my favorite shots.
          </p>
        </section>

        {/* Photo Grid */}
        <section className="mb-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {photos.map((photo) => (
              <Link key={photo.id} href={`/photography/${photo.id}`} className="group block">
                <div className="relative aspect-square rounded-lg overflow-hidden bg-muted">
                  <Image
                    src={photo.src || "/placeholder.svg"}
                    alt={photo.title}
                    fill
                    style={{ objectFit: "cover" }}
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw"
                    className="group-hover:scale-110 transition-transform duration-500 ease-out"
                  />

                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/60 transition-all duration-300 flex items-center justify-center">
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-center px-4">
                      <h3 className="text-white font-semibold text-lg mb-2">{photo.title}</h3>
                      <p className="text-white/80 text-sm">Click to view details</p>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Stats Section */}
        <section className="mb-16">
          <div className="bg-muted rounded-lg p-8 text-center">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <div className="text-3xl font-bold mb-2">{photos.length}</div>
                <div className="text-muted-foreground">Photos Shared</div>
              </div>
              <div>
                <div className="text-3xl font-bold mb-2">5+</div>
                <div className="text-muted-foreground">Years Experience</div>
              </div>
              <div>
                <div className="text-3xl font-bold mb-2">10+</div>
                <div className="text-muted-foreground">Locations Captured</div>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="mt-16 text-center">
          <div className="bg-muted rounded-lg p-8">
            <h3 className="text-2xl font-bold mb-4">Interested in working together?</h3>
            <h3 className="text-2xl mb-4">Check out my Instagram</h3>
            <Link href="https://instagram.com/jackkkfan_film" className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors">
              <Instagram/> <p>jackkkfan_film</p>
            </Link>
            <p className="text-muted-foreground mb-6">
              I'm always open to photography collaborations, whether it's portraits, events, or creative projects.
            </p>
            <Link
              href="mailto:jackfan1998@gmail.com"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-md hover:bg-primary/90 transition-colors font-medium"
            >
              Get in touch
            </Link>
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
