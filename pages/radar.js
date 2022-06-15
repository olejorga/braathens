import Image from "next/image";
import Layout from "../components/layout";

export default function Radar() {
  return (
    <Layout>
      <section className="bg-black rounded-3xl p-4">
        <h2 className="text-4xl text-white font-bold">Current traffic</h2>
        <div className="rounded-full border-4 border-black w-full aspect-square bg-white ring-4 ring-white"></div>
      </section>
    </Layout>
  )
}