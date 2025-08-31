<template>
  <div class="eq">
    <div class="eq-data">
      <div class="eq-item eq-item-1">
        <span >{{ title }}</span>
        <span >
          <span class="bigger">11</span>% <span class="bigger">9</span>%
        </span>
      </div>
      <div class="eq-item" dir="rtl">
        <span>{{ eq_title_1 }}</span>
        <span><span class="bigger">3</span>{{ eq_text_1 }}</span>
      </div>
      <div class="eq-item">
        <span>{{ eq_title_2 }}</span>
       <span class="" style="display: flex; align-items: center; gap: 5px;">
        <span class="bigger">$</span>
        <span class="line"> | </span>
        <span class="bigger"> ₪</span>
       </span> 
      </div>
      <div class="eq-item">
        <span>{{ eq_title_3 }}</span>
        <span class="bigger">$250,000</span>
      </div>
    </div>

    <div class="eq-black-box">
      <span class="eq-white-text">{{ add }}</span>
      <div class="eq-circle">
        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="24" height="24" viewBox="0 0 24 24"><path fill-rule="evenodd" d="M 11 2 L 11 11 L 2 11 L 2 13 L 11 13 L 11 22 L 13 22 L 13 13 L 22 13 L 22 11 L 13 11 L 13 2 Z"></path></svg>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Eq",

  data() {
    return {
      title: "תשואת מטרה",
      eq_title_1:"תקופת נעילה",
      eq_text_1:" שנים",
      eq_title_2:"מטבע השקעה",
      eq_title_3:"מינימום השקעה",
      add:"הוסף את קרן לרכישה עתידית",
    };
  }
};
</script>

<style lang="scss">
.eq {
  max-width: 1033px;
  width: 100%;
  background: white;
  border-radius: 70px;
  outline: 2px #B7EBEB solid;
  outline-offset: -2px;
  margin: 1rem auto;
  padding:0.5rem;
  display: flex;
  align-items: center;
  justify-self: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 0.1rem;
}

.eq-data {
  display: flex;
  justify-content: center; 
  gap: 3rem; 
  flex-wrap: wrap; 
}

.eq-item {
  display: flex;
  flex-direction: column;
  align-items: center; 
  text-align: center;
  gap: 0.5rem;
  min-width: 120px; 
  position: relative;
}
.eq-item-1{
padding-left: 2rem;
}

.eq-item + .eq-item::before {
  content: '';
  position: absolute;
  left: -1.5rem; 
  top: 50%;
  transform: translateY(-50%);
  width: 1px;
  height: 80%;
  background: #A3A3A3;
}


  .bigger{
    font-size: 1.7rem;
  }

.eq-black-box {
  background: black;
  color: white;
  border-radius: 35px;
  padding: 0.3rem 0.3rem 0.3rem 3rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  
}

.eq-circle {
  width: 45px;
  height: 45px;
  background: white;
  border: 1px solid black;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  
}

.eq-circle svg {
  color: #171C5D;
}

.eq-white-text {
  font-weight: 500;
}

@media (max-width: 850px) {
  .eq {
    flex-direction: column;
    align-items: stretch;
    padding: 0.5rem;
    outline: none;
    justify-content: center;
    margin: 0;
    grid-auto-rows: 1fr;
  }

  .eq-data {
   display: grid;
    grid-template-columns: repeat(2, minmax(120px, 200px)); 
    justify-content: center;
    place-content: center;
    gap: 0.2rem;
    align-items: stretch;
    margin-top: 1rem;
    
  }
  .eq-item {
    padding: 0.1rem;
    width: 100%;
    text-align: center;
    justify-content: center;
    align-items: center;

    height: 60%; 
  }

  .ew-item-1{
    padding-left:0px;
  }

  .eq-item + .eq-item::before {
    display: none;
  }

  .eq-item:nth-child(2),
  .eq-item:nth-child(4) {
    border-left: 1px solid #A3A3A3;
    
  }


  .eq-black-box {
    order: -1;
    width: 100%;
    justify-content: center;
    padding: 1rem 0.5rem;
    position: relative;

  }

  .eq-circle {
    width: 36px;
    height: 36px;
    position: absolute;
    right: 0.3rem;
    top: 50%;
    transform: translateY(-50%);
  }

  .eq-circle span {
    font-size: 1.2rem;
  }

  .eq-white-text {
    font-size: 0.9rem;
    margin-right:1rem;
  }
}
</style>
