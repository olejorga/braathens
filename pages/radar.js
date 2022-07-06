import Head from "next/head"
import Script from "next/script"
import { useEffect } from "react"
import Layout from "../components/layout"

export default function Radar() {
  
  useEffect(() => {
    try {
      var map = L.map('map').setView([60, 15], 5)

      L.tileLayer('https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png', {
	maxZoom: 20
}).addTo(map)
    } catch(e) {
      console.log(e)
    }
  }, [])

  return (
    <Layout>
      <Head>
        <link 
          rel="stylesheet" 
          href="https://unpkg.com/leaflet@1.8.0/dist/leaflet.css"
          integrity="sha512-hoalWLoI8r4UszCkZ5kL8vayOGVae1oxXe/2A4AO6J9+580uKHDO3JdHb7NzwwzK5xr/Fs0W40kiNHxM9vyTtQ=="
          crossOrigin=""/>
        <script 
          src="https://unpkg.com/leaflet@1.8.0/dist/leaflet.js"
          integrity="sha512-BB3hKbKWOc9Ez/TAwyWxNXeoV9c1v6FIeYiBieIWkpLjauysF18NzgR1MBNBXf8/KABdlkX68nAhlwcDFLGPCQ=="
          crossOrigin="" />
      </Head>
      <section className="bg-black rounded-3xl p-4 mb-32">
        <h1 className="text-4xl text-white font-bold text-center my-4">Current flights</h1>
        <div className="relative w-full aspect-square">
          <div className="w-full h-full absolute z-20 rounded-full pointer-events-none border-4 border-black ring-4 ring-white"></div>
          <div className="radar !w-full !h-full absolute z-10 rounded-full pointer-events-none opacity-50 bg-green-900">
            <div class="scanner"></div>
          </div>
          <div id="map" className="w-full h-full absolute z-0 rounded-full"></div>
        </div>
      </section>
    </Layout>
  )
}