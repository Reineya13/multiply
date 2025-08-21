<template>
    <div class="document-container" v-for="(doc, index) in docs" :key="index">
      <a class="document-background" href="https://morth.nic.in/sites/default/files/dd12-13_0.pdf" target="_blank">
        <div class="date-section">
          <div class="chevron date-chevron"><svg viewBox="0 0 31 32" class="date-chevron-svg" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M19.375 8.9398C18.8713 8.4198 18.0575 8.4198 17.5538 8.9398L11.625 15.0598C11.1213 15.5798 11.1213 16.4198 11.625 16.9398L17.5538 23.0598C18.0575 23.5798 18.8713 23.5798 19.375 23.0598C19.8788 22.5398 19.8788 21.6998 19.375 21.1798L14.3633 15.9931L19.375 10.8198C19.8788 10.2998 19.8658 9.44647 19.375 8.9398Z" fill="black"/></svg></div>
          <div class="date">{{ doc.date }}</div>
        </div>
        <div class="logo-section">
          <div class="logo-text">
            <div class="title doc-title">{{doc.title}}</div>
            <div class="subtitle doc-sub">{{doc.subtitle}}</div>
          </div>
          <div class="logo-icon">
            <svg class="logo-icon-svg" viewBox="0 0 50 49" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="24.6958" cy="24.377" r="24.377" fill="#D9D9D9"/><path d="M9.00073 26.3146L25.7599 31.94L39.4719 24.627" stroke="black" stroke-width="2"/><path d="M9.00073 31.799L26.1445 37.4244L40.6908 30.1113" stroke="black" stroke-width="2"/><path d="M22.9181 10C22.9181 10 24.7305 10.5565 28.3553 11.6319C31.9801 12.7073 37.4173 14.0609 37.4173 14.0609C37.4173 14.0609 40.438 18.8738 35.0008 21.5059C29.5636 24.1379 25.9387 25.845 25.9387 25.845L11.4395 21.5059C13.4137 20.829 18.5943 19.0693 21.1056 17.445C23.617 15.8206 23.3603 11.4464 22.9181 10Z" stroke="black" stroke-width="2"/></svg>
          </div>
        </div>
      </a>
</div>


</template>

<script>
export default {
    name: "Doc_list",
    methods: {
    },
    data() {
      return {
        docs: [     
            {title:'מצגת הקרן', subtitle:'מצגת השקעות של הקרן', date:'01.06.25'},
            {title:'דיווח משקיעים', subtitle:'ביצועים נצברים מעודכנים', date:'31.04.25'},
            {title:'הסכם שותפות (LPA)', subtitle:'', date:'23.03.25'},
            {title:'מסמכי הצטרפות (subscription)', subtitle:'', date:'23.03.25'},
        ],
      };
    },
}
</script>

<style lang="scss">

.document-container {
  width: 100%;
  max-width: 925px;
  height:auto;
  max-height: 80px;
  aspect-ratio: 924.75 / 103.68; 
  position: relative;
  margin: 15px auto;

  .document-header {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
}
.chevron {
  position: absolute;
  left: 6%;
  top: 35%;
  width: 3%;
  height: auto;
}

.date {
  position: absolute;
  left: 11%;
  top: 40%;
  text-align: center;
  color: black;
  font-size: 1.2vw; 
  font-family: Inter, sans-serif;
  font-weight: 400;
}

.logo-section {
  position: absolute;
  left: 35%;
  top: 22%;
  width: 60%;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  gap: 2%;
}

.logo-text {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 0.2em;
}

.title {
  text-align: right;
  color: #404148;
  font-size: 1.2vw;
  font-weight: 700;
  line-height: 1.2em;
}

.subtitle {
  text-align: right;
  color: #8A8A8A;
  font-size: 1vw;
  font-weight: 400;
  line-height: 1.5em;
}

.logo-icon {
  width: 6%;
  min-width: 40px;
  position: relative;
}

}

.document-background {
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
  background: #F6F8FA;
  border-radius: 12px;
  text-decoration: none;
}


@media (max-width: 400px) {
  .document-container {
    width: 100%;
    height: 3rem;
    margin: 0.5rem auto;
    background: #F6F8FA;
    border-radius: 12px;
    padding: 0.5rem;
    box-sizing: border-box;
  }

  .document-background {
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: #F6F8FA;
    border-radius: 12px;
    padding: 0.3rem ;
    gap: 0.6rem;
    
  }
  .date-section {
    display: flex;
    flex-direction: column;
    align-items: end;
    width: 1.5rem;
    height:auto;
    
    .date {
    font-size: 0.6rem;
    font-weight: 600;
    color: #000;
    flex-shrink: 0;
  }
  .date-chevron {
    width: 1rem;
    height: 1rem;
    flex-shrink: 0;
    align-self: center;
  }
  
  }
  .logo-section {
    display: flex;
    align-items: start;
    flex-direction: row;
    justify-content: flex-start;
    flex: 1;
    min-width: 0;
    

    .logo-text {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: right;
    align-items: start;
    font-size: 1rem;
    font-weight: 600;
    color: #404148;
    white-space: normal;
    flex: 1;
    direction: rtl;
    .doc-title {
      font-size: 0.7rem;
      white-space: normal;

    }
    .doc-sub {
      flex-shrink: 0;
      font-size: 0.5rem;
    }
  }

  .logo-icon {
    width: 1.5rem;
    height: 1.5rem;
    flex-shrink: 0;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .logo-icon-svg{
    width: 1.5rem;
    height: 1.5rem;
    flex-shrink: 0;
  }


  }



}


</style>