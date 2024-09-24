<script setup>
import { ref } from 'vue'
import EssentialLink from 'components/EssentialLink.vue'
import navbar from 'src/components/Navbar.vue';

defineOptions({
  name: 'MainLayout'
})

</script>

<template>
  <navbar></navbar>
  <router-view/>
</template>

<style lang="scss">
    @import "src/css/quasar.variables.scss";
    h1 {
        font-size: $size-title;
        font-family: $font-title, serif;
        line-height: 1.25em;
    }

    h2 {
        font-size: $size-subtitle;
        font-family: $font-generic, sans-serif;
        line-height: 1.25em;
    }

    p {
        font-size: $size-bread;
        font-family: $font-generic, sans-serif;
        line-height: 1.25em;
    }

    @font-face {
        font-family: "DM Serif Display";
        src: local("DM Serif Display"), url(/fonts/DM_Serif_Display/DMSerifDisplay-Regular.ttf) format("truetype");
    }
</style>

