import Layout from "../components/layout"
import Map from "../components/map"
import tileGeoJSON from "../public/custom.geo.json"

export default function Radar() {
  return (
    <Layout>
      <section className="bg-black rounded-3xl p-4">
        <h1 className="text-4xl text-white font-bold text-center my-4">Current flights</h1>
        <div className="relative w-full aspect-square">
          <div className="w-full h-full absolute z-20 rounded-full pointer-events-none border-4 border-black ring-4 ring-white"></div>
          <div className="radar !w-full !h-full absolute z-10 rounded-full pointer-events-none opacity-50">
            <div className="scanner"></div>
          </div>
          <Map className="w-full h-full absolute z-0 rounded-full !bg-green-900" center={[38.907132, -77.036546]} zoom={12}>
            {({ GeoJSON }) => (
              <>
                <GeoJSON 
                  data={tileGeoJSON}
                  style={{
                    stroke: 1,
                    color: "#ffffff",
                    opacity: 0.4,
                    fill: true,
                    fillColor: "#ffffff",
                    fillOpacity: 0.2
                  }} />
              </>
            )}
          </Map>
          {/* <div id="map" className="w-full h-full absolute z-0 rounded-full"></div> */}
        </div>
      </section>
      <section className="my-32">
        <h2 className="text-4xl font-bold text-center">Search</h2>
        ...
      </section>
    </Layout>
  )
}