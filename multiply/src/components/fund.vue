<template>    
<div class="fund-container">
 <div class="fund-card" v-for="fund in funds" :key="fund">
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
            <button class="fund-cta-button">קרא עוד ←</button>
        </div>
    </div>
</div>


</template> 


<script>
    export default {
        name: "Fund",
        data() {
            return {
                funds: [
                    {title:'השקעות לטווח ארוך לטווח ארוך', description:` מה השקעות לטווח ארוך ומתי השקעות לטווח ארוך?<br> דוגמאות: השקעות זמניות לבטווח לטווח ארוך כמו נדלן<br> פיתוח סיכונים: השרכות שיל פיתוח השקעות בריח`, },
                    {title:'הקרנות המבטיחות של השנה', description:`מהי השקעה לטווח קצר ומהי השקעה לטווח ארוך?<br>דוגמאות: השקעות יומיות לעומת השקעות לטווח ארוך כמו נדל"ן<br> פיזור סיכונים: החשיבות של פיזור השקעות בתיק`},
                    {title:'הזדמנויות בשוק ההון',description:`איך להתחיל להשקיע? צעדים ראשונים<br>הקצאת נכסים: איך לבנות תיק השקעות מותאם אישית<br>פיזור סיכונים: החשיבות של פיזור השקעות בתיק` },
            ]
        }
     }
    }

</script>

<style lang="scss">
    .fund-container {
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
    </style>

