<script setup>
import { stringify } from 'postcss';

    const props = defineProps({
        employee_name: String,
        employee_desc: String
    })
</script>

<template>
    <div id="card">
        <img src="/public/icons/logo_compressed.svg" alt="" class="employee_img">
        <h5 class="employee-name">{{employee_name}}</h5>
        <p class="employee-desc">{{employee_desc}}</p>
    </div>
</template>

<style lang="scss" scoped>
    @import "/src/css/quasar.variables.scss";
    #card{
        display: flex;
        flex-direction: column;
        justify-content: start;
        gap: 10px 0;
        background-color: $color-background-1;
        height: 300px;
        width: clamp(200px, 20vw, 250px);
        border-radius: 30px;
        padding-inline: 5px;
    }
    h5{
        margin: 0;
    }
    .employee_img{
        height: 40%;
        max-width: 100%;
    }
    .employee-name,
    .employee-desc{
        color: $color-foreground-0;
    }
</style>