<template>
 <div class="container">
      <div class="header">
        <span dir="rtl">{{ title }}</span>
      </div>
      <div class="border" dir="rtl">
        <ul>
          <li v-for="li in list" :key="li" class="text" >{{ li.text }} </li>
          <p>{{ note }}</p>
        </ul>
        
        <img class="center img-container" src="/src/assets/alf1&2.png"></img>
      </div>
   </div>

</template>

<script>
export default {
    name: "Track",
    data(){
        return{
            title: "תשואות עבר (Track-Record)",
            note:"נכון לתאריך 31 בדצמבר 2024",
            list: [
                {text:"היקף של כ-3.0 מיליארד דולר עסקאות אשראי אשר בוצעו עם חברות פינטק גלובליות החל משנת 2000."},
                {text:"תשואת הקרן הראשונה (ALF I) אשר גייסה 155 מיליון דולר בשנת 2017 עומדת על 14.9% (Net IRR)"},
                {text:"תשואה הקרן השנייה (ALF II) אשר גייסה כ-200 מיליון דולר בשנת 2020/2021 עומדת על 10.8% (Net IRR)."},
                {text:" סה״כ 0% הפסדי אשראי באסטרטגיית ההשקעות של מנהל הקרן עם תשואה כוללת של 10.9% (Net IRR) ותשואת קופון של 10.8% (Net IRR)."},
            ]
        }
    }

};
</script>
<style lang="scss">

</style>