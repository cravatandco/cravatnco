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
<p className="mb-4 tracking-[-.01em]"> These were first drafted by John Whitehead of Goldman Sachs in the 1970s. Professional excellence transcends industries. Whitehead wrote these on a legal pad at his New Jersey home. They were written as a way to preserve Goldman's unique culture as it grew larger. We have adapted them for lobbying and government affairs. The fundamentals are unchanged: clients come first, reputation is paramount, excellence is non-negotiable, and integrity is absolute. These principles guide every decision we make and every relationship we build. They are operational, not aspirational.</p>
<h1 className="mb-2 tracking-[-.01em] font-bold">Principles</h1>
<p className="mb-4 tracking-[-.01em]">I. Our clients’ interests always come first. Our experience shows that if we serve our clients well, our own success will follow. </p>
<p className="mb-4 tracking-[-.01em]">II. Our assets are people, capital, and reputation. If any of these are ever lost, the last is the most difficult to regain.</p>
<p className="mb-4 tracking-[-.01em]">III. We take great pride in the professional quality of our work. We have an uncompromising determination to achieve excellence in everything we undertake. Though we may be involved in a wide variety and heavy volume of activity, we would, if it came to a choice, rather be best than biggest.</p>
<p className="mb-4 tracking-[-.01em]">IV. We stress creativity and imagination in everything we do. While recognizing that the old way may still be the best way, we constantly strive to find a better solution to clients’ problems. </p>
<p className="mb-4 tracking-[-.01em]">V. We make an unusual effort to identify and recruit the very best person for every job. We select our people one by one. In a service business, we know that without the best people, we cannot be the best firm.</p>
<p className="mb-4 tracking-[-.01em]">VI. We offer our people the opportunity to move ahead more rapidly than is possible at most other places. We have yet to find the limits to the responsibility that our best people are able to assume. Advancement depends solely on ability, performance, and contribution to the firm’s success, without regard to race, color, age, creed, sex, or national origin.</p>
<p className="mb-4 tracking-[-.01em]">VII. We stress teamwork in everything we do. While individual creativity is always encouraged, we have found that team effort often produces the best results. We have no room for those who put their personal interests ahead of the interests of the firm and its clients.</p>
<p className="mb-4 tracking-[-.01em]">VIII. The dedication of our people to the firm and the intense effort they give their jobs are greater than one finds in most other organizations. We think that this is an important part of our success.</p>
<p className="mb-4 tracking-[-.01em]">IX. Our profits are a key to our success. They replenish our capital and attract and keep our best people. It is our practice to share our profits generously with all who helped create them. Profitability is crucial to our future.</p>
<p className="mb-4 tracking-[-.01em]">X. We consider our size an asset that we try hard to preserve. We want to be big enough to undertake the largest project that any of our clients could  contemplate, yet small enough to maintain the loyalty, the intimacy, and the esprit de corps that we all treasure and that contribute greatly to our success.</p>
<p className="mb-4 tracking-[-.01em]">XI. We constantly strive to anticipate the rapidly changing needs of our clients and to develop new services to meet those needs. We know that the world of lobbying will not stand still and that complacency can lead to extinction.</p>
<p className="mb-4 tracking-[-.01em]">XII. We regularly receive confidential information as part of our normal client relationships. To breach a confidence or to use confidential information improperly or carelessly would be unthinkable.
</p>
<p className="mb-4 tracking-[-.01em]">XIII. Our business is highly competitive, and we aggressively seek to expand our client relationships. However, we must always be fair competitors and must never denigrate other firms.</p>
<p className="mb-4 tracking-[-.01em]">XIV. Integrity and honesty are at the heart of our business. We expect our people to maintain high ethical standards in everything they do, both in their work for the firm and in their personal lives.</p>

<h2 className="mb-2 tracking-[-.01em] font-bold">Note:</h2>
<p className="mb-4 tracking-[-.01em]">“Never content to be a one-trick pony, Whitehead put out another set of guidelines or tactics for IBS business development in 1970—and these were ten commandments" Charles D. Ellis page 186, The Partnership : The Making of Goldman Sachs</p>

<h1 className="mb-2 tracking-[-.01em] font-bold">Commandments:</h1>
<p className="mb-4 tracking-[-.01em]">1. Don’t waste your time going after business we don’t really want.</p>
<p className="mb-4 tracking-[-.01em]">2. The boss usually decides—not the assistant treasurer. Do you know the boss?</p>
<p className="mb-4 tracking-[-.01em]">3. It’s just as easy to get a first-rate piece of business as a second-rate one.</p>
<p className="mb-4 tracking-[-.01em]">4. You never learn anything when you’re talking.</p>
<p className="mb-4 tracking-[-.01em]">5. The client’s objective is more important than yours.</p>
<p className="mb-4 tracking-[-.01em]">6. The respect of one person is worth more than acquaintance with 100.</p>
<p className="mb-4 tracking-[-.01em]">7. When there’s business to be done, get it!</p>
<p className="mb-4 tracking-[-.01em]">8. Important people like to deal with other important people. Are you one?</p>
<p className="mb-4 tracking-[-.01em]">9. There’s nothing worse than an unhappy client.</p>
<p className="mb-4 tracking-[-.01em]">10. If you get the business, it’s up to you to see that it’s well handled.</p>

</main>

{/* FOOTER */}
      <footer className="row-start-4 w-full border-t border-gray-200 px-6 py-10 text-xs text-gray-600">
        <div className="flex flex-col gap-8 sm:flex-row sm:justify-between sm:items-start">

          {/* Section: Firm Info */}
          <div className="flex flex-col items-start gap-1">
            <a
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