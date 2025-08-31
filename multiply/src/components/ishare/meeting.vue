<template>
<a class="document-header-responsive" id="meeting" :href="link" target="_blank">
      <!-- לוגו ושם -->  
          <div class="logo-name" id="logo-name">
            <div class="report" id="report">
             <svg id="report-svg"  viewBox="0 0 50 52" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2.61258 11.6339C1.56699 23.5352 1.56457 31.9382 2.6177 43.9933C2.87927 46.9874 5.33755 49.3603 8.42409 49.6082C17.6389 50.3482 41.1436 49.6082 43.2271 48.9858C45.3246 48.3592 47.1895 46.8598 47.5932 43.3346C48.4021 36.2707 48.3264 19.7741 47.5931 11.5149C47.3314 8.56723 44.9392 6.2134 41.9028 5.94072C29.4605 4.82333 20.7399 5.04016 8.44213 6.01453C5.34772 6.2597 2.87626 8.63258 2.61258 11.6339Z" stroke="#414141" stroke-width="2.5"/><path d="M22.9519 21.7783H27.3739" stroke="#404040" stroke-width="2.5" stroke-linecap="round"/><path d="M9.68994 21.7783H14.1119" stroke="#404040" stroke-width="2.5" stroke-linecap="round"/><path d="M36.2186 21.7783L40.6406 21.7783" stroke="#404040" stroke-width="2.5" stroke-linecap="round"/><path d="M22.9519 30.2529H27.3739" stroke="#404040" stroke-width="2.5" stroke-linecap="round"/><path d="M9.68994 30.2529H14.1119" stroke="#404040" stroke-width="2.5" stroke-linecap="round"/><path d="M36.2186 30.2529L40.6406 30.2529" stroke="#404040" stroke-width="2.5" stroke-linecap="round"/><path d="M22.9519 38.7314H27.3739" stroke="#404040" stroke-width="2.5" stroke-linecap="round"/><path d="M9.68994 38.7314H14.1119" stroke="#404040" stroke-width="2.5" stroke-linecap="round"/><path d="M36.2186 38.7314L40.6406 38.7314" stroke="#404040" stroke-width="2.5" stroke-linecap="round"/><path d="M14.7688 13.3018L14.7688 1.99949" stroke="#404040" stroke-width="2.5" stroke-linecap="round"/><path d="M45.9209 13.3018L4.52188 13.3018" stroke="#404040" stroke-width="2.5" stroke-linecap="round"/><path d="M35.4713 13.3018L35.4713 1.99949" stroke="#404040" stroke-width="2.5" stroke-linecap="round"/></svg>
            </div>
            <div class="name" id="name">
              <div class="title" id="title">{{ title }}</div>
              <div class="subtitle" id="subtitle">{{ subtitle }}</div>
            </div>
          </div>
          <div class="chevron-left " id="chevron" :class="{ open: isOpen }" v-html="chevron_left">
          </div>
      </a>  
</template>

<script>
export default {
    name: "Meet",
    props: {
      link: {type: String},
    },
    data() {
        return {
            title: "קבע פגישה עם מומחה השקעות",
            subtitle: "לקביעת פגישה מקצועית עם יועץ פננסי",
            chevron_left:`<?xml version="1.0"?><!DOCTYPE svg  PUBLIC '-//W3C//DTD SVG 1.1//EN'  'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'><svg enable-background="new 0 0 15 26"  id="chevron-left" version="1.1" viewBox="0 0 15 26"  xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><polygon fill="#231F20" points="12.885,0.58 14.969,2.664 4.133,13.5 14.969,24.336 12.885,26.42 2.049,15.584 -0.035,13.5 "/></svg>`
        };
    },
};
</script>

<style lang="scss">
#meeting{
  padding:1rem;
  margin: 1.5rem 0 1.5rem 0;
  text-decoration: none;
  .logo-name{
   gap:1rem; 
   padding: 0.3rem 0 0.4rem 0;
  }
  .chevron-left {
  flex: 0 0 auto;
  margin-left: 0.8rem;
}
#chevron-left{
  width: 1.3rem;
  height: 1.3rem;
}

#report-svg{
  width: 2.7rem;
  height: 3rem
}
  
}

@media (max-width: 768px) {
.document-header-responsive #meeting {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.3rem; 
  background: #F6F8FA;
  border-radius: 0.7rem;
  box-sizing: border-box;
  min-width: 0;
  gap: 0.5rem;
}
.chevron-left {
  flex-shrink: 0;
  cursor: pointer;
}

.logo-name {
  display: flex;
  align-items: center;
  flex: 1; 
  min-width: 0; 
  gap: 0.5rem;

  .title{
    font-size:0.8rem;
    white-space: normal;
    margin-bottom:0.2rem;
  }
  .subtitle{
    font-size:0.7rem;
    white-space: normal;
  }
  
}

}
</style>