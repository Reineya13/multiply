<template>
<div class="container">
      <div class="header">
        <span>{{ title }}</span>
      </div>
      <div class="border" dir="rtl">
        <p class="desktop-title">{{ text }}</p>
        <img class="center img" src="/src/assets/team.png"></img>
      </div>
   </div>

</template>

<script>
export default {
    name: "Team",
    methods: {
        Get_Word(word) {
            return word;
        }
    },
    data() {
        return {
            title:'צוות הקרן',
            text:'צוות הקרן כולל מעל ל-35 מנהלי השקעות, מנהלי סיכונים ואנשי תפעול. הקרן מנהולת על ידי רותי פורמן (שותפה מנהלת), עידו ויגדור (שותף מנהל), אלכס גינזבורג (שותף, מנהל סיכונים ראשי).'
        };
    }
}

</script>

<style lang="scss">
    .img{
        max-width: 100%;
        height: auto;
    }

</style>