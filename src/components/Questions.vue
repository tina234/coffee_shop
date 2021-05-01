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
                <h2>{{ question.question }}</h2>
                <div class="answer-box">
                    <div class="answer" v-for="answer in question.answers" :key="answer.title">
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
            questions : "",
        }
    },
    created() {
        this.questions = this.$store.state.questions_modul.questions;
    },
}
</script>

<style lang="scss">
  @import "../scss/questions.scss";
</style>