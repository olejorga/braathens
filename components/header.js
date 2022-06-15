import Image from "next/image"
import Link from "next/link"
import Logo from "../public/logo.svg"

export default function Header() {
  return (
    <header className="py-8">
      <nav className="flex justify-end gap-6 items-center font-bold">
        <Link href="/">
          <a className="mr-auto">
            <Image src={Logo} width={144} height={12} />
          </a>
        </Link>
        <Link href="/">
          <a className="flex items-center gap-1">
            <span class="material-symbols-rounded">route</span>
            <span>Routes</span>
          </a>
        </Link>
        <Link href="/radar">
          <a className="flex items-center gap-1">
            <span class="material-symbols-rounded">radar</span>
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
      <div>
        <h1 className="text-center text-4xl font-bold mt-16">Where you're headed?</h1>
      </div>
    </header>
  )
}