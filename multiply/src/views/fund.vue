<template>
  <div id="fund">
     <!-- eq -->
          <div id="eq">
            <div class="eq-data">
              <div class="eq-item eq-item-1">
                <span >{{ eq.title }}</span>
                 <span >
                  <span class="bigger">11</span>% <span class="bigger">9</span>%
                  </span>
              </div>
              <div class="eq-item">
                <span>{{ eq.eq_title_1 }}</span>
                <span><span class="bigger">3</span>{{ eq.eq_text_1 }}</span>
              </div>
              <div class="eq-item">
              <span>{{ eq.eq_title_2 }}</span>
                <span class="">
                  <span class="bigger">$</span>
                  <span class="line"> | </span>
                  <span class="bigger"> ₪</span>
                </span>
              </div>
              <div class="eq-item">
                <span>{{ eq.eq_title_3 }}</span>
                <span class="bigger">$250,000</span>
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
           <!-- violet -->
          <div id="violet">
            <img src="../assets/violacredit.png" alt="violet credit" class="pic_of_div"></img>
              <div class="main-text">
                <h2>{{ violet.title }}</h2>
                  <div v-for="(pargraph, index) in violet.pargraphs" :key="index" class="paragraph">
                    <ul>
                        <li class="p-text">{{ pargraph.text }}</li>
                    </ul>
                  </div>
              </div>
          </div>
          <!-- end violet -->
     <!-- start GP-->
      <div id="gp">
          <div class="header">
                <span v-html="gp.title"></span>
            </div>
            <div class="main-text gp-container border">
            <p class="about-text gp-text">{{ gp.text }}</p>
                <img src="/src/assets/gp-pic.png" class="pic_of_gp"></img>
        </div>
        <div class="cubes-container">
            <div v-for="(card, index) in gp.cards" :key="index" class="card">
              <Card :icon="card.icon" :title="card.title" :subtitle="card.subtitle"></Card>
            </div>
        </div>
  </div>
    <!-- GP end -->
     <!-- start about -->
      <div id="about">
            <div class="header">
            <span>{{ about.title }}</span>
            </div>
            <div class="main-text" >
            <p class="about-text">{{about.about_text}}</p>
            <div class="about-cubes">
            <div v-for="(card, index) in about.keren_cards" :key="index" class="about-cards card">
                 <Card :icon="card.icon" :title="card.title" :subtitle="card.subtitle"></Card>
            </div>
            </div>
        </div>
        </div>
     <!-- end about -->
    <!-- start fider -->
      <div id="fider">
        <div class="header">
          <span>{{ fider.title }}</span>
        </div>
        <div class="main-text">
       <p class="about-text">  {{ fider.text }}
        </p>    
    </div>
        <div class="fider-cubes">
          <div v-for="(card, index) in fider.fider_cards" :key="index" class="fider-card">
              <Card :icon="card.icon" :title="card.title" :subtitle="card.subtitle"></Card>
          </div>
        </div>
      </div>

    <!-- end fider -->

    <!-- stragety start-->
      <div id="stragety">
        <div class="header">
          <span class="top-strategy-title">{{stragety.title}}</span>
        </div>
        <div class="border">
          <div class="box">
             <div v-html="stragety.icons.icon_1" class="icon-wrapper"></div>
              <div class="main-text">
                <p class="stragety-text">{{ stragety.first_text[0] }}</p>
                <p class="stragety-text">{{ stragety.first_text[1] }}</p>
              </div>
          </div>
          <div class="img-container">
            <img src="/src/assets/spv.png" alt="spv"/>
          </div>

          <div class="block">
                      <div class="flex">
                        
                      <div class="text-icon icon-wrapper">
                        <div v-html="stragety.icons.icon_2"></div>
                        </div>
                      <div class="text-container">
                        <p class="stragety-title title">{{stragety.second_text.title}}</p>  
                        <p class="text stragety-para">{{ stragety.second_text.para }}</p>
                        </div>    
                    </div>
                
              <hr class="hr img-container">
              <div class="img-container">
                <img src="/src/assets/alf.png" alt="alf"  />
              </div>
              <hr class="hr">
                <div class="flex" >
                  <div class="text-icon">
                    <div v-html="stragety.icons.icon_3"></div>
                  </div>
                  <div class="text-container">
                    <p class="stragety-title title">{{stragety.third_text.title}}</p>  
                    <p class="text stragety-para">{{ stragety.third_text.para }}</p>
                    </div>    
                </div>
              <hr class="hr">
              <div class="img-container">
                <img src="/src/assets/alfRe.png" alt="image"/>
              </div>

              <div class="flex" >
                  <div class="text-icon">
                    <div v-html="stragety.icons.icon_4"></div>
                  </div>
                  <div class="text-container">
                    <p class="stragety-title title">{{ stragety.fourth_text.title }}</p>  
                    <p class="text stragety-para">{{ stragety.fourth_text.para }}</p>
                  </div>    
                </div>
                <hr class="hr">
              <div class="img-container">
                <img src="/src/assets/abl2024.png" alt="image"/>
              </div>
              <div class="flex" >
                  <div class="text-icon">
                    <div v-html="stragety.icons.icon_5"></div>
                  </div>
                  <div class="text-container">
                    <p class="stragety-title title">{{stragety.fifth_text.title}}</p> 
                    <ul>
                      <li class="text stragety-para">{{ stragety.fifth_text.para_1 }}</li>
                      <li class="text stragety-para">{{ stragety.fifth_text.para_2 }}</li>
                      <li class="text stragety-para">{{ stragety.fifth_text.para_3 }}</li>
                      <li class="text stragety-para">{{ stragety.fifth_text.para_4 }}</li>
                    </ul>        
                    <p class="text stragety-para">{{ stragety.fifth_text.para_5 }}</p>
                  </div>    
        </div>
      </div>
    </div>
  </div>
<!-- stragety end -->      
    <!-- start market -->
      <div class="container" id="market">
    <div class="header">
      <span class="desktop-title">{{ market.title }}</span>
      </div>
      <div class="border">
        
      <span class="mobile-title title">{{ market.title }}</span>
     
        <div v-for="pargraph in market.market" :key="pargraph">
            <p class="text">{{ pargraph.text }}</p>
        </div>
      </div>  
  </div>
  <!-- end market -->
  <!-- start track  -->
    <div class="container" id="track">
      <div class="header">
        <span >{{ track.title }}</span>
      </div>
      <div class="border" >
        <ul>
          <li v-for="li in track.list" :key="li" class="text" >{{ li.text }} </li>
          <p>{{ note }}</p>
        </ul>
        
        <img class="center img-container" src="/src/assets/alf1&2.png"></img>
      </div>
   </div>
   <!-- end track -->
   <!--start team-->
   <div class="container" id="team">
      <div class="header">
        <span>{{ team.title }}</span>
      </div>
      <div class="border">
        <p class="desktop-title">{{ team.text }}</p>
        <img class="center img" src="/src/assets/team.png"></img>
      </div>
   </div>
   <!-- end team-->
  <!-- start risks -->
   <div id="risks-container" >
      <div class="header">
        <span class="risks-title">{{ risks.title }}</span>
      </div>
      <div class="risks_border" >
        <p class="risks-text">{{ risks.ComponentPublicInstancetext }}</p>
         
        <div class="desktop-risks">
          <!--  סיכונים left-->
            <div class="left_risks">
              <div v-for="(card, index) in risks.left_risks" :key="index" class="card">   
                <div class="flex">
                  <h1 class="number">{{ card.number }}</h1>
                  <div>
                  <div class=" title">{{ card.title }}</div>
                  <div v-html="card.pargraph" class="text"></div> 
                  <div class="text" v-html="card.extra_pargraph"></div>
                  </div>
                  </div>
                </div>
            </div>
             <!--  סיכונים right-->
               <div class="right_risks">
                  <div v-for="(card, index) in risks.right_risks" :key="index" class=" card">   
                    <div class="flex">
                      <h1 class="number">{{ card.number }}</h1>
                      <div>
                      <div class=" title">{{ card.title }}</div>
                      <div v-html="card.pargraph" class="text"></div> 
                      <div class="text" v-html="card.extra_pargraph"></div>
                      </div>
                      </div>
                  </div>
             </div>
            </div>
            <div class="mobile-risks">
                  <div v-for="(card, index) in risks.mobile_risks" :key="index" class="mobile-card card">   
                    <div class="mobile-flex">
                      <h1 class="mobile-number">{{ card.number }}</h1>
                      <div>
                      <div class="mobile-title">{{ card.title }}</div>
                      <div v-html="card.pargraph" class="mobile-text"></div> 
                      <div class="mobile-text" v-html="card.extra_pargraph"></div>
                      </div>
                      </div>
                  </div>
             </div>
            <div class="border">
              <p class="">{{risks.note}}</p>
            </div>
      </div>
   </div>
  <!-- end risks -->
   <!-- start investor-->
   <div class="investor-container">
    <div class="header">
      <span class="text">{{ investor.title }} </span>
    </div>
    <div class="border">
        <p class="text desktop-title" dir="rtl"><strong>{{ investor.paragraph }}</strong></p>
        <img src="/src/assets/companies.png" class="img"></img>
    </div>
   </div>
   <!-- תנאי קרן טבלה -->
     <div id="investment-container">
          <div class="header">
            <span class="text desktop-title">{{ investor.table_title }} </span>
        </div>
        <div class="desktop-border investment">
            <div class="investment-table">
              <div  v-for="(row, index) in investor.rows" :key="index" class="table-row">
                <div class="table-cell title">{{ row.title }}</div>
                <div class="table-cell value">
                  <div v-html="row.value"></div>
                </div>
              </div>
            </div>
        </div>
    </div>
  <!-- end investor -->

    <!-- start docs -->
     <div class="container" >
      <div class="border">
        <Product_doc>  
          <div class="documents-frame">
            <div class="saved-docs">
          <span class="title">{{ download.saved_text }}</span>
        </div>  
           <div class="download">
          <a class="desktop-title" href="https://morth.nic.in/sites/default/files/dd12-13_0.pdf" download>{{ download.download_text }}</a>
          <span class="mobile-title mobile-download">{{ download.mobile_download }}</span>
          <div class="arrow" v-html="download.arrow">
          </div>
        </div> 
    </div>
          <!-- list -->
            <div class="document-container" v-for="(doc, index) in download.docs" :key="index">
            <div class="document-background"  @click="doc.open = !doc.open">
              <div class="date-section">
                <div class="chevron date-chevron" ><svg :class="{ open: doc.open }" viewBox="0 0 31 32" class="date-chevron-svg" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M19.375 8.9398C18.8713 8.4198 18.0575 8.4198 17.5538 8.9398L11.625 15.0598C11.1213 15.5798 11.1213 16.4198 11.625 16.9398L17.5538 23.0598C18.0575 23.5798 18.8713 23.5798 19.375 23.0598C19.8788 22.5398 19.8788 21.6998 19.375 21.1798L14.3633 15.9931L19.375 10.8198C19.8788 10.2998 19.8658 9.44647 19.375 8.9398Z" fill="black"/></svg></div>
                <div class="date">{{ doc.date }}</div>
              </div>
              <div class="logo-section">
                <div class="logo-icon">
                  <svg class="logo-icon-svg" viewBox="0 0 50 49" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="24.6958" cy="24.377" r="24.377" fill="#D9D9D9"/><path d="M9.00073 26.3146L25.7599 31.94L39.4719 24.627" stroke="black" stroke-width="2"/><path d="M9.00073 31.799L26.1445 37.4244L40.6908 30.1113" stroke="black" stroke-width="2"/><path d="M22.9181 10C22.9181 10 24.7305 10.5565 28.3553 11.6319C31.9801 12.7073 37.4173 14.0609 37.4173 14.0609C37.4173 14.0609 40.438 18.8738 35.0008 21.5059C29.5636 24.1379 25.9387 25.845 25.9387 25.845L11.4395 21.5059C13.4137 20.829 18.5943 19.0693 21.1056 17.445C23.617 15.8206 23.3603 11.4464 22.9181 10Z" stroke="black" stroke-width="2"/></svg>
                </div>
                <div class="logo-text">
                  <div class=" doc-title">{{doc.title}}</div>
                  <div class="doc-subtitle">{{doc.subtitle}}</div>
                </div>
              </div>
               
            </div>
             <div class="state-border" v-if="doc.open">
                    <p class="state-title">{{ statement.title }}</p>
                    <div v-for="(pargraph, index) in statement.pargraphs" :key="index" class="paragraph">
                    <p class="p-text" v-html="pargraph.text"></p>
                    </div>
                  </div>
      </div>
     
      <!-- end list -->
                <div class="button-wrapper">
                    <a class="primary-button" href="https://morth.nic.in/sites/default/files/dd12-13_0.pdf" target="_blank" >
                <div class="icon-circle">
                <svg class="icon" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12.6221 3.00488C11.1051 3.00488 9.87109 4.23886 9.87109 5.75586V17.7539C9.87109 19.2709 11.1051 20.5049 12.6221 20.5049H20.127C21.6305 20.5049 23.3779 19.3034 23.3779 17.7539V10.499H19.126C17.609 10.499 16.375 9.26407 16.375 7.74707V3.00488H12.6221ZM17.875 3.44922V7.74707C17.875 8.43707 18.4365 8.99902 19.126 8.99902H23.1816C23.1766 8.99352 23.1754 8.98597 23.1699 8.98047L20.3818 6.07031L17.875 3.44922ZM8.625 4.00879C7.1085 4.00879 5.875 5.24279 5.875 6.75879V16.75C5.875 18.266 7.1085 19.5 8.625 19.5H9.50586C9.16236 19.0845 8.9392 18.5665 8.8877 18H8.625C7.936 18 7.375 17.4395 7.375 16.75V6.75879C7.375 6.06929 7.936 5.50879 8.625 5.50879H8.8877C8.9392 4.94229 9.16186 4.42429 9.50586 4.00879H8.625ZM4.625 5C3.1085 5 1.875 6.234 1.875 7.75V15.75C1.875 17.266 3.1085 18.5 4.625 18.5H5.31055C5.07005 18.047 4.9237 17.5385 4.8877 17H4.625C3.936 17 3.375 16.4395 3.375 15.75V7.75C3.375 7.0605 3.936 6.5 4.625 6.5H4.8877C4.9247 5.961 5.07393 5.453 5.31543 5H4.625Z" fill="#404148"/>
                </svg>
                </div>
                {{ download.button_text }}
              </a>
            </div>   
         </Product_doc>
      </div>
   
    </div>

    <!-- end docs -->
    <!-- meeting -->
    <Meeting link="https://calendly.com" ></Meeting>
    <!-- end meeting -->
    <!-- start card-fund -->
     <div class="card-fund-container">
      <div class="fund-card" v-for="fund in fund_card.funds" :key="fund">
              <div class="fund-header">
                  <div class="fund-header-top">
                      <div class="fund-tone-indicator">
                          <div class="fund-tone-dot"></div>
                          <span>Mr Tone Ox</span>
                      </div>
                      <button class="fund-close-btn"></button>
                  </div>
                  <div class="fund-center-dot"></div>
              </div>
              
              <div class="fund-content">
                  <h2 class="fund-title">{{ fund.title }}</h2>
                  <p class="fund-description" v-html="fund.description"> 
                  </p>
                  <button class="fund-cta-button" href="#">{{ fund_card.read }}</button>
              </div>
          </div>
    </div>
    <!-- end fund-card -->
    </div>
</template>

<script>
import Card from '@/components/card.vue';
import Meeting from '@/components/ishare/meeting.vue';
import Product_doc from '@/components/ishare/product_doc.vue';

export default {
  name: "fund",
  components: {Card,Meeting,Product_doc},
  methods: {
    toggleList() {
      this.isOpen = !this.isOpen
    }
  },
   data() {
    return {  
      eq:{
        title: "תשואת מטרה",eq_title_1:"תקופת נעילה",eq_text_1:" שנים",eq_title_2:"מטבע השקעה",eq_title_3:"מינימום השקעה",add:"הוסף את קרן לרכישה עתידית",
      }, 
        violet:{
            title:"מאפיינים עיקריים",
            pargraphs: [
              {text:"·Viola Credit Alternative Lending Income Fund III (״הקרן״ או ״ALF III״) הינה הקרן השלישית בסדרת קרנות החוב של Viola Credit (״ה-GP״), אשר מציעה למשקיעים הזדמנות ייחודית להיחשף לשוק האשראי הפרטי (Private Debt) הצומח במהירות, תוך התמקדות במימון חברות טכנולוגיה ופינטק מובילות."},
              {text:"כזרוע החוב של קבוצת ויולה, בית ההשקעות הטכנולוגי הגדול בישראל, הקרן מביאה עמה הבנה עמוקה של סקטור הטכנולוגיה, יכולות חיתום מבוססות נתונים, ורשת קשרים גלובלית, המאפשרות איתור וביצוע עסקאות איכותיות בשווקים מפותחים."},
              {text:"הקרן תתמקד במתן אשראי בכיר המגובה בנכסים ובתזרימי מזומנים (Asset Based Lending). אסטרטגיה זו מפחיתה באופן משמעותי את הסיכון הטמון בהלוואה, ומאפשרת לייצר תזרים קופונים שוטף ויציב למשקיעים, עם יעד חלוקה רבעונית נטו של 10%-12% לשנה, ויעד תשואה כוללת של 14%-15% (Net IRR) לפני מס."},
              {text:"בכוונת הקרן לגייס 500 מיליון דולר אשר יושקעו במהלך תקופת השקעות של 3 שנים (במהלכן יקראו לכספי המשקיעים), לאחריה 4 שנות ״הנבה״ והחזרי קרן (סה״כ 7 שנים בתוספת שתי תקופות הארכה בנות שנה כל אחת)."},
              {text:"הקרן תונגש למשקיעים כשירים בישראל באמצעות פידר שינוהל על ידי ״ואליו השקעות מתקדמות״."},], 
        },
         gp:{
            title: `<p> אודות הגוף המנהל (GP)</p>`, text:'Viola הינה קבוצת השקעות ישראלית המתמקדת בהשקעות בחברות טכנולוגיה הגדולה בישראל. הקבוצה הוקמה בשנת 2000 בדגש על השקעות הון-סיכון (vc) בענף הטכנולוגיה ולאורך השנים התרחבה לפעילויות נוספות, כולל פעילות קרנות חוב לא סחיר.',
            cards: [
            { title: "מנהל הקרן (GP)", subtitle: "Viola Credit מקבוצת Viola", icon:`<svg class="gp-icon" viewBox="0 0 41 40" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M20.098 2.49997C19.9103 2.49772 19.7245 2.53777 19.5544 2.61716L7.05437 8.45049C6.90559 8.51995 6.77195 8.61803 6.66108 8.73913C6.55021 8.86024 6.46428 9.002 6.4082 9.15632C6.35212 9.31063 6.32698 9.47449 6.33423 9.63852C6.34147 9.80255 6.38096 9.96355 6.45043 10.1123C6.51989 10.2611 6.61799 10.3947 6.7391 10.5056C6.86022 10.6164 7.00199 10.7024 7.15631 10.7584C7.31063 10.8145 7.47449 10.8396 7.63852 10.8324C7.80255 10.8251 7.96355 10.7856 8.11231 10.7161L8.83334 10.3792V23.3626C7.42167 23.5651 6.33334 24.7833 6.33334 26.25V34.5833C6.33334 35.2733 6.89334 35.8333 7.58334 35.8333H16.75C17.44 35.8333 18 35.2733 18 34.5833V29.1666C18 28.7066 18.3733 28.3333 18.8333 28.3333H22.1667C22.6267 28.3333 23 28.7066 23 29.1666V34.5833C23 35.2733 23.56 35.8333 24.25 35.8333H33.4167C34.1067 35.8333 34.6667 35.2733 34.6667 34.5833V26.25C34.6667 24.7833 33.5783 23.5651 32.1667 23.3626V10.402L32.9154 10.7291C33.0658 10.795 33.2278 10.8305 33.392 10.8338C33.5562 10.837 33.7195 10.8079 33.8724 10.748C34.0254 10.6882 34.165 10.5988 34.2834 10.4849C34.4019 10.3711 34.4967 10.2351 34.5625 10.0846C34.6283 9.93413 34.6639 9.77216 34.6671 9.60795C34.6704 9.44374 34.6412 9.2805 34.5814 9.12755C34.5215 8.9746 34.4321 8.83493 34.3183 8.71653C34.2045 8.59812 34.0684 8.5033 33.918 8.43747L20.5846 2.60413C20.431 2.53715 20.2655 2.50172 20.098 2.49997ZM13.8333 9.99997H15.5C15.96 9.99997 16.3333 10.3733 16.3333 10.8333V12.5C16.3333 12.96 15.96 13.3333 15.5 13.3333H13.8333C13.3733 13.3333 13 12.96 13 12.5V10.8333C13 10.3733 13.3733 9.99997 13.8333 9.99997ZM19.6667 9.99997H21.3333C21.7933 9.99997 22.1667 10.3733 22.1667 10.8333V12.5C22.1667 12.96 21.7933 13.3333 21.3333 13.3333H19.6667C19.2067 13.3333 18.8333 12.96 18.8333 12.5V10.8333C18.8333 10.3733 19.2067 9.99997 19.6667 9.99997ZM25.5 9.99997H27.1667C27.6267 9.99997 28 10.3733 28 10.8333V12.5C28 12.96 27.6267 13.3333 27.1667 13.3333H25.5C25.04 13.3333 24.6667 12.96 24.6667 12.5V10.8333C24.6667 10.3733 25.04 9.99997 25.5 9.99997ZM13.8333 15.8333H15.5C15.96 15.8333 16.3333 16.2066 16.3333 16.6666V18.3333C16.3333 18.7933 15.96 19.1666 15.5 19.1666H13.8333C13.3733 19.1666 13 18.7933 13 18.3333V16.6666C13 16.2066 13.3733 15.8333 13.8333 15.8333ZM19.6667 15.8333H21.3333C21.7933 15.8333 22.1667 16.2066 22.1667 16.6666V18.3333C22.1667 18.7933 21.7933 19.1666 21.3333 19.1666H19.6667C19.2067 19.1666 18.8333 18.7933 18.8333 18.3333V16.6666C18.8333 16.2066 19.2067 15.8333 19.6667 15.8333ZM25.5 15.8333H27.1667C27.6267 15.8333 28 16.2066 28 16.6666V18.3333C28 18.7933 27.6267 19.1666 27.1667 19.1666H25.5C25.04 19.1666 24.6667 18.7933 24.6667 18.3333V16.6666C24.6667 16.2066 25.04 15.8333 25.5 15.8333ZM13.8333 21.6666H15.5C15.96 21.6666 16.3333 22.04 16.3333 22.5V24.1666C16.3333 24.6266 15.96 25 15.5 25H13.8333C13.3733 25 13 24.6266 13 24.1666V22.5C13 22.04 13.3733 21.6666 13.8333 21.6666ZM19.6667 21.6666H21.3333C21.7933 21.6666 22.1667 22.04 22.1667 22.5V24.1666C22.1667 24.6266 21.7933 25 21.3333 25H19.6667C19.2067 25 18.8333 24.6266 18.8333 24.1666V22.5C18.8333 22.04 19.2067 21.6666 19.6667 21.6666ZM25.5 21.6666H27.1667C27.6267 21.6666 28 22.04 28 22.5V24.1666C28 24.6266 27.6267 25 27.1667 25H25.5C25.04 25 24.6667 24.6266 24.6667 24.1666V22.5C24.6667 22.04 25.04 21.6666 25.5 21.6666ZM11.3333 28.3333H13C13.46 28.3333 13.8333 28.7066 13.8333 29.1666V30.8333C13.8333 31.2933 13.46 31.6666 13 31.6666H11.3333C10.8733 31.6666 10.5 31.2933 10.5 30.8333V29.1666C10.5 28.7066 10.8733 28.3333 11.3333 28.3333ZM28 28.3333H29.6667C30.1267 28.3333 30.5 28.7066 30.5 29.1666V30.8333C30.5 31.2933 30.1267 31.6666 29.6667 31.6666H28C27.54 31.6666 27.1667 31.2933 27.1667 30.8333V29.1666C27.1667 28.7066 27.54 28.3333 28 28.3333Z" fill="black"/></svg>` },
            { title: "שנת הקמה של מנהל הקרן",extra_subtitle:"2000", subtitle:" (כ-25 שנות פעילות)" , icon:`<svg fill="#000000" version="1.1" class="gp-icon" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="64px" height="64px" viewBox="0 0 453.405 453.405" xml:space="preserve"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <g> <path d="M382.08,60.394c-26.324-4.534-53.444-0.845-79.764,1.751c-26.223,2.587-53.604,5.753-79.585-0.397 c-30.592-7.241-49.945-27.294-64.216-54.464c-3.935,10.646-7.869,21.291-11.803,31.938 c-25.74,69.646-51.479,139.292-77.218,208.938L0,436.203l26.838,9.919l62.541-169.227c11.607,12.383,25.937,21.375,44.333,25.729 c25.979,6.146,53.363,2.986,79.584,0.398c26.318-2.601,53.441-6.287,79.765-1.752c33.826,5.826,55.682,26.086,71.323,55.871 c29.677-80.291,59.348-160.583,89.021-240.876C437.761,86.479,415.911,66.222,382.08,60.394z M385.379,203.349 c-13.234-11.169-27.441-18.638-44.57-21.931c-5.715,15.458-11.428,30.916-17.141,46.374c17.131,3.295,31.335,10.764,44.572,21.932 c-5.239,14.176-10.479,28.353-15.717,42.526c-13.234-11.168-27.443-18.642-44.573-21.93c5.239-14.177,10.479-28.353,15.718-42.528 c-17.442-2.813-34.473-2.797-52.072-1.72c-5.238,14.176-10.479,28.353-15.717,42.528c-18.21,1.471-36.358,3.56-54.567,5.028 c5.238-14.178,10.478-28.353,15.716-42.526c-17.599,1.078-34.631,1.096-52.073-1.719c-5.239,14.176-10.478,28.352-15.717,42.526 c-17.128-3.29-31.341-10.763-44.572-21.933c5.238-14.174,10.478-28.351,15.716-42.525c13.236,11.17,27.442,18.64,44.573,21.932 c5.712-15.458,11.427-30.918,17.139-46.376c-17.13-3.285-31.338-10.766-44.573-21.93c5.714-15.46,11.427-30.92,17.14-46.378 c13.236,11.173,27.442,18.635,44.572,21.933c5.239-14.176,10.478-28.351,15.717-42.525c17.442,2.813,34.476,2.797,52.073,1.717 c-5.238,14.175-10.478,28.351-15.717,42.526c18.209-1.471,36.357-3.558,54.567-5.028c5.238-14.175,10.479-28.351,15.717-42.527 c17.601-1.078,34.629-1.095,52.072,1.719c-5.239,14.176-10.478,28.351-15.717,42.528c17.131,3.294,31.335,10.761,44.573,21.93 C396.806,172.431,391.095,187.891,385.379,203.349z"></path> <path d="M234.167,184.726c-5.713,15.459-11.426,30.917-17.14,46.376c18.21-1.472,36.359-3.56,54.568-5.03 c5.713-15.457,11.426-30.916,17.139-46.374C270.523,181.169,252.376,183.257,234.167,184.726z"></path> <path d="M234.167,184.726c5.714-15.458,11.427-30.918,17.14-46.375c-17.604,1.075-34.629,1.093-52.075-1.718 c-5.713,15.458-11.426,30.917-17.139,46.375C199.536,185.824,216.566,185.807,234.167,184.726z"></path> <path d="M305.873,133.323c-5.713,15.458-11.426,30.916-17.139,46.375c17.601-1.075,34.629-1.093,52.073,1.72 c5.712-15.458,11.426-30.917,17.138-46.375C340.503,132.229,323.474,132.243,305.873,133.323z"></path> </g> </g> </g></svg>`},
            { title: "היקף נכסים מנוהלים (AUM) ", subtitle: "כ-6 מיליארד דולר", icon:`<svg class="gp-icon" viewBox="0 0 25 20" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_1_399)"><path d="M12.5 6.34998C9.61 6.34998 7.25 8.70998 7.25 11.6C7.25 14.49 9.61 16.85 12.5 16.85C15.39 16.85 17.75 14.49 17.75 11.6C17.75 8.70998 15.39 6.34998 12.5 6.34998ZM16.17 10.85H14.91C14.86 9.99998 14.72 9.15998 14.49 8.43998C15.34 8.97998 15.96 9.83998 16.17 10.85ZM12.53 15.35C12.53 15.35 12.52 15.35 12.51 15.35C12.26 15.24 11.7 14.23 11.58 12.35H13.4C13.28 14.22 12.73 15.23 12.52 15.35H12.53ZM11.59 10.85C11.71 8.97998 12.26 7.96998 12.47 7.84998C12.47 7.84998 12.48 7.84998 12.49 7.84998C12.74 7.95998 13.3 8.96998 13.42 10.85H11.6H11.59ZM10.51 8.43998C10.28 9.15998 10.14 9.99998 10.09 10.85H8.83C9.04 9.82998 9.66 8.96998 10.51 8.43998ZM8.83 12.35H10.09C10.14 13.2 10.28 14.04 10.51 14.76C9.66 14.22 9.04 13.36 8.83 12.35ZM14.49 14.76C14.72 14.04 14.86 13.2 14.91 12.35H16.17C15.96 13.37 15.34 14.23 14.49 14.76Z" fill="black"/><path d="M21.5 3.34998H17.25V2.09998C17.25 1.13998 16.46 0.349976 15.5 0.349976H9.5C8.54 0.349976 7.75 1.13998 7.75 2.09998V3.34998H3.5C1.98 3.34998 0.75 4.57998 0.75 6.09998V17.1C0.75 18.62 1.98 19.85 3.5 19.85H21.5C23.02 19.85 24.25 18.62 24.25 17.1V6.09998C24.25 4.57998 23.02 3.34998 21.5 3.34998ZM18.73 18.35H6.27C6.22 17.31 5.8 16.32 5.04 15.56C4.28 14.8 3.29 14.38 2.25 14.33V8.86998C3.29 8.81998 4.28 8.40998 5.04 7.64998C5.8 6.88998 6.23 5.89998 6.27 4.85998H18.72C18.77 5.89998 19.19 6.88998 19.95 7.64998C20.71 8.40998 21.7 8.82998 22.74 8.86998V14.33C21.7 14.38 20.71 14.8 19.95 15.56C19.19 16.32 18.76 17.31 18.72 18.35H18.73ZM9.25 2.09998C9.25 1.95998 9.36 1.84998 9.5 1.84998H15.5C15.64 1.84998 15.75 1.95998 15.75 2.09998V3.34998H9.25V2.09998Z" fill="black"/></g><defs><clipPath id="clip0_1_399"><rect width="23.5" height="19.5" fill="white" transform="translate(0.75 0.349976)"/></clipPath></defs></svg>` },
            { title: "צוות השקעות", subtitle: "מעל ל-30 אנשי השקעות, ניהול סיכונים ותפעול", icon:`<svg class="gp-icon" viewBox="0 0 31 31" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M25.5 5.491C24.7043 5.491 23.9413 5.80707 23.3787 6.36968C22.8161 6.93229 22.5 7.69535 22.5 8.491C22.5 9.28665 22.8161 10.0497 23.3787 10.6123C23.9413 11.1749 24.7043 11.491 25.5 11.491C26.2956 11.491 27.0587 11.1749 27.6213 10.6123C28.1839 10.0497 28.5 9.28665 28.5 8.491C28.5 7.69535 28.1839 6.93229 27.6213 6.36968C27.0587 5.80707 26.2956 5.491 25.5 5.491ZM29.502 16.501V20.511C29.502 21.061 29.052 21.511 28.502 21.511V26.471C28.502 27.041 28.042 27.501 27.472 27.501C26.922 27.501 26.472 27.081 26.432 26.531L26.002 20.971C25.982 20.701 25.762 20.501 25.502 20.501C25.242 20.501 25.022 20.701 25.002 20.961L24.562 26.531C24.532 27.081 24.082 27.501 23.532 27.501C22.962 27.501 22.502 27.041 22.502 26.471V21.511C22.492 21.511 22.492 21.511 22.482 21.511C21.932 21.501 21.492 21.051 21.502 20.501V16.501C21.502 14.851 22.852 13.501 24.502 13.501H24.772L24.362 15.591C24.342 15.671 24.362 15.751 24.412 15.821L25.272 16.961C25.362 17.091 25.542 17.121 25.672 17.021C25.692 17.011 25.712 16.991 25.732 16.961L26.592 15.821C26.642 15.751 26.662 15.671 26.642 15.591L26.222 13.501H26.502C28.142 13.501 29.502 14.851 29.502 16.501ZM15.5 3.5C14.7043 3.5 13.9413 3.81607 13.3787 4.37868C12.8161 4.94129 12.5 5.70435 12.5 6.5C12.5 7.29565 12.8161 8.05871 13.3787 8.62132C13.9413 9.18393 14.7043 9.5 15.5 9.5C16.2956 9.5 17.0587 9.18393 17.6213 8.62132C18.1839 8.05871 18.5 7.29565 18.5 6.5C18.5 5.70435 18.1839 4.94129 17.6213 4.37868C17.0587 3.81607 16.2956 3.5 15.5 3.5ZM19.502 14.501V19.511C19.502 20.061 19.052 20.511 18.502 20.511V26.471C18.502 27.041 18.042 27.501 17.472 27.501C16.922 27.501 16.472 27.081 16.432 26.531L16.002 19.971C15.982 19.701 15.762 19.501 15.502 19.501C15.242 19.501 15.022 19.701 15.002 19.961L14.562 26.531C14.532 27.081 14.082 27.501 13.532 27.501C12.962 27.501 12.502 27.041 12.502 26.471V20.511C12.492 20.511 12.492 20.511 12.482 20.511C11.932 20.501 11.492 20.051 11.502 19.501V14.501C11.502 12.851 12.852 11.501 14.502 11.501H14.972C14.962 11.521 14.942 11.541 14.932 11.571L14.362 14.441C14.342 14.521 14.362 14.601 14.412 14.671L15.272 15.821C15.362 15.941 15.542 15.971 15.672 15.871C15.692 15.861 15.712 15.841 15.732 15.821L16.592 14.671C16.642 14.601 16.662 14.521 16.642 14.441L16.072 11.571C16.062 11.541 16.042 11.521 16.022 11.501H16.502C18.142 11.501 19.502 12.851 19.502 14.501ZM5.5 5.491C4.70435 5.491 3.94129 5.80707 3.37868 6.36968C2.81607 6.93229 2.5 7.69535 2.5 8.491C2.5 9.28665 2.81607 10.0497 3.37868 10.6123C3.94129 11.1749 4.70435 11.491 5.5 11.491C6.29565 11.491 7.05871 11.1749 7.62132 10.6123C8.18393 10.0497 8.5 9.28665 8.5 8.491C8.5 7.69535 8.18393 6.93229 7.62132 6.36968C7.05871 5.80707 6.29565 5.491 5.5 5.491ZM9.502 16.501V20.511C9.502 21.061 9.052 21.511 8.502 21.511V26.471C8.502 27.041 8.042 27.501 7.472 27.501C6.922 27.501 6.472 27.081 6.432 26.531L6.002 20.971C5.982 20.701 5.762 20.501 5.502 20.501C5.242 20.501 5.022 20.701 5.002 20.961L4.562 26.531C4.532 27.081 4.082 27.501 3.532 27.501C2.962 27.501 2.502 27.041 2.502 26.471V21.511C2.492 21.511 2.492 21.511 2.482 21.511C1.932 21.501 1.492 21.051 1.502 20.501V16.501C1.502 14.851 2.852 13.501 4.502 13.501H4.772L4.362 15.591C4.342 15.671 4.362 15.751 4.412 15.821L5.272 16.961C5.362 17.091 5.542 17.121 5.672 17.021C5.692 17.011 5.712 16.991 5.732 16.961L6.592 15.821C6.642 15.751 6.662 15.671 6.642 15.591L6.222 13.501H6.502C8.142 13.501 9.502 14.851 9.502 16.501Z" fill="black"/></svg>` },
            { title: "איזור פעילות גאוגרפי", subtitle: "ישראל, ארה״ב, מערב אירופה, אוסטרליה וניו-זילנד", icon:`<svg class="gp-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M3.07598 7.48282L7.36402 10.5457C7.58715 10.705 7.69872 10.7847 7.81548 10.8031C7.91821 10.8192 8.02343 10.8029 8.11648 10.7565C8.22223 10.7037 8.30449 10.594 8.46901 10.3747L9.37511 9.16652C9.42164 9.10448 9.4449 9.07347 9.47224 9.04671C9.49652 9.02295 9.52315 9.00173 9.55173 8.98338C9.58392 8.9627 9.61935 8.94696 9.6902 8.91546L13.5588 7.19609C13.7192 7.12482 13.7993 7.08918 13.8598 7.03352C13.9133 6.9843 13.9554 6.924 13.9832 6.85684C14.0146 6.78091 14.0204 6.69336 14.0321 6.51826L14.3154 2.2694M13.5 13.5L16.116 14.6211C16.4195 14.7512 16.5713 14.8163 16.6517 14.9243C16.7222 15.0191 16.7569 15.1358 16.7496 15.2537C16.7413 15.3881 16.6497 15.5255 16.4665 15.8002L15.2375 17.6438C15.1507 17.774 15.1072 17.8391 15.0499 17.8863C14.9991 17.928 14.9406 17.9593 14.8777 17.9784C14.8067 18 14.7284 18 14.5719 18H12.5766C12.3693 18 12.2656 18 12.1774 17.9653C12.0995 17.9347 12.0305 17.885 11.9768 17.8208C11.916 17.7481 11.8832 17.6497 11.8177 17.453L11.1048 15.3144C11.0661 15.1983 11.0468 15.1403 11.0417 15.0814C11.0372 15.0291 11.0409 14.9764 11.0528 14.9253C11.0662 14.8677 11.0935 14.813 11.1482 14.7036L11.6897 13.6206C11.7997 13.4005 11.8547 13.2905 11.9395 13.2222C12.0141 13.162 12.1046 13.1246 12.1999 13.1143C12.3081 13.1027 12.4248 13.1416 12.6582 13.2194L13.5 13.5ZM22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>` },
            { title: "אסטרטגיות השקעה", subtitle: "Venture Capital, Private Debt", icon:`<svg fill="#000000" class="gp-icon" viewBox="0 0 32 32" id="icon" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><defs><style>.cls-1{fill:none;}</style></defs><title>report--alt</title><rect x="10" y="18" width="8" height="2"></rect><rect x="10" y="13" width="12" height="2"></rect><rect x="10" y="23" width="5" height="2"></rect><path d="M25,5H22V4a2,2,0,0,0-2-2H12a2,2,0,0,0-2,2V5H7A2,2,0,0,0,5,7V28a2,2,0,0,0,2,2H25a2,2,0,0,0,2-2V7A2,2,0,0,0,25,5ZM12,4h8V8H12ZM25,28H7V7h3v3H22V7h3Z"></path><rect id="_Transparent_Rectangle_" data-name="&lt;Transparent Rectangle&gt;" class="cls-1" width="32" height="32"></rect></g></svg>` },
            ],  
          },
          about:{
            title: "אודות הקרן",
            about_text:'הקרן תמשיך את אסטרטגיית ההשקעות של הקרנות הקודמות, עם יעד גיוס של 500 מיליון דולר ותשאף להשיג תשואת יעד של 15%-14% (Net IRR) ויעד חלוקות שוטפות על בסיס רבעוני של 12%-10%.',
            keren_cards: [
              {title: "שם הקרן", subtitle: "Viola Credit Alternative Lending Income Fund III", icon: `<span class="icon-wrapper" ><svg  viewBox="0 0 39 41" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_1_1013)"><path d="M7.80772 0.675049C6.20916 0.675049 4.88464 2.06928 4.88464 3.75197V32.9827C4.88464 34.6654 6.20916 36.0597 7.80772 36.0597H10.7308V40.675L15.1154 37.5981L19.5 40.675V29.6654C19.3002 29.7796 19.0833 29.8878 18.8606 29.9539C18.5523 30.657 17.9871 31.2099 17.262 31.4924C16.948 31.6065 16.634 31.6366 16.3029 31.6366C15.8976 31.6366 15.4865 31.5825 15.1154 31.3962C14.7443 31.5765 14.3447 31.6366 13.9279 31.6366C13.5968 31.6366 13.2828 31.6125 12.9688 31.4924C12.2494 31.2159 11.6842 30.657 11.3702 29.9539C11.1476 29.8878 10.9306 29.7796 10.7308 29.6654V32.9827H7.80772V3.75197H31.1923V32.9827H23.8846C23.3594 32.9767 22.8684 33.2652 22.6001 33.746C22.3375 34.2267 22.3375 34.8157 22.6001 35.2964C22.8684 35.7772 23.3594 36.0657 23.8846 36.0597H31.1923C32.7909 36.0597 34.1154 34.6654 34.1154 32.9827V3.75197C34.1154 2.06928 32.7909 0.675049 31.1923 0.675049H7.80772ZM11.9183 8.36736C11.1133 8.44548 10.5196 9.20269 10.5938 10.05C10.668 10.8974 11.3873 11.5224 12.1923 11.4443H26.8077C27.333 11.4503 27.8239 11.1618 28.0923 10.6811C28.3549 10.2003 28.3549 9.61135 28.0923 9.13058C27.8239 8.64981 27.333 8.36135 26.8077 8.36736H12.1923C12.1467 8.36736 12.101 8.36736 12.0553 8.36736C12.0096 8.36736 11.964 8.36736 11.9183 8.36736ZM11.9183 14.5212C11.1133 14.5993 10.5196 15.3565 10.5938 16.2039C10.668 17.0513 11.3873 17.6763 12.1923 17.5981H22.4231C22.9483 17.6041 23.4393 17.3157 23.7077 16.8349C23.9703 16.3541 23.9703 15.7652 23.7077 15.2844C23.4393 14.8037 22.9483 14.5152 22.4231 14.5212H12.1923C12.1467 14.5212 12.101 14.5212 12.0553 14.5212C12.0096 14.5212 11.964 14.5212 11.9183 14.5212ZM15.1154 20.1462C14.516 20.1462 13.9736 20.5549 13.7909 21.1558C13.7338 21.1738 13.6653 21.1799 13.6082 21.2039C13.1001 20.8794 12.4664 20.9455 12.0096 21.3481C11.5586 21.7448 11.3873 22.4058 11.5986 22.9827C11.5586 23.0428 11.5415 23.1089 11.5072 23.175C10.9249 23.2712 10.4682 23.764 10.3654 24.377C10.2626 24.9839 10.5481 25.5669 11.0505 25.8674C11.0619 25.9635 11.0334 26.0597 11.0505 26.1558C10.6965 26.6246 10.628 27.2676 10.9135 27.7904C11.1989 28.3073 11.7642 28.5957 12.3294 28.5116C12.4036 28.5837 12.4778 28.6378 12.5577 28.7039C12.5748 29.2988 12.9345 29.8397 13.4712 30.05C14.0021 30.2544 14.6073 30.0561 14.9784 29.6174C15.0298 29.6234 15.0583 29.6654 15.1154 29.6654C15.1725 29.6654 15.241 29.6174 15.2981 29.6174C15.5607 29.9238 15.9204 30.0981 16.3029 30.0981C16.4628 30.0981 16.6055 30.1101 16.7596 30.05C17.2963 29.8397 17.6617 29.3049 17.6731 28.7039C17.753 28.6378 17.8273 28.5837 17.9015 28.5116C18.461 28.6017 19.0319 28.3133 19.3173 27.7904C19.6028 27.2676 19.5343 26.6186 19.1803 26.1558C19.2032 26.0597 19.1689 25.9635 19.1803 25.8674C19.6884 25.5669 19.9682 24.9839 19.8654 24.377C19.7627 23.764 19.3059 23.2712 18.7236 23.175C18.6893 23.1089 18.6722 23.0488 18.6322 22.9827C18.8435 22.4058 18.6722 21.7448 18.2212 21.3481C17.7645 20.9455 17.125 20.8794 16.6226 21.2039C16.5655 21.1799 16.497 21.1738 16.4399 21.1558C16.2572 20.5549 15.7149 20.1462 15.1154 20.1462ZM15.1154 22.8385C16.4114 22.8385 17.4447 23.9263 17.4447 25.2904C17.4447 26.6546 16.4114 27.7424 15.1154 27.7424C13.8194 27.7424 12.7861 26.6546 12.7861 25.2904C12.7861 23.9263 13.8194 22.8385 15.1154 22.8385Z" fill="black"/></g><defs><clipPath id="clip0_1_1013"><rect width="38" height="40" fill="white" transform="translate(0.5 0.675049)"/></clipPath></defs></svg></span>`},
              {title: "מועד הקמת הקרן", subtitle:" אפריל 2024" , icon:`<svg fill="#000000" version="1.1" class="icon-wrapper" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"  viewBox="0 0 453.405 453.405" xml:space="preserve"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <g> <path d="M382.08,60.394c-26.324-4.534-53.444-0.845-79.764,1.751c-26.223,2.587-53.604,5.753-79.585-0.397 c-30.592-7.241-49.945-27.294-64.216-54.464c-3.935,10.646-7.869,21.291-11.803,31.938 c-25.74,69.646-51.479,139.292-77.218,208.938L0,436.203l26.838,9.919l62.541-169.227c11.607,12.383,25.937,21.375,44.333,25.729 c25.979,6.146,53.363,2.986,79.584,0.398c26.318-2.601,53.441-6.287,79.765-1.752c33.826,5.826,55.682,26.086,71.323,55.871 c29.677-80.291,59.348-160.583,89.021-240.876C437.761,86.479,415.911,66.222,382.08,60.394z M385.379,203.349 c-13.234-11.169-27.441-18.638-44.57-21.931c-5.715,15.458-11.428,30.916-17.141,46.374c17.131,3.295,31.335,10.764,44.572,21.932 c-5.239,14.176-10.479,28.353-15.717,42.526c-13.234-11.168-27.443-18.642-44.573-21.93c5.239-14.177,10.479-28.353,15.718-42.528 c-17.442-2.813-34.473-2.797-52.072-1.72c-5.238,14.176-10.479,28.353-15.717,42.528c-18.21,1.471-36.358,3.56-54.567,5.028 c5.238-14.178,10.478-28.353,15.716-42.526c-17.599,1.078-34.631,1.096-52.073-1.719c-5.239,14.176-10.478,28.352-15.717,42.526 c-17.128-3.29-31.341-10.763-44.572-21.933c5.238-14.174,10.478-28.351,15.716-42.525c13.236,11.17,27.442,18.64,44.573,21.932 c5.712-15.458,11.427-30.918,17.139-46.376c-17.13-3.285-31.338-10.766-44.573-21.93c5.714-15.46,11.427-30.92,17.14-46.378 c13.236,11.173,27.442,18.635,44.572,21.933c5.239-14.176,10.478-28.351,15.717-42.525c17.442,2.813,34.476,2.797,52.073,1.717 c-5.238,14.175-10.478,28.351-15.717,42.526c18.209-1.471,36.357-3.558,54.567-5.028c5.238-14.175,10.479-28.351,15.717-42.527 c17.601-1.078,34.629-1.095,52.072,1.719c-5.239,14.176-10.478,28.351-15.717,42.528c17.131,3.294,31.335,10.761,44.573,21.93 C396.806,172.431,391.095,187.891,385.379,203.349z"></path> <path d="M234.167,184.726c-5.713,15.459-11.426,30.917-17.14,46.376c18.21-1.472,36.359-3.56,54.568-5.03 c5.713-15.457,11.426-30.916,17.139-46.374C270.523,181.169,252.376,183.257,234.167,184.726z"></path> <path d="M234.167,184.726c5.714-15.458,11.427-30.918,17.14-46.375c-17.604,1.075-34.629,1.093-52.075-1.718 c-5.713,15.458-11.426,30.917-17.139,46.375C199.536,185.824,216.566,185.807,234.167,184.726z"></path> <path d="M305.873,133.323c-5.713,15.458-11.426,30.916-17.139,46.375c17.601-1.075,34.629-1.093,52.073,1.72 c5.712-15.458,11.426-30.917,17.138-46.375C340.503,132.229,323.474,132.243,305.873,133.323z"></path> </g> </g> </g></svg>`},
              {title: "היקף נכסים מנוהלים (AUM) ", subtitle: "יעד גיוס של 500 מיליון דולר", icon:`<svg  viewBox="0 0 25 20" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_1_399)"><path d="M12.5 6.34998C9.61 6.34998 7.25 8.70998 7.25 11.6C7.25 14.49 9.61 16.85 12.5 16.85C15.39 16.85 17.75 14.49 17.75 11.6C17.75 8.70998 15.39 6.34998 12.5 6.34998ZM16.17 10.85H14.91C14.86 9.99998 14.72 9.15998 14.49 8.43998C15.34 8.97998 15.96 9.83998 16.17 10.85ZM12.53 15.35C12.53 15.35 12.52 15.35 12.51 15.35C12.26 15.24 11.7 14.23 11.58 12.35H13.4C13.28 14.22 12.73 15.23 12.52 15.35H12.53ZM11.59 10.85C11.71 8.97998 12.26 7.96998 12.47 7.84998C12.47 7.84998 12.48 7.84998 12.49 7.84998C12.74 7.95998 13.3 8.96998 13.42 10.85H11.6H11.59ZM10.51 8.43998C10.28 9.15998 10.14 9.99998 10.09 10.85H8.83C9.04 9.82998 9.66 8.96998 10.51 8.43998ZM8.83 12.35H10.09C10.14 13.2 10.28 14.04 10.51 14.76C9.66 14.22 9.04 13.36 8.83 12.35ZM14.49 14.76C14.72 14.04 14.86 13.2 14.91 12.35H16.17C15.96 13.37 15.34 14.23 14.49 14.76Z" fill="black"/><path d="M21.5 3.34998H17.25V2.09998C17.25 1.13998 16.46 0.349976 15.5 0.349976H9.5C8.54 0.349976 7.75 1.13998 7.75 2.09998V3.34998H3.5C1.98 3.34998 0.75 4.57998 0.75 6.09998V17.1C0.75 18.62 1.98 19.85 3.5 19.85H21.5C23.02 19.85 24.25 18.62 24.25 17.1V6.09998C24.25 4.57998 23.02 3.34998 21.5 3.34998ZM18.73 18.35H6.27C6.22 17.31 5.8 16.32 5.04 15.56C4.28 14.8 3.29 14.38 2.25 14.33V8.86998C3.29 8.81998 4.28 8.40998 5.04 7.64998C5.8 6.88998 6.23 5.89998 6.27 4.85998H18.72C18.77 5.89998 19.19 6.88998 19.95 7.64998C20.71 8.40998 21.7 8.82998 22.74 8.86998V14.33C21.7 14.38 20.71 14.8 19.95 15.56C19.19 16.32 18.76 17.31 18.72 18.35H18.73ZM9.25 2.09998C9.25 1.95998 9.36 1.84998 9.5 1.84998H15.5C15.64 1.84998 15.75 1.95998 15.75 2.09998V3.34998H9.25V2.09998Z" fill="black"/></g><defs><clipPath id="clip0_1_399"><rect width="23.5" height="19.5" fill="white" transform="translate(0.75 0.349976)"/></clipPath></defs></svg>` },
              {title:'משך חיי קרן',subtitle:' 7 שנים (+1,+1)',icon:`<span class="icon-wrapper"><svg  viewBox="0 0 47 47" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M34.9776 1.93719C34.5967 1.94327 34.2337 2.10359 33.9684 2.38292C33.703 2.66225 33.5571 3.03777 33.5625 3.42698V4.18048C31.6523 4.73557 30.2084 6.45846 30.2084 8.57143V8.57334C30.2084 11.1263 32.2758 13.2167 34.7754 13.2167H36.183C37.1391 13.2167 37.875 13.9701 37.875 14.9245C37.875 15.8734 37.1475 16.6223 36.1961 16.6304L35.1816 16.6381C35.0523 16.6213 34.9213 16.6226 34.7923 16.6419L34.3056 16.6457C33.6828 16.6457 33.1844 16.2365 33.016 15.6933C32.9622 15.5055 32.8723 15.3306 32.7514 15.1789C32.6306 15.0271 32.4813 14.9015 32.3123 14.8095C32.1433 14.7175 31.958 14.6609 31.7673 14.643C31.5766 14.6252 31.3844 14.6464 31.2018 14.7055C31.0193 14.7646 30.8501 14.8604 30.7043 14.9872C30.5585 15.1141 30.439 15.2694 30.3527 15.4441C30.2664 15.6187 30.2152 15.8093 30.202 16.0044C30.1888 16.1996 30.2138 16.3956 30.2758 16.5807C30.7382 18.072 32.047 19.0311 33.5625 19.3327V20.0728C33.5598 20.2674 33.595 20.4607 33.6661 20.6413C33.7371 20.8219 33.8426 20.9863 33.9763 21.1249C34.1101 21.2635 34.2694 21.3735 34.4452 21.4487C34.6209 21.5238 34.8095 21.5625 35 21.5625C35.1905 21.5625 35.3792 21.5238 35.5549 21.4487C35.7306 21.3735 35.89 21.2635 36.0238 21.1249C36.1575 20.9863 36.263 20.8219 36.334 20.6413C36.405 20.4607 36.4402 20.2674 36.4375 20.0728V19.522C38.818 19.3794 40.75 17.385 40.75 14.9245C40.75 12.3716 38.6826 10.2792 36.183 10.2792H34.7754C33.8193 10.2792 33.0834 9.52773 33.0834 8.57334V8.57143C33.0834 7.62676 33.8043 6.87963 34.7511 6.86554L34.8409 6.86362C34.9604 6.87771 35.0812 6.87643 35.2003 6.8598L35.6888 6.85215C36.3151 6.85215 36.8153 7.26836 36.9803 7.81602C37.0339 8.00275 37.1232 8.17675 37.2432 8.32791C37.3631 8.47907 37.5112 8.60438 37.6789 8.69656C37.8466 8.78875 38.0306 8.84596 38.2201 8.86489C38.4097 8.88381 38.601 8.86407 38.783 8.80681C38.965 8.74955 39.1341 8.65592 39.2804 8.53134C39.4267 8.40676 39.5473 8.25372 39.6352 8.08111C39.7232 7.90851 39.7766 7.71977 39.7926 7.52587C39.8085 7.33197 39.7866 7.13677 39.7281 6.9516C39.2744 5.44635 37.9613 4.4749 36.4375 4.169V3.42698C36.4403 3.23039 36.4044 3.03525 36.332 2.8531C36.2596 2.67095 36.1521 2.50551 36.016 2.36658C35.8798 2.22765 35.7178 2.11805 35.5394 2.0443C35.361 1.97054 35.17 1.93412 34.9776 1.93719ZM15.2999 3.92039C14.6152 3.9474 13.9121 4.05394 13.1998 4.24359C8.7867 5.42055 4.33337 9.89395 4.33337 17.2348C4.33337 17.7802 4.6302 18.2806 5.10266 18.5352C5.5732 18.7878 6.14425 18.7538 6.58508 18.4453C8.05037 17.4162 9.97111 18.0649 12.0057 18.7513C13.2735 19.1782 14.4688 19.5832 15.6294 19.5832C18.1871 19.5832 20.579 18.366 22.0663 16.4067C22.2503 16.1648 22.3882 15.9597 22.508 15.7737C22.3892 14.1443 21.9347 13.0908 21.3213 12.425C21.1785 12.284 21.031 12.1486 20.8796 12.0291C20.3228 11.6188 19.6877 11.4374 19.0715 11.3904C17.2995 11.3169 15.2703 12.3292 14.7384 13.232C14.4662 13.6962 13.8796 13.8467 13.4244 13.5686C12.9702 13.2905 12.8228 12.6883 13.095 12.2242C14.0055 10.6745 16.6759 9.36818 19.1108 9.44732C20.0358 9.51685 21.2773 9.82806 22.289 10.677C23.4484 11.6499 24.4584 13.3002 24.4584 16.6457C24.4584 20.1673 23.088 22.696 22.6241 23.4999H10.5625C10.3721 23.4971 10.1829 23.5331 10.0062 23.6057C9.8294 23.6783 9.66851 23.786 9.53286 23.9227C9.3972 24.0593 9.28948 24.2222 9.21595 24.4017C9.14243 24.5813 9.10457 24.774 9.10457 24.9686C9.10457 25.1633 9.14243 25.356 9.21595 25.5356C9.28948 25.7151 9.3972 25.878 9.53286 26.0146C9.66851 26.1513 9.8294 26.259 10.0062 26.3316C10.1829 26.4042 10.3721 26.4401 10.5625 26.4374H23.2736C23.415 26.4591 23.5589 26.4591 23.7003 26.4374H36.4375C36.628 26.4401 36.8172 26.4042 36.9939 26.3316C37.1707 26.259 37.3316 26.1513 37.4672 26.0146C37.6029 25.878 37.7106 25.7151 37.7841 25.5356C37.8577 25.356 37.8955 25.1633 37.8955 24.9686C37.8955 24.774 37.8577 24.5813 37.7841 24.4017C37.7106 24.2222 37.6029 24.0593 37.4672 23.9227C37.3316 23.786 37.1707 23.6783 36.9939 23.6057C36.8172 23.5331 36.628 23.4971 36.4375 23.4999H25.8416C26.575 21.8448 27.3334 19.5704 27.3334 16.6457C27.3334 12.6475 25.9475 9.94711 24.1121 8.40696C23.3899 7.80097 22.6274 7.37737 21.8772 7.08164C20.4227 4.95234 18.0116 3.81341 15.2999 3.92039ZM11.4048 28.3957L12.5878 39.2717C12.8868 42.0026 15.1377 44.0624 17.8268 44.0624H29.1733C31.8624 44.0624 34.1133 42.0036 34.4123 39.2717L35.5953 28.3957H11.4048Z" fill="black"/></svg></span>`},
              {title:"קריאות לכסף", subtitle:"לאורך תקופת ההשקעות של הקרן (3 שנים)", icon:`<span  class="icon-wrapper"><svg viewBox="0 0 39 39" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_1_1029)"><path d="M19.4062 0.825195L17.7188 0.918945H17.5781L17.3438 0.96582L17.8125 3.91895H17.8594L19.5938 3.8252L19.4062 0.825195ZM14.25 1.5752L14.2031 1.62207H14.1562L14.0625 1.66895L12.5625 2.18457L12.4688 2.23145L12.4219 2.27832L11.2031 2.84082L12.5156 5.55957L13.5938 4.99707V5.04395L14.9531 4.52832L15.0938 4.48145L14.7656 3.6377L14.25 1.5752ZM8.4375 4.62207L8.10938 4.85645L8.01562 4.90332L7.96875 4.9502L6.79687 6.02832L6.70312 6.12207L6.04687 6.87207L8.29688 8.8877L8.8125 8.23145L8.90625 8.1377L9.89062 7.29395L9.98438 7.2002L10.2656 7.0127L8.4375 4.62207ZM28.5 5.3252L30 15.8252L33.0938 12.7314C33.9434 14.5889 34.5 16.6045 34.5 18.8252C34.5 27.1748 27.8496 33.8252 19.5 33.8252C11.1855 33.8252 4.55273 27.2217 4.5 18.9189V18.8721C4.5 18.8545 4.5 18.8428 4.5 18.8252C4.5 18.7783 4.5 18.7314 4.5 18.6846L4.59375 17.1846L4.78125 16.0596L1.78125 15.6377L1.59375 16.9033V17.0439L1.5 18.5439C1.49414 18.6084 1.49414 18.667 1.5 18.7314C1.5 18.7607 1.5 18.7959 1.5 18.8252C1.5 28.7803 9.54492 36.8252 19.5 36.8252C29.4551 36.8252 37.5 28.7803 37.5 18.8252C37.5 15.7139 36.6855 12.9014 35.3906 10.4346L39 6.8252L28.5 5.3252ZM18.4688 7.85645V10.4346C15.7676 10.8857 14.1094 12.8252 14.1094 15.0752C14.1094 17.4775 15.9023 18.8076 18.75 19.8564C20.8477 20.6064 21.75 21.374 21.75 22.5752C21.75 23.7764 20.6895 24.6846 18.8906 24.6846C17.2383 24.6846 15.7676 24.0635 14.7188 23.4658L13.9688 26.0439C14.8711 26.6416 16.6289 27.2158 18.2812 27.2158V30.2158H20.7188V27.3564C23.5664 26.9053 25.2188 24.8252 25.2188 22.5752C25.2188 20.1729 23.8594 18.8076 20.8594 17.6064C18.457 16.7041 17.5312 15.9834 17.5312 14.9346C17.5312 13.8857 18.1582 12.9658 20.1094 12.9658C21.9082 12.9658 23.1211 13.5576 23.7188 13.8564L24.4688 11.3252C23.5664 10.874 22.3711 10.4346 20.7188 10.4346V7.85645H18.4688ZM4.125 9.49707L3.70312 10.1533L3.65625 10.2471L3.60937 10.2939L2.95312 11.7471L2.90625 11.7939L2.85937 11.8877L2.67187 12.4502L5.48437 13.4814L5.71875 12.9189H5.67187L6.32812 11.6064L6.65625 11.0439L4.125 9.49707Z" fill="black"/></g><defs><clipPath id="clip0_1_1029"><rect width="39" height="39" fill="white"/></clipPath></defs></svg></span>`},
              {title:"מנגנון נזילות", subtitle:"אין. קרן סגורה.", icon:`<svg fill="#000000" version="1.1" class="icon-wrapper" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"viewBox="0 0 473.068 473.068" xml:space="preserve"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <g id="Layer_2_32_"> <g> <path d="M355.498,181.955c8.8-6.139,29.396-20.519,29.396-55.351v-71.77h9.819c4.492,0,8.171-3.679,8.171-8.169v-38.5 c0-4.49-3.679-8.165-8.171-8.165H78.348c-4.494,0-8.164,3.675-8.164,8.165v38.5c0,4.491,3.67,8.169,8.164,8.169h9.822v73.071 c0,34.499,10.506,42.576,29.068,53.89l80.75,49.203v20.984c-20.336,12.23-73.464,44.242-80.429,49.107 c-8.792,6.135-29.388,20.51-29.388,55.352v61.793h-9.822c-4.494,0-8.164,3.676-8.164,8.166v38.498c0,4.49,3.67,8.17,8.164,8.17 h316.365c4.492,0,8.171-3.68,8.171-8.17V426.4c0-4.49-3.679-8.166-8.171-8.166h-9.819v-63.104 c0-34.493-10.506-42.572-29.073-53.885l-80.741-49.202v-20.987C295.41,218.831,348.541,186.822,355.498,181.955z M252.725,272.859l87.797,53.5c6.749,4.109,10.342,6.373,12.001,9.002c1.996,3.164,2.962,9.627,2.962,19.768v63.104H117.571 v-61.793c0-19.507,9.719-26.289,16.816-31.242c5.545-3.865,54.391-33.389,85.873-52.289c4.422-2.658,7.13-7.441,7.13-12.611 v-37.563c0-5.123-2.667-9.883-7.053-12.55l-87.806-53.504c-6.736-4.105-10.328-6.369-11.991-9.009 c-2-3.156-2.971-9.626-2.971-19.767V54.835h237.915v71.77c0,19.5-9.719,26.288-16.812,31.235 c-5.545,3.872-54.387,33.395-85.873,52.295c-4.426,2.658-7.135,7.442-7.135,12.601v37.563 C245.666,265.431,248.345,270.188,252.725,272.859z"></path> <path d="M131.553,359.607c-2,1.494-3.099,2.502-3.099,6.07c0,3.574,0,38.018,0,38.018s-0.394,3.707,3.781,3.707 c2.026,0,52.428,0.055,103.912,0.111c51.482-0.057,101.888-0.111,103.907-0.111c4.171,0,3.777-3.707,3.777-3.707 s0-34.442,0-38.018c0-3.568-1.102-4.576-3.094-6.07c-14.13-10.562-76.944-60.125-104.591-60.125 C208.491,299.48,145.674,349.046,131.553,359.607z"></path> </g> </g> </g> </g></svg>`},
              {title:"GP Commitment", subtitle:"כ-1% (~5 מיליון דולר)", icon:`<svg class="icon-wrapper" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill-rule="evenodd" clip-rule="evenodd" d="M13 3.5C13 2.94772 12.5523 2.5 12 2.5C11.4477 2.5 11 2.94772 11 3.5V4.0592C9.82995 4.19942 8.75336 4.58509 7.89614 5.1772C6.79552 5.93745 6 7.09027 6 8.5C6 9.77399 6.49167 10.9571 7.5778 11.7926C8.43438 12.4515 9.58764 12.8385 11 12.959V17.9219C10.2161 17.7963 9.54046 17.5279 9.03281 17.1772C8.32378 16.6874 8 16.0903 8 15.5C8 14.9477 7.55228 14.5 7 14.5C6.44772 14.5 6 14.9477 6 15.5C6 16.9097 6.79552 18.0626 7.89614 18.8228C8.75336 19.4149 9.82995 19.8006 11 19.9408V20.5C11 21.0523 11.4477 21.5 12 21.5C12.5523 21.5 13 21.0523 13 20.5V19.9435C14.1622 19.8101 15.2376 19.4425 16.0974 18.8585C17.2122 18.1013 18 16.9436 18 15.5C18 14.1934 17.5144 13.0022 16.4158 12.1712C15.557 11.5216 14.4039 11.1534 13 11.039V6.07813C13.7839 6.20366 14.4596 6.47214 14.9672 6.82279C15.6762 7.31255 16 7.90973 16 8.5C16 9.05228 16.4477 9.5 17 9.5C17.5523 9.5 18 9.05228 18 8.5C18 7.09027 17.2045 5.93745 16.1039 5.17721C15.2467 4.58508 14.1701 4.19941 13 4.0592V3.5ZM11 6.07814C10.2161 6.20367 9.54046 6.47215 9.03281 6.8228C8.32378 7.31255 8 7.90973 8 8.5C8 9.22601 8.25834 9.79286 8.79722 10.2074C9.24297 10.5503 9.94692 10.8384 11 10.9502V6.07814ZM13 13.047V17.9263C13.7911 17.8064 14.4682 17.5474 14.9737 17.204C15.6685 16.7321 16 16.1398 16 15.5C16 14.7232 15.7356 14.1644 15.2093 13.7663C14.7658 13.4309 14.0616 13.1537 13 13.047Z" fill="#000000"></path> </g></svg>`},
              {title:"דמי ניהול", subtitle:"1.5% +  מע״מ", icon:`<span class="icon-wrapper"><svg  viewBox="0 0 37 37" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.5 0.824951L2.71472 12.2052L4.10434 18.8943L9.79312 17.765L8.83776 16.1144H8.70748L7.88239 15.5498V15.2891C7.60555 14.453 6.89445 13.8829 6.0585 14.1598C5.91737 14.1598 5.93908 14.2901 5.79795 14.2901L4.92943 13.5951L3.40953 6.25445L0.5 0.824951ZM2.0199 0.824951L8.70748 12.9002L12.0513 18.8943L24.9487 11.8143L18.9994 0.824951H16.915L20.9101 8.33938L20.6496 9.29498C20.5084 9.29498 20.5302 9.28412 20.389 9.42528C19.6942 9.84335 19.4065 10.6849 19.8245 11.3799C19.8245 11.5211 19.9548 11.5428 19.9548 11.684L19.6942 12.6395L15.5253 14.9851L14.5265 14.7245C14.5265 14.5833 14.5374 14.605 14.3963 14.4639C13.9783 13.6277 13.1369 13.3508 12.4421 13.7689C12.301 13.7689 12.3227 13.8992 12.1815 13.8992L11.1827 13.5951L4.10434 0.824951H2.0199ZM9.79312 0.824951C8.26236 2.07374 7.99638 4.31069 8.96803 6.25445C10.2165 8.48055 12.5832 9.31126 14.5265 8.33938C16.4698 7.3675 17.0344 4.70162 15.7859 2.47552C15.509 1.78054 14.9499 1.24302 14.3963 0.824951H9.79312ZM16.0464 9.29498C15.1996 9.29498 14.5265 9.96823 14.5265 10.8152C14.5265 11.6622 15.1996 12.3789 16.0464 12.3789C16.8932 12.3789 17.6098 11.6622 17.6098 10.8152C17.6098 9.96823 16.8932 9.29498 16.0464 9.29498ZM27.3806 22.1086C26.0669 22.2281 25.1224 22.9339 23.9934 23.6289C23.2986 24.0469 20.7799 25.8441 20.7799 25.8441C20.7799 25.8441 18.2774 27.2341 15.9162 27.2341C12.301 27.2341 11.617 27.3752 11.617 28.624C11.617 29.8728 13.962 30.014 13.962 30.014H19.9548C21.8981 30.014 24.8185 28.8846 24.8185 28.8846C24.8185 28.8846 22.4572 31.4039 19.9548 31.4039H13.962C12.7135 31.4039 10.2274 30.7089 10.2274 28.624C10.2274 25.8441 12.7189 25.8332 15.9162 25.9744C16.193 25.9744 16.3341 25.8441 16.611 25.8441C16.4698 25.7029 16.3613 25.7247 16.2201 25.5835C15.6665 25.1654 14.7979 24.7473 13.962 24.1935C11.7364 22.6624 10.5151 22.4887 9.40229 24.0198C8.56635 23.3248 7.58926 23.0642 6.75332 23.0642C5.78166 23.0642 5.08685 23.7429 5.36369 24.7148C2.86128 23.3248 1.61822 23.8895 1.06454 24.5845C0.369723 25.5563 0.793125 26.5228 2.32388 27.4947C3.29554 28.3308 12.8764 34.6073 14.266 35.4435C15.7967 36.2796 17.1864 37.6696 20.5193 36.1384C21.6321 35.5846 25.9475 33.3585 27.3372 32.6636C28.8679 31.9686 29.3945 32.0989 30.5072 32.7939L32.5917 34.1838L36.5 25.4097C36.5 25.4097 32.19 23.466 30.2467 22.6298C29.1013 22.1629 28.1677 22.038 27.3806 22.1086Z" fill="black"/></svg></span>`},
              {title:"דמי הצלחה", subtitle:"15% מעל 7% Hurdle עם Catch-Up מלא", icon:`<svg class="icon-wrapper" viewBox="0 0 39 40" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_1_1040)"><path d="M23.4961 0.650146C22.1641 0.650146 21.4994 2.25893 22.4414 3.20093L24.5312 5.29077L22 7.82202L17.4141 3.23608C17.039 2.86115 16.5303 2.65053 16 2.65053C15.4697 2.65053 14.961 2.86115 14.5859 3.23608L8.58594 9.23608C8.39399 9.42037 8.24075 9.64111 8.13518 9.88537C8.02961 10.1296 7.97384 10.3925 7.97114 10.6586C7.96843 10.9247 8.01884 11.1886 8.11942 11.4349C8.22 11.6813 8.36872 11.9051 8.55688 12.0933C8.74504 12.2814 8.96884 12.4301 9.2152 12.5307C9.46155 12.6313 9.7255 12.6817 9.99158 12.679C10.2577 12.6763 10.5205 12.6205 10.7648 12.515C11.009 12.4094 11.2298 12.2562 11.4141 12.0642L16 7.47827L20.5859 12.0642C20.961 12.4391 21.4697 12.6498 22 12.6498C22.5303 12.6498 23.039 12.4391 23.4141 12.0642L27.3594 8.1189L29.4453 10.2087C30.3893 11.1527 32 10.4861 32 9.15405V2.66968C32 1.55568 31.0945 0.650146 29.9805 0.650146H23.4961ZM2 16.6501C0.896 16.6501 0 17.5461 0 18.6501V38.6501C0 39.7541 0.896 40.6501 2 40.6501H38C39.104 40.6501 40 39.7541 40 38.6501V18.6501C40 17.5461 39.104 16.6501 38 16.6501H2ZM5.82422 20.6501H34.1758C34.325 21.0708 34.5662 21.4528 34.8818 21.7684C35.1974 22.0839 35.5794 22.3251 36 22.4744V34.8259C35.5794 34.9752 35.1974 35.2164 34.8818 35.5319C34.5662 35.8475 34.325 36.2295 34.1758 36.6501H5.82422C5.67499 36.2295 5.43379 35.8475 5.11821 35.5319C4.80263 35.2164 4.42061 34.9752 4 34.8259V22.4744C4.42061 22.3251 4.80263 22.0839 5.11821 21.7684C5.43379 21.4528 5.67499 21.0708 5.82422 20.6501ZM20 22.6501C18.4087 22.6501 16.8826 23.2823 15.7574 24.4075C14.6321 25.5327 14 27.0588 14 28.6501C14 30.2414 14.6321 31.7676 15.7574 32.8928C16.8826 34.018 18.4087 34.6501 20 34.6501C21.5913 34.6501 23.1174 34.018 24.2426 32.8928C25.3679 31.7676 26 30.2414 26 28.6501C26 27.0588 25.3679 25.5327 24.2426 24.4075C23.1174 23.2823 21.5913 22.6501 20 22.6501ZM10 26.6501C8.896 26.6501 8 27.5441 8 28.6501C8 29.7561 8.896 30.6501 10 30.6501C11.104 30.6501 12 29.7561 12 28.6501C12 27.5441 11.104 26.6501 10 26.6501ZM30 26.6501C28.896 26.6501 28 27.5441 28 28.6501C28 29.7561 28.896 30.6501 30 30.6501C31.104 30.6501 32 29.7561 32 28.6501C32 27.5441 31.104 26.6501 30 26.6501Z" fill="black"/></g><defs><clipPath id="clip0_1_1040"><rect width="39" height="39" fill="white" transform="translate(0 0.824951)"/></clipPath></defs></svg>`},
              {title:"אופן השקעה", subtitle:"פידר", icon:`<div ><svg class="icon-wrapper"  viewBox="0 0 43 44" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M13.7553 6.00061C13.5123 6.01065 13.2781 6.09512 13.0841 6.24269L9.95361 7.72793C9.81179 7.79518 9.68453 7.88986 9.5791 8.00656C9.47368 8.12326 9.39215 8.25969 9.33919 8.40806C9.28622 8.55643 9.26284 8.71384 9.2704 8.8713C9.27796 9.02875 9.31629 9.18317 9.38322 9.32573C9.45015 9.46829 9.54436 9.5962 9.66047 9.70215C9.77658 9.80811 9.91231 9.89003 10.0599 9.94325C10.2075 9.99646 10.3641 10.0199 10.5208 10.0123C10.6774 10.0047 10.831 9.9661 10.9728 9.89879L11.6284 9.588C11.3262 10.7458 11.1592 11.9587 11.1592 13.2113C11.1592 15.2232 11.5741 17.1424 12.3167 18.8821C12.4415 19.1745 12.6768 19.4051 12.9708 19.5232C13.2648 19.6412 13.5934 19.637 13.8843 19.5115C14.1752 19.386 14.4046 19.1495 14.522 18.8539C14.6394 18.5584 14.6352 18.2281 14.5104 17.9357C13.8911 16.4848 13.5456 14.8921 13.5456 13.2113C13.5456 12.1754 13.6818 11.1751 13.9293 10.219L14.3566 11.1263C14.4226 11.2704 14.5165 11.3998 14.6326 11.5071C14.7488 11.6144 14.8849 11.6975 15.0332 11.7516C15.1815 11.8056 15.339 11.8296 15.4966 11.8221C15.6542 11.8146 15.8087 11.7757 15.9513 11.7078C16.0938 11.6399 16.2216 11.5442 16.3271 11.4263C16.4326 11.3085 16.5139 11.1707 16.5661 11.0211C16.6183 10.8714 16.6405 10.7129 16.6314 10.5545C16.6223 10.3962 16.582 10.2413 16.513 10.0987L14.9128 6.70029C14.7925 6.4455 14.5868 6.24146 14.3317 6.12399C14.3312 6.12347 14.3307 6.12295 14.3301 6.12243C14.3234 6.11977 14.3167 6.11716 14.31 6.11462C14.1368 6.03245 13.9466 5.99334 13.7553 6.00061ZM25.4773 6.01467C21.5376 6.01467 18.3183 9.25092 18.3183 13.2113C18.3183 17.1717 21.5376 20.408 25.4773 20.408C29.417 20.408 32.6364 17.1717 32.6364 13.2113C32.6364 9.25092 29.417 6.01467 25.4773 6.01467ZM25.4773 8.63688C25.5842 8.81546 25.7113 9.0419 25.8253 9.4287C26.1055 10.3792 26.2728 11.8009 26.2728 13.2113C26.2728 14.6218 26.1055 16.0435 25.8253 16.9939C25.7113 17.3807 25.5842 17.6072 25.4773 17.7857C25.3705 17.6072 25.2433 17.3807 25.1293 16.9939C24.8492 16.0435 24.6819 14.6218 24.6819 13.2113C24.6819 11.8009 24.8492 10.3792 25.1293 9.4287C25.2433 9.0419 25.3705 8.81546 25.4773 8.63688ZM22.7088 9.29907C22.4279 10.4831 22.2955 11.8375 22.2955 13.2113C22.2955 14.5851 22.4279 15.9395 22.7088 17.1236C21.4942 16.2567 20.7046 14.8339 20.7046 13.2113C20.7046 11.5887 21.4942 10.1659 22.7088 9.29907ZM28.2459 9.29907C29.4604 10.1659 30.25 11.5887 30.25 13.2113C30.25 14.8339 29.4604 16.2567 28.2459 17.1236C28.5268 15.9395 28.6591 14.5851 28.6591 13.2113C28.6591 11.8375 28.5268 10.4831 28.2459 9.29907ZM36.9057 19.613C36.0896 19.613 35.1932 20.152 33.2889 21.1451C31.7115 21.9687 30.2539 22.7513 29.3272 23.3222C29.4075 23.6725 29.4546 24.0366 29.4546 24.4108C29.4546 27.0567 27.3132 29.2039 24.6819 29.2039H18.716C18.0574 29.2039 17.5228 28.6673 17.5228 28.0044C17.5228 27.3415 18.0574 26.805 18.716 26.805H24.6819C25.9976 26.805 27.0682 25.7334 27.0682 24.4108C27.0682 23.6935 26.7474 23.0553 26.2495 22.6147C25.6839 22.2389 25.012 22.0119 24.2842 22.0119H20.7901C20.7901 22.0119 20.2616 22.0057 20.2385 22.0041C18.1417 21.9713 17.1358 21.7533 16.2504 21.5574C15.4454 21.3791 14.684 21.2123 13.4073 21.2123C7.57505 21.2123 4.24577 28.4088 4.10736 28.715C3.92759 29.1116 3.97627 29.5736 4.2332 29.9238L9.80136 37.5156C10.0281 37.8251 10.3845 37.9998 10.7584 37.9998C10.834 37.9998 10.9096 37.9923 10.9852 37.9779C11.4354 37.8915 11.7989 37.5503 11.9158 37.1049C11.9787 36.869 12.5871 34.8059 14.7387 34.8059C16.2915 34.8059 17.8973 35.0068 19.4509 35.2011C21.033 35.4002 22.6702 35.6056 24.2842 35.6056C26.482 35.6056 28.0641 33.9111 32.6364 29.2085C38.4448 23.2345 39 22.712 39 21.5277C39 20.5026 38.1053 19.613 36.9057 19.613Z" fill="black"/></svg> </div>`},
              {title:"אסטרטגית השקעה", subtitle:"Private Debt, Asset-Based Lending", icon: `<svg class="icon-wrapper" viewBox="0 0 27 33" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M22.8438 3.29976H19.9586C19.7538 1.44846 18.2206 -0.000244141 16.3438 -0.000244141H10.6562C8.77938 -0.000244141 7.24619 1.44846 7.04144 3.29976H4.15625C2.14044 3.29976 0.5 4.96543 0.5 7.01226V29.2873C0.5 31.3341 2.14044 32.9998 4.15625 32.9998H22.8438C24.8596 32.9998 26.5 31.3341 26.5 29.2873V7.01226C26.5 4.96543 24.8596 3.29976 22.8438 3.29976ZM10.6562 2.47476H16.3438C17.0157 2.47476 17.5625 3.02998 17.5625 3.71226C17.5625 4.39453 17.0157 4.94976 16.3438 4.94976H10.6562C9.98431 4.94976 9.4375 4.39453 9.4375 3.71226C9.4375 3.02998 9.98431 2.47476 10.6562 2.47476ZM12.2812 24.7498H5.78125C5.1085 24.7498 4.5625 24.1962 4.5625 23.5123C4.5625 22.8283 5.1085 22.2748 5.78125 22.2748H12.2812C12.954 22.2748 13.5 22.8283 13.5 23.5123C13.5 24.1962 12.954 24.7498 12.2812 24.7498ZM12.2812 16.4998H5.78125C5.1085 16.4998 4.5625 15.9462 4.5625 15.2623C4.5625 14.5783 5.1085 14.0248 5.78125 14.0248H12.2812C12.954 14.0248 13.5 14.5783 13.5 15.2623C13.5 15.9462 12.954 16.4998 12.2812 16.4998ZM22.0808 25.1119C22.5569 25.5946 22.5569 26.3791 22.0808 26.8618C21.8428 27.1043 21.5308 27.2248 21.2188 27.2248C20.9067 27.2248 20.5947 27.1043 20.3567 26.8626L19.1875 25.6746L18.0183 26.8618C17.7803 27.1043 17.4683 27.2248 17.1562 27.2248C16.8442 27.2248 16.5322 27.1043 16.2942 26.8626C15.8181 26.38 15.8181 25.5954 16.2942 25.1128L17.4642 23.9248L16.295 22.7376C15.8189 22.255 15.8189 21.4704 16.295 20.9878C16.7711 20.5043 17.5422 20.5043 18.0183 20.9878L19.1875 22.1749L20.3567 20.9878C20.8328 20.5043 21.6039 20.5043 22.08 20.9878C22.5561 21.4704 22.5561 22.255 22.08 22.7376L20.9108 23.9248L22.0808 25.1119ZM22.0808 14.4876L18.8308 17.7876C18.5928 18.0293 18.2808 18.1498 17.9688 18.1498C17.6567 18.1498 17.3447 18.0293 17.1067 17.7876L15.4817 16.1376C15.0056 15.655 15.0056 14.8704 15.4817 14.3878C15.9578 13.9043 16.7289 13.9043 17.205 14.3878L17.9679 15.1624L20.3559 12.7378C20.832 12.2543 21.6031 12.2543 22.0792 12.7378C22.5561 13.2204 22.5561 14.0041 22.0808 14.4876Z" fill="black"/></svg>`},
              {title:"חשיפה גאוגרפית", subtitle:"60% ארה״ב; 30% אירופה ואנגליה; 10% אוסטרליה וניו-זילנד.", icon:`<svg class="icon-wrapper" viewBox="0 0 35 36" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_1_1054)"><path d="M17.5 0.499756C7.82145 0.499756 0 8.32121 0 17.9998C0 27.6783 7.82145 35.4998 17.5 35.4998C27.1785 35.4998 35 27.6783 35 17.9998C35 17.2706 35.0057 16.3534 34.8177 15.4021L31.9466 15.949C31.9808 16.1085 31.9751 16.3363 31.9922 16.5414H26.2044C26.0449 12.5196 25.2531 8.87378 23.9713 6.05965C23.7549 5.58114 23.5327 5.12541 23.2877 4.69246C23.3333 4.71525 23.3846 4.71525 23.4245 4.73804L24.7005 2.09481C22.4333 0.961181 20.0179 0.499756 17.5 0.499756ZM30.625 0.499756C28.147 0.499756 26.25 2.39673 26.25 4.87476C26.25 8.6687 30.625 15.0831 30.625 15.0831C30.625 15.0831 35 8.52059 35 4.87476C35 2.39673 33.103 0.499756 30.625 0.499756ZM30.625 3.2797C31.5023 3.2797 32.22 3.99748 32.22 4.87476C32.22 5.75204 31.5023 6.46981 30.625 6.46981C29.7477 6.46981 29.0299 5.75204 29.0299 4.87476C29.0299 3.99748 29.7477 3.2797 30.625 3.2797ZM17.5 3.41642C18.0753 3.41642 18.645 3.64998 19.3229 4.28231C20.0008 4.91463 20.7243 5.92293 21.3281 7.24455C21.4079 7.42114 21.4819 7.60913 21.556 7.79142H13.444C13.5181 7.60913 13.5921 7.42114 13.6719 7.24455C14.2757 5.92293 14.9992 4.91463 15.6771 4.28231C16.355 3.64998 16.9246 3.41642 17.5 3.41642ZM11.8034 4.55575C11.5242 5.02856 11.2736 5.52417 11.0286 6.05965C10.778 6.60653 10.5558 7.18758 10.345 7.79142H7.01823C8.36263 6.41284 9.99755 5.3134 11.8034 4.55575ZM4.83073 10.7081H9.52473C9.12597 12.5082 8.87532 14.4736 8.79557 16.5414H3.00781C3.21289 14.428 3.83382 12.4513 4.83073 10.7081ZM12.5325 10.7081H22.4674C22.9004 12.4683 23.1966 14.4109 23.2877 16.5414H11.7122C11.8034 14.4109 12.0996 12.4683 12.5325 10.7081ZM3.00781 19.4581H8.79557C8.87532 21.526 9.12597 23.4913 9.52473 25.2914H4.83073C3.83382 23.5483 3.21289 21.5715 3.00781 19.4581ZM11.7122 19.4581H23.2877C23.1966 21.5886 22.9004 23.5312 22.4674 25.2914H12.5325C12.0996 23.5312 11.8034 21.5886 11.7122 19.4581ZM26.2044 19.4581H31.9922C31.7871 21.5715 31.1662 23.5483 30.1693 25.2914H25.4752C25.874 23.4913 26.1247 21.526 26.2044 19.4581ZM7.01823 28.2081H10.345C10.5558 28.8119 10.778 29.393 11.0286 29.9399C11.2736 30.4753 11.5242 30.9709 11.8034 31.4438C9.99755 30.6861 8.36263 29.5867 7.01823 28.2081ZM13.444 28.2081H21.556C21.4819 28.3904 21.4079 28.5784 21.3281 28.755C20.7243 30.0766 20.0008 31.0849 19.3229 31.7172C18.8159 32.19 18.3431 32.4407 17.9101 32.5375C17.7734 32.5432 17.6367 32.5831 17.5 32.5831C17.3633 32.5831 17.2266 32.5432 17.0898 32.5375C16.6569 32.4407 16.1841 32.19 15.6771 31.7172C14.9992 31.0849 14.2757 30.0766 13.6719 28.755C13.5921 28.5784 13.5181 28.3904 13.444 28.2081ZM24.6549 28.2081H27.9818C26.6374 29.5867 25.0024 30.6861 23.1966 31.4438C23.4757 30.9709 23.7264 30.4753 23.9713 29.9399C24.222 29.393 24.4442 28.8119 24.6549 28.2081Z" fill="black"/></g><defs><clipPath id="clip0_1_1054"><rect width="35" height="35" fill="white" transform="translate(0 0.324951)"/></clipPath></defs></svg>`},
          ],
          },
            fider:{
              title: "אודות הפידר", text: 'הפידר נועד לאפשר למשקיעים כשירים בישראל גישה להשקעה בקרן, ללא חיוב בדמי ניהול או דמי הצלחה נוספים ברמת הפידר עצמו.',
            fider_cards: [
            {title:'שם מנהל הפידר', subtitle:'ואליו השקעות מתקדמות', icon:`<svg class="icon-wrapper" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M34.191 16.6592L34.1955 16.6472L19.065 3.44424C18.792 3.16974 18.417 3.00024 18 3.00024C17.583 3.00024 17.208 3.17124 16.935 3.44574L1.8045 16.6472L1.809 16.6592C1.626 16.7972 1.5 17.0042 1.5 17.2502C1.5 17.6642 1.836 18.0002 2.25 18.0002H6V30.0002C6 30.8282 6.672 31.5002 7.5 31.5002H28.5C29.328 31.5002 30 30.8282 30 30.0002V18.0002H33.75C34.164 18.0002 34.5 17.6642 34.5 17.2502C34.5 17.0042 34.374 16.7972 34.191 16.6592ZM18.861 26.0567V27.3002C18.861 27.7157 18.525 28.0517 18.1095 28.0517C17.694 28.0517 17.358 27.7157 17.358 27.3002V26.0567C16.947 25.9997 14.46 25.7267 13.8675 22.7057C13.725 21.9782 14.3295 21.3092 15.072 21.3092H15.465C16.032 21.3092 16.5525 21.6932 16.65 22.2512C16.9305 23.8427 17.9265 23.7647 18.099 23.7647C18.3195 23.7647 19.401 23.7242 19.401 22.0502C19.401 18.7067 14.2125 20.1902 14.2125 15.1787C14.2125 11.7437 17.0595 11.2082 17.568 11.1437V9.75174C17.5695 9.33624 17.9055 9.00024 18.321 9.00024H18.3315C18.747 9.00024 19.083 9.33624 19.083 9.75174V11.1842C19.494 11.2622 21.5265 11.7242 22.104 14.3237C22.275 15.0917 21.705 15.8327 20.919 15.8327H20.532C19.929 15.8327 19.452 15.3842 19.3305 14.7932C19.095 13.6562 18.477 13.4477 18.183 13.4477C17.982 13.4477 17.0505 13.5002 17.0505 15.1907C17.0505 18.1412 22.239 17.2217 22.239 22.0292C22.2375 25.5212 19.3695 25.9922 18.861 26.0567Z" fill="black"/></svg>`},
            {title:'היקף נכסים מנוהלים (AUM)', subtitle:'יעד גיוס של 100 מיליון דולר', icon:`<svg class="icon-wrapper"  viewBox="0 0 39 40" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_1_1079)"><path d="M16.4 4.00024C16.244 4.00024 16.0873 4.01132 15.9313 4.04799C15.9193 4.04799 15.9081 4.05009 15.8961 4.06231C14.7921 4.29453 14 5.2958 14 6.44469V16.2225C14 16.3814 14.0109 16.541 14.0469 16.6999C14.0469 16.7121 14.0489 16.7235 14.0609 16.7357C14.2889 17.8601 15.272 18.6669 16.4 18.6669H35.6C35.756 18.6669 35.9128 18.6558 36.0688 18.6192C36.0807 18.6192 36.0919 18.6171 36.1039 18.6048C37.2079 18.3726 38 17.3714 38 16.2225V6.44469C38 6.2858 37.9891 6.12615 37.9531 5.96726C37.9531 5.95504 37.9511 5.94367 37.9391 5.93145C37.7111 4.80701 36.728 4.00024 35.6 4.00024H16.4ZM18.8 6.44469H33.2C33.2 7.78913 34.28 8.88913 35.6 8.88913V13.778C34.28 13.778 33.2 14.878 33.2 16.2225H18.8C18.8 14.878 17.72 13.778 16.4 13.778V8.88913C17.288 8.88913 18.0566 8.40024 18.4766 7.66691C18.6806 7.31247 18.8 6.88469 18.8 6.44469ZM11.6 8.82707C10.556 8.85151 9.12791 9.1205 7.90391 10.1472C6.60791 11.2349 5.85294 12.8614 5.66094 15.0002H3.2L6.8 18.6669L10.4 15.0002H8.07266C8.22866 13.6558 8.67191 12.6778 9.40391 12.0545C10.0999 11.4678 10.952 11.296 11.6 11.2715V8.82707ZM26 8.88913C24.68 8.88913 23.6 10.1236 23.6 11.6391C23.6 12.5069 23.9597 13.2769 24.5117 13.778H27.4883C28.0403 13.2769 28.4 12.5069 28.4 11.6391C28.4 10.1236 27.32 8.88913 26 8.88913ZM20 10.1114C19.6817 10.1114 19.3765 10.2401 19.1515 10.4693C18.9264 10.6985 18.8 11.0094 18.8 11.3336C18.8 11.6577 18.9264 11.9686 19.1515 12.1978C19.3765 12.427 19.6817 12.5558 20 12.5558C20.3183 12.5558 20.6235 12.427 20.8485 12.1978C21.0736 11.9686 21.2 11.6577 21.2 11.3336C21.2 11.0094 21.0736 10.6985 20.8485 10.4693C20.6235 10.2401 20.3183 10.1114 20 10.1114ZM32 10.1114C31.6817 10.1114 31.3765 10.2401 31.1515 10.4693C30.9264 10.6985 30.8 11.0094 30.8 11.3336C30.8 11.6577 30.9264 11.9686 31.1515 12.1978C31.3765 12.427 31.6817 12.5558 32 12.5558C32.3183 12.5558 32.6235 12.427 32.8485 12.1978C33.0736 11.9686 33.2 11.6577 33.2 11.3336C33.2 11.0094 33.0736 10.6985 32.8485 10.4693C32.6235 10.2401 32.3183 10.1114 32 10.1114ZM3.51172 21.1114C2.67172 21.1114 2 21.7955 2 22.6511V33.9328C2 35.6316 3.34372 37.0002 5.01172 37.0002H15.2C17.192 37.0002 18.8 35.3625 18.8 33.3336V22.6511C18.8 21.7955 18.1283 21.1114 17.2883 21.1114H3.51172ZM27.2 21.1114L23.6 24.778H25.8781C25.1977 28.2846 21.6393 28.4398 21.1953 28.4447L21.2 30.8891C23.504 30.8891 27.7012 29.5691 28.3156 24.778H30.8L27.2 21.1114ZM8 23.5558H12.8C13.46 23.5558 14 24.1058 14 24.778C14 25.4502 13.46 26.0002 12.8 26.0002H8C7.34 26.0002 6.8 25.4502 6.8 24.778C6.8 24.1058 7.34 23.5558 8 23.5558Z" fill="black"/></g><defs><clipPath id="clip0_1_1079"><rect width="39" height="39" fill="white" transform="translate(0 0.175049)"/></clipPath></defs></svg>`},
            {title:'מבנה משפטי', subtitle:'שותפות ישראלית מוגבלת', icon:`<svg class="icon-wrapper"  viewBox="0 0 39 40" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_1_1072)"><g clip-path="url(#clip1_1_1072)"><path d="M21.6852 -0.164169C21.3113 -0.153026 20.9563 0.00327256 20.6956 0.271613L12.0587 8.90854C11.9205 9.04118 11.8102 9.20006 11.7342 9.37586C11.6582 9.55166 11.6181 9.74086 11.6161 9.93237C11.6142 10.1239 11.6505 10.3139 11.7229 10.4912C11.7953 10.6685 11.9023 10.8296 12.0377 10.965C12.1732 11.1004 12.3342 11.2075 12.5116 11.2798C12.6889 11.3522 12.8788 11.3885 13.0704 11.3866C13.2619 11.3846 13.4511 11.3445 13.6269 11.2685C13.8027 11.1925 13.9615 11.0822 14.0942 10.9441L22.7311 2.30714C22.9391 2.10495 23.0812 1.84463 23.1387 1.5603C23.1962 1.27597 23.1665 0.9809 23.0535 0.713752C22.9404 0.446603 22.7493 0.219842 22.5051 0.0631839C22.261 -0.0934741 21.9752 -0.17272 21.6852 -0.164169ZM24.5923 4.16835C24.4013 4.16837 24.2122 4.20642 24.036 4.28027C23.8598 4.35412 23.7001 4.4623 23.5661 4.59851L16.4277 11.7425C16.2794 11.8771 16.1608 12.0411 16.0795 12.2241C15.9981 12.4071 15.9559 12.605 15.9554 12.8053C15.9552 13.0152 16.0009 13.2226 16.0893 13.413C16.1776 13.6034 16.3066 13.7721 16.4671 13.9074L25.0028 22.4487C25.1368 22.5858 25.2969 22.6947 25.4736 22.769C25.6503 22.8434 25.8401 22.8817 26.0318 22.8817C26.2215 22.8817 26.4093 22.8441 26.5845 22.7713C26.7596 22.6984 26.9186 22.5917 27.0524 22.4572L34.233 15.2766C34.3709 15.1424 34.4805 14.982 34.5553 14.8048C34.6302 14.6276 34.6687 14.4372 34.6687 14.2448C34.6687 14.0537 34.6307 13.8646 34.5568 13.6884C34.483 13.5122 34.3748 13.3525 34.2386 13.2186L25.6241 4.60414C25.6186 4.59847 25.6129 4.59284 25.6073 4.58727C25.3376 4.31902 24.9727 4.16841 24.5923 4.16835ZM37.5196 15.6702C37.1456 15.6813 36.7907 15.8376 36.5299 16.106L27.893 24.7429C27.7549 24.8756 27.6446 25.0344 27.5686 25.2102C27.4926 25.386 27.4525 25.5752 27.4505 25.7667C27.4486 25.9583 27.4848 26.1482 27.5572 26.3255C27.6296 26.5029 27.7367 26.6639 27.8721 26.7994C28.0075 26.9348 28.1686 27.0418 28.3459 27.1142C28.5232 27.1866 28.7132 27.2229 28.9047 27.221C29.0962 27.219 29.2854 27.1789 29.4612 27.1029C29.637 27.0269 29.7959 26.9166 29.9285 26.7784L38.5655 18.1415C38.7735 17.9393 38.9156 17.679 38.9731 17.3947C39.0306 17.1103 39.0009 16.8153 38.8878 16.5481C38.7748 16.281 38.5836 16.0542 38.3395 15.8976C38.0953 15.7409 37.8096 15.6616 37.5196 15.6702ZM17.8166 18.985L4.11054 30.6892C3.76513 30.9581 3.48558 31.3022 3.29314 31.6954C3.1007 32.0885 3.00045 32.5204 3 32.9581C3 33.7217 3.30332 34.4539 3.84323 34.9939C4.38315 35.5338 5.11542 35.8371 5.87898 35.8371C6.30804 35.837 6.73167 35.7411 7.11888 35.5562C7.50609 35.3714 7.84709 35.1023 8.11693 34.7687C8.12164 34.7631 8.12632 34.7575 8.13099 34.7519L8.1338 34.749L19.8521 21.0205L17.8166 18.985Z" fill="black"/></g></g><defs><clipPath id="clip0_1_1072"><rect width="39" height="39" fill="white" transform="translate(0 0.675049)"/></clipPath><clipPath id="clip1_1_1072"><rect width="39" height="39" fill="white" transform="translate(0 -0.999756)"/></clipPath></defs></svg>` },
            {title:'קריאות לכסף', subtitle:'לאורך תקופת ההשקעות, בהתאם לקריאות הקרן', icon:`<svg class="icon-wrapper"  viewBox="0 0 39 40" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_1_1102)"><path d="M19.4062 1.50024L17.7188 1.59399H17.5781L17.3438 1.64087L17.8125 4.59399H17.8594L19.5938 4.50024L19.4062 1.50024ZM14.25 2.25024L14.2031 2.29712H14.1562L14.0625 2.34399L12.5625 2.85962L12.4688 2.90649L12.4219 2.95337L11.2031 3.51587L12.5156 6.23462L13.5938 5.67212V5.71899L14.9531 5.20337L15.0938 5.15649L14.7656 4.31274L14.25 2.25024ZM8.4375 5.29712L8.10938 5.53149L8.01562 5.57837L7.96875 5.62524L6.79687 6.70337L6.70312 6.79712L6.04687 7.54712L8.29688 9.56274L8.8125 8.90649L8.90625 8.81274L9.89062 7.96899L9.98438 7.87524L10.2656 7.68774L8.4375 5.29712ZM28.5 6.00024L30 16.5002L33.0938 13.4065C33.9434 15.2639 34.5 17.2795 34.5 19.5002C34.5 27.8499 27.8496 34.5002 19.5 34.5002C11.1855 34.5002 4.55273 27.8967 4.5 19.594V19.5471C4.5 19.5295 4.5 19.5178 4.5 19.5002C4.5 19.4534 4.5 19.4065 4.5 19.3596L4.59375 17.8596L4.78125 16.7346L1.78125 16.3127L1.59375 17.5784V17.719L1.5 19.219C1.49414 19.2834 1.49414 19.342 1.5 19.4065C1.5 19.4358 1.5 19.4709 1.5 19.5002C1.5 29.4553 9.54492 37.5002 19.5 37.5002C29.4551 37.5002 37.5 29.4553 37.5 19.5002C37.5 16.3889 36.6855 13.5764 35.3906 11.1096L39 7.50024L28.5 6.00024ZM18.4688 8.53149V11.1096C15.7676 11.5608 14.1094 13.5002 14.1094 15.7502C14.1094 18.1526 15.9023 19.4827 18.75 20.5315C20.8477 21.2815 21.75 22.0491 21.75 23.2502C21.75 24.4514 20.6895 25.3596 18.8906 25.3596C17.2383 25.3596 15.7676 24.7385 14.7188 24.1409L13.9688 26.719C14.8711 27.3167 16.6289 27.8909 18.2812 27.8909V30.8909H20.7188V28.0315C23.5664 27.5803 25.2188 25.5002 25.2188 23.2502C25.2188 20.8479 23.8594 19.4827 20.8594 18.2815C18.457 17.3792 17.5312 16.6584 17.5312 15.6096C17.5312 14.5608 18.1582 13.6409 20.1094 13.6409C21.9082 13.6409 23.1211 14.2327 23.7188 14.5315L24.4688 12.0002C23.5664 11.5491 22.3711 11.1096 20.7188 11.1096V8.53149H18.4688ZM4.125 10.1721L3.70312 10.8284L3.65625 10.9221L3.60937 10.969L2.95312 12.4221L2.90625 12.469L2.85937 12.5627L2.67187 13.1252L5.48437 14.1565L5.71875 13.594H5.67187L6.32812 12.2815L6.65625 11.719L4.125 10.1721Z" fill="black"/></g><defs><clipPath id="clip0_1_1102"><rect width="39" height="39" fill="white" transform="translate(0 0.675049)"/></clipPath></defs></svg>`},
            {title:'דמי ניהול הפידר', subtitle:'אין', icon:`<span ><svg class="icon-wrapper" viewBox="0 0 37 37" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.5 0.824951L2.71472 12.2052L4.10434 18.8943L9.79312 17.765L8.83776 16.1144H8.70748L7.88239 15.5498V15.2891C7.60555 14.453 6.89445 13.8829 6.0585 14.1598C5.91737 14.1598 5.93908 14.2901 5.79795 14.2901L4.92943 13.5951L3.40953 6.25445L0.5 0.824951ZM2.0199 0.824951L8.70748 12.9002L12.0513 18.8943L24.9487 11.8143L18.9994 0.824951H16.915L20.9101 8.33938L20.6496 9.29498C20.5084 9.29498 20.5302 9.28412 20.389 9.42528C19.6942 9.84335 19.4065 10.6849 19.8245 11.3799C19.8245 11.5211 19.9548 11.5428 19.9548 11.684L19.6942 12.6395L15.5253 14.9851L14.5265 14.7245C14.5265 14.5833 14.5374 14.605 14.3963 14.4639C13.9783 13.6277 13.1369 13.3508 12.4421 13.7689C12.301 13.7689 12.3227 13.8992 12.1815 13.8992L11.1827 13.5951L4.10434 0.824951H2.0199ZM9.79312 0.824951C8.26236 2.07374 7.99638 4.31069 8.96803 6.25445C10.2165 8.48055 12.5832 9.31126 14.5265 8.33938C16.4698 7.3675 17.0344 4.70162 15.7859 2.47552C15.509 1.78054 14.9499 1.24302 14.3963 0.824951H9.79312ZM16.0464 9.29498C15.1996 9.29498 14.5265 9.96823 14.5265 10.8152C14.5265 11.6622 15.1996 12.3789 16.0464 12.3789C16.8932 12.3789 17.6098 11.6622 17.6098 10.8152C17.6098 9.96823 16.8932 9.29498 16.0464 9.29498ZM27.3806 22.1086C26.0669 22.2281 25.1224 22.9339 23.9934 23.6289C23.2986 24.0469 20.7799 25.8441 20.7799 25.8441C20.7799 25.8441 18.2774 27.2341 15.9162 27.2341C12.301 27.2341 11.617 27.3752 11.617 28.624C11.617 29.8728 13.962 30.014 13.962 30.014H19.9548C21.8981 30.014 24.8185 28.8846 24.8185 28.8846C24.8185 28.8846 22.4572 31.4039 19.9548 31.4039H13.962C12.7135 31.4039 10.2274 30.7089 10.2274 28.624C10.2274 25.8441 12.7189 25.8332 15.9162 25.9744C16.193 25.9744 16.3341 25.8441 16.611 25.8441C16.4698 25.7029 16.3613 25.7247 16.2201 25.5835C15.6665 25.1654 14.7979 24.7473 13.962 24.1935C11.7364 22.6624 10.5151 22.4887 9.40229 24.0198C8.56635 23.3248 7.58926 23.0642 6.75332 23.0642C5.78166 23.0642 5.08685 23.7429 5.36369 24.7148C2.86128 23.3248 1.61822 23.8895 1.06454 24.5845C0.369723 25.5563 0.793125 26.5228 2.32388 27.4947C3.29554 28.3308 12.8764 34.6073 14.266 35.4435C15.7967 36.2796 17.1864 37.6696 20.5193 36.1384C21.6321 35.5846 25.9475 33.3585 27.3372 32.6636C28.8679 31.9686 29.3945 32.0989 30.5072 32.7939L32.5917 34.1838L36.5 25.4097C36.5 25.4097 32.19 23.466 30.2467 22.6298C29.1013 22.1629 28.1677 22.038 27.3806 22.1086Z" fill="black"/></svg></span>`},
            {title:'דמי הצלחה פידר', subtitle:'אין', icon:`<svg class="icon-wrapper"  viewBox="0 0 39 40" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_1_1040)"><path d="M23.4961 0.650146C22.1641 0.650146 21.4994 2.25893 22.4414 3.20093L24.5312 5.29077L22 7.82202L17.4141 3.23608C17.039 2.86115 16.5303 2.65053 16 2.65053C15.4697 2.65053 14.961 2.86115 14.5859 3.23608L8.58594 9.23608C8.39399 9.42037 8.24075 9.64111 8.13518 9.88537C8.02961 10.1296 7.97384 10.3925 7.97114 10.6586C7.96843 10.9247 8.01884 11.1886 8.11942 11.4349C8.22 11.6813 8.36872 11.9051 8.55688 12.0933C8.74504 12.2814 8.96884 12.4301 9.2152 12.5307C9.46155 12.6313 9.7255 12.6817 9.99158 12.679C10.2577 12.6763 10.5205 12.6205 10.7648 12.515C11.009 12.4094 11.2298 12.2562 11.4141 12.0642L16 7.47827L20.5859 12.0642C20.961 12.4391 21.4697 12.6498 22 12.6498C22.5303 12.6498 23.039 12.4391 23.4141 12.0642L27.3594 8.1189L29.4453 10.2087C30.3893 11.1527 32 10.4861 32 9.15405V2.66968C32 1.55568 31.0945 0.650146 29.9805 0.650146H23.4961ZM2 16.6501C0.896 16.6501 0 17.5461 0 18.6501V38.6501C0 39.7541 0.896 40.6501 2 40.6501H38C39.104 40.6501 40 39.7541 40 38.6501V18.6501C40 17.5461 39.104 16.6501 38 16.6501H2ZM5.82422 20.6501H34.1758C34.325 21.0708 34.5662 21.4528 34.8818 21.7684C35.1974 22.0839 35.5794 22.3251 36 22.4744V34.8259C35.5794 34.9752 35.1974 35.2164 34.8818 35.5319C34.5662 35.8475 34.325 36.2295 34.1758 36.6501H5.82422C5.67499 36.2295 5.43379 35.8475 5.11821 35.5319C4.80263 35.2164 4.42061 34.9752 4 34.8259V22.4744C4.42061 22.3251 4.80263 22.0839 5.11821 21.7684C5.43379 21.4528 5.67499 21.0708 5.82422 20.6501ZM20 22.6501C18.4087 22.6501 16.8826 23.2823 15.7574 24.4075C14.6321 25.5327 14 27.0588 14 28.6501C14 30.2414 14.6321 31.7676 15.7574 32.8928C16.8826 34.018 18.4087 34.6501 20 34.6501C21.5913 34.6501 23.1174 34.018 24.2426 32.8928C25.3679 31.7676 26 30.2414 26 28.6501C26 27.0588 25.3679 25.5327 24.2426 24.4075C23.1174 23.2823 21.5913 22.6501 20 22.6501ZM10 26.6501C8.896 26.6501 8 27.5441 8 28.6501C8 29.7561 8.896 30.6501 10 30.6501C11.104 30.6501 12 29.7561 12 28.6501C12 27.5441 11.104 26.6501 10 26.6501ZM30 26.6501C28.896 26.6501 28 27.5441 28 28.6501C28 29.7561 28.896 30.6501 30 30.6501C31.104 30.6501 32 29.7561 32 28.6501C32 27.5441 31.104 26.6501 30 26.6501Z" fill="black"/></g><defs><clipPath id="clip0_1_1040"><rect width="39" height="39" fill="white" transform="translate(0 0.824951)"/></clipPath></defs></svg>`},
            {title:'אדמיניסטרטור', subtitle:'Apex Partners', icon:`<svg class="icon-wrapper"  viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_1_1119)"><path d="M7.6 3C6.1635 3 5 4.17038 5 5.61538V34.3846C5 35.8296 6.1635 37 7.6 37H28.4C29.8365 37 31 35.8296 31 34.3846V5.61538C31 4.17038 29.8365 3 28.4 3H21.9V6.92308C21.9 7.64492 21.3176 8.23077 20.6 8.23077H15.4C14.6824 8.23077 14.1 7.64492 14.1 6.92308V3H7.6ZM18 3C17.6552 3 17.3246 3.13777 17.0808 3.38301C16.837 3.62825 16.7 3.96087 16.7 4.30769C16.7 4.65451 16.837 4.98713 17.0808 5.23237C17.3246 5.47761 17.6552 5.61538 18 5.61538C18.3448 5.61538 18.6754 5.47761 18.9192 5.23237C19.163 4.98713 19.3 4.65451 19.3 4.30769C19.3 3.96087 19.163 3.62825 18.9192 3.38301C18.6754 3.13777 18.3448 3 18 3ZM18 13.4615C19.1336 13.4615 19.79 14.3606 19.79 14.3606C21.3318 14.3606 22.2504 15.7771 22.2504 17.617C22.2504 18.535 21.7451 19.4968 21.7451 19.4968C21.7451 19.4968 22.027 19.5931 22.027 20.2248C22.027 21.1362 21.2932 21.6448 21.2932 21.6448C21.2152 22.3405 20.3768 23.2777 19.9881 23.6804V25.7901C21.2114 27.5385 25.8 26.7163 25.8 30.4615H10.2C10.2 26.7163 14.7886 27.5397 16.0119 25.7927V23.683C15.6232 23.2802 14.7861 22.3405 14.7068 21.6448C14.7068 21.6448 13.973 21.3703 13.973 20.2248C13.973 19.635 14.2549 19.4968 14.2549 19.4968C14.2549 19.4968 13.6379 18.6364 13.6379 17.5328C13.6379 14.92 15.5911 13.4615 18 13.4615Z" fill="black"/></g><defs><clipPath id="clip0_1_1119"><rect width="39" height="39" fill="white" transform="translate(0.5 0.174805)"/></clipPath></defs></svg>`},
            {title:'ייעוץ משפטי', subtitle:'וינוגרד ושות׳', icon:`<svg class="icon-wrapper"  viewBox="0 0 39 40" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1.5 0.175049C0.673828 0.175049 0 0.848877 0 1.67505V22.675C0 24.3157 1.35938 25.675 3 25.675H17.2969C17.8359 25.6809 18.3398 25.3997 18.6152 24.9309C18.8848 24.4622 18.8848 23.8879 18.6152 23.4192C18.3398 22.9504 17.8359 22.6692 17.2969 22.675H3V7.67505H36V22.675H30.75C30.2109 22.6692 29.707 22.9504 29.4316 23.4192C29.1621 23.8879 29.1621 24.4622 29.4316 24.9309C29.707 25.3997 30.2109 25.6809 30.75 25.675H36C37.6406 25.675 39 24.3157 39 22.675V1.67505C39 0.848877 38.3262 0.175049 37.5 0.175049H1.5ZM6.32812 10.675C5.50195 10.7922 4.92188 11.5598 5.03906 12.386C5.15625 13.2122 5.92383 13.7922 6.75 13.675H18.75C19.2891 13.6809 19.793 13.3997 20.0684 12.9309C20.3379 12.4622 20.3379 11.8879 20.0684 11.4192C19.793 10.9504 19.2891 10.6692 18.75 10.675H6.75C6.70312 10.675 6.65625 10.675 6.60938 10.675C6.5625 10.675 6.51562 10.675 6.46875 10.675C6.42188 10.675 6.375 10.675 6.32812 10.675ZM25.8281 10.675C25.002 10.7922 24.4219 11.5598 24.5391 12.386C24.6562 13.2122 25.4238 13.7922 26.25 13.675H32.25C32.7891 13.6809 33.293 13.3997 33.5684 12.9309C33.8379 12.4622 33.8379 11.8879 33.5684 11.4192C33.293 10.9504 32.7891 10.6692 32.25 10.675H26.25C26.2031 10.675 26.1562 10.675 26.1094 10.675C26.0625 10.675 26.0156 10.675 25.9688 10.675C25.9219 10.675 25.875 10.675 25.8281 10.675ZM6.32812 15.175C5.50195 15.2922 4.92188 16.0598 5.03906 16.886C5.15625 17.7122 5.92383 18.2922 6.75 18.175H18.75C19.2891 18.1809 19.793 17.8997 20.0684 17.4309C20.3379 16.9622 20.3379 16.3879 20.0684 15.9192C19.793 15.4504 19.2891 15.1692 18.75 15.175H6.75C6.70312 15.175 6.65625 15.175 6.60938 15.175C6.5625 15.175 6.51562 15.175 6.46875 15.175C6.42188 15.175 6.375 15.175 6.32812 15.175ZM31.2656 15.925C31.1543 15.9778 31.0547 16.0598 30.9844 16.1594L30.1406 17.0032C28.5586 17.2083 25.7812 18.9719 25.0781 19.675L17.1094 27.6438L20.625 31.1594L28.5938 23.1907C29.1855 22.5989 31.0723 19.593 31.2188 17.9875L32.0156 17.1907C32.2441 16.9563 32.2969 16.6106 32.1445 16.3176C31.998 16.0305 31.6816 15.8723 31.3594 15.925C31.3301 15.925 31.2949 15.925 31.2656 15.925ZM15.7031 29.0032L9.9375 34.7688C9.2168 35.4895 8.87695 37.4583 9.84375 38.425C10.8047 39.3918 12.5684 39.1633 13.4531 38.2844L19.2188 32.5188L15.7031 29.0032ZM22.4062 30.4563C22.1367 30.4973 21.8906 30.6321 21.7031 30.8313L15.6562 36.8313C15.2988 37.1184 15.1348 37.5872 15.2402 38.0325C15.3398 38.4836 15.6914 38.8352 16.1426 38.9348C16.5879 39.0403 17.0566 38.8762 17.3438 38.5188L23.3906 32.5188C23.7715 32.1614 23.877 31.5989 23.6484 31.1301C23.4258 30.6555 22.9219 30.386 22.4062 30.4563Z" fill="black"/></svg>`},
            {title:'רואה חשבון מבקר', subtitle:'EY', icon:`<svg class="icon-wrapper"" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M15.1667 2.3335C9.86417 2.3335 3.5 6.5755 3.5 14.0002V17.5002H3.52279C3.51812 17.5398 3.5 17.5744 3.5 17.6164V19.7173C3.5 22.0133 4.8154 23.2486 5.8584 23.7619C6.64473 25.6694 8.5365 28.4244 11.6667 29.6727V27.1047C8.96467 25.5892 7.92755 22.6617 7.87272 22.4972L7.65625 21.9093L7.06836 21.7407C6.86186 21.6801 5.83333 21.3005 5.83333 19.7173V17.6164C5.83333 17.5755 5.81521 17.541 5.81055 17.5002H7C7 10.0755 17.2876 16.1213 20.4691 8.69775C20.4691 8.69775 23.3333 10.8817 23.3333 17.5002H24.5228C24.5181 17.5398 24.5 17.5744 24.5 17.6164V18.6668H26.8333V17.6164C26.8333 17.5755 26.8152 17.541 26.8105 17.5002H26.8333V14.0002C26.8333 9.75816 24.7122 4.45492 20.4691 4.45492C20.4691 4.45492 19.4087 2.3335 15.1667 2.3335ZM16.3333 21.0002C15.0581 21.0002 14 22.0583 14 23.3335V32.6668C14 33.9421 15.0581 35.0002 16.3333 35.0002H32.6667C33.9419 35.0002 35 33.9421 35 32.6668V23.3335C35 22.0583 33.9419 21.0002 32.6667 21.0002H16.3333ZM16.3333 23.3335H32.6667V32.6668H16.3333V23.3335ZM24.5 24.5002C22.5668 24.5002 21 26.263 21 28.4377C21 29.6825 21.5247 30.7792 22.3262 31.5002H26.6761C27.4764 30.7792 28 29.6825 28 28.4377C28 26.263 26.4332 24.5002 24.5 24.5002ZM18.6667 26.8335C18.3572 26.8335 18.0605 26.9564 17.8417 27.1752C17.6229 27.394 17.5 27.6907 17.5 28.0002C17.5 28.3096 17.6229 28.6063 17.8417 28.8251C18.0605 29.0439 18.3572 29.1668 18.6667 29.1668C18.9761 29.1668 19.2728 29.0439 19.4916 28.8251C19.7104 28.6063 19.8333 28.3096 19.8333 28.0002C19.8333 27.6907 19.7104 27.394 19.4916 27.1752C19.2728 26.9564 18.9761 26.8335 18.6667 26.8335ZM30.3333 26.8335C30.0239 26.8335 29.7272 26.9564 29.5084 27.1752C29.2896 27.394 29.1667 27.6907 29.1667 28.0002C29.1667 28.3096 29.2896 28.6063 29.5084 28.8251C29.7272 29.0439 30.0239 29.1668 30.3333 29.1668C30.6428 29.1668 30.9395 29.0439 31.1583 28.8251C31.3771 28.6063 31.5 28.3096 31.5 28.0002C31.5 27.6907 31.3771 27.394 31.1583 27.1752C30.9395 26.9564 30.6428 26.8335 30.3333 26.8335Z" fill="black"/></svg>`},
            ],
              },
              stragety:{
          title:"אסטרגיית השקעות",
          icons:{
            icon_1:` <svg class="icon-wrapper" viewBox="0 0 60 59" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M35.9763 29.3505H31.4694C30.4055 29.3505 29.5351 30.221 29.5351 31.2848C29.5351 32.3487 30.4055 33.2191 31.4694 33.2191H32.9201V33.548C32.9201 34.6118 33.7906 35.4823 34.8544 35.4823C35.9183 35.4823 36.7887 34.6118 36.7887 33.548V33.1418C38.723 32.7743 40.1738 31.0721 40.1738 29.041C40.1738 26.7392 38.2975 24.8436 35.9763 24.8436H33.7132C33.5391 24.8436 33.3844 24.7082 33.3844 24.5148C33.3844 24.3213 33.5198 24.1859 33.7132 24.1859H38.2201C39.284 24.1859 40.1544 23.3155 40.1544 22.2516C40.1544 21.1878 39.284 20.3173 38.2201 20.3173H36.7694V19.9885C36.7694 18.9246 35.899 18.0542 34.8351 18.0542C33.7712 18.0542 32.9008 18.9246 32.9008 19.9885V20.3947C30.9665 20.7622 29.5157 22.4644 29.5157 24.4954C29.5157 26.7973 31.392 28.6929 33.7132 28.6929H35.9763C36.1504 28.6929 36.3052 28.8283 36.3052 29.0217C36.3052 29.2151 36.1698 29.3505 35.9763 29.3505Z" fill="#011839"/><path d="M56.7321 38.0358C55.9584 37.4748 55.0686 37.146 54.1595 37.0493C54.1015 35.057 53.85 33.0646 53.3471 31.1303C53.3084 30.9949 53.2697 30.8595 53.1923 30.7435L43.6949 12.2709H45.6292C46.6931 12.2709 47.5635 11.4004 47.5635 10.3366C47.5635 9.27269 46.6931 8.40226 45.6292 8.40226H44.2365L47.5055 3.7019C47.9117 3.10226 47.9697 2.34788 47.6409 1.70956C47.3121 1.07124 46.6544 0.665039 45.9194 0.665039H23.7716C23.0559 0.665039 22.3982 1.07124 22.05 1.70956C21.7212 2.34788 21.7599 3.12161 22.1854 3.7019L25.4544 8.40226H24.0617C22.9979 8.40226 22.1274 9.27269 22.1274 10.3366C22.1274 11.4004 22.9979 12.2709 24.0617 12.2709H25.996L16.4986 30.7435C16.4406 30.8595 16.3825 30.9949 16.3439 31.1303C16.1117 32.0201 15.957 32.8905 15.8216 33.7416L14.1968 34.2059C13.4037 31.9427 11.276 30.2986 8.74203 30.2986H2.91978C1.85591 30.3179 0.985474 31.1884 0.985474 32.2522V55.5606C0.985474 56.6438 1.85591 57.4949 2.91978 57.4949H8.76138C11.1019 57.4949 13.1329 56.0829 14.042 54.0712L21.2183 57.9785C22.0694 58.4427 23.0365 58.6748 24.0037 58.6748C24.3519 58.6748 24.7 58.6361 25.0289 58.5781C25.1256 58.5781 55.3781 47.6686 55.3781 47.6686C57.5639 46.8756 59.0146 44.8059 59.0146 42.4847C59.0146 40.6858 58.1829 39.061 56.7321 38.0165V38.0358ZM27.4854 4.53365H42.2055L39.4975 8.40226H30.1741L27.4661 4.53365H27.4854ZM20.0577 32.3296L30.3676 12.2709H39.3427L49.6526 32.3296C50.0975 34.0898 50.3296 35.9081 50.3296 37.7263C50.3296 37.7263 50.3296 37.7457 50.3296 37.765L40.2712 41.1307C39.6716 39.738 38.569 38.5967 37.1376 37.9391L25.3384 32.4843C24.0617 31.9041 22.6303 31.788 21.2763 32.1749L19.9997 32.5424C19.9997 32.5424 20.019 32.407 20.0384 32.3296H20.0577ZM10.6957 51.692C10.6957 52.7559 9.82524 53.6263 8.76138 53.6263H4.85408V34.1865H8.76138C9.82524 34.1865 10.6957 35.057 10.6957 36.1208V51.692ZM54.0628 44.0515L24.1971 54.8062C23.8103 54.8642 23.4041 54.7675 23.0559 54.5741L14.5449 49.9511V38.1325L22.3402 35.8694C22.7851 35.734 23.2687 35.7727 23.6942 35.9661L35.4935 41.4208C35.9384 41.6143 36.2865 41.9431 36.538 42.3493L33.0756 43.5099L24.4292 40.0281C23.4427 39.6219 22.3015 40.1055 21.9146 41.092C21.8179 41.3241 21.7792 41.5756 21.7792 41.8077C21.7792 42.5814 22.2435 43.2971 22.9979 43.6066L32.3019 47.3591C32.7274 47.5332 33.211 47.5526 33.6365 47.3978L52.9602 40.9373C53.4632 40.7632 54.0048 40.8405 54.4303 41.1694C54.8559 41.4789 55.1073 41.9624 55.1073 42.504C55.1073 43.2004 54.6624 43.8194 54.0241 44.0515H54.0628Z" fill="#011839"/></svg>`,
            icon_2: `<svg class="icon-wrapper" viewBox="0 0 53 54" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M16.2917 4.24951C15.1647 4.24951 14.25 5.16418 14.25 6.29118V8.33284H12.2083C9.95229 8.33284 8.125 10.1601 8.125 12.4162V40.9995C8.125 43.2556 9.95229 45.0828 12.2083 45.0828H24.8132L20.7339 41.0035L20.7379 40.9995H12.2083V18.5412H40.7917L40.7957 35.5763L44.875 31.497V12.4162C44.875 10.1601 43.0477 8.33284 40.7917 8.33284H38.75V6.29118C38.75 5.16418 37.8353 4.24951 36.7083 4.24951C35.5813 4.24951 34.6667 5.16418 34.6667 6.29118V8.33284H18.3333V6.29118C18.3333 5.16418 17.4187 4.24951 16.2917 4.24951ZM26.8748 22.792C26.5288 22.792 26.1839 22.9757 26.0175 23.3463L24.3068 27.1744L20.04 27.5692C19.2111 27.6468 18.8846 28.6871 19.5216 29.224L22.644 31.8599L21.7467 35.9392C21.5691 36.7436 22.4379 37.3687 23.1464 36.9481L26.8748 34.731L30.6471 36.9162C31.374 37.3368 32.2453 36.67 32.0269 35.8595L30.9542 31.8599L34.1682 29.228C34.8195 28.6952 34.4989 27.6428 33.6618 27.5652L29.4429 27.1744L27.7322 23.3463C27.5658 22.9757 27.2209 22.792 26.8748 22.792ZM48.113 34.8785C47.5903 34.8785 47.0676 35.0785 46.6694 35.4766L36.7123 45.4338L30.8385 39.56C30.0423 38.7637 28.7477 38.7637 27.9515 39.56C27.1552 40.3562 27.1552 41.6508 27.9515 42.447L35.2688 49.7643C36.0651 50.5606 37.3596 50.5606 38.1558 49.7643L49.5565 38.3637C50.3527 37.5674 50.3527 36.2729 49.5565 35.4766C49.1584 35.0785 48.6356 34.8785 48.113 34.8785Z" fill="black"/></svg></div>` ,
            icon_3: `<svg class="icon-wrapper" viewBox="0 0 53 54" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_1_1146)"><path d="M26 2.70801C13.2796 2.70801 3 12.9876 3 25.708C3 38.4284 13.2796 48.708 26 48.708C38.7204 48.708 49 38.4284 49 25.708C49 12.9876 38.7204 2.70801 26 2.70801ZM24.0234 6.66113C24.0459 6.66113 24.0609 6.66113 24.0833 6.66113V16.3044C19.7334 17.2028 16.4167 21.1035 16.4167 25.708C16.4167 30.9714 20.7367 35.2913 26 35.2913C28.2985 35.2913 30.3874 34.4453 32.0495 33.0752L39.7161 39.1846C36.2497 42.7109 31.3906 44.8747 26 44.8747C15.3311 44.8747 6.83333 36.377 6.83333 25.708C6.83333 15.7129 14.2979 7.63444 24.0234 6.66113ZM39.4167 11.9919C40.1204 12.6807 40.7419 13.4219 41.3333 14.208C40.2777 14.208 39.4167 15.069 39.4167 16.1247C39.4167 17.1803 40.2777 18.0413 41.3333 18.0413C42.112 18.0413 42.7708 17.5622 43.0703 16.9033C43.3473 17.4499 43.5645 18.0114 43.7891 18.5804C43.4447 18.9248 43.25 19.4264 43.25 19.958C43.25 20.8789 43.9388 21.5752 44.8073 21.7549C45.0693 23.0277 45.1667 24.3529 45.1667 25.708C44.111 25.708 43.25 26.569 43.25 27.6247C43.25 28.5531 43.9313 29.3092 44.8073 29.4814C44.3281 31.9147 43.4072 34.1908 42.112 36.1898L34.4453 30.0804C35.1416 28.7552 35.5833 27.2952 35.5833 25.708C35.5833 23.3796 34.7074 21.2682 33.3073 19.5986L39.4167 11.9919ZM37.5 18.0413C36.4443 18.0413 35.5833 18.9023 35.5833 19.958C35.5833 21.0137 36.4443 21.8747 37.5 21.8747C38.5557 21.8747 39.4167 21.0137 39.4167 19.958C39.4167 18.9023 38.5557 18.0413 37.5 18.0413ZM26 19.958C29.1745 19.958 31.75 22.5335 31.75 25.708C31.75 28.8825 29.1745 31.458 26 31.458C22.8255 31.458 20.25 28.8825 20.25 25.708C20.25 22.5335 22.8255 19.958 26 19.958ZM41.3333 21.8747C40.2777 21.8747 39.4167 22.7357 39.4167 23.7913C39.4167 24.847 40.2777 25.708 41.3333 25.708C42.389 25.708 43.25 24.847 43.25 23.7913C43.25 22.7357 42.389 21.8747 41.3333 21.8747ZM37.5 25.708C36.4443 25.708 35.5833 26.569 35.5833 27.6247C35.5833 28.6803 36.4443 29.5413 37.5 29.5413C38.5557 29.5413 39.4167 28.6803 39.4167 27.6247C39.4167 26.569 38.5557 25.708 37.5 25.708ZM41.3333 29.5413C40.2777 29.5413 39.4167 30.4023 39.4167 31.458C39.4167 32.5137 40.2777 33.3747 41.3333 33.3747C42.389 33.3747 43.25 32.5137 43.25 31.458C43.25 30.4023 42.389 29.5413 41.3333 29.5413Z" fill="black"/></g><defs><clipPath id="clip0_1_1146"><rect width="46" height="46" fill="white" transform="translate(3 2.70801)"/></clipPath></defs></svg>`,
            icon_4:` <svg class="icon-wrapper" viewBox="0 0 53 54" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_1_1146)"><path d="M26 2.70801C13.2796 2.70801 3 12.9876 3 25.708C3 38.4284 13.2796 48.708 26 48.708C38.7204 48.708 49 38.4284 49 25.708C49 12.9876 38.7204 2.70801 26 2.70801ZM24.0234 6.66113C24.0459 6.66113 24.0609 6.66113 24.0833 6.66113V16.3044C19.7334 17.2028 16.4167 21.1035 16.4167 25.708C16.4167 30.9714 20.7367 35.2913 26 35.2913C28.2985 35.2913 30.3874 34.4453 32.0495 33.0752L39.7161 39.1846C36.2497 42.7109 31.3906 44.8747 26 44.8747C15.3311 44.8747 6.83333 36.377 6.83333 25.708C6.83333 15.7129 14.2979 7.63444 24.0234 6.66113ZM39.4167 11.9919C40.1204 12.6807 40.7419 13.4219 41.3333 14.208C40.2777 14.208 39.4167 15.069 39.4167 16.1247C39.4167 17.1803 40.2777 18.0413 41.3333 18.0413C42.112 18.0413 42.7708 17.5622 43.0703 16.9033C43.3473 17.4499 43.5645 18.0114 43.7891 18.5804C43.4447 18.9248 43.25 19.4264 43.25 19.958C43.25 20.8789 43.9388 21.5752 44.8073 21.7549C45.0693 23.0277 45.1667 24.3529 45.1667 25.708C44.111 25.708 43.25 26.569 43.25 27.6247C43.25 28.5531 43.9313 29.3092 44.8073 29.4814C44.3281 31.9147 43.4072 34.1908 42.112 36.1898L34.4453 30.0804C35.1416 28.7552 35.5833 27.2952 35.5833 25.708C35.5833 23.3796 34.7074 21.2682 33.3073 19.5986L39.4167 11.9919ZM37.5 18.0413C36.4443 18.0413 35.5833 18.9023 35.5833 19.958C35.5833 21.0137 36.4443 21.8747 37.5 21.8747C38.5557 21.8747 39.4167 21.0137 39.4167 19.958C39.4167 18.9023 38.5557 18.0413 37.5 18.0413ZM26 19.958C29.1745 19.958 31.75 22.5335 31.75 25.708C31.75 28.8825 29.1745 31.458 26 31.458C22.8255 31.458 20.25 28.8825 20.25 25.708C20.25 22.5335 22.8255 19.958 26 19.958ZM41.3333 21.8747C40.2777 21.8747 39.4167 22.7357 39.4167 23.7913C39.4167 24.847 40.2777 25.708 41.3333 25.708C42.389 25.708 43.25 24.847 43.25 23.7913C43.25 22.7357 42.389 21.8747 41.3333 21.8747ZM37.5 25.708C36.4443 25.708 35.5833 26.569 35.5833 27.6247C35.5833 28.6803 36.4443 29.5413 37.5 29.5413C38.5557 29.5413 39.4167 28.6803 39.4167 27.6247C39.4167 26.569 38.5557 25.708 37.5 25.708ZM41.3333 29.5413C40.2777 29.5413 39.4167 30.4023 39.4167 31.458C39.4167 32.5137 40.2777 33.3747 41.3333 33.3747C42.389 33.3747 43.25 32.5137 43.25 31.458C43.25 30.4023 42.389 29.5413 41.3333 29.5413Z" fill="black"/></g><defs><clipPath id="clip0_1_1146"><rect width="46" height="46" fill="white" transform="translate(3 2.70801)"/></clipPath></defs></svg>`,
            icon_5:`<svg class="icon-wrapper" viewBox="0 0 53 54" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_1_1146)"><path d="M26 2.70801C13.2796 2.70801 3 12.9876 3 25.708C3 38.4284 13.2796 48.708 26 48.708C38.7204 48.708 49 38.4284 49 25.708C49 12.9876 38.7204 2.70801 26 2.70801ZM24.0234 6.66113C24.0459 6.66113 24.0609 6.66113 24.0833 6.66113V16.3044C19.7334 17.2028 16.4167 21.1035 16.4167 25.708C16.4167 30.9714 20.7367 35.2913 26 35.2913C28.2985 35.2913 30.3874 34.4453 32.0495 33.0752L39.7161 39.1846C36.2497 42.7109 31.3906 44.8747 26 44.8747C15.3311 44.8747 6.83333 36.377 6.83333 25.708C6.83333 15.7129 14.2979 7.63444 24.0234 6.66113ZM39.4167 11.9919C40.1204 12.6807 40.7419 13.4219 41.3333 14.208C40.2777 14.208 39.4167 15.069 39.4167 16.1247C39.4167 17.1803 40.2777 18.0413 41.3333 18.0413C42.112 18.0413 42.7708 17.5622 43.0703 16.9033C43.3473 17.4499 43.5645 18.0114 43.7891 18.5804C43.4447 18.9248 43.25 19.4264 43.25 19.958C43.25 20.8789 43.9388 21.5752 44.8073 21.7549C45.0693 23.0277 45.1667 24.3529 45.1667 25.708C44.111 25.708 43.25 26.569 43.25 27.6247C43.25 28.5531 43.9313 29.3092 44.8073 29.4814C44.3281 31.9147 43.4072 34.1908 42.112 36.1898L34.4453 30.0804C35.1416 28.7552 35.5833 27.2952 35.5833 25.708C35.5833 23.3796 34.7074 21.2682 33.3073 19.5986L39.4167 11.9919ZM37.5 18.0413C36.4443 18.0413 35.5833 18.9023 35.5833 19.958C35.5833 21.0137 36.4443 21.8747 37.5 21.8747C38.5557 21.8747 39.4167 21.0137 39.4167 19.958C39.4167 18.9023 38.5557 18.0413 37.5 18.0413ZM26 19.958C29.1745 19.958 31.75 22.5335 31.75 25.708C31.75 28.8825 29.1745 31.458 26 31.458C22.8255 31.458 20.25 28.8825 20.25 25.708C20.25 22.5335 22.8255 19.958 26 19.958ZM41.3333 21.8747C40.2777 21.8747 39.4167 22.7357 39.4167 23.7913C39.4167 24.847 40.2777 25.708 41.3333 25.708C42.389 25.708 43.25 24.847 43.25 23.7913C43.25 22.7357 42.389 21.8747 41.3333 21.8747ZM37.5 25.708C36.4443 25.708 35.5833 26.569 35.5833 27.6247C35.5833 28.6803 36.4443 29.5413 37.5 29.5413C38.5557 29.5413 39.4167 28.6803 39.4167 27.6247C39.4167 26.569 38.5557 25.708 37.5 25.708ZM41.3333 29.5413C40.2777 29.5413 39.4167 30.4023 39.4167 31.458C39.4167 32.5137 40.2777 33.3747 41.3333 33.3747C42.389 33.3747 43.25 32.5137 43.25 31.458C43.25 30.4023 42.389 29.5413 41.3333 29.5413Z" fill="black"/></g><defs><clipPath id="clip0_1_1146"><rect width="46" height="46" fill="white" transform="translate(3 2.70801)"/></clipPath></defs></svg>`,
          },
          first_text:["אסטרטגיית ההשקעות של הקרן המתבססת על מומחיות באשראי פרטי (Private Debt) ובסקטור הטכנולוגיה תוך התמקדות באשראי בכיר מגובה נכסים ותזרים מזומנים (Asset-Backed / Cash Flow Based Lending) ומתן פתרונות אשראי לחברות טכנולוגיה ופינטק.הקרן מספקת חוב בכיר (Senior Debt) המגובה באופן ישיר בנכסים ספציפיים ו/או בתזרימי מזומנים צפויים של החברה הלווה.", "סוג זה של מימון קריטי עבור פלטפורמות פינטק, המייצרות תיקי אשראי גדולים (לדוגמה, הלוואות לעסקים קטנים, הלוואות צרכניות), וזקוקות למימון עקבי ומתמשך להמשך צמיחתן."],
          second_text:{title:"סוגי עסקאות והרכב תיק:",para:'הקרן מתמקדת בעסקאות אשראי בעלות מח"מ קצר (Short Duration), לרוב בין 12 ל-36 חודשים אשר מאפשר גמישות בתמחור הריבית ומפחית את הרגישות לשינויים עתידיים בסביבת הריבית. כמו כן, השקעות הקרן מאופיינות במרווח גבוה מעל ריבית הבסיס (כדוגמת SOFR), המשקף את פרמיית הסיכון של אשראי פרטי ומייצר תשואה עודפת למשקיעים. כל עסקה מגובה בביטחונות חזקים ותזרימי מזומנים צפויים, המהווים מקור פירעון עיקרי. זה יכול לכלול שעבודים על תיקי הלוואות, תזרים עתידי מהכנסות של הפלטפורמה ועוד. הקרן צופה לבצע בין 35 ל-40 עסקאות שונות במהלך תקופת ההשקעה, מה שיבטיח פיזור סיכונים נאות על פני לווים, מגזרים גאוגרפיים ותעשיות. הקרן משקיעה אך ורק בשווקים מפותחים (Developed Markets). ההתמקדות היא בעיקר בארצות הברית, מערב אירופה ובריטניה, אוסטרליה וקנדה. מדינות אלו מאפשרות לקרן לפעול בסביבות רגולטוריות יציבות, עם מערכות משפט חזקות ואיתנות כלכלית. אסטרטגיית ההשקעה משלבת שימוש זהיר במינוף ברמת העסקה. הקרן עשויה להשתמש במינוף של עד 50% Loan-To-Value. מינוף זה מאפשר הגדלת תשואה למשקיע, תוך שמירה על פרופיל סיכון מנוהל. הקרן פיתחה מערכות חיתום וניהול סיכונים פנימיות מתקדמות, המבצעות בדיקות נאותות מקיפות (Due Diligence) לכל עסקה פוטנציאלית. תהליך זה כולל ניתוח מעמיק של מודל עסקי הלווה, איכות תיק האשראי, יכולות הניהול והסיכונים הספציפיים.',},
          third_text:{title:"מגבלות חשיפה ופיזור", para:"'הקרן תבצע עסקאות בריבית שוטפת משוקללת בגובה 12.1%. כמו כן, במועד ביצוע עסקת האשראי תגבה הקרן כ-1% עמלות חד פעמיות. בנוסף, תשתמש הקרן במינוף אשר יוסיף כ-3.4% לתשואה הכוללת. בניכוי דמי ניהול, הוצאות שוטפות והפסדי אשראי חזויים בסך כולל של 3.1% תגיע הקרן לתשואה של 13.3%. בנוסף לתשואת הריבית השוטפת, הקרן שואפת לייצר תשואה נוספת באמצעות מרכיב הוני (Equity Kickers), אשר מצורף לעסקאות החוב. מרכיב הוני זה יכול לבוא לידי ביטוי באופציות, warrents או מניות מיעוט, המאפשרות לקרן ליהנות מעליית ערך משמעותית של חברות הפינטק המצליחות, במקרה של הנפקה או מכירה עתידית. הקרן צופה כי מרכיב הוני זה ישיג תשואה משוקללת נוספת של 2.2%. בניכוי דמי הצלחה של 1.4% הקרן צופה תשואה של 14.1% (Net IRR).'" },
          fourth_text:{title:"תהליך ההשקעה:", para:"תהליך ההשקעה מתחיל באחד משני ערוצים: פניה של משקיע אקוויטי (בדרך כלל קרן הון סיכון או קרן PE), או פניה ישירה של הקרן לפלטפורמה לאחר זיהוי הזדמנות השקעה. אורך תהליך ההשקעה, מהשלב שבו נוצר הקשר הראשוני עם פלטפורמה פוטנציאלית ועד לסגירת הסופית, הינו כ-20-25 שבועות. תהליך ההשקעה מייצר סינון אפקטיבי וסלקטיביות גבוהה המשקפים רף גבוה של חיתום. כך לדוגמה במהלך 2024 הגיעו 289 הזדמנויות השקעה, מתוכן בוצעו רק 10 עסקאות (כ-3% מסך הזדמנויות ההשקעה)."},
          fifth_text:{title:"יתרונות אסטרטגיית ההשקעות:", para_1:"עסקאות חוב מובטח בכיר עם מנגנוני הגנה מבניים מפני הפסדי אשראי המספקים הגנה יעילה גם בתקופות מיתון.",
          para_2:"שעבוד מלא וקדימות על נכסי הבסיס ותזרימי המזומנים הנובעים מהם.",
          para_3:'עסקאות בריבית משתנה, מח"מ קצר ומרווח גבוה.',
          para_4:"כריות הגנה הוניות והשתתפות ראשונית של הפלטפורמות בהפסדי אשראי.",
          para_5:"הקרן השלימה כ-16 עסקאות וקראה למעל 50% מסך התחייבויות המשקיעים בקרן. בכוונת הקרן לפזר את השקעותיה על פני כ-35-40 עסקאות שונות.",
          }, 
        },
            market:{
                 title: "סקירת שוק",
            market:[
                {text:'שוק האשראי הגלובלי חווה בעשור האחרון צמיחה משמעותית של מקורות מימון אלטרנטיביים שאינם בנקאיים. מקורות אלו הפכו למרכזיים במימון עסקים וצרכנים, במיוחד מאז המשבר הפיננסי הגלובלי של שנת 2008.  בעקבות המשבר, רגולציות מחמירות כמו באזל III אילצו את הבנקים להגדיל כריות הון ולצמצם את החשיפה להלוואות בסיכון גבוה יותר. מגמה זו, לצד מגבלות נוספות על המערכת הבנקאית המסורתית, יצרה מחסור בזמינות של אשראי – במיוחד עבור עסקים קטנים ובינוניים (SME) ותרמה לצמיחה מהירה של שוק האשראי החוץ בנקאי.'},
                {text:'במסגרת זו, התפתח תחום חוב מגובה נכסים מוחשיים כגון חשבונות חייבים, מלאי, ציוד או תיקי הלוואות (Asset Backed Lending ("ABL")). מודל ה-ABL מתמקד במימון כנגד תיקי נכסים ותזרימים מפוזרים, במסגרתם נעשה שימוש בביטחונות, בהתאם לאופי העסק ולפרופיל הנכסים שלו. הנכסים השכיחים ביותר כוללים תיקי אשראי לעסקים או צרכנים.'},
                {text:"הגמישות של עסקאות מסוג ABL באה לידי ביטוי גם בקובננטים: בניגוד להלוואות מסורתיות המותנות לרוב ביחסי חוב/EBITDA, כאן ההתניות מתמקדות גם בסולבנטיות של הלווה וגם בתפקוד הנכסים המשועבדים – כמו שיעור חובות אבודים, שיעורי פיגורים, יחס Value-to-Loan, וכו'. כתוצאה מכך, ABL מספק לחברות גישה למימון מותאם ויציב גם בתקופות מאתגרות, מבלי להכביד עליהן יתר על המידה בדרישות פיננסיות נוקשות – כל זאת תוך שמירה על בטחון גבוה יחסית למלווה."},
                {text:'בשנים האחרונות, ובעיקר לאור עליית הריבית, זמינות האשראי הבנקאי פחתה ויצרה ביקוש לאשראי ממקורות מימון חוץ בנקאיים, דוגמת ABL. כמו כן, שוק המימון מגובה נכסים חווה צמיחה מתמדת כאשר בשנת 2023 הגיע להיקף של 682 מיליארד דולר, כאשר הצפי לשנת 2033 עומד על היקף של 1.28 טריליון דולר.'}
            ]
            },
              track:{
              title: "תשואות עבר (Track-Record)",
              note:"נכון לתאריך 31 בדצמבר 2024",
              list: [
                {text:"היקף של כ-3.0 מיליארד דולר עסקאות אשראי אשר בוצעו עם חברות פינטק גלובליות החל משנת 2000."},
                {text:"תשואת הקרן הראשונה (ALF I) אשר גייסה 155 מיליון דולר בשנת 2017 עומדת על 14.9% (Net IRR)"},
                {text:"תשואה הקרן השנייה (ALF II) אשר גייסה כ-200 מיליון דולר בשנת 2020/2021 עומדת על 10.8% (Net IRR)."},
                {text:" סה״כ 0% הפסדי אשראי באסטרטגיית ההשקעות של מנהל הקרן עם תשואה כוללת של 10.9% (Net IRR) ותשואת קופון של 10.8% (Net IRR)."},
            ]
          },
          team:{
            title:'צוות הקרן',
            text:'צוות הקרן כולל מעל ל-35 מנהלי השקעות, מנהלי סיכונים ואנשי תפעול. הקרן מנהולת על ידי רותי פורמן (שותפה מנהלת), עידו ויגדור (שותף מנהל), אלכס גינזבורג (שותף, מנהל סיכונים ראשי).'
            },
            risks:{
          title:'סיכונים עיקריים',
      text: 'השקעה בקרן מציעה פוטנציאל תשואה אטרקטיבי לצד פרופיל סיכון מנוהל. יחד עם זאת, כמו כל השקעה, ובמיוחד בתחום החוב הפרטי, היא כרוכה בסיכונים מהותיים. יש לציין כי רשימה זו אינה ממצה, ומומלץ לכל משקיע לבצע בדיקת נאותות עצמאית ומקיפה ולהיוועץ ביועצים מקצועיים.',
      note:'הערה חשובה: אין ברשימה זו משום מיצוי של כל הסיכונים הכרוכים בהשקעה, והיא נועדה לספק סקירה כללית בלבד. על כל משקיע לבצע בדיקת נאותות עצמאית ומקיפה (Due Diligence) ולהיוועץ ביועצים מתאימים בטרם קבלת החלטת השקעה.',
      left_risks: [
        {number:"1", title:"סיכון אשראי וסיכון פלטפורמה", pargraph:`<p><strong>פירוט: </strong>הקרן עוסקת במתן אשראי מגובה נכסים לפלטפורמות פינטק, ולפיכך חשופה לסיכון כשל הפלטפורמה בפירעון התיק או באי-עמידה בתנאי ההלוואה. סיכון זה יכול לנבוע מקשיים תזרימיים, ניהול כושל, או שינויים בלתי צפויים בשוק. כמו כן, חשופה הקרן לאי סולבנטיות של הפלטפורמה עצמה ויכולתה לספק הלוואות חדשות או לספק שירותים לתיק האשראי הקיים, מה שעלול להוביל לפגיעה בביצועי הקרן. יתר על כן, איכות החיתום של ההלוואות באחת או יותר מהפלטפורמות עלולה להתברר בדיעבד כנמוכה, ולייצר מספר רב מהצפוי של הלוואות בכשל. </p>`, extra_pargraph:`<p><strong>הגנה: </strong> הקרן נוקטת במספר מנגנוני הגנה להפחתת סיכון האשראי וכשל הפלטפורמה כגון פיזור רחב, מינוף זהיר (עד 50%), תהליך חיתום קפדני, כחלק אינהרנטי מהאסטרטגיה כל ההלוואות מגובות בנכסים ו/או תזרימי מזומנים ולראייה, למנהל הקרן יש היסטוריה של 0% הפסדי אשראי באסטרטגיית השקעות זו.</p>`},
        {number:"3", title:"סיכון שערוך", pargraph:`<p><strong>פירוט: </strong>נכסי הקרן הם נכסים פרטיים שאינם נסחרים בבורסה. הערכת שווים (Valuation) מתבצעת אחת לרבעון  אך עשויה להיות מורכבת יותר ונתונה לשיקול דעת, בהשוואה לנכסים סחירים. קיים סיכון כי הערכת השווי המוצגת אינה משקפת במדויק את שווי השוק האמיתי של הנכסים בכל רגע נתון. </p>`, extra_pargraph:`<p><strong>הגנה: </strong> הקרן פועלת בשקיפות מלאה ובסטנדרטים מחמירים בכל הנוגע לשערוך נכסיה. הערכת השווי מתבצעת על ידי גורמי מקצוע חיצוניים בלתי תלויים, על בסיס מתודולוגיות הערכה מקובלות בתחום ובהתאם לכללי חשבונאות מחמירים.</p>`},
        {number:"5", title:"סיכון תחרות והצפת שוק", pargraph:`<p><strong>פירוט: </strong>שוק האשראי הפרטי, ובפרט מימון פלטפורמות פינטק, חווה צמיחה משמעותית בשנים האחרונות ומושכת אליה שחקנים חדשים רבים. תחרות גוברת זו עלולה להוביל לשחיקת תשואות, להפחתת המרווחים על ההלוואות, להקלה בתנאי החיתום אשר עלולים להקשות על הקרן לאתר עסקאות אטרקטיביות העומדות ביעדי התשואה והסיכון שלה, ובכך להשפיע על ביצועי הקרן ועל יכולתה להשיא תשואה עודפת למשקיעים. </p>`, extra_pargraph:`<p><strong>הגנה: </strong>הקרן נהנית מיתרון משמעותי בזכות היותה זרוע החוב של קבוצת ויולה. כלומר היא בעלת הבנה עמוקה בסקטור הטכנולוגיה, יכולות חיתום מבוססות נתונים ורשת קשרים גלובלית ענפה. קשרים אלו מאפשרים איתור עסקאות איכותיות מחוץ לשוק (Off-Market Deals) שאינן נגישות למתחרים. כמו כן, תהליך החיתום הקפדני והסלקטיבי של הקרן מביא לכך שהקרן תשקיעה רק בעסקאות בעלות פרופיל סיכון-תשואה אטרקטיבי, גם בסביבה תחרותית.</p>`},
      ],
      right_risks:[
        {number:'2', title:'סיכון נזילות (קרן סגורה)',pargraph:`<p><strong>פירוט: </strong> הקרן הינה קרן סגורה, ואין מנגנון נזילות המאפשר למשקיעים למשוך את כספם לפני תום חיי הקרן, הנאמדים ב-7 שנים עם אפשרות להארכה של שתי שנים (+1,+1). משמעות הדבר היא כי ההשקעה הינה ארוכת טווח ואינה נזילה. משקיעים צריכים להיות מוכנים לכך שכספם יהיה "נעול" לכל אורך חיי הקרן, וכי לא תהיה להם אפשרות לממש את השקעתם במקרה של צורך בלתי צפוי בכסף. כמו כן, ייתכן כי אורח חיי הקרן יתארך מעבר לכך בנסיבות מיוחדות.</p>`},
        {number:'4', title:'סיכון רגולטורי ושינויי חקיקה',pargraph:`<p><strong>פירוט: </strong> תחום הפינטק והאשראי החוץ בנקאי נמצא בהתפתחות מתמדת, ונתון לשינויים רגולטוריים וחקיקתיים במדינות השונות שבהן הקרן פועלת. שינויים אלו יכולים לכלול החמרה בתנאי רישוי, הטלת מגבלות על שיטות מימון מסוימות, דרישות הון מוגדלות, או שינויים בדיני הגנת הצרכן. שינויים כאלה עלולים להשפיע לרעה על פעילות הפלטפורמות שבהן הקרן משקיעה, להגביל את יכולתן לייצר אשראי, או להטיל עלויות תפעול נוספות, ובכך לפגוע בתשואות הקרן.</p>`,extra_pargraph:`<p><strong>הגנה: </strong> הקרן פועלת בשווקים מפותחים  בעלי סביבה רגולטורית יציבה יחסית ומערכות משפט חזקות. צוות הקרן כולל מומחים בעלי הבנה מעמיקה של הסביבה הרגולטורית בתחום הפינטק, והקרן מקיימת מעקב שוטף וצמוד אחר התפתחויות רגולטוריות במדינות הרלוונטיות. </p>`},
        {number:'6', title:'סיכון תפעולי וניהולי',pargraph:`<p><strong>פירוט: </strong>למרות הניסיון והמוניטין של מנהל הקרן, קיים סיכון תפעולי הקשור לניהול הקרן. סיכונים אלו כוללים, בין היתר, טעויות בניהול השקעות, כשלים במערכות פנימיות, או אי עמידה בציות לרגולציה וכדומה אשר עלולים להשפיע על ביצועי הקרן ועל התשואות למשקיעים. </p>`,extra_pargraph:`<p><strong>הגנה: </strong>הקרן מאמצת נהלי עבודה סדורים ומערכות ניטור ודיווח. כמו כן, את הקרן מלווים יועצים ונותני שירותים מובילים בתחומם.  </p>`},
      ],
      mobile_risks:[
        {number:"1", title:"סיכון אשראי וסיכון פלטפורמה", pargraph:`<p><strong>פירוט: </strong>הקרן עוסקת במתן אשראי מגובה נכסים לפלטפורמות פינטק, ולפיכך חשופה לסיכון כשל הפלטפורמה בפירעון התיק או באי-עמידה בתנאי ההלוואה. סיכון זה יכול לנבוע מקשיים תזרימיים, ניהול כושל, או שינויים בלתי צפויים בשוק. כמו כן, חשופה הקרן לאי סולבנטיות של הפלטפורמה עצמה ויכולתה לספק הלוואות חדשות או לספק שירותים לתיק האשראי הקיים, מה שעלול להוביל לפגיעה בביצועי הקרן. יתר על כן, איכות החיתום של ההלוואות באחת או יותר מהפלטפורמות עלולה להתברר בדיעבד כנמוכה, ולייצר מספר רב מהצפוי של הלוואות בכשל. </p>`, extra_pargraph:`<p><strong>הגנה: </strong> הקרן נוקטת במספר מנגנוני הגנה להפחתת סיכון האשראי וכשל הפלטפורמה כגון פיזור רחב, מינוף זהיר (עד 50%), תהליך חיתום קפדני, כחלק אינהרנטי מהאסטרטגיה כל ההלוואות מגובות בנכסים ו/או תזרימי מזומנים ולראייה, למנהל הקרן יש היסטוריה של 0% הפסדי אשראי באסטרטגיית השקעות זו.</p>`},
        {number:'2', title:'סיכון נזילות (קרן סגורה)',pargraph:`<p><strong>פירוט: </strong> הקרן הינה קרן סגורה, ואין מנגנון נזילות המאפשר למשקיעים למשוך את כספם לפני תום חיי הקרן, הנאמדים ב-7 שנים עם אפשרות להארכה של שתי שנים (+1,+1). משמעות הדבר היא כי ההשקעה הינה ארוכת טווח ואינה נזילה. משקיעים צריכים להיות מוכנים לכך שכספם יהיה "נעול" לכל אורך חיי הקרן, וכי לא תהיה להם אפשרות לממש את השקעתם במקרה של צורך בלתי צפוי בכסף. כמו כן, ייתכן כי אורח חיי הקרן יתארך מעבר לכך בנסיבות מיוחדות.</p>`},
        {number:"3", title:"סיכון שערוך", pargraph:`<p><strong>פירוט: </strong>נכסי הקרן הם נכסים פרטיים שאינם נסחרים בבורסה. הערכת שווים (Valuation) מתבצעת אחת לרבעון  אך עשויה להיות מורכבת יותר ונתונה לשיקול דעת, בהשוואה לנכסים סחירים. קיים סיכון כי הערכת השווי המוצגת אינה משקפת במדויק את שווי השוק האמיתי של הנכסים בכל רגע נתון. </p>`, extra_pargraph:`<p><strong>הגנה: </strong> הקרן פועלת בשקיפות מלאה ובסטנדרטים מחמירים בכל הנוגע לשערוך נכסיה. הערכת השווי מתבצעת על ידי גורמי מקצוע חיצוניים בלתי תלויים, על בסיס מתודולוגיות הערכה מקובלות בתחום ובהתאם לכללי חשבונאות מחמירים.</p>`},
        {number:'4', title:'סיכון רגולטורי ושינויי חקיקה',pargraph:`<p><strong>פירוט: </strong> תחום הפינטק והאשראי החוץ בנקאי נמצא בהתפתחות מתמדת, ונתון לשינויים רגולטוריים וחקיקתיים במדינות השונות שבהן הקרן פועלת. שינויים אלו יכולים לכלול החמרה בתנאי רישוי, הטלת מגבלות על שיטות מימון מסוימות, דרישות הון מוגדלות, או שינויים בדיני הגנת הצרכן. שינויים כאלה עלולים להשפיע לרעה על פעילות הפלטפורמות שבהן הקרן משקיעה, להגביל את יכולתן לייצר אשראי, או להטיל עלויות תפעול נוספות, ובכך לפגוע בתשואות הקרן.</p>`,extra_pargraph:`<p><strong>הגנה: </strong> הקרן פועלת בשווקים מפותחים  בעלי סביבה רגולטורית יציבה יחסית ומערכות משפט חזקות. צוות הקרן כולל מומחים בעלי הבנה מעמיקה של הסביבה הרגולטורית בתחום הפינטק, והקרן מקיימת מעקב שוטף וצמוד אחר התפתחויות רגולטוריות במדינות הרלוונטיות. </p>`},
        {number:"5", title:"סיכון תחרות והצפת שוק", pargraph:`<p><strong>פירוט: </strong>שוק האשראי הפרטי, ובפרט מימון פלטפורמות פינטק, חווה צמיחה משמעותית בשנים האחרונות ומושכת אליה שחקנים חדשים רבים. תחרות גוברת זו עלולה להוביל לשחיקת תשואות, להפחתת המרווחים על ההלוואות, להקלה בתנאי החיתום אשר עלולים להקשות על הקרן לאתר עסקאות אטרקטיביות העומדות ביעדי התשואה והסיכון שלה, ובכך להשפיע על ביצועי הקרן ועל יכולתה להשיא תשואה עודפת למשקיעים. </p>`, extra_pargraph:`<p><strong>הגנה: </strong>הקרן נהנית מיתרון משמעותי בזכות היותה זרוע החוב של קבוצת ויולה. כלומר היא בעלת הבנה עמוקה בסקטור הטכנולוגיה, יכולות חיתום מבוססות נתונים ורשת קשרים גלובלית ענפה. קשרים אלו מאפשרים איתור עסקאות איכותיות מחוץ לשוק (Off-Market Deals) שאינן נגישות למתחרים. כמו כן, תהליך החיתום הקפדני והסלקטיבי של הקרן מביא לכך שהקרן תשקיעה רק בעסקאות בעלות פרופיל סיכון-תשואה אטרקטיבי, גם בסביבה תחרותית.</p>`},
        {number:'6', title:'סיכון תפעולי וניהולי',pargraph:`<p><strong>פירוט: </strong>למרות הניסיון והמוניטין של מנהל הקרן, קיים סיכון תפעולי הקשור לניהול הקרן. סיכונים אלו כוללים, בין היתר, טעויות בניהול השקעות, כשלים במערכות פנימיות, או אי עמידה בציות לרגולציה וכדומה אשר עלולים להשפיע על ביצועי הקרן ועל התשואות למשקיעים. </p>`,extra_pargraph:`<p><strong>הגנה: </strong>הקרן מאמצת נהלי עבודה סדורים ומערכות ניטור ודיווח. כמו כן, את הקרן מלווים יועצים ונותני שירותים מובילים בתחומם.  </p>`},
    ]
      },
      investor:{
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
          },
      fund_card:{
          read:"קרא עוד ←",
            funds: [
            {title:'השקעות לטווח ארוך לטווח ארוך', description:` מה השקעות לטווח ארוך ומתי השקעות לטווח ארוך?<br> דוגמאות: השקעות זמניות לבטווח לטווח ארוך כמו נדלן<br> פיתוח סיכונים: השרכות שיל פיתוח השקעות בריח`, },
            {title:'הקרנות המבטיחות של השנה', description:`מהי השקעה לטווח קצר ומהי השקעה לטווח ארוך?<br>דוגמאות: השקעות יומיות לעומת השקעות לטווח ארוך כמו נדל"ן<br> פיזור סיכונים: החשיבות של פיזור השקעות בתיק`},
            {title:'הזדמנויות בשוק ההון',description:`איך להתחיל להשקיע? צעדים ראשונים<br>הקצאת נכסים: איך לבנות תיק השקעות מותאם אישית<br>פיזור סיכונים: החשיבות של פיזור השקעות בתיק` },
            ],
        },
          download:{
            isOpen: false,
            title:'מסמכי הקרן',
            subtitle:'ניתן להוריד את הדוח רק למשתמשים רשומים',
            button_text:'הצג את כל מסמכי הקרן',
            chevron_down:`<svg width="36" height="39" viewBox="0 0 36 39" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10.021 14.8447C9.4454 15.4518 9.4454 16.4323 10.021 17.0393L16.7949 24.1834C17.3705 24.7904 18.3002 24.7904 18.8758 24.1834L25.6497 17.0393C26.2253 16.4323 26.2253 15.4518 25.6497 14.8447C25.0742 14.2377 24.1444 14.2377 23.5688 14.8447L17.828 20.8838L12.1018 14.8447C11.5263 14.2377 10.5818 14.2533 10.021 14.8447Z" fill="black"/></svg>`,
            report:` <svg class="report-svg" width="53" height="53" viewBox="0 0 53 53" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M11.7699 7.2666H33.4365C34.5858 7.2666 35.688 7.72315 36.5006 8.53581C37.3133 9.34846 37.7699 10.4507 37.7699 11.5999V46.2666H11.7699C10.6206 46.2666 9.51838 45.8101 8.70573 44.9974C7.89307 44.1847 7.43652 43.0825 7.43652 41.9333V11.5999C7.43652 10.4507 7.89307 9.34846 8.70573 8.53581C9.51838 7.72315 10.6206 7.2666 11.7699 7.2666V7.2666Z" stroke="#404148" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"/><path d="M37.7699 26.7666H46.4366V41.9333C46.4366 43.0825 45.98 44.1847 45.1674 44.9974C44.3547 45.8101 43.2525 46.2666 42.1032 46.2666H37.7699V26.7666Z" stroke="#404148" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"/><path d="M16.1031 18.0996H29.1031" stroke="#404148" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"/><path d="M16.1031 26.7666H29.1031" stroke="#404148" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"/><path d="M16.1031 35.4336H22.6031" stroke="#404148" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
            arrow:`<svg width="15" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 122.88 120.89"><title>download-file</title><path d="M84.58,47a7.71,7.71,0,1,1,10.8,11L66.09,86.88a7.72,7.72,0,0,1-10.82,0L26.4,58.37a7.71,7.71,0,1,1,10.81-11L53.1,63.12l.16-55.47a7.72,7.72,0,0,1,15.43.13l-.15,55L84.58,47ZM0,113.48.1,83.3a7.72,7.72,0,1,1,15.43.14l-.07,22q46,.09,91.91,0l.07-22.12a7.72,7.72,0,1,1,15.44.14l-.1,30h-.09a7.71,7.71,0,0,1-7.64,7.36q-53.73.1-107.38,0A7.7,7.7,0,0,1,0,113.48Z"/></svg>`,
            download_text:'להורדת מסמכי הקרן',
            saved_text:'מסמכים שנשמרו במערכת (3)',
            mobile_download:'להורדה',
            docs: [    
            {title:'מצגת הקרן', subtitle:'מצגת השקעות של הקרן', date:'01.06.25', open: false },
            {title:'דיווח משקיעים', subtitle:'ביצועים נצברים מעודכנים', date:'31.04.25', open: false},
            {title:'הסכם שותפות (LPA)', subtitle:'', date:'23.03.25', open: false},
            {title:'מסמכי הצטרפות (subscription)', subtitle:'', date:'23.03.25', open: false},
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
    },
    }
  } 
}
</script>


<style lang="scss">

*{
  font-family: 'Huninn', sans-serif;
  box-sizing: border-box;
}
:root {
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

.flex{
  display: flex;

}

.center{
  display:flex;
  justify-self: center;

}

#fund{
 display: flex;
    flex-direction: column;
    justify-items: center;
    padding: 1rem;
    max-width: 1033px !important;
    justify-self: center;
    direction: rtl;
    overflow: hidden;
    
@media (max-width: 768px) {
  #fund{
    padding: 0.5rem;
    justify-items: center;
  }
}
.container{
  display: flex;
  flex-direction: column;
}

.header{
  height: 3.1rem;
  background: #D9D9D9;
  border-radius: var(--border-radius);
  display: flex;
  align-items: center;
  padding-right: 2rem;
  margin-bottom: 1rem;
  font-weight: bold;
  font-size: var(--font-size);
}

.border{
  border: #dfdfdf solid var(--border-width);
  border-radius: var(--small-border-radius);
  padding: 20px;
  gap: 20px;
}

.title {
  text-align: right;
  color: #404148;
  font-size: 18px;
  font-weight: 700;
  line-height: 1.2;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  border:0;
  
}

.main-text {
    max-width: 1023px;
    width: 90%;
    margin: auto;
    text-align: right;
    display: flex;
    flex-direction: column;
    color: black;
    line-height: 1.4;
    word-wrap: break-word;
  }

  .main-text h2 {
    font-size: 1.5rem; 
    font-weight: 700;
  }

  .main-text p {
    font-size: 1.2rem;
    font-weight: 400;
  }
     .mobile-title {
    display:none;
}


  @media (max-width: 768px) {
    .main-text h2 {
      font-size: 1.3rem;
      margin-top: 1rem;
    }
    .main-text p {
      font-size: 1rem;
    }
    .grid-center{
      width: 90%;       
      max-width: 90vw;
      gap: 0.1rem;
    }
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
  // start eq
  #eq {
  background: white;
  width:100%;
  border-radius: 3rem;
  outline: 0.1rem #B7EBEB solid;
  outline-offset: -0.1rem;
  margin: 1rem 0;
  padding:0.5rem 0.5rem;
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
  justify-self: center;
  justify-content: start;
  flex-wrap: wrap;
  gap: 2rem;

  .eq-data {
  display: flex;
  justify-content: center; 
  align-items: center;
  justify-self:center;
  gap: 0.5rem; 
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
  padding-left:0.5rem;
}
.eq-item-1{
padding-left: 2rem;
}
  .bigger{
    font-size: 1.6rem;
  }

 .eq-item + .eq-item {
  border-left: 0.01rem solid #A3A3A3;
}
.eq-link{
  text-decoration: none;
  color: white;
}

.eq-black-box {
  background: black;
  color: white;
  border-radius: var(--border-radius);
  width: 35%;
  padding: 0.3rem 0.3rem 0.3rem 0.3rem;
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
  justify-content: start;
  gap: 0.5rem;
  margin-right:0;
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
  width:50%;
  word-wrap: break-word;
  
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
    margin-bottom:1rem ;
    grid-auto-rows: 1fr;
    gap:0.1rem;
    
  
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
    gap:1rem;
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
    margin-right:auto;
    width:75%;
  }
  .bigger{
    font-size: 1.2rem;
  }
  }  
}
// style violet

#violet{
  .main-text {
    width: 90%;
    margin: auto;
    text-align: right;
    display: flex;
    flex-direction: column;
    color: black;
    line-height: 1.4;
    word-wrap: break-word;
    font-size: var(--font-size);
    
    h2 {
    font-size: 1.5rem; 
    font-weight: 700;
    margin:1.5rem 0 0 0;
  }
  }

.pic_of_div{
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
}
//  end violet
// card
.card {
    background: #fff;
    border: var(--border-width) solid #dfdfdf;
    border-radius: var(--small-border-radius);
    padding: 1rem;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.1rem;
    
    .title {
    font-size: var(--card-title-size);
    font-weight: 700;
    color: #171717;
    margin-top:0.2rem;
   
  }

  .subtitle {
    font-size: var(--font-size);
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
   font-size: 2.5rem;
    fill: black;
    display: block; 
  }
  
  
  }

// start gp
#gp{
    .cubes-container {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1rem;
    max-width: 1000px;
    margin: auto;
    padding: 20px;
    
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
      height: 80%;
    }
  .subtitle{
    text-align:center;
  }

  .gp-icon{
    width:3rem;
    height:auto;
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
}
// end gp

// start about
#about{
  margin:0  0 2rem 0;
.about-cubes {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1rem;
    max-width: 1000px;
    margin: auto;
     padding-top: 0.5rem;
  }

  .about-card {
    background: #fff;
    border: var(--border-width) solid #dfdfdf;
    border-radius: var(--small-border-radius);
    padding: 0.2rem;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.5rem;
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
    text-align:center;
  }

  .extra-subtitle {
    font-size:20px;
    font-weight: 400;
    color: #171717;
    display:block;
    text-align:center;
  }

  .icon-wrapper {
    width:2.5rem;
    height:2.5rem;
    fill: black;
    display: block; 
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
    .pic_of_gp{
      display: none;
    }
    .about-text{
        display: none;
      } 
  }
}
// end about

// start fider
#fider{
  margin-bottom: 2rem;
 .fider-cubes {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1rem;
    margin: auto;
    padding-top: 0.5rem;
  }

  .fider-card {
    background: #fff;
    border: var(--border-width) solid #dfdfdf;
    border-radius: var(--small-border-radius);
    padding: 1rem;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.1rem;
  }

  .title {
    font-size: var(--card-title-size);
    font-weight: 700;
    color: #171717;
   
  }

  .subtitle {
    font-size: var(--font-size);
    font-weight: 400;
    color: #171717;
    text-align:center ;
  }

  .extra-subtitle {
    font-size:var(--font-size);
    font-weight: 400;
    color: #171717;
    display:block;
    text-align:center;
  }

  .icon-wrapper {
   width:2.5rem;
   height:2.5rem;
    fill: black;
    display: block; 
  }

 
  @media (max-width: 1024px) {
    .fider-cubes{
      grid-template-columns: repeat(2, 1fr);
    }

  }

  @media (max-width: 600px) {
    .fider-cubes{
      grid-template-columns: 1fr;
      margin-bottom: 1rem;
    }
    .pic_of_gp{
      display: none;
    }

    
  }
}
  // fider end
  // stragety start
  #stragety{
    margin-bottom: 2rem;
  .icon-wrapper{
     width: 40px;
     height: 40px; 
    }
  .box{
    border: #A3A3A3 solid 1px;
    border-radius: 10px;
    padding: 1.5rem;
    text-align: center;
    display: flex;
    align-items: center;
    gap: 10px;
    margin-bottom: 2rem;
  }
  .img-container{
    display:flex; 
    justify-content:center;
    
    img{
      max-width:60%;
      height:auto;
    }
    

}
  .block {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 16px;
    margin-bottom: 20px;
    flex-wrap: wrap;
    
    .text-icon{
      align-self: center;
      width: 40px;
      height: 40px;
     }
     .stragety-title{
      flex-grow: 1;
      margin-bottom: 0;
      padding-right: 1.5vw;
      white-space: normal;
     }
     .stragety-para{
      flex-grow: 1;
      margin-top: 0;
      margin-bottom: 0;
      padding-right: 1.5vw;
      padding-left: 0.4rem;
      
     }
     .hr{
      width: 80%;
      border: 0.5px solid #e8e8e8;
     }
     
  }
  .hr{
      width: 80%;
      border: 0.5px solid #e8e8e8;
     }

.image img {
  max-width:100%;
  height:auto;
}


@media (max-width: 768px) {
  .block {
    flex-direction: column; 
    align-items: flex-start;
  }
  .img-container{
    display:none; 
  }
  .top-strategy-title{
    text-align: left;
    margin-bottom: 1rem;
  }
  .stragety-text{
    font-size:1rem;
  }
   
}
}
  // stragety end
  // market track and team start
  #market, #track, #team{
    margin-bottom: 2rem;
  }
   .img{
        max-width: 100%;
        height: auto;
    }

    // risks
    #risks-container{
      margin-bottom: 2rem;
    }
    
  .risks_border{
    border: #dfdfdf solid 0.5px;
    border-radius: 10px;
    padding:10px;
    width:90%;
    justify-self: center;
    
  }
  .mobile-risks{
    display:none
  }
  .desktop-risks{
    display: flex;
    flex-direction: row;
    justify-content: center;
    padding: 10px;
    gap: 5%;
    
    

    .left_risks{
      width: 45%;
      display: flex;
      flex-direction: column;
      gap: 10px;
      
      
      
    }
    .right_risks{
      width: 40%;
      display: flex;
      flex-direction: column;
      gap: 10px;
    }
    .number{
        font-size:10vh;
        align-self: center;
        margin-left: 20px;
      }

    .text{
      text-align: right;
    
    }
    .title{
        text-align: justify;
        
      }
  }

  @media (max-width: 768px) {
    #risks-container{
      width:100%;
      justify-self: center;  
    }
    .risks-title{
      margin-bottom: -1.5rem;
    }
    .desktop-risks{
      display:none;
    }
    .mobile-risks{
        display:block;
       
    }
    .risks_border{
        border:none;
    }
    .mobile-number{
      font-size:4rem;
      align-self: center;
      margin-left: 1rem;
    }
    .mobile-text{
      text-align: right;
      padding-left: 0.5rem;
    }
    .mobile-title{
      text-align: right;
      font-size: 1.2rem;
      font-weight: 700;
      padding-top: 0.5rem;
      white-space: normal;
      width:80%;
    }
    .mobile-flex{
      display:flex;
    }
    .mobile-card{
        margin-bottom:1rem;
    }
    
  }
  // risks end

  // investor start

  .investor-container{
    display: flex;
    flex-direction: column;
    margin-bottom: 2rem;

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
  border-top: var(--border-width) solid black;
  margin:auto  auto 3rem  auto;
 
  .title {
  font-weight: 700;
  border-left: var(--border-width) solid black;  
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
  border-bottom: var(--border-width) solid #000;
  font-size: 18px;
  line-height: 1.5;
}

.desktop-border{
    border: var(--border-width) solid var(--border-color);
    border-radius: var(--small-border-radius);
    padding: 2rem;
  }

  #investment-container{
    margin-bottom:2rem; 
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
    font-size: var(--font-size);
  }

  .title {
    font-weight: 700;
    border: none;
  }

  .value {
    font-weight: 400; 
  }
  
}
// investor end
// start meeting
.document-header-responsive {
  display: flex;
  width:100%;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 0.8rem;
  background: #F6F8FA;
  border-radius: 0.7rem;
  flex-wrap: wrap; 
  cursor:pointer;
}
// end meeting
// start docs

  .chevron-left {
  flex: 0 0 auto;
  margin-right: 12px;
  cursor:pointer;
}
  
.logo-name{
  display:flex;
  align-items: center;
}
.name {
  display: flex;
  flex-direction:column;
  min-width: 0; 
}

.subtitle {
  text-align: right;
  color: #8A8A8A;
  font-size: 14px;
  line-height: 1.4;
  overflow-wrap: anywhere;
}

.report {
  flex: 0 0 auto;
}  

.date-chevron-svg.open  {
transform: rotate(-90deg);
}

@media (max-width: 768px) {
.document-header-responsive {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.8rem 0.3rem 0.8rem 0.8rem;
  background: #F6F8FA;
  border-radius: 12px;
  flex-wrap: nowrap; 

  

  .chevron-left {
  flex: 0 0 auto;
  margin-right: 0.5rem;
  cursor:pointer;
}
  
.logo-name{
  display:flex;
  align-items: center;
}
.name {
  display: flex;
  flex-direction:column;
  min-width: 0; 
  padding: 0.5rem;
}

.subtitle {
  text-align: right;
  color: #8A8A8A;
  font-size: 14px;
  line-height: 1.4;
  overflow-wrap: anywhere;
}

.report {
  flex: 0 0 auto;
}  
.report-svg{
  width: 2.5rem;
  height: 2.5rem;
  
}
}  
}
    
// download
.documents-frame {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 10px 20px;
  box-sizing: border-box;
  background: #fff; 
}

.download {
  display: flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;
  color: #132744;
  font-size: 18px;

  a{
    text-decoration: none;
    color:#132744;
  }
  
}

.download .arrow {
  display: flex;
  align-items: center;
  gap: 4px;
}

.saved-docs {
  display: flex;
  align-items: center;
  gap: 4px;
  text-align: right;
}

.saved-docs .title {
  font-weight: 700;
  font-size: 24px;
}

.saved-docs .count {
  font-weight: 400;
  font-size: 24px;
}
@media (max-width: 768px) {
  .documents-frame {
    align-items: center;
    justify-content: center;
    gap: 1rem;
    padding: 0.5rem;
  }
  .saved-docs {
    text-align: left;
  }
  .saved-docs .title {
    font-size: 1rem;
  }
  .download{
    display: flex;
    
}
  .mobile-download{
      font-size:0.8rem;   
      font-weight: 200;
  }

}
.button-wrapper {
  display: flex;
  justify-content: center;
  width: 100%;
  margin-top: 12px;
}

.primary-button {
  width: 100%;
  max-width: 320px;
  padding: 12px 16px;
  background: white;
  color: #132744;
  font-family: Inter, sans-serif;
  font-size: 14px;
  font-weight: 400;
  border: 1px solid #132744;
  border-radius: 32px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  cursor: pointer;
  box-shadow: 0px 1px 2px rgba(0, 45, 85, 0.25);
  box-sizing: border-box;
  text-decoration: none;
}

.icon-circle {
  width: 2rem;
  height: 2rem;
  background: white;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0px 1px 2px rgba(0, 45, 85, 0.25);
}

.icon {
  width: 0.8rem;
  height: 0.8rem;
}

@media (max-width: 768px) {
  .primary-button {
    font-size: 0.8rem;
    border: none;
    box-shadow: none;
  }
  .icon-circle {
    width: 1.5rem;
    height: 1.5rem;
    box-shadow: 0px 1px 2px rgba(0, 45, 85, 0.25);
  }
  .icon {
    width: 1rem;
    height: 1rem;
  }
}

// full size
.document-container {
    width: 95%;
    height: auto;
    margin: 0.5rem auto;
    padding: 0.6rem;
    border-radius: 12px;
    position: relative;
    aspect-ratio: auto;
    box-sizing: border-box;
    

    .document-background {
    width: 100%;
    height:5rem;
    background: #F6F8FA;
    border-radius: 12px;
    cursor: pointer;
    padding: 0.5rem;
    display: flex;
    justify-content: space-between;
    flex-direction: row-reverse;
    gap: 0.8rem;
    box-sizing: border-box;
    align-content: center;


  .logo-section {
    display: flex;
    flex-direction: row;
    align-content: center;
    gap: 0.5rem;
    flex-wrap: wrap;
    
}

.logo-text {
 flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 0.2em;
    word-break: break-word;
}

.doc-title {
  text-align: right;
  color: #404148;
  font-size: 1.2rem;
  font-weight: 700;
  line-height: 1.2em;
}

.doc-subtitle {
  text-align: right;
  color: #8A8A8A;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5em;
}

.logo-icon {
  width: 6%;
  min-width: 40px;
  position: relative;
}
}
.date-section{
  display:flex;
  padding-left:2rem;
  justify-content: end;
  align-items:center;
  flex-direction:row-reverse;
  
.chevron {
  height: auto;
  width:2rem;
}
.chevron.open {
  transform: rotate(-90deg);
}

.date {
  text-align: center;
  color: black;
  font-size: 1rem; 
  font-weight: 400;
}

}



}
// list start

@media (max-width: 750px) {
  .document-container {
    width: 95%;
    height: auto;
    margin: 0.5rem auto;
    padding: 0.6rem;
    border-radius: 12px;
    position: relative;
    aspect-ratio: auto;
    box-sizing: border-box;
    
  .document-background {
   width: 100%;
    height:4rem;
    background: #F6F8FA;
    border-radius: 12px;
    cursor: pointer;
    padding: 0.5rem;
    display: flex;
    justify-content: space-between;
    flex-direction: row-reverse;
    gap: 0.8rem;
    box-sizing: border-box;
    align-content: center;

    .document-header {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    gap: 0.4rem;
    position: relative;
  }

    .doc-title {
    color: #404148;
    font-size: 0.7rem;
    font-weight: 700;
    line-height: 1rem;
  }

  .doc-subtitle {
    color: #8A8A8A;
    font-size: 0.5rem;
    font-weight: 400;
    line-height: 1rem;
  }

  .logo-icon {
    width: 15%;
    min-width: 40px;
    height: auto;
  }
  .logo-section {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    gap: 0.5rem;
    flex-wrap: wrap;
    width:100%;
  }

  .logo-text {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 0.2em;
    word-break: break-word;
  }
  }
  .date-section{
  display:flex;
  padding-left:0.5rem;
  justify-content: end;
  align-items:center;
  flex-direction:row-reverse;
  
.chevron {
  height: auto;
  width:1.5rem;
}
.chevron.open {
  transform: rotate(-90deg);
}

.date {
  text-align: center;
  color: black;
  font-size: 0.5rem; 
  font-weight: 400;
}
}
}

  
}

// אנימציה
.slide-enter-active, .slide-leave-active {
  transition: all 0.3s ease;
}
.slide-enter-from, .slide-leave-to {
  max-height: 0;
  opacity: 0;
  overflow: hidden;
}
.slide-enter-to, .slide-leave-from {
  max-height: 500px; 
  opacity: 1;
}

// end docs

// fund card
 .card-fund-container {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 2rem;
    width: 100%;
}

.fund-card {
    background: white;
    border-radius: 12px;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    height: 100%; 
}

.fund-header {
    background: linear-gradient(135deg, #8a8a8a 0%, #b8b8b8 100%);
    height: 15rem;
    display: flex;
    flex-direction: column;
    padding: 0.6rem;
    border-radius: 11px;
}

.fund-header-top {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
}

.fund-tone-indicator {
    display: flex;
    align-items: center;
    gap: 6px;
    color: white;
    font-size: 0.6rem;
    font-weight: 500;
}

.fund-tone-dot {
    width: 1.5rem;
    height: 1.5rem;
    background: rgba(255, 255, 255, 0.8);
    border-radius: 50%;
}

.fund-close-btn {
    width: 1.4rem;
    height: 1.4rem;
    background: rgba(0, 0, 0, 0.8);
    border: none;
    border-radius: 50%;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
}

.fund-center-dot {
    width: 4px;
    height: 4px;
    background: rgba(255, 255, 255, 0.6);
    border-radius: 50%;
    align-self: center;
    margin-top: auto;
    margin-bottom: auto;
}

.fund-content {
    padding: 0.1rem 0.5rem;
    text-align: center;
    display: flex;
    flex-direction: column;
    flex: 1; 
    direction: rtl;
}

.fund-title {
    font-size: 1rem;
    font-weight: 700;
    color: #1a1a1a;
    margin-bottom: 0.1rem;
    line-height: 1;
}

.fund-description {
    color: #666;
    font-size: 0.7rem;
    line-height: 1.1;
    margin-bottom: 0.5rem;
    flex-grow: 1; 
}

.fund-cta-button {
    background: linear-gradient(135deg, #4285f4 0%, #1a73e8 100%);
    color: white;
    border: none;
    border-radius: 16px;
    padding: 8px 16px;
    font-size: 12px;
    font-weight: 600;
    cursor: pointer;
    width: 100%;
    box-shadow: 0 2px 8px rgba(66, 133, 244, 0.3);
}

        @media (max-width: 480px) {
            .fund-container {
               margin-top:2rem;
            }
            
            .fund-card {
                max-width: 100%;
            }
            
            .fund-header {
                height: 10rem;
            }
            
            .fund-content {
                padding: 0.5rem 0.3rem;
            }
            
            .fund-title {
                font-size: 1rem;
            }
            
            .fund-description {
                font-size: 0.7rem;
                margin-bottom: 12px;
            }
            
            .fund-cta-button {
                padding: 6px 12px;
                font-size: 11px;
            }
        }

        @media (max-width: 320px) {
            .fund-title {
                font-size: 13px;
            }
            
            .fund-description {
                font-size: 9px;
            }
        }
        // end fund card

        // state
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
        width:100%;
        height:auto;
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
