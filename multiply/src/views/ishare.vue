<template>
    <div id="ishare">
        <!-- eq -->
          <div id="eq">
            <div class="eq-data">
              <div class="eq-item eq-item-1">
                <span >{{ eq.title }}</span>
                  <span class="">{{ eq.eq_answer }}</span>
              </div>
              <div class="eq-item">
                <span>{{ eq.eq_title_1 }}</span>
                <span><span class="bigger">{{ eq.eq_text_1 }}</span></span>
              </div>
              <div class="eq-item">
                <span>{{ eq.eq_title_2 }}</span>
              <span class="bigger" >
                USD
              </span> 
              </div>
              <div class="eq-item">
                <span>{{ eq.eq_title_3 }}</span>
                <span class="bigger">S&P</span>
              </div>
            </div>

            <a class="eq-black-box" href="/ishare" >
              <span class="eq-white-text">{{ eq.add }}</span>
              <div class="eq-circle">
                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" id="plus" viewBox="0 0 24 24"><path fill-rule="evenodd" d="M 11 2 L 11 11 L 2 11 L 2 13 L 11 13 L 11 22 L 13 22 L 13 13 L 22 13 L 22 11 L 13 11 L 13 2 Z"></path></svg>
              </div>
              
            </a>
          </div>
          <!-- end eq -->
          <!-- overview -->
          <div id="overview">
               <img src="/src/assets/ishare/ishares.png" alt="ishares" class="pic_of_div"></img>
                  <div class="main-text" >
                    <h2>{{ overview.title }}</h2>
                      <div v-for="(pargraph, index) in overview.pargraphs" :key="index" class="paragraph">
                          <p><strong  dir="ltr">{{ pargraph.title }}</strong><br>{{ pargraph.text }}</p>
                    </div>
                </div>
           </div>
          <!-- end overview -->
           <!-- details -->
           <div class="container-details">
                <span class="main-title">{{ details.title }}</span>
                <div class="details-cubes">
                    <div v-for="(card, index) in details.keren_cards" :key="index" class="details-cards ">
                        <div class="card-title">{{ card.title }}</div>
                        <div class="extra-title">{{ card.extra_title }}</div>
                        <div class="subtitle">{{ card.subtitle }}</div> 
                    </div>
                </div>
                    <span class="details-title">{{ details.titles[0] }}</span>
                <div class="details-cubes">
                    <div v-for="(card, index) in details.second_cards" :key="index" class="details-cards ">
                        <div class="card-title">{{ card.title }}</div>
                        <div class="subtitle">{{ card.subtitle }}</div>
                    </div>
                </div>
                 <span class="details-title">{{ details.titles[1] }}</span>
                <div class="details-cubes">
                    <div v-for="(card, index) in details.third_cards" :key="index" class="details-cards ">
                        <div class="card-title">{{ card.title }}</div>
                        <div class="subtitle">{{ card.subtitle }}</div>
                    </div>
                </div>
            </div>
           <!-- end details -->
            <!-- start risks -->
                <div class="risks-cubes">
                    <div v-for="(card, index) in risks.risks_cards" :key="index" class="risks-cards ">
                        <div class="card-title">{{ card.title }}</div>
                        <div v-html="card.extra_subtitle"></div>
                         <div class="subtitle">{{ card.subtitle }}</div>
                    </div>
                </div>
            <!-- end risks -->
             <!-- start meeting -->   
            <Product_doc>
                 <div class="state-border">
                    <p class="state-title">{{ statement.title }}</p>
                    <div v-for="(pargraph, index) in statement.pargraphs" :key="index" class="paragraph">
                    <p class="p-text" v-html="pargraph.text"></p>
                    </div>
                  </div>
            </Product_doc>
            <Meeting link="https://calendly.com"></Meeting> 
    </div>
    </template>

<script>

import Product_doc from '@/components/ishare/product_doc.vue';
import Meeting from '@/components/ishare/meeting.vue';


    export default {
        name: "ishare",
        components: { Product_doc,Meeting },
        data() {
            return {
              eq: {title: "תשואת מטרה", eq_title_1:"תקופת נעילה",eq_answer:"bank of america",eq_text_1:" 12 חודשים",eq_title_2:"מטבע השקעה",eq_title_3:"מינימום השקעה",add:"הוסף את קרן לרכישה עתידית",},
              overview:{ 
                title:"סקירה כללית",
                pargraphs: [
                {title:" - Wells Fargo" ,text:' החברה היא אחת מהבנקים הגדולים בארה"ב עם נכסים של כ $1.9- טריליון דולר. בשנת 2024 ממשיכה להתמקד בשיפור היעילות, החברה רשמה רווח נקי של 19.7 מיליארד דולר צמיחה מבוקרת והחזרת הון לבעלי המניות, תוך שמירה על יחס הון עצמי חזק. למרות תנודות בשוק הריבית וביקושים להלוואות, החברה נותרה שחקן מרכזי ויציב במערכת הפיננסית.'},
                {title:" - Citigroup", text:' מוסד פיננסי גלובלי משמעותי עם נכסים של כ $2.4- טריליון דולר. בשנת 2024 ממשיכה בתוכנית האסטרטגית שלה Citigroup . החברה הציגה רווח נקי של 11.4 מיליארד דולר להתמקד בעסקי הליבה הרווחיים ולייעל את פעילותה הגלובלית. למרות אתגרים כלכליים עולמיים, החברה שומרת על בסיס הון חזק ומחויבת לספק ערך לבעלי המניות שלה.'},
                {title:' - Bank of America',text:'מוסד פיננסי ענק עם נכסים המוערכים בכ $3.2- טריליון דולר. בשנת 2024 ממשיך להתמקד בצמיחה אורגנית, Bank of America . הבנק רשם רווח נקי של 26.5 מיליארד דולר ניהול סיכונים יעיל והשקעה בטכנולוגיה כדי לשפר את חוויית הלקוח. למרות תנאי שוק משתנים, הבנק שומר על בסיס הון חזק ומחויבות להחזרת ערך לבעלי המניות'},
                ],
               },
              details:{
                title: 'פרטי המוצר ותנאים כללים',
                keren_cards: [{title:'נכס בסיס', extra_title:'S&P'},{title:'מטבע השקעה', subtitle:'USD'},{title:'תקופת השקעה', subtitle:'12 חודשים'},{title:'בנק מנפיק', subtitle:'bank of america'},{title:'דירוג המנפיק', subtitle:'A-'},{title:'נכס בסיס קובע במועד סופי',extra_title:'S&P'},],
                titles: ['מועדים','מנגנוני תשלום',],
                second_cards: [{title:'מועד קביעת שער בסיס', subtitle:'9/4/2025'},  {title:'מועד תחילת מוצר', subtitle:'23/4/2025'},      {title:'מועד התצפית הסופי', subtitle:'9/4/2026'},  ],
                third_cards: [{title:'גבול תחתון', subtitle:'50%'},  {title:'קופון שנתי', subtitle:' 14.5%, משולם רבעונית.'},      {title:'מנגנון פדיון מוקדם', subtitle:'הריבית עבור הרבעון'},  ],
               },
              risks:{
                  title: "סקרים",
                  risks_cards: [
                      {title:'אירוע לבדיקה במועד התצפית הסופי (במידה והמוצר לא נפדה במסגרת מנגנון פידיון מוקדם)'},{title:'הרווח / ההפסד למשקיע'},
                      {title:'סך התקבול למשקיע'},{subtitle:'במידה ואף מניה לא ירדה בשיעור הגבוה מ- 50%' },{extra_subtitle:`<p class="subtitle"><strong>הרווח: </strong>הקופונים שהתקבלו במהלך כל התקופה.</p>`},
                      {subtitle:'קרן ההשקעה + הרווח'},{subtitle:'במידה ואחת המניות ירדה בשיעור הגבוה מ- 50%'},
                      {extra_subtitle:`<p class="subtitle"><strong>ההפסד: </strong>הלקוח יקבל את המניה בעלת הביצועים הפחות טובים וירשום הפסד בשיעור ירידת מניה זו ובניכוי הקופונים שהתקבלו במהלך כל התקופה.</p>`},{subtitle:'קרן ההשקעה בניכוי ההפסד'},
                  ],
               },
               statement:{
                title:'הצהרת המשקיע',
                pargraphs:[
                {text:`אני, החתום מטה, מצהיר ומאשר בזאת כדלקמן:<br> קראתי והבנתי את כל המידע המופיע בדף מוצר זה, לרבות כל האזהרות וגילויי הסיכון.`},
                {text:`קראתי והבנתי את דף התנאים המלא שסופק על ידי הבנק המנפיק ומצ”ב כנספח א’, והנני מודע לכך שדף התנאים הוא המסמך המחייב היחיד ביחס למוצר זה.`},
                {text:`אני מודע לכל הסיכונים הכרוכים בהשקעה במוצר זה, כולל אך לא מוגבל לסיכון שוק, סיכון אשראי, סיכון נזילות, ואפשרות לאובדן חלקי או מלא של הקרן המושקעת.`},
                {text:`הבנתי כי ביצועי העבר אינם מהווים אינדיקציה לתוצאות עתידיות.`},
                {text:`אני מאשר כי יש לי את הידע והניסיון הדרושים להעריך את היתרונות והסיכונים של השקעה במוצר זה.`},
                {text:`אני מאשר כי השקעה זו תואמת את מטרות ההשקעה שלי ואת מצבי הפיננסי.`},
                {text:`קיבלתי הזדמנות לשאול שאלות ולקבל תשובות מספקות ביחס למוצר זה.`},
                {text:`אני מודע לכך שלקבוצת סיגמא-קלאריטי יש עניין אישי בשיווק והפצת מוצר זה, וכי בית ההשקעות זכאי או עשוי להיות זכאי לקבל תמורה מהבנק המנפיק בגין שיווק המוצר ו/או בגין השקעתי במוצר. הבנתי כי עובדה זו עלולה להשפיע על המלצות או פעולות בית ההשקעות בקשר למוצר זה.`},
                {text:`בחתימתי מטה, אני מתחייב להשקיע במוצר זה בסכום של __________________ ש”ח, בהתאם לתנאים המפורטים בדף התנאים של הבנק המנפיק.`},
                {text:`אני מבין כי חתימתי על מסמך זה מהווה הסכמה מחייבת להשקעה במוצר, בכפוף לאישור סופי של סיגמא-קלאריטי והבנק המנפיק.`},
            ],
               
               }


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
    --border-color: #D9D9D9;
    --border-radius: 35px;
    --border-width: 0.01rem;
    --small-border-radius: 10px;
    --font-size: 1.1rem;
    --eq-font-weight: 400;
    --card-title-size:1.25rem;
    --line-height: 1.4rem;
    --center-flex: center;
    --card-max-width:300px;
  }
#ishare{
    display: flex;
    flex-direction: column;
    justify-items: center;
    padding: 1rem;
    max-width: 1033px !important;
    justify-self: center;
    direction: rtl;
    overflow: hidden;

.center{
  display:flex;
  justify-self: center;
}
@media (max-width: 768px) {
  #ishare{
    padding: 0.5rem;
    justify-items: center;
  }
}
.container{
  width: 100%;
  display: flex;
  flex-direction: column;
}
.img-container{
 width:100%;
 height:auto;
 
}
.title {
  text-align: right;
  color: black;
  font-size: 1.13rem;
  font-weight: 700;
  line-height: 1.2;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  border:0;  
}
     .mobile-title {
    display:none;
}
  @media (max-width: 768px) {
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

  // eq style
  #eq {
  background: white;
  border-radius: 3rem;
  outline: 0.1rem #B7EBEB solid;
  outline-offset: -0.1rem;
  margin: 1rem auto;
  padding:0.5rem;
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
  justify-self: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 0.1rem;

  .eq-data {
  display: flex;
  justify-content: center; 
  gap: 3rem; 
  flex-wrap: wrap; 
  flex-direction: row-reverse;
}

.eq-item {
  display: flex;
  flex-direction: column;
  align-items: center; 
  text-align: center;
  gap: 0.5rem;
  min-width: 8rem; 
}
.eq-item-1{
padding-left: 2rem;
}
  .bigger{
    font-size: 1.6rem;
  }

  .eq-item + .eq-item::before {
  content: '';
  position: absolute;
  left: -1.5rem; 
  top: 50%;
  transform: translateY(-50%);
  width: var(--border-width);
  height: 80%;
  background: #A3A3A3;
  
}
.eq-link{
  text-decoration: none;
  color: white;
}

.eq-black-box {
  background: black;
  color: white;
  border-radius: var(--border-radius);
  width: 30%;
  padding: 0.3rem 0.3rem 0.3rem 2.5rem;
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
  justify-content: space-between;
  gap: 0.5rem;
  text-decoration: none;
  
}

.eq-circle {
  width: 2.8rem;
  height: 2.8rem;
  background: white;
  border: var(--border-width) solid black;
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
#plus{
  width: 1.8rem;
  height: auto;
}


}



@media (max-width: 850px) {
  #eq {
    flex-direction: column;
    align-items: stretch;
    padding: 0.5rem;
    outline: none;
    justify-content: center;
    margin: 0;
    grid-auto-rows: 1fr;
  
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
 

  .eq-item:nth-child(1),
  .eq-item:nth-child(3) {
    border-left: var(--border-width) solid #A3A3A3; 
  }
  .eq-item:nth-child(2),
  .eq-item:nth-child(4) {
    border-left:none; 
  }
 
  .eq-black-box {
    order: -1;
    width: 100%;
    justify-content: center;
    padding: 1rem 0.5rem;
    position: relative;
  }
  .eq-circle {
    width: 2.5rem;
    height: 2.5rem;
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
  .bigger{
    font-size: 1.2rem;
  }
  }  
}
// end eq

// start overview style
#overview{
  margin-bottom: 3rem;
.pic_of_div{
  object-fit: fill;
  max-height:330px;
}
.main-text {
    width: 90%;
    margin: auto;
    text-align: right;
    display: flex;
    flex-direction: column;
    color: black;
    line-height: var(--line-height);
    word-wrap: break-word;
  }

  .main-text h2 {
    font-size: 1.5rem; 
    font-weight: 700;
    margin:2rem 0 0 0;
  }

  .main-text p {
    font-size: 1.2rem;
    font-weight: 400;
    margin-top:0.5rem;
  }

}

 @media (max-width: 768px) {
  #overview{
   
    .pic_of_div{
       object-fit: cover;
    }
    .main-text{
      width: 100%;
      margin: 0;
      text-align: right;
      display: flex;
      flex-direction: column;
      color: black;
      line-height: var(--line-height);
      word-wrap: break-word;  
    }
  }    
 }

//  end overview

// start details

.details-cubes {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
    gap: 1rem;
    margin: auto;
    padding-top: 0.5rem;
    margin-bottom: 2rem;
    min-width: 0;

  
    .details-cards {
        background: #fff;
        border: var(--border-width) solid var(--border-color);
        border-radius: var(--small-border-radius);
        padding: 2.5rem;
        text-align: center;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 0.1rem;  
    }
    
    .card-title {
    font-size: var(--card-title-size);
    font-weight: 700;
    color: black;
  }
  .other-title {
    font-size: var(--card-title-size);
    font-weight: 700;
    color: black;
    display:block;
    width:100%;
  }

  .subtitle {
    font-size: var(--font-size);
    font-weight: 400;
    color: black;
  }

  .extra-title {
    font-size:var(--font-size);
    font-weight: 700;
    color: #171717;
    display:block;
  }


}
.main-title{
    font-size: 1.3rem;
    font-weight: 700;
  
}

.details-title{
    margin:0 1rem;
    font-size: var(--card-title-size);
    font-weight: 700;
}
  

  
 
  @media (max-width: 850px) {
    .details-cubes{
      grid-template-columns: repeat(2, 1fr);
      margin-bottom: 1rem;
      justify-items: center; 
      width:100%
    }
    .details-cards{
      max-width: var(--card-max-width); 
      width: 100%;
    }

  }

  @media (max-width: 600px) {
    .details-cubes{
      grid-template-columns: repeat(1, 1fr);
      margin-bottom: 1rem;
      justify-items: center; 
      width:100%

    }
    .details-cards{
      max-width: var(--card-max-width); 
      width: 100%;
    }
    
  }
  // end details

  // start risks 
    .risks-cubes {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
    gap: 1rem;
    margin: auto;
    padding-top: 0.5rem;
    margin-bottom: 2rem;
    flex: 1;
    min-width: 0;
  
    .risks-cards {
        background: #F6F8FA;
        border: var(--border-width) solid var(--border-color);
        border-radius: var(--small-border-radius);
        padding: 1rem;
        text-align: center;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 0.1rem;  
    }
    
    .card-title {
    font-size: var(--card-title-size);
    font-weight: 700;
    color: black;
  }
  .subtitle {
    font-size: 1rem;
    font-weight: 400;
    color: black;
  }
}
 
  @media (max-width: 850px) {
    .risks-cubes{
      grid-template-columns: repeat(2, 1fr);
      margin-bottom: 1rem;
      justify-items: center;
    }
    .risks-cards{
      max-width: var(--card-max-width); 
      width: 100%;
    }

  }

  @media (max-width: 600px) {
    .risks-cubes{
      grid-template-columns: 1fr;
      margin: 2rem 0 2rem 0;
      justify-items: center;
    }
    .risks-cards{
      max-width: var(--card-max-width); 
      width: 100%;
    }
  }

  // end risks

  // start product_doc
  
    .state-border{
        border: var(--border-width) solid var(--border-color);
        background-color: #ffffff;
        border-radius: var(--small-border-radius);
        text-align: start;
        display: flex;
        flex-direction: column;
        align-items: start;
        justify-content: center;
        padding:0 2rem 1rem 2rem;
        margin-top:2rem;
    }
    .p-text{
        font-weight: 400;
        font-size: 1rem;
        line-height: 1.5rem;
        color: black;
    }

    .state-title{
        font-weight: 700;
        font-size: 1rem;
        line-height: 1.5rem;
        color: black;
    }
    @media (max-width: 768px) {
        .p-text{
            width: 100%;
      margin: 0;
      text-align: right;
      display: flex;
      flex-direction: column;
      color: black;
      line-height: 1.6;
      padding:0.5rem 0;
      word-wrap: break-word;
        }
    }





}

</style>