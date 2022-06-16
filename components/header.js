import Image from "next/image"
import Link from "next/link"
import { useEffect, useState } from "react"
import Logo from "../public/logo.svg"

export default function Header() {
  const [scrollY, setScrollY] = useState(0)
  
  useEffect(() => {
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
            <span>Routes</span>
          </a>
        </Link>
        <Link href="/radar">
          <a className="flex items-center gap-1">
            <span className="material-symbols-rounded">radar</span>
            <span>Radar</span>
          </a>
        </Link>
        <span className="opacity-10">|</span>
        <Link href="/">
          <a>Log in</a>
        </Link>
        <Link href="/">
          <button className="py-2 px-4 bg-black text-white rounded-md">Join us</button>
        </Link>
      </nav>
    </header>
  )
}