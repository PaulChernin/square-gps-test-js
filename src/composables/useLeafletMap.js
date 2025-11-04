import { onBeforeUnmount, onMounted } from 'vue'
import L from 'leaflet'
import 'leaflet/dist/leaflet.css'

// Fix for bundlers so marker icons load correctly
import markerIcon from 'leaflet/dist/images/marker-icon.png'
import markerIcon2x from 'leaflet/dist/images/marker-icon-2x.png'
import markerShadow from 'leaflet/dist/images/marker-shadow.png'

// Ensure Leaflet's default icon paths are set
delete L.Icon.Default.prototype._getIconUrl
L.Icon.Default.mergeOptions({
    iconRetinaUrl: markerIcon2x,
    iconUrl: markerIcon,
    shadowUrl: markerShadow,
})

export const useLeafletMap = ({ container, onClick, onSelect }) => {
    let map = null

    onMounted(() => {
        if (!container.value) return

        map = L.map(container.value).setView([51.505, -0.09], 13)

        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '&copy; OpenStreetMap contributors',
        }).addTo(map)

        map.on('click', e => {
            const { lat, lng } = e.latlng
            onClick(lat, lng)
        })
    })

    const placeMarker = (address) => {
        const marker = L.marker([address.lat, address.lng]).addTo(map)

        marker.on('click', () => {
            onSelect(address.id)
        })
    }

    const focus = (address) => {
        map.setView([address.lat, address.lng])
    }

    onBeforeUnmount(() => {
        if (map) {
            map.remove()
            map = null
        }
    })

    return {
        placeMarker,
        focus,
    }
}