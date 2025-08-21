<template>
    <div class="container" >
      <div class="border">
        <div class="document-header-responsive" @click="toggleList" >
            <div class="chevron-left" v-html="chevron_down"></div>
            <!-- לוגו ושם -->  
            <div class="logo-name">
                <div class="name">
                <div class="title">{{ title }}</div>
                <div class="subtitle">{{ subtitle }}</div>
                </div>
                <div class="report" v-html="report">
                </div>
            </div>
          </div>
       <transition name="slide"> 
      <div v-if="isOpen">
      <!-- download -->
     <div class="documents-frame">
      <div class="download">
          <div class="arrow" v-html="arrow">
          </div>
          <span class="desktop-title">{{ download_text }}</span>
          <span class="mobile-title mobile-download">{{ mobile_download }}</span>
        </div>  
       <div class="saved-docs">
          <span class="title">{{ saved_text }}</span>
        </div>  
    </div>
      
    <!-- list docs -->
     <Doc_list></Doc_list>
    
                <div class="button-wrapper">
                    <a class="primary-button" href="https://morth.nic.in/sites/default/files/dd12-13_0.pdf" target="_blank">{{ button_text }}
                <div class="icon-circle">
                <svg class="icon" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12.6221 3.00488C11.1051 3.00488 9.87109 4.23886 9.87109 5.75586V17.7539C9.87109 19.2709 11.1051 20.5049 12.6221 20.5049H20.127C21.6305 20.5049 23.3779 19.3034 23.3779 17.7539V10.499H19.126C17.609 10.499 16.375 9.26407 16.375 7.74707V3.00488H12.6221ZM17.875 3.44922V7.74707C17.875 8.43707 18.4365 8.99902 19.126 8.99902H23.1816C23.1766 8.99352 23.1754 8.98597 23.1699 8.98047L20.3818 6.07031L17.875 3.44922ZM8.625 4.00879C7.1085 4.00879 5.875 5.24279 5.875 6.75879V16.75C5.875 18.266 7.1085 19.5 8.625 19.5H9.50586C9.16236 19.0845 8.9392 18.5665 8.8877 18H8.625C7.936 18 7.375 17.4395 7.375 16.75V6.75879C7.375 6.06929 7.936 5.50879 8.625 5.50879H8.8877C8.9392 4.94229 9.16186 4.42429 9.50586 4.00879H8.625ZM4.625 5C3.1085 5 1.875 6.234 1.875 7.75V15.75C1.875 17.266 3.1085 18.5 4.625 18.5H5.31055C5.07005 18.047 4.9237 17.5385 4.8877 17H4.625C3.936 17 3.375 16.4395 3.375 15.75V7.75C3.375 7.0605 3.936 6.5 4.625 6.5H4.8877C4.9247 5.961 5.07393 5.453 5.31543 5H4.625Z" fill="#404148"/>
                </svg>
                </div>
              </a>
            </div>   
      </div>
       </transition>      
      </div>
    </div>


</template>


<script>
import Doc_list from './doc_list.vue';


export default {
    name: "Investor",
    components: {Doc_list},
    methods: {
      toggleList() {
      this.isOpen = !this.isOpen
    }
    },
    data(){
        return{
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
            
        }
    }
};
</script>

<style lang="scss">
// documents
.document-header-responsive {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px;
  background: #F6F8FA;
  border-radius: 12px;
  flex-wrap: wrap; 

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
  min-width: 0;
  width:100%;
  

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
  width: 32px;
  height: 32px;
  background: white;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.icon {
  width: 16px;
  height: 16px;
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

</style>