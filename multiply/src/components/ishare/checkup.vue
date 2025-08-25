

<template>

     <div class="container">   
            <div class="main-text" dir="rtl">
                <div class="risks-cubes">
                    <div v-for="(card, index) in risks_cards" :key="index" class="risks-cards ">
                        <div class="card-title">{{ card.title }}</div>
                        <div v-html="card.extra_subtitle"></div>
                         <div class="subtitle">{{ card.subtitle }}</div>
                    </div>
                </div>
            </div>
    </div>



</template>

<script>
export default {
    name: "Checkup",
    data() {
        return {
            title: "סקרים",
            risks_cards: [
                {title:'אירוע לבדיקה במועד התצפית הסופי (במידה והמוצר לא נפדה במסגרת מנגנון פידיון מוקדם)'},
                {title:'הרווח / ההפסד למשקיע'},
                {title:'סך התקבול למשקיע'},
                {subtitle:'במידה ואף מניה לא ירדה בשיעור הגבוה מ- 50%' },
                {extra_subtitle:`<p class="subtitle"><strong>הרווח: </strong>הקופונים שהתקבלו במהלך כל התקופה.</p>`},
                {subtitle:'קרן ההשקעה + הרווח'},
                {subtitle:'במידה ואחת המניות ירדה בשיעור הגבוה מ- 50%'},
                {extra_subtitle:`<p class="subtitle"><strong>ההפסד: </strong>הלקוח יקבל את המניה בעלת הביצועים הפחות טובים וירשום הפסד בשיעור ירידת מניה זו ובניכוי הקופונים שהתקבלו במהלך כל התקופה.</p>`},
                {subtitle:'קרן ההשקעה בניכוי ההפסד'},
            ],
        }
    },
    
}
</script>

<style lang="scss">

    .risks-cubes {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
    gap: 1rem;
    max-width: 1033px;
    margin: auto;
    padding-top: 0.5rem;
    margin-bottom: 2rem;
    flex: 1;
    min-width: 0;
  
    .risks-cards {
        background: #F6F8FA;
        border: 1px solid #dfdfdf;
        border-radius: 10px;
        padding: 1rem;
        text-align: center;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 0.1rem;  
    }
    
    .card-title {
    font-size: 18px;
    font-weight: 700;
    color: black;
  }
  .subtitle {
    font-size: 16px;
    font-weight: 400;
    color: black;
  }
}
 
  @media (max-width: 1024px) {
    .about-cubes{
      grid-template-columns: repeat(2, 1fr);
    }

  }

  @media (max-width: 600px) {
    .about-cubes{
      grid-template-columns: 1fr;
      margin-bottom: 1rem;
    }
  }



</style>

