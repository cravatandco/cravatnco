import Image from "next/image";


// notes for production and editing
// https://www.w3schools.com/howto/howto_css_navbar_icon.asp

// the firm (home page)
// our-philosophy (about us)
// the buisness of adovocay (lobbying/services )
//  Discretion & Clientele (Clients)
// The  Lobbyesses & Lobbyists (Team)
// Contact the Offices (Contact Page)
// The Seal (Symbolism Page)
// Positions & Papers (Thought Leadership / Library)
//Induction (Careers / Apprenticeship) 
// Ethics & Disclosure (Compliance Page)

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[px] row-start-2 items-center sm:items-start">
        <Image
          className="dark:invert"
          src="/cac_large.svg"
          alt="Cravat and Company logo"
          width={250}
          height={150}
          priority
        />
        <ol className="list-inside list-decimal text-sm/6 text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
          <h1 className="mb-2 tracking-[-.01em]">Scimus Cui Prodest</h1>
          <h1 className="mb-2 tracking-[-.01em]">We Know Who Benefits</h1>
        </ol>
        
        {/*paragraph of about us*/}
        <h1 className="mb-2 tracking-[-.01em]">Our firm is built on a simple belief: Lobbying is a civic virtue—when done with integrity, curiosity, and style. Whether we’re advising corporations, nonprofits, or Membership-Associations, we operate with the philosophy that democracy is not self-executing. Someone must make the case. We do.  </h1>
         <h1 className="mb-2 [-.01em]">‘We must first walk in our clients shoes so we can accurately represent them at all levels of government’ </h1>
        
         <ol className="list-inside list-decimal text-sm/6 text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
         <h1 className="mb-2 tracking-[-.01em]">
            Lobbying and Public Affairs.</h1>
          </ol>
      </main>
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://hls.harvard.edu/bernard-koteen-office-of-public-interest-advising/about-opia/what-is-public-interest-law/public-interest-work-types/lobbying/#:~:text=A%20lobbyist%20is%20paid%20by,less%20frequently%2C%20to%20administrative%20agencies."
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image aria-hidden src="/file.svg"
            alt="Folder Icon for Massachusetts link"
            width={16}
            height={16}
          />
       A Massachusetts & New Jersey Firm.
        </a>
        <a className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="mailto:ross@cravatandcompany.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/window.svg"
            alt="Window icon"
            width={16}
            height={16}
          />
          ross@cravatandcompany.org
        </a>
        <a className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="tel:+17328506998"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden src="/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          732-850-6998
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://cravatandcompany.org/lobby"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          Lobbyesses & Lobbyists 
        </a>
      </footer>
    </div>
  );
}
