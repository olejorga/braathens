import Image from "next/image"
import Link from "next/link"
import { useEffect, useState } from "react"
import Logo from "../public/logo.svg"
import Dropdown from "./dropdown"

export default function Header() {
  const [scrollY, setScrollY] = useState(0)
  
  useEffect(() => {
    setScrollY(window.pageYOffset)

    window.addEventListener("scroll", () => {
      setScrollY(window.pageYOffset)
    })
  }, [])

  return (
    <header className={`sticky top-0 z-50 py-4 bg-white my-4 transition-all ease-in-out ${scrollY > 50 ? 'shadow-xl px-4 rounded-xl ring-2 ring-black !top-4' : ''}`}>
      <nav className="flex justify-end gap-6 items-center font-bold">
        <Link href="/">
          <a className="mr-auto">
            <Image src={Logo} width={144} height={12} />
          </a>
        </Link>
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
        <Dropdown
          head={
            <>
              <span>▐▐▐▐</span>
              <span className="mt-1 uppercase">Travolta</span>
            </>
          }
          items={[
            <Link href="/">
              <a className="flex items-center gap-1">
                <span className="material-symbols-rounded">flight_takeoff</span>
                <span className="hidden sm:block">Dispatch</span>
              </a>
            </Link>,
            <Link href="/">
              <a className="flex items-center gap-1">
                <span className="material-symbols-rounded">space_dashboard</span>
                <span className="hidden sm:block">Dashboard</span>
              </a>
            </Link>,
            <Link href="/">
              <a className="flex items-center gap-1">
                <span className="material-symbols-rounded">settings</span>
                <span className="hidden sm:block">Settings</span>
              </a>
            </Link>
          ]}
          foot={
            <Link href="/">
              <a className="flex items-center gap-1">
                <span className="material-symbols-rounded">logout</span>
                <span className="hidden sm:block">Log out</span>
              </a>
            </Link>
          }
          alignRight={true}
        />
        {/* <button className="py-2 px-4 bg-black text-white rounded-md">Join</button> */}
      </nav>
    </header>
  )
}