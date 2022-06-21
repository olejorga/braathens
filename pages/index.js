import Image from "next/image";
import Hero from "../components/hero";
import Layout from "../components/layout";

export default function Home() {
  return (
    <Layout>
      {/* Hero section. */}
      <Hero />

      {/* "Retro" section. */}
      <article className="mt-32 flex gap-16 flex-col sm:flex-row">
        <div className="flex-1">
          <h2 className="inline-block text-3xl font-bold underline decoration-red-600 underline-offset-8 decoration-4 border-b-2 border-black pb-2">Retro</h2>
          <p className="mt-6 leading-relaxed">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ac massa placerat, tempor tortor ut, euismod ante. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>
        </div>
        <figure className="relative w-96 aspect-video">
          <Image src="/retro.jpg" layout="fill" objectFit="fill" />
        </figure>
      </article>

      {/* "Planning" section. */}
      <article className="mt-32 flex gap-16 flex-col sm:flex-row">
        <div className="sm:order-2">
          <h2 className="inline-block text-3xl font-bold underline decoration-red-600 underline-offset-8 decoration-4 border-b-2 border-black pb-2">Planning</h2>
          <p className="mt-8">dddddddddddddddddddddddd</p>
        </div>
        <figure className="relative w-full aspect-video">
          <Image src="/retro.jpg" layout="fill" objectFit="fill" />
        </figure>
      </article>

      {/* "Radar" section. */}
      <article className="mt-32 flex gap-16 flex-col sm:flex-row">
        <div>
          <h2 className="inline-block text-3xl font-bold underline decoration-red-600 underline-offset-8 decoration-4 border-b-2 border-black pb-2">Radar</h2>
          <p className="mt-8">dddddddddddddddddddddddd</p>
        </div>
        <figure className="relative w-full aspect-video">
          <Image src="/retro.jpg" layout="fill" objectFit="fill" />
        </figure>
      </article>

      {/* "Compatible" section. */}
      <article className="mt-32 flex gap-16 flex-col sm:flex-row">
        <div className="sm:order-2">
          <h2 className="inline-block text-3xl font-bold underline decoration-red-600 underline-offset-8 decoration-4 border-b-2 border-black pb-2">Compatible</h2>
          <p className="mt-8">dddddddddddddddddddddddd</p>
        </div>
        <figure className="relative w-full aspect-video">
          <Image src="/retro.jpg" layout="fill" objectFit="fill" />
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