const { mount } = require('@vue/test-utils')
const AddressesList = require('../components/AddressesList.vue').default

const addresses = [
    { id: 1, address: 'Test Addr 1', lat: 45, lng: 20 },
    { id: 2, address: 'Test Addr 2', lat: 46, lng: 21 }
]

describe('AddressesList.vue', () => {
    it('renders addresses', () => {
        const wrapper = mount(AddressesList, {
            props: { addresses: addresses, selectedAddressId: null, },
        })

        expect(wrapper.findAll('.v-list-item').length).toBe(2)
    })

    it('highlights selected address', () => {
        const wrapper = mount(AddressesList, {
            props: { addresses, selectedAddressId: 2 }
        })

        const selected = wrapper.findAll('.v-list-item')[1]
        expect(selected.classes()).toContain('v-list-item--active')
    })


    it('emits select event when item clicked', async () => {
        const wrapper = mount(AddressesList, {
            props: { addresses, selectedAddressId: null }
        })

        await wrapper.findAll('.v-list-item')[0].trigger('click')
        expect(wrapper.emitted('update:selectedAddressId')[0][0]).toEqual(1)
    })
})