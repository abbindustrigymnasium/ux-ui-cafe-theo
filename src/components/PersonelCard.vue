<script setup>
import { stringify } from 'postcss';

    const props = defineProps({
        employee_name: String,
        employee_desc: String
    })
</script>

<template>
    <div id="card">
        <img src="/public/icons/user-astronaut.svg" alt="" class="employee_img">
        <div class="employee-text">
            <h5 class="employee-name">{{employee_name}}</h5>
            <p class="employee-desc">{{employee_desc}}</p>
        </div>
    </div>
</template>

<style lang="scss" scoped>
    @import "/src/css/quasar.variables.scss";
    #card{
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        flex-grow: 10;
        gap: 10px 0;
        background-color: $color-background-1;
        height: 300px;
        width: clamp(175px, 20vw, 250px);
        // min-width: 200px;
        // max-width: 500px;
        // width: 20%;
        border-radius: 10px;
        padding-inline: clamp(5px, 20px, 20%);
        padding-top: 5px;
    }
    h5{
        margin: 0;
    }
    .employee_img{
        height: 40%;
        max-width: 100%;
        color: $color-foreground-0;
    }
    .employee-name,
    .employee-desc{
        color: $color-foreground-0;
    }
</style>