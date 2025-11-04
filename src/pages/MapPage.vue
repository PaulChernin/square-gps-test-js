<script setup>
import { useStore } from 'vuex'
import Map from '../components/Map.vue'
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { useRouter } from 'vue-router'
import AddressesList from '../components/AddressesList.vue'

const store = useStore()

const route = useRoute()
const router = useRouter()

const selectedAddressId = computed(
    {
        get: () => {
            const id = Number(route.params.id)
            return id || null
        },
        set: (id) => {
            router.push({ name: 'Map', params: { id } })
        }
    }
)

</script>

<template>
    <div>
        <Map
            v-model:selectedAddressId="selectedAddressId"
        />
        <AddressesList
            v-model:selectedAddressId="selectedAddressId"
            :addresses="store.state.addresses"
        />
    </div>
</template>

<style scoped>

</style>
