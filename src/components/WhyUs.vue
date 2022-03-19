<template>
    <div class="whyus-cont">
        <h2>{{ why_us.title }}</h2>
        <p>{{ why_us.description }}</p>
        <div class="whyus-box">
            <div class="whyus-item" v-for="argument in why_us.arguments" :key="argument.title">
                <img :src="getImgUrl(argument.image)" alt="">
                <div class="title-descr-box">
                    <h3>{{ argument.title }}</h3>
                    <p>{{ argument.description }}</p>
                </div>
            </div>
        </div>
    </div>    
</template>

<script>
export default {
     data() {
        return {
            why_us : "",
        }
    },
    created() {
        this.why_us = this.$store.state.why_us_modul.why_us;
    }    
}
</script>

<style lang="scss">

</style>