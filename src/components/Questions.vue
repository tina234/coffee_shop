<template>
    <div class="quest-cont">
        <div class="element-box">
            <h3 v-for="(question, index) in questions" :key="question.title">
                <span>0{{ index + 1 }}</span>
                {{ question.title }}
            </h3>
        </div>

        <div class="quest-box">
            <div class="main-questions" v-for="(question,index) in questions" :key="question.question" :data-question_id="index">
                <div @click="showAnswers($event)">
                    <h2>{{ question.question }}</h2>
                    <span><i class="fa fa-arrow-down" aria-hidden="true"></i></span>
                </div>
                <div class="answer-box">
                    <div @click="chooseAnswer($event)" class="answer" v-for="answer in question.answers" :key="answer.title">
                        <h4>{{ answer.title }}</h4>
                        <p>{{ answer.description }}</p>
                    </div>
                </div>
            </div>
            <div class="text-box" v-if="questions.length == answers_count">
                <h4>ORDER SUMMARY</h4>
                <p v-html="order_summery"></p>
            </div>  
        </div>
    </div>   
</template>

<script>
export default {
    data() {
        return {
            questions: "",
            answers : [],
            answers_count : 0,
            order_summery : '',
        }
    },
    created() {
        this.questions = this.$store.state.questions_modul.questions;
    },
    methods: {
        showAnswers(event) {
            let sibling = event.currentTarget.nextSibling;
            let height = sibling.childNodes[0].offsetHeight;
            let arrow = event.currentTarget.getElementsByTagName('span')[0];

            //zatvori
            if(sibling.classList.contains("open-answers")){
                sibling.classList.remove('open-answers');
                sibling.style.height = 0 + 'px';
                arrow.style.transform = 'rotate(0deg)';
            }else {
            //otvori
                sibling.classList.add("open-answers");
                sibling.style.height = height + 'px';
                arrow.style.transform = 'rotate(180deg)';
            }
        },

        chooseAnswer (event) {
            console.log();
            event.currentTarget.classList.add('active-answer');
            let siblings = event.currentTarget.parentNode.childNodes;
            siblings.forEach(element => {
                if(element != event.currentTarget){
                    element.classList.remove('active-answer');
                }
            });

            let answer = event.currentTarget.childNodes[0].innerText;
            let question_id = event.currentTarget.parentNode.parentNode.dataset.question_id;
            this.answers[question_id] = answer;
            this.answers_count = Object.keys(this.answers).length;
            
            if(this.questions.length == this.answers_count){
                this.order_summery = '"I drink my coffe as <strong>'+ this.answers[0] +'</strong>, whith a <strong>'+ this.answers[1] +'</strong> type of bean. <strong>'+ this.answers[2] +'</strong> ground ala <strong>'+ this.answers[3] +'</strong>, sent to me <strong>'+ this.answers[4] +'</strong>."';
            }
        }
    },
}
</script>

<style lang="scss">

</style>