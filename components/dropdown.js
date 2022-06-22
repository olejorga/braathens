import { useEffect, useRef, useState } from "react"

export default function Dropdown({head, foot, items, alignRight}) {
  const [menuOpen, setMenuOpen] = useState(false)
  const toggleButton = useRef()

  const toggleMenu = () => setMenuOpen(!menuOpen)

  useEffect(() => {
    document.body.addEventListener('click', e => {
      if (e.target != toggleButton.current) setMenuOpen(false)
    })
  }, [])

  return (
    <menu className="relative">
      <button className="p-4 bg-white border-2 border-black rounded-full" onClick={toggleMenu} ref={toggleButton}></button>
      <ul className={`absolute mt-1 bg-white p-3 border-2 border-black rounded-lg shadow-xl flex-col gap-3 ${alignRight ? 'right-0' : ''} ${menuOpen ? 'flex' : 'hidden'}`}>
        {head ?
          <li className="border-b-2 border-black border-opacity-10 pb-3 flex items-center gap-2">
            {head}
          </li>
        : null}
        {items.map(item => 
          <li>
            {item}
          </li>
        )}
        {foot ? 
          <li className="border-t-2 border-black border-opacity-10 pt-3">
            {foot}
          </li>
        : null}
      </ul>
    </menu>
  )
}