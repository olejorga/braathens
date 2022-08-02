import Image from "next/image"
import Link from "next/link"
import { useEffect, useRef, useState } from "react"
import Logo from "../public/logo.svg"

/**
 * A global header.
 * 
 * @param {Object} props All.
 * 
 * @returns {JSX.Element}
 */
export default function Header() {
  const [scrollY, setScrollY] = useState(0)
  const [menuOpen, setMenuOpen] = useState(false)
  const menuButton = useRef()

  const toggleMenu = () => setMenuOpen(!menuOpen)

  useEffect(() => {
    document.body.addEventListener('click', e => {
      if (e.target != menuButton.current) setMenuOpen(false)
    })
  }, [])
  
  useEffect(() => {
    setScrollY(window.pageYOffset)

    window.addEventListener("scroll", () => {
      setScrollY(window.pageYOffset)
    })
  }, [])

  return (
    <header className={`sticky top-0 z-50 py-4 bg-white my-4 transition-all ease-in-out ${scrollY > 50 ? 'shadow-xl px-4 rounded-xl ring-2 ring-black !top-4' : ''}`}>
      <nav className="flex justify-end gap-6 items-center font-bold">
        {/* Logo. */}
        <Link href="/">
          <a className="mr-auto">
            <Image src={Logo} width={144} height={12} />
          </a>
        </Link>

        {/* Navigation. */}
        <Link href="/">
          <a className="flex items-center gap-1">
            <span className="material-symbols-rounded">route</span>
            <span className="hidden sm:block">Routes</span>
          </a>
        </Link>
        <Link href="/radar">
          <a className="flex items-center gap-1">
            <span className="material-symbols-rounded">radar</span>
            <span className="hidden sm:block">Radar</span>
          </a>
        </Link>
        
        <span className="opacity-10 hidden sm:block">|</span>

        {/* If logged in, show account menu. */}
        <menu className="relative">
          <button className="border-2 border-black rounded-full" onClick={toggleMenu} ref={menuButton}>
            <div className="pointer-events-none">
              <figure className="relative w-10 h-10 ">
                <Image src="/avatar.webp" layout="fill" objectFit="cover" className="rounded-full" />
              </figure>
            </div>
          </button>
          <ul className={`absolute mt-1 bg-white p-3 border-2 border-black rounded-lg shadow-xl flex-col gap-3 right-0 ${menuOpen ? 'flex' : 'hidden'}`}>
            <li className="border-b-2 border-black border-opacity-10 pb-3 flex items-center gap-2">
              <span>▐▐▐▐</span>
              <span className="mt-1 uppercase">Travolta</span>
            </li>
            <li>
              <Link href="/">
                <a className="flex items-center gap-1">
                  <span className="material-symbols-rounded">flight_takeoff</span>
                  <span>Dispatch</span>
                </a>
              </Link>
            </li>
            <li>
              <Link href="/">
                <a className="flex items-center gap-1">
                  <span className="material-symbols-rounded">space_dashboard</span>
                  <span>Dashboard</span>
                </a>
              </Link>
            </li>
            <li>
              <Link href="/">
                <a className="flex items-center gap-1">
                  <span className="material-symbols-rounded">settings</span>
                  <span>Settings</span>
                </a>
              </Link>
            </li>
            <li className="border-t-2 border-black border-opacity-10 pt-3">
              <Link href="/">
                <a className="flex items-center gap-1">
                  <span className="material-symbols-rounded">logout</span>
                  <span>Log out</span>
                </a>
              </Link>
            </li>
          </ul>
        </menu>

        {/* If not logged in, show join button. */}
        {/* <button className="py-2 px-4 bg-black text-white rounded-md">Join</button> */}
      </nav>
    </header>
  )
}