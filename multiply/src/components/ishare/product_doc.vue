<template>
    <div class="container" >
        <div class="document-header-responsive">
            <div class="chevron-left" v-html="chevron_left"></div>
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
          </div>

</template>

<script>



export default {
    name: "Product_doc",
    data(){
        return{
            title:'מסמכי מוצר',
            subtitle:'ניתן להוריד את הדוח רק למשתמשים רשומים',
            report:` <svg class="report-svg" width="53" height="53" viewBox="0 0 53 53" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M11.7699 7.2666H33.4365C34.5858 7.2666 35.688 7.72315 36.5006 8.53581C37.3133 9.34846 37.7699 10.4507 37.7699 11.5999V46.2666H11.7699C10.6206 46.2666 9.51838 45.8101 8.70573 44.9974C7.89307 44.1847 7.43652 43.0825 7.43652 41.9333V11.5999C7.43652 10.4507 7.89307 9.34846 8.70573 8.53581C9.51838 7.72315 10.6206 7.2666 11.7699 7.2666V7.2666Z" stroke="#404148" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"/><path d="M37.7699 26.7666H46.4366V41.9333C46.4366 43.0825 45.98 44.1847 45.1674 44.9974C44.3547 45.8101 43.2525 46.2666 42.1032 46.2666H37.7699V26.7666Z" stroke="#404148" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"/><path d="M16.1031 18.0996H29.1031" stroke="#404148" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"/><path d="M16.1031 26.7666H29.1031" stroke="#404148" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"/><path d="M16.1031 35.4336H22.6031" stroke="#404148" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
            chevron_left:`<?xml version="1.0"?><!DOCTYPE svg  PUBLIC '-//W3C//DTD SVG 1.1//EN'  'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'><svg enable-background="new 0 0 15 26" height="20px" id="Layer_1" version="1.1" viewBox="0 0 15 26" width="15px" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><polygon fill="#231F20" points="12.885,0.58 14.969,2.664 4.133,13.5 14.969,24.336 12.885,26.42 2.049,15.584 -0.035,13.5 "/></svg>`
        }
    }
};
</script>

<style lang="scss">
.document-header-responsive {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 0.8rem;
  width:90%;
  margin: auto;
  max-width: 1026px;
  background: #F6F8FA;
  border-radius: 12px;
  flex-wrap: wrap; 

  .chevron-left {
  flex: 0 0 auto;
  margin-left: 12px;
  cursor:pointer;
}
  
.logo-name{
  display:flex;
  align-items: center;
  gap: 0.2rem;
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
  .logo-name{
    width:80%
  }
}
</style>