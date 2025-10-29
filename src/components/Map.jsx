import { useEffect, useRef } from 'react'
import L from 'leaflet'
import 'leaflet/dist/leaflet.css'

// Fix for default marker icon
delete L.Icon.Default.prototype._getIconUrl
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
})

const Map = ({ latitude = 32.967371, longitude = -96.8408679, zoom = 15, address, city }) => {
  const mapRef = useRef(null)
  const mapInstanceRef = useRef(null)
  const markerRef = useRef(null)

  useEffect(() => {
    // Only initialize map once
    if (mapRef.current && !mapInstanceRef.current) {
      // Create map instance
      const map = L.map(mapRef.current).setView([latitude, longitude], zoom)

      // Add OpenStreetMap tile layer
      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
        maxZoom: 19,
      }).addTo(map)

      // Create custom red marker icon
      const redIcon = L.divIcon({
        className: 'custom-marker',
        html: `
          <div style="
            background-color: #AB1522;
            width: 40px;
            height: 40px;
            border-radius: 50% 50% 50% 0;
            transform: rotate(-45deg);
            border: 3px solid white;
            box-shadow: 0 4px 8px rgba(0,0,0,0.3);
            display: flex;
            align-items: center;
            justify-content: center;
          ">
            <div style="
              width: 12px;
              height: 12px;
              background-color: white;
              border-radius: 50%;
              transform: rotate(45deg);
            "></div>
          </div>
        `,
        iconSize: [40, 40],
        iconAnchor: [20, 40],
        popupAnchor: [0, -40]
      })

      // Add marker with popup
      const marker = L.marker([latitude, longitude], { icon: redIcon }).addTo(map)
      
      marker.bindPopup(`
        <div style="font-family: 'Acherus Grotesque', sans-serif; padding: 8px;">
          <h3 style="font-family: 'Lancea', serif; font-size: 18px; font-weight: bold; color: #AB1522; margin-bottom: 8px;">
            Yu Law Firm - ${city || 'Carrollton'} Office
          </h3>
          <p style="font-size: 14px; color: #4B5563; margin-bottom: 8px; line-height: 1.5;">
            ${address || '2201 Midway Road, Suite 102<br/>Carrollton, Texas 75006'}
          </p>
          <a 
            href="https://www.google.com/maps/dir/?api=1&destination=${latitude},${longitude}" 
            target="_blank" 
            rel="noopener noreferrer"
            style="
              display: inline-block;
              background-color: #AB1522;
              color: white;
              padding: 6px 12px;
              text-decoration: none;
              font-size: 14px;
              font-weight: 500;
              margin-top: 4px;
            "
          >
            Get Directions
          </a>
        </div>
      `)

      // Open popup by default
      marker.openPopup()

      markerRef.current = marker
      mapInstanceRef.current = map
    }

    // Update marker position and popup when location changes
    if (mapInstanceRef.current && markerRef.current) {
      mapInstanceRef.current.setView([latitude, longitude], zoom)
      markerRef.current.setLatLng([latitude, longitude])
      markerRef.current.setPopupContent(`
        <div style="font-family: 'Acherus Grotesque', sans-serif; padding: 8px;">
          <h3 style="font-family: 'Lancea', serif; font-size: 18px; font-weight: bold; color: #AB1522; margin-bottom: 8px;">
            Yu Law Firm - ${city || 'Carrollton'} Office
          </h3>
          <p style="font-size: 14px; color: #4B5563; margin-bottom: 8px; line-height: 1.5;">
            ${address || '2201 Midway Road, Suite 102<br/>Carrollton, Texas 75006'}
          </p>
          <a 
            href="https://www.google.com/maps/dir/?api=1&destination=${latitude},${longitude}" 
            target="_blank" 
            rel="noopener noreferrer"
            style="
              display: inline-block;
              background-color: #AB1522;
              color: white;
              padding: 6px 12px;
              text-decoration: none;
              font-size: 14px;
              font-weight: 500;
              margin-top: 4px;
            "
          >
            Get Directions
          </a>
        </div>
      `)
      markerRef.current.openPopup()
    }

    // Cleanup function
    return () => {
      if (mapInstanceRef.current) {
        mapInstanceRef.current.remove()
        mapInstanceRef.current = null
        markerRef.current = null
      }
    }
  }, [latitude, longitude, zoom, address, city])

  return (
    <div 
      ref={mapRef} 
      className="w-full h-64 sm:h-80 md:h-96 shadow-lg border-2 border-gray-200"
      style={{ zIndex: 0 }}
    />
  )
}

export default Map
