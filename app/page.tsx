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
          src="/navcravatandco.png"
          alt="Cravat and Company"
          width={300}
          height={300}
          priority
        />
        <ol className="list-inside list-decimal text-sm/6 text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
          <h1 className="mb-2 tracking-[-.01em]">Scimus Cui Prodest ~ We Know Who Benefits</h1>
          <h1 className="mb-2 tracking-[-.01em]">The Firm:</h1>
        </ol>
        
        {/*paragraph of about us*/}
        <h1 className="mb-2 tracking-[-.01em]">Built on the simple belief: the moral good in the lobbying profession. Lobbying is a civic virtue—when done with integrity, curiosity, and formal style. Advising corporations, non-profits, or membership associations, we operate with the philosophy that democracy is not self-executing. Someone must make the case. We do.  </h1>
<h1 className="mb-2 tracking-[-.01em]">
          ‘We must first walk in our clients shoes so we can accurately represent them at all levels of government.’</h1>

         <ol className="list-inside list-decimal text-sm/12 text-center sm:text-center font-[family-name:var(--font-geist-mono)]">
         <h1 className="mb-2 tracking-[-.01em]">
           A government and public affairs firm.</h1>
          </ol>
      </main>

      {/* VERY IMPORTANT this is the beginning of the footer for the company site. */}
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
       CRAVAT AND COMPANY LLC
        </a>
        <a className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="mailto:ink@cravatandcompany.org"
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
          Write to Us
        </a>

        Social Links :
        <a className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://bsky.app/profile/cravatandcompany.bsky.social"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden src="/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          BlueSky
        </a>
        <a className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://github.com/cravatandco"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden src="/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          Github
        </a>
        <a className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://www.youtube.com/@CravatandCo"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden src="/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          Youtube
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://www.linkedin.com/company/cravatandco"
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
          Linkedin 
        </a>

        <a className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://www.instagram.com/cravatandco?igsh=MXFvZzg0NnluZjcwNA%3D%3D&utm_source=qr"
          target="_blank"
          rel="noopener noreferrer"
        >
          <image 
            aria-hidden
            src="/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}/>
          Instagram
        </a>
      </footer>
    </div>
  );
}
