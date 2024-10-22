<script setup>
import { ref } from 'vue'
import { api } from 'src/boot/axios'
import { onMounted } from 'vue';
import Personel_card from 'src/components/PersonelCard.vue';

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
        <h3 id="page_title">The People Who Work Here</h3>
        <div class="employee_wrapper">
            <div id="employees">
                <Personel_card v-for="employee in staff" class="employee_card" :employee_name="employee.name" :employee_desc="employee.desc"></Personel_card>
            </div>
        </div>
    </div>
</template>


<style lang="scss" scoped>
@import "/src/css/quasar.variables.scss";
#wrapper{
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-inline: clamp(20px, 20%, 1000px);
    padding-bottom: 50px;
    background-color: $color-background-0;
    
}
#page_title {
    width: fit-content;
    color: $color-foreground-0;
}
.employee-wrapper{
    display: flex;
    justify-content: center;
    align-items: center;

}
#employees{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    margin-left: auto;
    margin-right: auto;
    gap:  50px 30px;

}
#employees::after{
    content: "";
    width: clamp(175px, 18vw, 250px);
}


</style>