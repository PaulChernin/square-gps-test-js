<script setup>
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
</script>

<template>
    <div class="container">
        <h1 class="text-h4">{{ t('header') }}</h1>
        <div v-html="t('about.text')" class="article"></div>
    </div>
</template>

<style scoped>
.container {
    padding: 50px 0;
}
</style>

<style lang="scss">
.article {
    margin-top: 20px;

    p {
        margin: 10px 0;
    }

    h2 {
        margin-top: 30px;
        font-size: 1.6rem;
        font-weight: inherit;
    }

    h3 {
        margin-top: 24px;
        font-weight: bold;
    }

    ol {
        list-style: none;

        ol {
            padding-left: 40px;
        }
    }

    li {
        margin: 10px 0;
    }
}
</style>
