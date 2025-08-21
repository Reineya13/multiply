

<template>
        <div class="header">
            <span>{{ title }}</span>
        </div>
        <div class="main-text gp-container">
        <p class="about-text gp-text" dir="rtl">{{ text }}</p>
            <img src="/src/assets/gp-pic.png" class="pic_of_gp"></img>
    </div>
    <div class="cubes-container" dir="rtl">
        <div v-for="(card, index) in cards" :key="index" class="card">
            <div data-svg-wrapper  style="position: relative; background-color:white;">
                <span v-html="card.icon" class="icon-wrapper"></span>
            </div>
                <div class="title">{{ card.title }}</div>
                <div class="extra-subtitle">{{ card.extra_subtitle }}</div>
                <div class="subtitle">{{ card.subtitle }}</div> 
            </div>
    </div>

</template>

<script>
export default {
    name: "Gp",
    data(){
        return{
          title: "(GP) אודות הגוף המנהל",
          text:'Viola הינה קבוצת השקעות ישראלית המתמקדת בהשקעות בחברות טכנולוגיה הגדולה בישראל. הקבוצה הוקמה בשנת 2000 בדגש על השקעות הון-סיכון (vc) בענף הטכנולוגיה ולאורך השנים התרחבה לפעילויות נוספות, כולל פעילות קרנות חוב לא סחיר.',
          cards: [
        { title: "מנהל הקרן (GP)", subtitle: "Viola Credit מקבוצת Viola", icon:`<span style="font-size: 48px;" class="material-symbols-outlined"> apartment </span>` },
        { title: "שנת הקמה של מנהל הקרן",extra_subtitle:"2000", subtitle:" (כ-25 שנות פעילות)" , icon:`<span class="material-symbols-outlined" style="font-size: 48px;">sports_score</span>`},
        { title: "היקף נכסים מנוהלים (AUM) ", subtitle: "כ-6 מיליארד דולר", icon:`<span style="font-size: 48px;" class="material-symbols-outlined">enterprise</span>` },
        { title: "צוות השקעות", subtitle: "מעל ל-30 אנשי השקעות, ניהול סיכונים ותפעול", icon:`<span style="font-size: 48px;" class="material-symbols-outlined">diversity_3</span>` },
        { title: "איזור פעילות גאוגרפי", subtitle: "ישראל, ארה״ב, מערב אירופה, אוסטרליה וניו-זילנד", icon:`<span style="font-size: 48px;" class="material-symbols-outlined">globe</span>` },
        { title: "אסטרטגיות השקעה", subtitle: "Venture Capital, Private Debt", icon:`<span style="font-size: 48px;" class="material-symbols-outlined">assignment</span>` },
      ],  
        }
    }
}
</script>

<style lang="scss">

   .cubes-container {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1rem;
    max-width: 1000px;
    margin: auto;
    padding: 20px;
  }

  .card {
    background: #fff;
    border: 1px solid #dfdfdf;
    border-radius: 10px;
    padding: 1rem;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.1rem;
  }

  .title {
    font-size: 20px;
    font-weight: 700;
    color: #171717;
   
  }

  .subtitle {
    font-size: 16px;
    font-weight: 400;
    color: #171717;
  }

  .extra-subtitle {
    font-size:20px;
    font-weight: 400;
    color: #171717;
    display:block;
  }

  .icon-wrapper {
   font-size: 40px;
    fill: black;
    display: block; 
  }
  .gp-container{
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .gp-text{
    margin-top: -0.5rem;
  }
 
  .pic_of_gp{
      object-fit: fit;
      width:80%;
      height: 80&;
    }

  /* טאבלט - שתי עמודות */
  @media (max-width: 1024px) {
    .cubes-container {
      grid-template-columns: repeat(2, 1fr);
    }

  }

  @media (max-width: 600px) {
    .cubes-container {
      grid-template-columns: 1fr;
    }
    .pic_of_gp{
      display: none;
    }
    
    
  }


</style>