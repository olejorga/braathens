import Image from "next/image"
import Link from "next/link"
import Logo from "../public/logo2.svg"

/**
 * A global footer.
 * 
 * @param {Object} props All.
 * 
 * @returns {JSX.Element}
 */
export default function Footer() {
  return (
    <footer className="bg-black text-white rounded-t-xl p-8">
      <nav className="flex gap-8 items-start justify-between flex-col sm:flex-row">
        {/* Logo. */}
        <Link href="/">
          <a>
            <Image src={Logo} width={172} height={40} />
          </a>
        </Link>

        {/* Navigation. */}
        <ul className="flex flex-col gap-2">
          <li className="text-lg font-bold mb-2">Aviate</li>
          <li>
            <Link href="/about">
              <a>About</a>
            </Link>
          </li>
          <li>
            <Link href="/history">
              <a>History</a>
            </Link>
          </li>
        </ul>
        <ul className="flex flex-col gap-2">
          <li className="text-lg font-bold mb-2">Navigate</li>
          <li>
            <Link href="/radar">
              <a>Radar</a>
            </Link>
          </li>
          <li>
            <Link href="/routes">
              <a>Routes</a>
            </Link>
          </li>
        </ul>
        <ul className="flex flex-col gap-2">
          <li className="text-lg font-bold mb-2">Communicate</li>
          <li>
            <Link href="/contact">
              <a>Roster</a>
            </Link>
          </li>
          <li>
            <Link href="/contact">
              <a>Contact</a>
            </Link>
          </li>
        </ul>
      </nav>

      {/* Disclaimer. */}
      <p className="mt-8 pt-4 border-t-2 border-neutral-900 text-neutral-400 text-sm">
        This is a virtual airline, loosely based on the real Braathens airline founded by Ludvig G. Braathen in 1946.
      </p>
    </footer>
  )
}