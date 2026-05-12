import Image from "next/image";

/**
 * Add a new region by appending to this array.
 * `flag` should point at a square SVG in /public/images/flags/.
 */
const REGIONS = [
  {
    code: "GB",
    name: "United Kingdom",
    flag: "/images/flags/uk.svg",
    url: "https://able-care-uk.vercel.app",
    description:
      "Falls prevention for UK home care, retirement villages, and NHS-aligned care settings. NICE NG249 aligned.",
  },
  {
    code: "US",
    name: "United States",
    flag: "/images/flags/us.svg",
    url: "https://www.able-care.co",
    description:
      "Falls prevention for US home care agencies, senior living, and skilled nursing. CDC STEADI aligned.",
  },
];

/**
 * Resources that apply across regions. Update the URLs when the pages
 * are created (currently relative paths assuming they will live on this
 * global site — change to absolute URLs if hosted on UK/US instead).
 */
const RESOURCES = [
  {
    name: "User Guide",
    url: "/user-guide",
    description:
      "Step-by-step guide to setting up and running Able Assess in any care setting.",
  },
  {
    name: "Quick Start Guide",
    url: "/quick-start",
    description:
      "Get up and running with Able Assess in under 30 minutes.",
  },
];

export default function HomePage() {
  return (
    <main className="min-h-screen flex flex-col items-center px-4 py-12 md:py-20">
      <div className="max-w-5xl w-full">
        {/* Logo */}
        <div className="flex justify-center mb-10 md:mb-14">
          <Image
            src="/images/able-care-logo-horizontal.svg"
            alt="Able Care"
            width={220}
            height={50}
            priority
          />
        </div>

        {/* Headline */}
        <div className="text-center mb-12 md:mb-16">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
            Welcome to Able Care
          </h1>
          <p className="text-lg text-ac-black/70 max-w-xl mx-auto leading-relaxed">
            Falls prevention and functional health technology, developed at Imperial College London.
            Choose your region to visit the right Able Care site.
          </p>
        </div>

        {/* Region cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6 mb-16 md:mb-20">
          {REGIONS.map((region) => (
            <a
              key={region.code}
              href={region.url}
              className="group relative block rounded-2xl border border-black/8 bg-white p-7 md:p-8 shadow-sm hover:shadow-xl hover:border-ac-blue/30 hover:-translate-y-0.5 transition-all duration-200"
            >
              <div className="flex items-start gap-5">
                <Image
                  src={region.flag}
                  alt=""
                  width={56}
                  height={56}
                  className="shadow-md flex-shrink-0"
                  aria-hidden="true"
                />
                <div className="flex-1 min-w-0">
                  <h2 className="text-xl font-bold mb-1">Able Care {region.code}</h2>
                  <p className="text-sm font-medium text-ac-black/55 mb-3">{region.name}</p>
                  <p className="text-sm text-ac-black/70 leading-relaxed">
                    {region.description}
                  </p>
                </div>
              </div>
              <div className="mt-5 flex items-center gap-1 text-sm font-bold text-ac-blue">
                Visit site
                <span
                  aria-hidden="true"
                  className="inline-block transition-transform group-hover:translate-x-1"
                >
                  →
                </span>
              </div>
            </a>
          ))}
        </div>

        {/* Resources */}
        <div className="rounded-2xl bg-ac-grey/30 p-7 md:p-10">
          <div className="text-center mb-7">
            <h2 className="text-2xl font-bold mb-2">Product resources</h2>
            <p className="text-sm text-ac-black/65 max-w-lg mx-auto">
              Documentation that applies regardless of your region.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {RESOURCES.map((resource) => (
              <a
                key={resource.name}
                href={resource.url}
                className="group block rounded-xl bg-white p-5 hover:bg-ac-aqua/20 transition-colors"
              >
                <h3 className="font-bold mb-1 flex items-center gap-1.5">
                  {resource.name}
                  <span
                    aria-hidden="true"
                    className="inline-block text-ac-blue text-sm transition-transform group-hover:translate-x-1"
                  >
                    →
                  </span>
                </h3>
                <p className="text-sm text-ac-black/65 leading-relaxed">
                  {resource.description}
                </p>
              </a>
            ))}
          </div>
        </div>

        {/* Footer */}
        <footer className="mt-14 md:mt-16 text-center">
          <p className="text-xs text-ac-black/50">
            © {new Date().getFullYear()} Able Care. Falls prevention technology developed at Imperial College London.
          </p>
        </footer>
      </div>
    </main>
  );
}
