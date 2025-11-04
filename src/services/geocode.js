export async function geocode(lat, lng) {
    const res = await fetch(`https://geocode.maps.co/reverse?lat=${lat}&lon=${lng}`)
    const data = await res.json()

    return data
}