<template>
    <div class="investor-container">
    <div class="header">
      <span class="text">{{ title }} </span>
    </div>
    <div class="border">
        <p class="text desktop-title" dir="rtl"><strong>{{ paragraph }}</strong></p>
        <img src="/src/assets/companies.png" class="img"></img>
    </div>
   </div>
   <!-- תנאי קרן טבלה -->
     <div class="container" style="width:95%">
          <div class="header">
            <span class="text desktop-title">{{ table_title }} </span>
        </div>
        <div class="desktop-border investment">
            <div class="investment-table">
              <div  v-for="(row, index) in rows" :key="index" class="table-row">
                <div class="table-cell title">{{ row.title }}</div>
                <div class="table-cell value">
                  <div v-html="row.value"></div>
                </div>
              </div>
            </div>
        </div>
    </div>
</template>


<script>
export default {
    name: "Investor",
    methods: {
    
    },
    data() {
        return {
            title:'משקיעים בולטים',
            paragraph:'המשקיעים של ויולה קרדיט כוללים גופים מוסדיים מובילים מהארץ ומחו״ל לצד משקיעים פרטיים כשירים.',
            table_title:' תנאי קרן עיקריים',
         rows:[
        {title:'מבנה התאגדות',value:`<p>קרן: שותפות קיימנית מוגבלת </p><p>פידר: שותפות ישראלית מוגבלת</p>`},
        {title:'מנהל הקרן (GP)',value:`<p>קרן: Viola Credit</p><p>פידר: ואליו השקעות מתקדמות</p>`},
        {title:'מטבע השקעה',value:'USD'},
        {title:'סכום השקעה מינימלי', value:'250,000 USD'},
        {title:'אורך חיי קרן', value:'7 שנים (+1,+1)'},
        {title:'קריאות לכסף', value:'לאורך תקופת ההשקעות של הקרן (3 שנים)'},
        {title:'נזילות', value:'אין. קרן סגורה'},
        {title:'דמי ניהול', value:'1.5% + מע״מ'},
        {title:'דמי הצלחה', value:'15% מעל 7% (Hurdle) עם Catch-Up מלא'},
        {title:'שערוכים ודיווחים', value:'רבעוני'},
        {title:'יעד תשואה', value:`<p>14-15% (Net IRR)</p><p>10-12% ריבית שנתית שוטפת נטו (חלוקה רבעונית)</p>`},
        {title:'אדמיניסטרטור', value:`<p>קרן: Alter Domus</p><p>פידר: Apex Partners</p>`},
        {title:'ייעוץ משפטי', value:`<p>קרן: Goodwin (קיימן)</p><p>פידר: וינוגרד ושות׳ (ישראל)</p>`},
        {title:'רואה חשבון מבקר', value:`<p>קרן: KPMG</p><p>פידר: EY</p>`},
      ],
        };
    },
};
</script>

<style lang="scss">
.investor-container{
    width:95%;
    display: flex;
    flex-direction: column;
    max-width: 980px;

    .img{
      width: 70%;
      display: flex;
      justify-self: center;
      object-fit: cover;
    }
  }
  

   // טבלה
  .investment-table {
  display: grid;
  grid-template-columns: 1fr 2fr;
  border-top: 1px solid black;
  direction: rtl; 
  max-width: 800px;
  margin:auto  auto 3rem  auto;
  width:100%;
  

  .title {
  font-weight: 700;
  border-left: 1px solid #000;
  border-bottom: #000 solid 1px;
  
}

.value {
  font-weight: 400;
}
}

.table-row {
  display: contents; 
}

.table-cell {
  padding: 5px;
  border-bottom: 1px solid #000;
  font-size: 18px;
  line-height: 1.5;
}

@media (max-width: 768px) {

 .desktop-border{
    border:none;
  }

  .investment-table {
    display: block; 
    border: none;
    max-width: 100%;
    .title{
      border:none;
    }
  }

  .table-row {
    display: block; 
    margin-bottom: 0.2rem;
    padding-bottom: 0.2rem;

  }

  .table-cell {
    display: block;
    border: none; 
   
    font-size: 16px;
  }

  .title {
    font-weight: 700;
    border: none;
  }

  .value {
    font-weight: 400; 
  }
  
}


</style>