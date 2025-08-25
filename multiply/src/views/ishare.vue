<template>

    <div class="ishare">
        <div class="main-grid">
            <div class="grid-center">
            <Eq></Eq>
            <Overview></Overview>
            <Details></Details>
            <Checkup></Checkup>
            <Product_doc></Product_doc>
            <Statement></Statement>
            <Meeting></Meeting>


            </div>
        </div>
    
    </div>
    
    
    
    </template>

<script>
import Overview from '@/components/ishare/overview.vue';
import Eq from '../components/ishare/eq.vue'
import Details from '@/components/ishare/details.vue';
import Checkup from '@/components/ishare/checkup.vue';
import Product_doc from '@/components/ishare/product_doc.vue';
import Statement from '@/components/ishare/statement.vue';
import Meeting from '@/components/ishare/meeting.vue';


    export default {
        name: "ishare",
        components: { Eq, Overview, Details, Checkup, Product_doc,Statement,Meeting },
        data() {
            return {
               
            };
        },
    };

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

.ishare {
  padding: 1rem;
  display: flex;
  flex-direction: column;
}
@media (max-width: 768px) {
  .ishare{
    padding: 0.5rem;
    justify-items: center;
  }
}
.container{
  width: 100%;
  max-width: 1033px;
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

.img-container{
 width:100%;
 height:auto;
 
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
  color: black;
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


</style>