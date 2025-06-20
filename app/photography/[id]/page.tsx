import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, ArrowRight } from "lucide-react"
import { notFound } from "next/navigation"

const photos = [
  {
    id: 1,
    src: "/photos/what.jpg",
    title: "Golden Hour Mountains",
    description:
      "Captured by my good friend HN, showcases the prime colors of Kodak 200 film with my Olumpus u2 camera.",
    location: "San Francisco, California",
    camera: "Olympus u2",
    lens: "35mm f/2.8",
    settings: "Kodak Gold 200 ISO",
  },
  // {
  //   id: 2,
  //   src: "/photos/street-1.jpg",
  //   title: "City Life",
  //   description:
  //     "A candid moment captured on the busy streets of downtown San Francisco. I love how street photography allows you to freeze fleeting moments that tell a story about urban life and human connection. This particular shot caught my eye because of the way the morning light was streaming through the buildings, creating these beautiful geometric shadows on the sidewalk. The subject was completely unaware of being photographed, which I think adds to the authenticity of the moment. Street photography teaches you to be patient and observant, always ready for those split-second opportunities that reveal the poetry in everyday life.",
  //   location: "Downtown San Francisco, California",
  //   camera: "Fujifilm X-T4",
  //   lens: "35mm f/1.4",
  //   settings: "f/2.8, 1/250s, ISO 400",
  // },
  // {
  //   id: 3,
  //   src: "/photos/nature-1.jpg",
  //   title: "Morning Dew",
  //   description:
  //     "Early morning macro photography in my local park. The dew drops on this spider web caught the first rays of sunlight, creating natural prisms. Macro photography has taught me to appreciate the small details we often overlook in our daily lives. I woke up at 5 AM to catch the perfect lighting conditions - that magical hour just after sunrise when the dew is still fresh and the light is soft and golden. Getting this shot required lying on the wet grass for about 20 minutes, adjusting my position millimeter by millimeter to get the perfect angle where the light would refract through the water droplets just right.",
  //   location: "Golden Gate Park, San Francisco",
  //   camera: "Canon EOS R5",
  //   lens: "100mm f/2.8 Macro",
  //   settings: "f/5.6, 1/60s, ISO 200",
  // },
  // {
  //   id: 4,
  //   src: "/photos/portrait-1.jpg",
  //   title: "Natural Portrait",
  //   description:
  //     "A portrait session with natural lighting during the blue hour. I prefer working with available light rather than artificial lighting - it creates more authentic and emotional connections in portraits. This session was particularly special because we were working with a complete stranger who responded to my call for portrait volunteers on social media. There's something magical about that trust between photographer and subject, especially when you're both creating art together. The blue hour provides this incredibly flattering, even light that makes everyone look their best while maintaining a natural, unforced quality.",
  //   location: "Crissy Field, San Francisco",
  //   camera: "Sony A7 III",
  //   lens: "85mm f/1.8",
  //   settings: "f/2.2, 1/80s, ISO 800",
  // },
  // {
  //   id: 5,
  //   src: "/photos/architecture-1.jpg",
  //   title: "Modern Lines",
  //   description:
  //     "The geometric patterns of modern architecture fascinate me. This shot was taken at the SFMOMA, focusing on how light and shadow interact with the building's angular design to create abstract compositions. Architecture photography is like solving a puzzle - you're looking for that perfect angle where all the lines, shapes, and lighting come together to create something that's both documentary and artistic. I spent about an hour walking around this building, studying how the light changed throughout the day and how it affected the mood and feeling of the structure.",
  //   location: "SFMOMA, San Francisco",
  //   camera: "Canon EOS R5",
  //   lens: "16-35mm f/2.8",
  //   settings: "f/11, 1/200s, ISO 100",
  // },
  // {
  //   id: 6,
  //   src: "/photos/sunset-1.jpg",
  //   title: "Ocean Sunset",
  //   description:
  //     "Taken at Half Moon Bay during a particularly spectacular sunset. The waves were crashing against the rocks, and I used a longer exposure to capture the smooth water movement while keeping the dramatic sky sharp. Seascape photography requires a lot of patience and often getting soaked by unexpected waves! I had to time the exposure perfectly to capture the motion of the water while avoiding camera shake from the wind. The salt spray was constantly hitting my lens, so I had to clean it between every few shots. But moments like these - when nature puts on such an incredible display - make all the challenges worthwhile.",
  //   location: "Half Moon Bay, California",
  //   camera: "Sony A7 III",
  //   lens: "24-105mm f/4",
  //   settings: "f/8, 2s, ISO 100",
  // },
]

interface PhotoPageProps {
  params: {
    id: string
  };
}

export default function PhotoPage({ params }: PhotoPageProps) {
  const { id } = params;
  const photoId = Number.parseInt(id)
  const photo = photos.find((p) => p.id === photoId)

  if (!photo) {
    notFound()
  }

  const currentIndex = photos.findIndex((p) => p.id === photoId)
  const prevPhoto = currentIndex > 0 ? photos[currentIndex - 1] : null
  const nextPhoto = currentIndex < photos.length - 1 ? photos[currentIndex + 1] : null

  return (
    <div className="min-h-screen bg-background">
      {/* Header with Navigation */}
      <header className="border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-3">
              <h1 className="text-2xl font-bold">Jie Fan</h1>
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
      <main className="container mx-auto px-4 md:px-6 py-8 max-w-4xl">
        {/* Back Button */}
        <div className="mb-6">
          <Link
            href="/photography"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Photography
          </Link>
        </div>

        {/* Photo Display */}
        <section className="mb-8">
          <div className="relative aspect-[4/3] md:aspect-[3/2] rounded-lg overflow-hidden shadow-xl mb-6">
            <Image
              src={photo.src || "/placeholder.svg"}
              alt={photo.title}
              fill
              style={{ objectFit: "cover" }}
              sizes="(max-width: 768px) 100vw, 1024px"
              priority
            />
          </div>

          {/* Photo Info */}
          <div className="space-y-6">
            <div>
              <h1 className="text-3xl md:text-4xl font-bold mb-2">{photo.title}</h1>
              <p className="text-muted-foreground">{photo.location}</p>
            </div>

            <div className="prose prose-lg max-w-none">
              <p className="text-foreground leading-relaxed">{photo.description}</p>
            </div>

            {/* Technical Details */}
            <div className="bg-muted rounded-lg p-6">
              <h3 className="font-semibold mb-4">Technical Details</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                <div>
                  <span className="text-muted-foreground">Camera</span>
                  <p className="font-medium">{photo.camera}</p>
                </div>
                <div>
                  <span className="text-muted-foreground">Lens</span>
                  <p className="font-medium">{photo.lens}</p>
                </div>
                <div>
                  <span className="text-muted-foreground">Settings</span>
                  <p className="font-medium">{photo.settings}</p>
                </div>
                <div>
                  <span className="text-muted-foreground">Location</span>
                  <p className="font-medium">{photo.location}</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Navigation */}
        <section className="flex justify-between items-center pt-8 border-t">
          <div className="flex-1">
            {prevPhoto && (
              <Link
                href={`/photography/${prevPhoto.id}`}
                className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
              >
                <ArrowLeft className="w-4 h-4" />
                <div className="text-left">
                  <div className="text-sm">Previous</div>
                  <div className="font-medium">{prevPhoto.title}</div>
                </div>
              </Link>
            )}
          </div>

          <div className="flex-1 text-right">
            {nextPhoto && (
              <Link
                href={`/photography/${nextPhoto.id}`}
                className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
              >
                <div className="text-right">
                  <div className="text-sm">Next</div>
                  <div className="font-medium">{nextPhoto.title}</div>
                </div>
                <ArrowRight className="w-4 h-4" />
              </Link>
            )}
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
