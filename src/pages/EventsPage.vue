<script setup>

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
    </div>


</template>


<style scoped>
#banner{
  width: 100%;
  height: calc(100vh - 50px);
  object-fit: cover;
}

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

#information
{
  position:absolute;
  right: 280px;
  top:190px;
  color:white;
  text-align: center;
}
</style>
