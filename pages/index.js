import Image from "next/image"
import Hero from "../components/hero"
import Layout from "../components/layout"

export default function Home() {
  return (
    <Layout>
      {/* Hero section. */}
      <Hero>
        <h1 className="text-center font-bold text-3xl sm:text-5xl">Where you're headed?</h1>
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
      </Hero>

      {/* "Retro" section. */}
      <article className="mt-32 flex gap-16 flex-col sm:flex-row sm:items-center">
        <div className="flex-1">
          <h2 className="inline-block text-3xl font-bold underline decoration-red-600 underline-offset-8 decoration-4 border-b-2 border-black pb-2">Retro</h2>
          <p className="mt-6 leading-relaxed">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ac massa placerat, tempor tortor ut, euismod ante. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>
        </div>
        <Image src="/retro.jpg" width={360} height={270} className="rounded-lg" />
      </article>

      {/* "Planning" section. */}
      <article className="mt-32 flex gap-16 flex-col sm:flex-row sm:items-center">
        <div className="flex-1 sm:order-2">
          <h2 className="inline-block text-3xl font-bold underline decoration-red-600 underline-offset-8 decoration-4 border-b-2 border-black pb-2">Planning</h2>
          <p className="mt-6 leading-relaxed">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ac massa placerat, tempor tortor ut, euismod ante. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>
        </div>
        <Image src="/planning.jpg" width={360} height={270} className="rounded-lg" />
      </article>

      {/* "Radar" section. */}
      <article className="mt-32 flex gap-16 flex-col sm:flex-row sm:items-center">
        <div className="flex-1">
          <h2 className="inline-block text-3xl font-bold underline decoration-red-600 underline-offset-8 decoration-4 border-b-2 border-black pb-2">Radar</h2>
          <p className="mt-6 leading-relaxed">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ac massa placerat, tempor tortor ut, euismod ante. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>
        </div>
        <Image src="/radar.jpg" width={360} height={270} className="rounded-lg" />
      </article>

      {/* "Compatible" section. */}
      <article className="mt-32 flex gap-16 flex-col sm:flex-row sm:items-center">
        <div className="flex-1 sm:order-2">
          <h2 className="inline-block text-3xl font-bold underline decoration-red-600 underline-offset-8 decoration-4 border-b-2 border-black pb-2">Compatible</h2>
          <p className="mt-6 leading-relaxed">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ac massa placerat, tempor tortor ut, euismod ante. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>
        </div>
        <figure className="w-80 h-60 px-5 py-4 rounded-lg flex flex-col items-center justify-center bg-neutral-100 gap-6">
          <p className="flex items-center gap-2 font-bold -ml-14">
            <span className="material-symbols-rounded text-red-600 text-4xl">
              check_circle
            </span>
            <span className="text-2xl">MSFS</span>
          </p>
          <p className="flex items-center gap-2 font-bold">
            <span className="material-symbols-rounded text-red-600 text-4xl">
              check_circle
            </span>
            <span className="text-2xl">X-Plane 11</span>
          </p>
        </figure>
      </article>

      {/* "Enlist" section. */}
      <section className="my-32 flex gap-8 flex-col items-center">
        <h2 className="inline-block text-3xl font-bold underline decoration-red-600 underline-offset-8 decoration-4 border-b-2 border-black pb-2">Convinced?</h2>
        <button className="py-2 px-4 bg-black text-white rounded-md">Enlist now</button>
      </section>
    </Layout>
  )
}