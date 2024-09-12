<script setup>
</script>
<template>
    <nav>
        <div id="logo">
            <img src="icons/logo.svg">
        </div>
        <ul id="nav-options">
            <li>
                <a class="nav-link" href="">Upcoming Events</a>
            </li>
            <li>
                <a class="nav-link" href="">Cakes</a>
            </li>
            <li>
                <a class="nav-link" href="">Personel</a>
            </li>
            <li>
                <a class="nav-link" href="">Our Philosophy</a>
            </li>

        </ul>
    </nav>
</template>

<style>
    nav {
        display: flex;
        justify-content: space-between;
        align-items: center;
        background-color: rgb(91, 21, 21);
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
