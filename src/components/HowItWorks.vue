<template>
    <div class="hiw-cont">
        <h3>{{ how_it_works.title}}</h3>
        <div class="hiw-box">
            <div class="hiw-item" v-for="(argument, index) in how_it_works.arguments" :key="argument.title">
                <span>0{{ index + 1 }}</span>
                <h1>{{ argument.title }}</h1>
                <p>{{ argument.description }}</p>
            </div>
        </div>
        <router-link class="hiw_button" v-if="how_it_works.button" :to="how_it_works.button.link">{{ how_it_works.button.title }}</router-link>
    </div>        
</template>

<script>
export default {
    data() {
        return {
            how_it_works : "",
        }
    },
    created() {
        this.how_it_works = this.$store.state.how_it_works_modul.how_it_works;
    }    
}
</script>
<style lang="scss">
@import "../scss/howitworks.scss";
</style>