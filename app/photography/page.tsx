import Link from "next/link"
import Image from "next/image"

export default function PhotographyPage() {
  const photos = [
    {
      id: 1,
      src: "/photos/what.jpg",
      title: "Golden Hour Mountains",
      description:
        "Captured during a hiking trip in the Sierra Nevada mountains. The golden hour light created this magical atmosphere as the sun set behind the peaks. This shot required patience, waiting for the perfect moment when the light hit the mountain ridges just right.",
    },
    {
      id: 2,
      src: "/photos/street-1.jpg",
      title: "City Life",
      description:
        "A candid moment captured on the busy streets of downtown San Francisco. I love how street photography allows you to freeze fleeting moments that tell a story about urban life and human connection.",
    },
    {
      id: 3,
      src: "/photos/nature-1.jpg",
      title: "Morning Dew",
      description:
        "Early morning macro photography in my local park. The dew drops on this spider web caught the first rays of sunlight, creating natural prisms. Macro photography has taught me to appreciate the small details we often overlook.",
    },
    {
      id: 4,
      src: "/photos/portrait-1.jpg",
      title: "Natural Portrait",
      description:
        "A portrait session with natural lighting during the blue hour. I prefer working with available light rather than artificial lighting - it creates more authentic and emotional connections in portraits.",
    },
    {
      id: 5,
      src: "/photos/architecture-1.jpg",
      title: "Modern Lines",
      description:
        "The geometric patterns of modern architecture fascinate me. This shot was taken at the SFMOMA, focusing on how light and shadow interact with the building's angular design to create abstract compositions.",
    },
    {
      id: 6,
      src: "/photos/sunset-1.jpg",
      title: "Ocean Sunset",
      description:
        "Taken at Half Moon Bay during a particularly spectacular sunset. The waves were crashing against the rocks, and I used a longer exposure to capture the smooth water movement while keeping the dramatic sky sharp.",
    },
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

        {/* Photo Gallery */}
        <section className="space-y-16">
          {photos.map((photo, index) => (
            <div
              key={photo.id}
              className={`flex flex-col ${index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"} gap-8 items-center`}
            >
              {/* Photo */}
              <div className="w-full lg:w-1/2">
                <div className="relative aspect-[4/3] rounded-lg overflow-hidden shadow-lg">
                  <Image
                    src={photo.src || "/placeholder.svg"}
                    alt={photo.title}
                    fill
                    style={{ objectFit: "cover" }}
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="hover:scale-105 transition-transform duration-300"
                  />
                </div>
              </div>

              {/* Description */}
              <div className="w-full lg:w-1/2 space-y-4">
                <h3 className="text-2xl font-bold">{photo.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{photo.description}</p>
              </div>
            </div>
          ))}
        </section>

        {/* Call to Action */}
        <section className="mt-16 text-center">
          <div className="bg-muted rounded-lg p-8">
            <h3 className="text-2xl font-bold mb-4">Interested in working together?</h3>
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
