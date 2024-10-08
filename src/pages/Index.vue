<script setup>
</script>

<template>
    <img class="header-image" id="logo" src="/images/cafe-omnious.png">
    <h1 class="dramatic-text-0"><i>Café Theo</I> is a café and unaffiliated forum for discussions about theology. We aim to bake eleven cookies per second.</h1>
    <p>This is working!</p>
</template>

<style lang="scss" scoped>
    @import "src/css/quasar.variables.scss";
    .header-image {
        position: absolute;
        z-index: -20;
        width: 100vw;
        user-drag: none;
        -webkit-user-drag: none;
        user-select: none;
        -moz-user-select: none;
        -webkit-user-select: none;
        -ms-user-select: none;
    }
    .dramatic-text-0 {
        position: absolute;
        right: 20vw;
        top: calc(max(10vw, 100px));
        width: calc(min(max(600px - 20vw, 20vw), 60vw));
        color: white;
    }
</style>

<script setup>
    headerImages = document.getElementByClassName("header-image");
    for (let i = 0; i < headerImages.length; i++) {
        const element = headerImages[i];
        element.ondragstart = function() { return false; };
    }
</script>

