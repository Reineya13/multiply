<template>
    <div class="state-border">
        
        <p class="state-title">{{ title }}</p>
        <div v-for="(pargraph, index) in pargraphs" :key="index" class="paragraph">
            <p class="p-text" v-html="pargraph.text">
               
            </p>
      
    </div>

    </div>


</template>


<script>
export default {
    name: "Statement",
    data() {
        return {
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
    }
}
</script>

<style lang="scss">

    .state-border{
        border: 1px solid #dfdfdf;
        border-radius: 10px;
        text-align: start;
        direction: rtl;
        display: flex;
        flex-direction: column;
        align-items: start;
        justify-content: center;
        padding:0 2rem 1rem 2rem;
        max-width: 1000px;
        width:90%;
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
</style>
