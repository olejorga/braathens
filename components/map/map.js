import * as ReactLeaflet from "react-leaflet"
import "leaflet/dist/leaflet.css"

const { MapContainer } = ReactLeaflet

export default function Map({ children, ...rest }) {
  return (
    <MapContainer {...rest}>
      {children(ReactLeaflet)}
    </MapContainer>
  )
}