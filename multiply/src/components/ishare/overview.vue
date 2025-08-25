<template>
      <img src="/src/assets/ishare/ishares.png" alt="ishares" class="pic_of_div"></img>
  <div class="main-text" dir="rtl">
    <h2>{{ title }}</h2>
      <div v-for="(pargraph, index) in pargraphs" :key="index" class="paragraph">
        <ul >  
            <li class="p-text"><strong dir="ltr">{{ pargraph.title }}</strong><br>{{ pargraph.text }}</li>
        </ul>
      </div>
  </div>

</template>

<script>
export default {
    name: "overview",
    data(){
      return {
        title:"סקירה כללית",
        pargraphs: [
        {title:" - Wells Fargo" ,text:' החברה היא אחת מהבנקים הגדולים בארה"ב עם נכסים של כ $1.9- טריליון דולר. בשנת 2024 ממשיכה להתמקד בשיפור היעילות, החברה רשמה רווח נקי של 19.7 מיליארד דולר צמיחה מבוקרת והחזרת הון לבעלי המניות, תוך שמירה על יחס הון עצמי חזק. למרות תנודות בשוק הריבית וביקושים להלוואות, החברה נותרה שחקן מרכזי ויציב במערכת הפיננסית.'},
        {title:" - Citigroup", text:' מוסד פיננסי גלובלי משמעותי עם נכסים של כ $2.4- טריליון דולר. בשנת 2024 ממשיכה בתוכנית האסטרטגית שלה Citigroup . החברה הציגה רווח נקי של 11.4 מיליארד דולר להתמקד בעסקי הליבה הרווחיים ולייעל את פעילותה הגלובלית. למרות אתגרים כלכליים עולמיים, החברה שומרת על בסיס הון חזק ומחויבת לספק ערך לבעלי המניות שלה.'},
        {title:' - Bank of America',text:'מוסד פיננסי ענק עם נכסים המוערכים בכ $3.2- טריליון דולר. בשנת 2024 ממשיך להתמקד בצמיחה אורגנית, Bank of America . הבנק רשם רווח נקי של 26.5 מיליארד דולר ניהול סיכונים יעיל והשקעה בטכנולוגיה כדי לשפר את חוויית הלקוח. למרות תנאי שוק משתנים, הבנק שומר על בסיס הון חזק ומחויבות להחזרת ערך לבעלי המניות'},
     ], 
    } 
  }
};
</script>

<style lang="scss">
.pic_of_div{
  max-width: 1033px;
  width:100%;
  max-height:330px;
}
.p-text{
    list-style: none;
}

 @media (max-width: 768px) {
     .p-text {
      list-style: disc;
      padding: 0px;
      margin: -0.3rem;
    }
    .pic_of_div{
        min-width: auto;
        width:100%;
        
    }
    .main-text{
      width: 100%;
      margin: 0;
      text-align: right;
      display: flex;
      flex-direction: column;
      color: black;
      line-height: 1.4;
      word-wrap: break-word;
      
      
      h2{
        padding-top: 2rem;
        margin: 0 0 0 0;
        font-size: 1.5rem; 
        font-weight: 700;
        
      }
      
    }
 }


</style>