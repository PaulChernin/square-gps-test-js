<script setup>
import { ref, onMounted, watch, computed } from 'vue'
import { useStore } from 'vuex'
import { useLeafletMap } from '../composables/useLeafletMap'
import { geocode } from '../services/geocode'

const selectedAddressId = defineModel('selectedAddressId')

const store = useStore()

const mapRef = ref(null)

const isUnableToDecode = ref(false)

const isLoading = ref(false)

const { placeMarker, focus } = useLeafletMap({
    container: mapRef,
    onClick: async (lat, lng) => {
        if (!isAddingMode.value) return

        isLoading.value = true

        const data = await geocode(lat, lng)
        if (data.error) {
            isUnableToDecode.value = true
            isLoading.value = false
        } else {
            const name = data.display_name
            const address = { lat, lng, name }
            const saved = await store.dispatch('createAddress', address)
            isLoading.value = false
            placeMarker(saved)
        }

        isAddingMode.value = false
    },
    onSelect: (id) => {
        selectedAddressId.value = id
    }
})

onMounted(async () => {
    await store.dispatch('fetchAddresses')

    for (const address of store.state.addresses) {
        placeMarker(address)
    }

    if (selectedAddress.value) {
        focus(selectedAddress.value)
    }
})

const isAddingMode = ref(false)

const toggleAddingMode = () => {
    isAddingMode.value = !isAddingMode.value
}

const selectedAddress = computed(() => {
    return store.state.addresses.find(a => a.id === selectedAddressId.value)
})

watch(selectedAddress, value => {
    if (!value) return
    focus(value)
})

</script>

<template>
    <div>
        <div ref="mapRef" class="map" />
        <v-btn @click="toggleAddingMode" :loading="isLoading" color="primary" class="button">
            {{ isAddingMode ? 'Cancel' : 'Add' }}
        </v-btn>
        <v-snackbar v-model="isUnableToDecode" :timeout="2000">
            Unable to decode
        </v-snackbar>
    </div>
</template>

<style scoped>
.map {
    width: 100%;
    height: 400px;
}

.button {
    margin-top: 10px;
}
</style>
