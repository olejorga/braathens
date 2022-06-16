export default function Hero() {
  return (
    <section className="bg-red-600 text-white rounded-xl border-2 border-white ring-2 ring-black p-16 flex flex-col items-center gap-8">
      <h1 className="text-center text-5xl font-bold">Where you're headed?</h1>
      <label className="relative text-black">
        <span className="absolute z-10 top-2 left-14">
          <small>From</small>
        </span>
        <span>
        <span className="material-symbols-rounded absolute z-10 top-6 left-4 font-bold">
          flight_takeoff
        </span>
        </span>
        <input className="text-black py-2 px-4 rounded-md border-2 border-black w-72 pt-8 pl-14 uppercase font-bold" type="text" placeholder="..." />
      </label>
      <label className="relative text-black -mb-24">
        <span className="absolute z-10 top-2 left-14">
          <small>To</small>
        </span>
        <span>
        <span className="material-symbols-rounded absolute z-10 top-6 left-4 font-bold">
          flight_land
        </span>
        </span>
        <input className="text-black py-2 px-4 rounded-md border-2 border-black w-72 pt-8 pl-14 uppercase font-bold" type="text" placeholder="..." />
      </label>
    </section>
  )
}