

<template>
      <img src="../assets/violacredit.png" alt="violet credit" class="pic_of_div"></img>
  <div class="main-text" dir="rtl">
    <h2>{{ title }}</h2>
      <div v-for="(pargraph, index) in pargraphs" :key="index" class="paragraph">
        <ul >
            <li class="p-text">{{ pargraph.text }}</li>
        </ul>
      </div>
  </div>

</template>

<script>
export default {
    name: "Violet",
    data(){
      return {
        title:"מאפיינים עיקריים",
        pargraphs: [
        {text:"·Viola Credit Alternative Lending Income Fund III (״הקרן״ או ״ALF III״) הינה הקרן השלישית בסדרת קרנות החוב של Viola Credit (״ה-GP״), אשר מציעה למשקיעים הזדמנות ייחודית להיחשף לשוק האשראי הפרטי (Private Debt) הצומח במהירות, תוך התמקדות במימון חברות טכנולוגיה ופינטק מובילות."},
        {text:"כזרוע החוב של קבוצת ויולה, בית ההשקעות הטכנולוגי הגדול בישראל, הקרן מביאה עמה הבנה עמוקה של סקטור הטכנולוגיה, יכולות חיתום מבוססות נתונים, ורשת קשרים גלובלית, המאפשרות איתור וביצוע עסקאות איכותיות בשווקים מפותחים."},
        {text:"הקרן תתמקד במתן אשראי בכיר המגובה בנכסים ובתזרימי מזומנים (Asset Based Lending). אסטרטגיה זו מפחיתה באופן משמעותי את הסיכון הטמון בהלוואה, ומאפשרת לייצר תזרים קופונים שוטף ויציב למשקיעים, עם יעד חלוקה רבעונית נטו של 10%-12% לשנה, ויעד תשואה כוללת של 14%-15% (Net IRR) לפני מס."},
        {text:"בכוונת הקרן לגייס 500 מיליון דולר אשר יושקעו במהלך תקופת השקעות של 3 שנים (במהלכן יקראו לכספי המשקיעים), לאחריה 4 שנות ״הנבה״ והחזרי קרן (סה״כ 7 שנים בתוספת שתי תקופות הארכה בנות שנה כל אחת)."},
        {text:"הקרן תונגש למשקיעים כשירים בישראל באמצעות פידר שינוהל על ידי ״ואליו השקעות מתקדמות״."},
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