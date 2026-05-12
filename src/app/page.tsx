import Image from "next/image";

/**
 * Add a new region by appending to this array.
 * `flag` should point at a square SVG in /public/images/flags/.
 * `resources` are region-specific guides — the URLs assume the guides
 * live on the regional site; update when the team builds the pages.
 */
const REGIONS = [
  {
    code: "GB",
    name: "United Kingdom",
    flag: "/images/flags/uk.svg",
    url: "https://able-care-uk.vercel.app",
    description:
      "Falls prevention for UK home care, retirement villages, and NHS-aligned care settings. NICE NG249 aligned.",
    resources: [
      {
        name: "User Guide (UK)",
        url: "https://able-care-uk.vercel.app/user-guide",
      },
      {
        name: "Quick Start Guide (UK)",
        url: "https://able-care-uk.vercel.app/quick-start",
      },
    ],
  },
  {
    code: "US",
    name: "United States",
    flag: "/images/flags/us.svg",
    url: "https://www.able-care.co",
    description:
      "Falls prevention for US home care agencies, senior living, and skilled nursing. CDC STEADI aligned.",
    resources: [
      {
        name: "User Guide (US)",
        url: "https://www.able-care.co/user-guide",
      },
      {
        name: "Quick Start Guide (US)",
        url: "https://www.able-care.co/quick-start",
      },
    ],
  },
];

export default function HomePage() {
  return (
    <>
      {/* Hero — blue with aqua accent */}
      <section className="relative overflow-hidden bg-ac-blue text-white">
        <div
          aria-hidden="true"
          className="absolute inset-0 opacity-40 pointer-events-none"
          style={{
            background:
              "radial-gradient(circle at 75% 25%, rgba(0,255,210,0.7), transparent 55%)",
          }}
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 opacity-20 pointer-events-none"
          style={{
            background:
              "radial-gradient(circle at 15% 85%, rgba(255,255,255,0.6), transparent 50%)",
          }}
        />
        <div className="relative max-w-5xl mx-auto px-4 py-16 md:py-24 text-center">
          <div className="flex justify-center mb-10 md:mb-12">
            <Image
              src="/images/able-care-logo-horizontal-white.svg"
              alt="Able Care"
              width={240}
              height={54}
              className="h-10 md:h-12 w-auto"
              priority
            />
          </div>
          <p className="text-[11px] md:text-xs font-bold uppercase tracking-[0.3em] mb-4 text-ac-aqua">
            Global
          </p>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-5 leading-[1.05]">
            Welcome to Able Care
          </h1>
          <p className="text-lg md:text-xl text-white/85 max-w-2xl mx-auto font-light leading-relaxed">
            Falls prevention and functional health technology, developed at Imperial College London.
          </p>
        </div>
      </section>

      {/* Region cards — each card includes its own region-specific resource links */}
      <section className="bg-white py-16 md:py-24">
        <div className="max-w-5xl mx-auto px-4">
          <div className="text-center mb-12 md:mb-14">
            <p className="text-[11px] md:text-xs font-bold uppercase tracking-[0.3em] text-ac-blue mb-3">
              Choose your region
            </p>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
              Visit the right Able Care site for you
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
            {REGIONS.map((region) => (
              <div
                key={region.code}
                className="relative overflow-hidden rounded-2xl p-8 shadow-md hover:shadow-xl transition-shadow duration-300 flex flex-col"
                style={{
                  background:
                    "linear-gradient(145deg, #1432FF 0%, #1432FF 65%, #00FFD2 100%)",
                }}
              >
                <div
                  aria-hidden="true"
                  className="absolute top-0 right-0 w-40 h-40 rounded-full opacity-15 -mr-12 -mt-12 pointer-events-none"
                  style={{
                    background: "radial-gradient(circle, white, transparent)",
                  }}
                />

                {/* Flag + region name */}
                <div className="relative z-10 flex items-center gap-4 mb-5">
                  <Image
                    src={region.flag}
                    alt=""
                    width={48}
                    height={48}
                    className="shadow-lg flex-shrink-0"
                    aria-hidden="true"
                  />
                  <div className="min-w-0">
                    <h3 className="text-2xl font-bold text-white leading-tight">
                      Able Care {region.code}
                    </h3>
                    <p className="text-sm text-white/70 font-medium">
                      {region.name}
                    </p>
                  </div>
                </div>

                {/* Description */}
                <p className="relative z-10 text-white/85 font-light mb-6 leading-relaxed">
                  {region.description}
                </p>

                {/* Primary CTA — solid white pill, brand blue text */}
                <a
                  href={region.url}
                  className="group/primary relative z-10 inline-flex items-center gap-2 self-start bg-white text-ac-blue rounded-full px-5 py-2.5 font-bold shadow-md hover:shadow-lg transition-shadow"
                >
                  Visit Able Care {region.code}
                  <span
                    aria-hidden="true"
                    className="inline-block transition-transform group-hover/primary:translate-x-1"
                  >
                    →
                  </span>
                </a>

                {/* Region-specific resource links */}
                <div className="relative z-10 mt-auto pt-6 border-t border-white/15 space-y-2.5">
                  <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-white/60 mb-3">
                    Resources
                  </p>
                  {region.resources.map((r) => (
                    <a
                      key={r.name}
                      href={r.url}
                      className="group/sub flex items-center gap-2 text-sm font-medium text-white/80 hover:text-white"
                    >
                      <span>{r.name}</span>
                      <span
                        aria-hidden="true"
                        className="inline-block transition-transform group-hover/sub:translate-x-1"
                      >
                        →
                      </span>
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white py-10 border-t border-black/8">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <p className="text-xs text-ac-black/50">
            © {new Date().getFullYear()} Able Care. Falls prevention technology developed at Imperial College London.
          </p>
        </div>
      </footer>
    </>
  );
}
