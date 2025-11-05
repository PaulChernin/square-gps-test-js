const key = import.meta.env.VITE_GEOCODE_KEY

export async function geocode(lat, lng) {
    const res = await fetch(`https://us1.locationiq.com/v1/reverse?key=${key}&lat=${lat}&lon=${lng}&format=json&accept-language=en&`)

    const data = await res.json()
    return data.display_name
}