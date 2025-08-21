<template>
  <div class="keren">
   <header id="navbar">
  <div style="justify-self: start;">
    <img src="/src/assets/logout.png" style="width: 80%;" alt="logout">
  </div>
  <div style="justify-self: center;">
    <img src="/src/assets/Multiplay.png" alt="LOGO">
  </div>
  <div style="justify-self: end;">
  </div>
</header>
<main class="main-grid" >
  <!-- עמודה אמצעית -->
   <div class="grid-center">
    <Eq></Eq>
    <Violet> </Violet>
     <!-- הגוף המנהל -->
    <Gp></Gp>
    <!-- אודות הקרן -->    
    <About></About>  
    <!-- אודות הפידר -->
    <Fider></Fider>
    <!-- אסטרטגיית השקעות -->
    <Stragety></Stragety>    
    <!-- סקירת שוק -->
    <Shuk></Shuk>
  <!-- תשואות עבר (Track-Record) -->
  <Track></Track>
   <!-- צוות הקרן -->
   <Team></Team>
   <!-- סיכונים עיקריים -->
    <Risks></Risks>
   <!-- משקיעים בולטים -->
    <Investor></Investor>
    <!-- docs -->
    <Docs></Docs>
    <!-- meet -->
    <Meet></Meet>
    <!-- fund -->
    <Fund></Fund>
</div>
</main>
    </div>
</template>

<script>
import Violet from '@/components/violet.vue';
import Eq from '../components/eq.vue'
import Gp from '@/components/gp.vue';
import About from '@/components/about.vue';
import Fider from '@/components/fider.vue';
import Stragety from '@/components/stragety.vue';
import Shuk from '@/components/shuk.vue';
import Track from '@/components/track.vue';
import Team from '@/components/team.vue';
import Risks from '@/components/risks.vue';
import Investor from '@/components/investor.vue';
import Docs from '@/components/docs.vue';
import Meet from '@/components/meet.vue';
import Fund from '@/components/fund.vue';

export default {
  name: "keren",
  components: {Eq, Violet, Gp, About, Fider, Stragety, Shuk, Track, Team, Risks,Investor,Docs,Meet,Fund },
  methods: {
    Get_Word(text){
      return text
    },
  },
   data() {
    return {
      
     
      
      
      
    }
  } 
}
</script>


<style lang="scss">

*{
  font-family: 'Huninn', sans-serif;
  box-sizing: border-box;
}
:root {
    --eq-text-color: black;
    --eq-font-size: 16px;
    --eq-font-weight: 400;
    --eq-line-height: 16px;
    --center-flex: center;
  }

.flex{
  display: flex;

}

.center{
  display:flex;
  justify-self: center;

}

.keren {
  padding: 1rem;
  display: flex;
  flex-direction: column;
}
@media (max-width: 768px) {
  .keren{
    padding: 0.5rem;
    justify-items: center;
  }
}
.container{
  width: 100%;
  max-width: 1000px;
  display: flex;
  flex-direction: column;
}

#navbar{
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  align-items: center;
  width: 100%;
}

.main-grid{
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  width: 100%;
   padding: 1rem;
   max-width: 1000px;
   margin: auto;
   justify-content: center;
   margin: 0 auto;      
   }
  
   @media (max-width: 850px) {
   #navbar{
    display:none;
  }
  .main-grid{
    padding: 0.1rem;
    place-items: center; 
  }
  
}


.header{
  width: 100%;
  max-width: 1000px;
  height: 3rem;
  max-height: 50px;
  background: #D9D9D9;
  border-radius: 70px;
  display: flex;
  justify-content: end;
  align-items: center;
  padding-right: 2vw;
  margin-bottom: 2vh;
  font-weight: bold;
  font-size: 1.2rem;
}

.border{
  border: #dfdfdf solid 1px;
  border-radius: 10px;
  padding: 20px;
  gap: 20px;
}

.grid-center{
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
}

.title {
  text-align: right;
  color: #404148;
  font-size: 18px;
  font-weight: 700;
  line-height: 1.2;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  border:0;
  
}

.main-text {
    max-width: 1023px;
    width: 90%;
    margin: auto;
    text-align: right;
    display: flex;
    flex-direction: column;
    color: black;
    line-height: 1.4;
    word-wrap: break-word;
  }

  .main-text h2 {
    font-size: 1.5rem; 
    font-weight: 700;
  }

  .main-text p {
    font-size: 1.2rem;
    font-weight: 400;
  }
     .mobile-title {
    display:none;
}
.meeting{
  width:90%;
}

  @media (max-width: 768px) {
    .main-text h2 {
      font-size: 1.3rem;
      margin-top: 1rem;
    }
    .main-text p {
      font-size: 1rem;
    }
    .grid-center{
      width: 90%;       
      max-width: 90vw;
      gap: 0.1rem;
    }
    .header{
      background:none;
      margin: 0%;
      padding-bottom: 2%;
      font-size: 1.2rem;
      align-items: end;
    }
    .title{
      color: black;
      
    }
    .img-container{
    display:none; 
  }
  
  .desktop-title {
    display:none;
  }
 .mobile-title {
    display: block;
  }

  }

$breakpoints: (
  mobile: 480px,
  tablet: 768px,
  laptop: 1024px
);

@mixin respond($device) {
  @media (max-width: map-get($breakpoints, $device)) {
    @content;
  }
}





</style>
