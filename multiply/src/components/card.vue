

<template>      
        <div data-svg-wrapper  style="position: relative; background-color:white;">
                <span v-html="icon" class="icon-wrapper"></span>
            </div>
                <div class="title">{{ title }}</div>
                <div class="extra-subtitle">{{ extra_subtitle }}</div>
                <div class="subtitle">{{ subtitle }}</div> 
</template>

<script>
export default {
    name: "Card",
    props: {
      icon: {type: String},
      title: {type: String},
      subtitle: {type: String},
      extra_subtitle: {type: String},
    },
}
</script>

<style lang="scss">
  


  

</style>