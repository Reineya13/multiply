<template>
<a class="document-header-responsive meeting" href="https://calendly.com" target="_blank">
          <div class="chevron-left " id="chevron">
           <svg width="37" height="37" viewBox="0 0 37 37" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M23.033 10.3846C22.4394 9.79106 21.4806 9.79106 20.887 10.3846L13.9011 17.3706C13.3075 17.9642 13.3075 18.923 13.9011 19.5166L20.887 26.5026C21.4806 27.0961 22.4394 27.0961 23.033 26.5026C23.6266 25.909 23.6266 24.9501 23.033 24.3566L17.1277 18.436L23.033 12.5307C23.6266 11.9371 23.6114 10.963 23.033 10.3846Z" fill="black"/></svg>
          </div>
      <!-- לוגו ושם -->  
          <div class="logo-name" id="logo-name">
            <div class="name" id="name">
              <div class="title" id="title">{{ title }}</div>
              <div class="subtitle" id="subtitle">{{ subtitle }}</div>
            </div>
            <div class="report" id="report">
             <svg id="report-svg"  width="40" height="42" viewBox="0 0 50 52" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2.61258 11.6339C1.56699 23.5352 1.56457 31.9382 2.6177 43.9933C2.87927 46.9874 5.33755 49.3603 8.42409 49.6082C17.6389 50.3482 41.1436 49.6082 43.2271 48.9858C45.3246 48.3592 47.1895 46.8598 47.5932 43.3346C48.4021 36.2707 48.3264 19.7741 47.5931 11.5149C47.3314 8.56723 44.9392 6.2134 41.9028 5.94072C29.4605 4.82333 20.7399 5.04016 8.44213 6.01453C5.34772 6.2597 2.87626 8.63258 2.61258 11.6339Z" stroke="#414141" stroke-width="2.5"/><path d="M22.9519 21.7783H27.3739" stroke="#404040" stroke-width="2.5" stroke-linecap="round"/><path d="M9.68994 21.7783H14.1119" stroke="#404040" stroke-width="2.5" stroke-linecap="round"/><path d="M36.2186 21.7783L40.6406 21.7783" stroke="#404040" stroke-width="2.5" stroke-linecap="round"/><path d="M22.9519 30.2529H27.3739" stroke="#404040" stroke-width="2.5" stroke-linecap="round"/><path d="M9.68994 30.2529H14.1119" stroke="#404040" stroke-width="2.5" stroke-linecap="round"/><path d="M36.2186 30.2529L40.6406 30.2529" stroke="#404040" stroke-width="2.5" stroke-linecap="round"/><path d="M22.9519 38.7314H27.3739" stroke="#404040" stroke-width="2.5" stroke-linecap="round"/><path d="M9.68994 38.7314H14.1119" stroke="#404040" stroke-width="2.5" stroke-linecap="round"/><path d="M36.2186 38.7314L40.6406 38.7314" stroke="#404040" stroke-width="2.5" stroke-linecap="round"/><path d="M14.7688 13.3018L14.7688 1.99949" stroke="#404040" stroke-width="2.5" stroke-linecap="round"/><path d="M45.9209 13.3018L4.52188 13.3018" stroke="#404040" stroke-width="2.5" stroke-linecap="round"/><path d="M35.4713 13.3018L35.4713 1.99949" stroke="#404040" stroke-width="2.5" stroke-linecap="round"/></svg>
            </div>
          </div>
      </a>  


</template>

<script>
export default {
    name: "Meet",
    data() {
        return {
            title: "קבע פגישה עם מומחה השקעות",
            subtitle: "לקביעת פגישה מקצועית עם יועץ פננסי",
        };
    },
};
</script>

<style lang="scss">
.meeting{
  min-width:90%;
  padding:1rem;
  margin: 1.5rem 0 1.5rem 0;
  text-decoration: none;
  
  
  .name{
    padding:0 10px;
  }

  
}

@media (max-width: 768px) {
.document-header-responsive .meeting {
  display: flex;
  max-width: 500px;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  padding: 0.3rem; 
  background: #F6F8FA;
  border-radius: 12px;
  box-sizing: border-box;
  min-width: 0;
  gap: 0.5rem;
}
#chevron-left {
  flex-shrink: 0;
  cursor: pointer;
}
#logo-name {
  display: flex;
  align-items: center;
  flex: 1; 
  min-width: 0; 
  gap: 0.5rem;

  #title{
    font-size:0.8rem;
    white-space: normal;
    margin-bottom:0.2rem;
  }
  #subtitle{
    font-size:0.7rem;
    white-space: normal;
  }
  
}


}
</style>