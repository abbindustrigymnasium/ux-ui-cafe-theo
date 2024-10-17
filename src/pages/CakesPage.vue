<template>
  
</template>

<script setup>
import { ref } from 'vue'
import { api } from 'src/boot/axios'
import { onMounted } from 'vue';
import { useRouter } from 'vue-router'
const router = useRouter()

const cakes = ref([])

onMounted(async () => {
  const response = await api.get('/cakes')
  cakes.value = response.data
  console.log(cakes.value)
})

function goToDetails(id) {
  router.push(`/cake/${id}`)
}
</script>
<style scoped>
.my-card {
  width: 100%;
  max-width: 250px;
}
</style>