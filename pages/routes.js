import Hero from "../components/hero"
import Layout from "../components/layout"
import Map from "../components/map"
import tileGeoJSON from "../public/custom.geo.json"

export default function Routes() {
  return (
    <Layout>
      <section>
        <Map className="w-full h-96 z-0 !bg-red-600 text-white rounded-xl border-2 border-white ring-2 ring-black" center={[60, 0]} zoom={4}>
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
      </section>
      <section>
        dddd
      </section>
    </Layout>
  )
}