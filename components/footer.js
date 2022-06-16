import Image from "next/image"
import Link from "next/link"
import Logo from "../public/logo2.svg"

export default function Footer() {
  return (
    <footer className="bg-black text-white rounded-t-xl p-8">
      <nav className="flex gap-8 items-start justify-between">
        <Link href="/">
          <a>
            <Image src={Logo} width={172} height={40} />
          </a>
        </Link>
        <ul className="flex flex-col gap-2">
          <li className="text-lg font-bold mb-2">Aviate</li>
          <li>
            <Link href="">
              <a>About</a>
            </Link>
          </li>
          <li>
            <Link href="">
              <a>History</a>
            </Link>
          </li>
        </ul>
        <ul className="flex flex-col gap-2">
          <li className="text-lg font-bold mb-2">Navigate</li>
          <li>
            <Link href="">
              <a>Dashboard</a>
            </Link>
          </li>
          <li>
            <Link href="">
              <a>Dispatch</a>
            </Link>
          </li>
          <li>
            <Link href="">
              <a>Radar</a>
            </Link>
          </li>
          <li>
            <Link href="">
              <a>Routes</a>
            </Link>
          </li>
        </ul>
        <ul className="flex flex-col gap-2">
          <li className="text-lg font-bold mb-2">Communicate</li>
          <li>
            <Link href="">
              <a>Contact</a>
            </Link>
          </li>
        </ul>
      </nav>
      <p className="mt-8 pt-4 border-t-2 border-neutral-900">
        <small className="text-neutral-500"><strong>*Disclaimer:</strong> This is a virtual airline based on the real Braathens airline founded by Ludvig G. Braathen in 1946.</small>
      </p>
    </footer>
  )
}