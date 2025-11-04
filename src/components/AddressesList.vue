<script setup>

const selectedAddressId = defineModel('selectedAddressId')

defineProps({
    addresses: Array
})

</script>

<template>
    <v-list
        :selected="selectedAddressId ? [selectedAddressId] : []"
        @update:selected="selectedAddressId = $event[0] || null"
        selectable
    >
        <template v-if="addresses.length">
            <v-list-subheader>Addresses</v-list-subheader>
            <v-list-item
                v-for="item in addresses"
                :key="item.name"
                :value="item.id"
            >
                <v-list-item-title>{{ item.name }}</v-list-item-title>
            </v-list-item>
        </template>
        <v-list-subheader v-else>No addresses</v-list-subheader>
    </v-list>
</template>

<style scoped>

</style>
