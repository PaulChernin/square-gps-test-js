

<script setup>
import { useI18n } from 'vue-i18n'
import Tabs from './components/Tabs.vue'
import LanguageSelect from './components/LanguageSelect.vue'

const { t } = useI18n()
</script>

<template>
    <v-app>
        <v-app-bar color="primary">
            <v-toolbar-title>{{ t('header') }}</v-toolbar-title>
            <LanguageSelect/>

            <template v-slot:extension>
                <Tabs/>
            </template>
        </v-app-bar>
        <v-main>
            <v-container>
                <RouterView />
            </v-container>
        </v-main>
    </v-app>
</template>

<style scoped>

</style>
