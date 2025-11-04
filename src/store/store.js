import { createStore } from "vuex"
import { Backend } from "../services/backend"

const backend = new Backend()

export const store = createStore({
    state () {
        return {
            addresses: []
        }
    },
    mutations: {
        setAddresses(state, addresses) {
            state.addresses = addresses
        },
        addAddress(state, address) {
            state.addresses.push(address)
        }
    },
    actions: {
        async fetchAddresses({ commit }) {
            const addresses = await backend.getAddresses()
            commit('setAddresses', addresses)
        },
        async createAddress({ commit }, address) {
            const saved = await backend.createAddress(address)
            commit('addAddress', saved)
            return saved
        }
    }
})