<template>
    <div class="container">   
            <div class="main-text" dir="rtl">
                <span class="main-title">{{ title }}</span>
            
                <div class="about-cubes">
                    <div v-for="(card, index) in keren_cards" :key="index" class="about-cards ">
                        <div class="card-title">{{ card.title }}</div>
                        <div class="extra-title">{{ card.extra_title }}</div>
                        <div class="subtitle">{{ card.subtitle }}</div> 
                    </div>
                </div>
                    <span class="about-title">{{ titles[0] }}</span>
                <div class="about-cubes">
                    <div v-for="(card, index) in second_cards" :key="index" class="about-cards ">
                        <div class="card-title">{{ card.title }}</div>
                        <div class="subtitle">{{ card.subtitle }}</div>
                    </div>
                </div>
                 <span class="about-title">{{ titles[1] }}</span>
                <div class="about-cubes">
                    <div v-for="(card, index) in third_cards" :key="index" class="about-cards ">
                        <div class="card-title">{{ card.title }}</div>
                        <div class="subtitle">{{ card.subtitle }}</div>
                    </div>
                </div>
                
            </div>
        </div>
    </template>

<script>

export default {
    name: "Details",
    data(){
        return{
          title: 'פרטי המוצר ותנאים כללים',
          keren_cards: [
            {title:'נכס בסיס', extra_title:'S&P'},
            {title:'מטבע השקעה', subtitle:'USD'},
            {title:'תקופת השקעה', subtitle:'12 חודשים'},
            {title:'בנק מנפיק', subtitle:'bank of america'},
            {title:'דירוג המנפיק', subtitle:'A-'},
            {title:'נכס בסיס קובע במועד סופי',extra_title:'S&P'},
    ],
        titles: [
            'מועדים',
            'מנגנוני תשלום',
    ],
        second_cards: [
            {title:'מועד קביעת שער בסיס', subtitle:'9/4/2025'},  
            {title:'מועד תחילת מוצר', subtitle:'23/4/2025'},      
            {title:'מועד התצפית הסופי', subtitle:'9/4/2026'},  
        ],
        third_cards: [
            {title:'גבול תחתון', subtitle:'50%'},  
            {title:'קופון שנתי', subtitle:' 14.5%, משולם רבעונית.'},      
            {title:'מנגנון פדיון מוקדם', subtitle:'הריבית עבור הרבעון'},  
        ],
        }
    }
};

</script>

<style lang="scss">
.about-cubes {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
    gap: 1rem;
    max-width: 1033px;
    margin: auto;
    padding-top: 0.5rem;
    margin-bottom: 2rem;
    flex: 1;
    min-width: 0;
  
    .about-cards {
        background: #fff;
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
    font-size: 20px;
    font-weight: 700;
    color: black;
  }
  .other-title {
    font-size: 20px;
    font-weight: 700;
    color: black;
    display:block;
    width:100%;
  }

  .subtitle {
    font-size: 16px;
    font-weight: 400;
    color: black;
  }

  .extra-title {
    font-size:16px;
    font-weight: 700;
    color: #171717;
    display:block;
  }


}
.main-title{
    margin:1.5rem 1rem;
    font-size: 20px;
    font-weight: 700;
}

.about-title{
    margin:0 1rem;
    font-size: 20px;
    font-weight: 700;
}
  

  
 
  @media (max-width: 850px) {
    .about-cubes{
      grid-template-columns: repeat(2, 1fr);
      margin-bottom: 1rem;
      justify-items: center; 
      width:100%
    }
    .about-cards{
      max-width: 300px; 
      width: 100%;
    }

  }

  @media (max-width: 600px) {
    .about-cubes{
      grid-template-columns: repeat(1, 1fr);
      margin-bottom: 1rem;
      justify-items: center; 
      width:100%

    }
    .about-cards{
      max-width: 300px; 
      width: 100%;
    }
    
  }

</style>