import Image from "next/image";
import Link from 'next/link';
export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">

      {/* MAIN SECTION */}
      <main className="flex flex-col gap-4 row-start-2 items-center sm:items-start text-sm text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
        <Image
          className="dark:invert"
          src="/navcravatandco.png"
          alt="Cravat and Company Logo"
          width={300}
          height={300}
          priority
        />
<h1 className="mb-2 tracking-[-.01em]">Scimus Cui Prodest ~ We Know Who Benefits</h1>
<h1 className="mb-2 tracking-[-.01em] font-bold">The Firm: .</h1>
<p className="mb-4 tracking-[-.01em]"> We begin with a simple conviction: lobbying, rightly practiced, is a moral good. Done with integrity, intellectual rigor, and stylistic discipline, it is a civic virtue. </p>

  <p className="mb-4 tracking-[-.01em]">We advise corporations, nonprofits, and membership associations with a clear philosophy: democracy is not self-executing. Cases must be made. Arguments must be heard. We make them.</p>
<p className="mb-4 tracking-[-.01em]"> To advocate well, we first walk in our clients’ shoes. Only then can we represent them faithfully and effectively at every level of government. </p>

<p className="mb-4 tracking-[-.01em]"> We are a government and public-affairs firm — and we take the work seriously</p>

<p className="mb-4 tracking-[-.01em]">
For more information see the firm's{' '}
  <Link href="/principles" className="text-blue-600 hover:underline">
    Principles</Link>{' '} page.</p>
<p className="mb-4 tracking-[-.01em]">To write use ink(at)cravatandcompany.org and CC cravatandco(at)icloud.com 
  Or you can use the Contact "Write to Us" button at the bottom of the page. </p>
      </main>

{/* FOOTER */}
      <footer className="row-start-4 w-full border-t border-gray-200 px-6 py-10 text-xs text-gray-600">
        <div className="flex flex-col gap-8 sm:flex-row sm:justify-between sm:items-start">

          {/* Section: Firm Info */}
          <div className="flex flex-col items-start gap-1">
            <a
              className="flex items-center gap-2 p-2 hover:underline hover:underline-offset-4"
              className="flex items-center gap-2 p-2 hover:underline hover:underline-offset-4"
              href="https://cravatandcompany.org"
              target="_blank"
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
            <p className="text-gray-400">&copy; {new Date().getFullYear()} All rights reserved.</p>
          </div>

          {/* Section: Contact */}
          <div className="flex flex-col items-start gap-2">
            <span className="font-semibold">Contact</span>
            <a
              className="flex items-center gap-2 p-2 hover:underline hover:underline-offset-4"
              href="mailto:cravatandco@icloud.com"
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