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
        <h5>{{employee_name}}</h5>
        <p>{{employee_desc}}</p>
    </div>
</template>

<style>
    #card{
        display: flex;
        flex-direction: column;
        justify-content: start;
        gap: 5px 0;
        background-color: grey;
        height: 300px;
        width: clamp(200px, 20vw, 500px);
    }
    h5{
        margin: 0;
    }
    /* .employee_img{
        height: 100px;
        width: 100px;
    } */
</style>