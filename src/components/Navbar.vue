<script setup>
    let logo = import("../../public/icons/logo_compressed.svg")
</script>
<template>
    <nav>
        <img id="logo" src="icons/logo_compressed.svg">
        <ul id="nav-options">
            <li>
                <a class="nav-link" href="/events">Upcoming Events</a>
            </li>
            <li>
                <a class="nav-link" href="/cakes">Cakes</a>
            </li>
            <li>
                <a class="nav-link" href="/staff">Personel</a>
            </li>
            <li>
                <a class="nav-link" href="/philosophy">Our Philosophy</a>
            </li>

        </ul>
    </nav>
</template>

<style lang="scss" scoped>
    @import "src/css/quasar.variables.scss";
    nav {
        display: flex;
        justify-content: space-between;
        align-items: center;
        /* background-color: rgb(91, 21, 21); */
        background-color: $color-background-0;
        padding-inline: 20%;
    }
    #nav-options{
        display: flex;
        list-style: none;
    }
    .nav-link{
        color: white;
        text-decoration: none;
        margin-left: 1em;
    }


</style>