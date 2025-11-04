<script setup>
import { ref, watch } from 'vue'
import { useI18n } from 'vue-i18n'
import { useRoute } from 'vue-router'

const { t } = useI18n()

const route = useRoute()

const tab = ref(route.name)

watch(() => route.name, (name) => {
    tab.value = name
})
</script>

<template>
    <v-tabs v-model="tab">
        <v-tab value="About" :to="{ name: 'About' }" replace>{{ t('pages.about') }}</v-tab>
        <v-tab value="Map" :to="{ name: 'Map' }" replace>{{ t('pages.map') }}</v-tab>
    </v-tabs>
</template>

<style scoped>

</style>
