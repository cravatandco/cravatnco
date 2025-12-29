import Image from "next/image";
import Link from 'next/link';

export default function People() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">

      {/* MAIN SECTION */}
      <main className="flex flex-col gap-4 row-start-2 items-center sm:items-start text-sm text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
        <Link href="/">
          <Image
            className="dark:invert"
            src="/navcravatandco.png"
            alt="Cravat and Company Logo"
            width={300}
            height={300}
            priority
          />
        </Link>
        
        <h1 className="mb-2 tracking-[-.01em]">Scimus Cui Prodest ~ We Know Who Benefits</h1>
        <h1 className="mb-2 tracking-[-.01em] font-bold">Our People:</h1>
        
        <p className="mb-4 tracking-[-.01em] italic text-600">
        As written in our second<Link href="/principles" className="text-blue-600 hover:underline"> Principle</Link>: Our assets are people, capital, and reputation.
        </p>
        
        <p className="mb-4 tracking-[-.01em]">
          We select our people one by one. In a service business, without the best people, we cannot be the best firm.
        </p>
         <p className="mb-4 tracking-[-.01em] italic text-gray-600">
          Profiles of our team members will be added here as the firm grows.
        </p>
      </main>

      {/* FOOTER */}
      <footer className="row-start-4 w-full border-t border-gray-200 px-6 py-10 text-xs text-gray-600">
        <div className="flex flex-col gap-8 sm:flex-row sm:justify-between sm:items-start">

          {/* Section: Pages */}
          <div className="flex flex-col items-start gap-1">
            <a
              className="flex items-center gap-2 p-2 hover:underline hover:underline-offset-4"
              href="/"
              rel="noopener noreferrer"
              aria-label="Firm Masthead"
            >
              <Image
                aria-hidden
                src="/file.svg"
                alt="Folder icon"
                width={16}
                height={16}
              />
              CRAVAT AND COMPANY LLC
            </a>
            <Link href="/" className="text-gray-400 hover:underline p-2">Firm</Link>
            <Link href="/people" className="text-gray-400 hover:underline p-2">People</Link>
            <Link href="/principles" className="text-gray-400 hover:underline p-2">Principles</Link>
            <Link href="/style" className="text-gray-400 hover:underline p-2">Style</Link>
          </div>

          {/* Section: Contact */}
          <div className="flex flex-col items-start gap-2">
            <span className="font-semibold">Contact</span>
            <a
              className="flex items-center gap-2 p-2 hover:underline hover:underline-offset-4"
              href="mailto:ink@cravatandcompany.org"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Email Cravat and Company"
            >
              <Image
                aria-hidden
                src="/window.svg"
                alt="Email icon"
                width={16}
                height={16}
              />
              Write to Us
            </a>
          </div>

          {/* Section: Social */}
          <div className="flex flex-col items-start gap-2">
            <span className="font-semibold">Social</span>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              <a
                className="flex items-center gap-2 p-2 hover:underline"
                href="https://bsky.app/profile/cravatandcompany.bsky.social"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit our BlueSky"
              >
                <Image
                  aria-hidden
                  src="/globe.svg"
                  alt="BlueSky icon"
                  width={16}
                  height={16}
                />
                BlueSky
              </a>

              <a
                className="flex items-center gap-2 p-2 hover:underline"
                href="https://github.com/cravatandco"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit our GitHub"
              >
                <Image
                  aria-hidden
                  src="/globe.svg"
                  alt="GitHub icon"
                  width={16}
                  height={16}
                />
                GitHub
              </a>

              <a
                className="flex items-center gap-2 p-2 hover:underline"
                href="https://www.youtube.com/@CravatandCo"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit our YouTube"
              >
                <Image
                  aria-hidden
                  src="/globe.svg"
                  alt="YouTube icon"
                  width={16}
                  height={16}
                />
                YouTube
              </a>

              <a
                className="flex items-center gap-2 p-2 hover:underline"
                href="https://www.linkedin.com/company/cravatandco"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit our LinkedIn"
              >
                <Image
                  aria-hidden
                  src="/globe.svg"
                  alt="LinkedIn icon"
                  width={16}
                  height={16}
                />
                LinkedIn
              </a>

              <a
                className="flex items-center gap-2 p-2 hover:underline"
                href="https://www.instagram.com/cravatandco"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit our Instagram"
              >
                <Image
                  aria-hidden
                  src="/globe.svg"
                  alt="Instagram icon"
                  width={16}
                  height={16}
                />
                Instagram
              </a>
            </div>
          </div>

        </div>
      </footer>
    </div>
  );
}