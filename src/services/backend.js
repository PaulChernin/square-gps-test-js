

export class Backend {
    async getAddresses() {
        const rawAddresses = localStorage.getItem('addresses')
        const addresses = rawAddresses ? JSON.parse(rawAddresses) : []
        return addresses
    }

    async createAddress(address) {
        const addresses = await this.getAddresses()
        const id = addresses.length ? (addresses[addresses.length - 1].id + 1) : 1
        const saved = { ...address, id }
        addresses.push(saved)
        localStorage.setItem('addresses', JSON.stringify(addresses))
        return saved
    }
}