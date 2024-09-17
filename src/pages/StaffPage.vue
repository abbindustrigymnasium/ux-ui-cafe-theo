<script setup>
import { ref } from 'vue'
import { api } from 'src/boot/axios'
import { onMounted } from 'vue';
import personel_card from 'src/components/personel_card.vue';

const staff = ref([
    {"name": "Jimmy", "desc": "Humpty dumpty had a great fall, he hurt his knees and had to amputate"},
    {"name": "Jimmy", "desc": "Timmy liked to play outside, till one day he was stung by a bee, he was allergic"},
    {"name": "Jimmy", "desc": "Billy's favourite thing in the whole wide world was to run, but then came THE TRUCK"},
    {"name": "Jimmy", "desc": "Jhonny lived a happy life, until it ended suddenly"},
    {"name": "Jimmy", "desc": "Johan liked to eat until he got an infection in his jaw, and had to operate it away"},
    {"name": "Jimmy", "desc": "TImme"},
    {"name": "Jimmy", "desc": "TImme"},
    {"name": "Jimmy", "desc": "TImme"},
])

onMounted(async () => {
    const response = await api.get('/staff')
    staff.value = response.data
    console.log(staff.value)
})
</script>

<template>
    <div id="wrapper">
        <h3 id="page_title">Our Staff</h3>
        <div id="employees">
            <personel_card v-for="employee in staff" class="employee_card" :employee_name="employee.name" :employee_desc="employee.desc"></personel_card>
        </div>
    </div>
</template>


<style>
#wrapper{
    display: flex;
    flex-direction: column;
    /* justify-content: center; */
    align-items: center;
    padding-inline: clamp(60px, 12vw, 1000px);
}
#page_title {
    width: fit-content;
}

#employees{
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;
    gap:  50px 30px;

}
/* .employee_card{
    margin-inline: 5%;
    margin-bottom: 5%; 
} 
*/

</style>