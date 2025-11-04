<script setup>
import { useI18n } from 'vue-i18n'

const { locale } = useI18n()
</script>

<template>
    <v-btn v-if="locale === 'ru'" @click="locale = 'en'">EN</v-btn>
    <v-btn v-else @click="locale = 'ru'">RU</v-btn>
</template>

<style scoped>

</style>