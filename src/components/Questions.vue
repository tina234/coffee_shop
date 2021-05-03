<template>
    <div class="quest-cont">
        <div class="element-box">
            <h3 v-for="(question, index) in questions" :key="question.title">
                <span>0{{ index + 1 }}</span>
                {{ question.title }}
            </h3>
        </div>

        <div class="quest-box">
            <div class="main-questions" v-for="question in questions" :key="question.question">
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
        </div>
    </div>   
</template>

<script>
export default {
    data() {
        return {
            questions: "",
            answers : [],
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
            console.log(event);
            event.currentTarget.classList.add('active-answer');
            let siblings = event.currentTarget.parentNode.childNodes;
            siblings.forEach(element => {
                if(element != event.currentTarget){
                    element.classList.remove('active-answer');
                }
            });

            let answer = event.currentTarget.childNodes[0].innerText;
            let question = event.currentTarget.parentNode.previousSibling.childNodes[0].innerText;
            this.answers[question] = answer;
        }

    }
}
</script>

<style lang="scss">
  @import "../scss/questions.scss";
</style>