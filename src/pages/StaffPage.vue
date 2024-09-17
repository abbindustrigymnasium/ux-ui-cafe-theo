<script setup>
import { ref } from 'vue'
import { api } from 'src/boot/axios'
import { onMounted } from 'vue';
import personel_card from 'src/components/personel_card.vue';

const staff = ref([])

onMounted(async () => {
    const response = await api.get('/staff')
    staff.value = response.data
    console.log(staff.value)
})
</script>

<template>
    <div>hello</div>
    <personel_card></personel_card>
    
</template>


<style>
.my-card {
    width: 100%;
    max-width: 300px;
}
</style>