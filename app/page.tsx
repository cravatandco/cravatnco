import Image from "next/image";


// notes for productio and contitued ediitnng 
// https://www.w3schools.com/howto/howto_css_navbar_icon.asp

// the firm (home page)
// our-philosophy (about us)
// the buisness of adovocay (lobbying/services )
//  Discretion & Clientele (Clients)
// The Lobbyists & Lobbyesses (Team)
// Contact the Offices (Contact Page)
// The Seal (Symbolism Page)
// Positions & Papers (Thought Leadership / Library)
//Induction (Careers / Apprenticeship) 
// Ethics & Disclosure (Compliance Page)

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <Image
          className="dark:invert"
          src="/cac_large.svg"
          alt="Cravat and Company logo"
          width={450}
          height={95}
          priority
        />
        <ol className="list-inside list-decimal text-sm/6 text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
          <h1 className="mb-2 tracking-[-.01em]">
            Lobbying and Public Affairs.
          </h1>
          <h1 className="mb-2 tracking-[-.01em]">Licensed in Massachusetts</h1>
        </ol>

      </main>
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://www.irs.gov/businesses/small-businesses-self-employed/s-corporations"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/file.svg"
            alt="File icon"
            width={16}
            height={16}
          />
       A Massachussetts based S-Corproation
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="mailto:contact@cravatandcompany.com"
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
          contact@cravatandcompany.com
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="tel:+17328506998"
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
          732-850-6998
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://www.sec.state.ma.us/divisions/lobbyist/lobbyist.htm"
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
          Licensed to Lobby in Massachusetts
        </a>
      </footer>
    </div>
  );
}
