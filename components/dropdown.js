import Link from "next/link"
import { useEffect, useState } from "react"

export default function Dropdown() {
  const [menuOpen, setMenuOpen] = useState(false)

  const toggleMenu = () => setMenuOpen(!menuOpen)

  return (
    <menu className="relative">
      <button className="p-4 bg-white border-2 border-black rounded-full" onClick={toggleMenu}></button>
      <ul className={`absolute mt-1 bg-white p-3 border-2 border-black rounded-lg shadow-xl right-0 flex-col gap-3 ${menuOpen ? 'flex' : 'hidden'}`}>
        <li className="border-b-2 border-black border-opacity-10 pb-3 flex items-center gap-2">
          <span>▐▐▐▐</span>
          <span className="mt-1">Andersen</span>
        </li>
        <li>
          <Link href="/">
            <a className="flex items-center gap-1">
              <span className="material-symbols-rounded">flight_takeoff</span>
              <span className="hidden sm:block">Fly now</span>
            </a>
          </Link>
        </li>
        <li>
          <Link href="/">
            <a className="flex items-center gap-1">
              <span className="material-symbols-rounded">space_dashboard</span>
              <span className="hidden sm:block">Dashboard</span>
            </a>
          </Link>
        </li>
        <li>
          <Link href="/">
            <a className="flex items-center gap-1">
              <span className="material-symbols-rounded">settings</span>
              <span className="hidden sm:block">Settings</span>
            </a>
          </Link>
        </li>
        <li className="border-t-2 border-black border-opacity-10 pt-3">
          <Link href="/">
            <a className="flex items-center gap-1">
              <span className="material-symbols-rounded">logout</span>
              <span className="hidden sm:block">Log out</span>
            </a>
          </Link>
        </li>
      </ul>
    </menu>
  )
}