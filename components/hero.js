export default function Hero({children}) {
  return (
    <section className="bg-red-600 text-white rounded-xl border-2 border-white ring-2 ring-black p-16 flex flex-col items-center gap-8">
      {children}
    </section>
  )
}