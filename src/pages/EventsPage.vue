<script setup>
import { ref } from 'vue'
const events = ref([
{title:"Discussion about the concept of a discussion within the realm of the Abrahamic religions, discussion", organizer: "Johnathan Blow", featured:["Kanye West", "Rachel Donnerstag"]},
{title:"Discussion about the concept of a discussion within the realm of the Abrahamic religions, discussion", organizer: "Johnathan Blow", featured:["Kanye West", "Rachel Donnerstag"]},
{title:"Discussion about the concept of a discussion within the realm of the Abrahamic religions, discussion", organizer: "Johnathan Blow", featured:["Kanye West", "Rachel Donnerstag"]},
{title:"Discussion about the concept of a discussion within the realm of the Abrahamic religions, discussion", organizer: "Johnathan Blow", featured:["Kanye West", "Rachel Donnerstag"]},
{title:"Discussion about the concept of a discussion within the realm of the Abrahamic religions, discussion", organizer: "Johnathan Blow", featured:["Kanye West", "Rachel Donnerstag"]},
])
</script>

<template>
    <img id="banner" src="https://s1.ticketm.net/dam/a/eaa/ac0c78c8-afc9-4325-b58b-01cdec9dfeaa_1715491_TABLET_LANDSCAPE_LARGE_16_9.jpg"/>
    <div id="banner-gradient"></div>

    <h1 id="title">Deconstructing Atheism</h1>

    <div id="information">
      <p> Organizer </p>
      <p>Creation Truth Foundation</p>
      <p> Featuring </p>
      <p>Jordan Peterson</p>
      <div id="interested">Join the waitlist</div>
    </div>

    

    <div class="events">
      <div class="event" v-for="event in events">

        <p class="eventTitle">{{event.title}}</p>

        <div class="organizer">
          <div>Organizer</div>
          <div>{{event.organizer}}</div>
        </div>

        <div class="featured">
          <div> Featured </div>
          <div class="feature" v-for="feature in event.featured">
            <div>{{feature}}</div>
          </div>
        </div>
        <div class="interested">I'm Interested</div>
    </div>
  </div>

</template>


<style lang="scss" scoped>

@import "/src/css/quasar.variables.scss";

#title{
  position:absolute;
  top:80px;
  right: 155px;
  font-size:36px;
  color: #F1C21A;
  font-family: 'Crimson Text', serif;
  font-weight: bold;
}

#banner-gradient{
  position:absolute;
  top:49px;
  width: 100%;
  height: calc(100vh - 50px);
  background: rgb(30,30,30);
  background: linear-gradient(14deg, rgba(30,30,30,1) 0%, rgba(255,255,255,0) 74%);
}

#banner{
  width: 100%;
  height: calc(100vh - 50px);
  object-fit: cover;
}

#information
{
  position:absolute;
  right: 280px;
  top:190px;
  color:white;
  text-align: center;
}

#interested{
  margin-top:30px;
  text-decoration:underline;
  font-weight:500;
}

.events{
  display:flex;
  margin-top:62px;
  width: 68vw;
  margin-left: auto;
  margin-right: auto;
  flex-direction: row;
  gap:45px;
  justify-content: center;
  flex-wrap: wrap;
}

.events::after {
  content: "";
  width:300px;
}


.event{
  width: 300px;
  min-width: 300px;
  background-color:$color-background-1;
  color:white;
  padding:15px;
}

.eventTitle{
font-size:16px;
font-weight:500;
}

.featured{
  margin-top:15px;
}

.interested{
  margin-top: 18px;
  margin-bottom: 8px;
  height: 37px;
  background-color:white;
  color:black;
  text-align:center;
  font-weight:500;
  line-height: 35px;
}

</style>
