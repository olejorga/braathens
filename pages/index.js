import Image from "next/image"
import Link from "next/link"
import Hero from "../components/hero"
import Input from "../components/input"
import Layout from "../components/layout"

export default function Home() {
  return (
    <Layout>
      {/* Hero section. */}
      <Hero>
        <h1 className="text-center font-bold text-3xl sm:text-5xl">Where you're headed?</h1>
        <Input label="From" icon="flight_takeoff" placeholder="..." />
        <Input label="To" icon="flight_land" placeholder="..." className="-mb-24" />
      </Hero>

      {/* "Retro" section. */}
      <article className="mt-32 flex gap-16 flex-col sm:flex-row sm:items-center">
        <div className="flex-1">
          <h2 className="inline-block text-3xl font-bold underline decoration-red-600 underline-offset-8 decoration-4 border-b-2 border-black pb-2">Retro</h2>
          <p className="mt-6 leading-relaxed">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ac massa placerat, tempor tortor ut, euismod ante. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>
        </div>
        <Image src="/retro.jpg" width={360} height={250} className="rounded-lg" />
      </article>

      {/* "Planning" section. */}
      <article className="mt-32 flex gap-16 flex-col sm:flex-row sm:items-center">
        <div className="flex-1 sm:order-2">
          <h2 className="inline-block text-3xl font-bold underline decoration-red-600 underline-offset-8 decoration-4 border-b-2 border-black pb-2">Planning</h2>
          <p className="mt-6 leading-relaxed">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ac massa placerat, tempor tortor ut, euismod ante. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>
        </div>
        <Image src="/planning.jpg" width={360} height={250} className="rounded-lg" />
      </article>

      {/* "Radar" section. */}
      <article className="mt-32 flex gap-16 flex-col sm:flex-row sm:items-center">
        <div className="flex-1">
          <h2 className="inline-block text-3xl font-bold underline decoration-red-600 underline-offset-8 decoration-4 border-b-2 border-black pb-2">Radar</h2>
          <p className="mt-6 leading-relaxed">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ac massa placerat, tempor tortor ut, euismod ante. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>
        </div>
        <Image src="/radar.jpg" width={360} height={250} className="rounded-lg" />
      </article>

      {/* "Compatible" section. */}
      <article className="mt-32 flex gap-16 flex-col sm:flex-row sm:items-center">
        <div className="flex-1 sm:order-2">
          <h2 className="inline-block text-3xl font-bold underline decoration-red-600 underline-offset-8 decoration-4 border-b-2 border-black pb-2">Compatible</h2>
          <p className="mt-6 leading-relaxed">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ac massa placerat, tempor tortor ut, euismod ante. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>
        </div>
        <figure className="w-80 h-60 px-5 py-1 rounded-lg flex flex-col items-center justify-center bg-neutral-100 gap-6">
          <p className="flex items-center gap-2 font-bold -ml-14">
            <span className="material-symbols-rounded text-neutral-400 text-4xl">
              pending
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
        <h2 className="inline-block text-3xl font-bold underline decoration-red-600 underline-offset-8 decoration-4 border-b-2 border-black pb-2">Enlist now</h2>
        <Link href="/signup">
          <a className="button bg-black text-white">Create account</a>
        </Link>
      </section>
    </Layout>
  )
}