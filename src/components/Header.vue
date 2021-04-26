<template>
    <div class="main-cont">
        <div class="header-box" v-for="header in headers" :key="header.title">
            <img :src="getImgUrl(header.image)">
            <div class="header-text">
                <h1>{{ header.title }}</h1>
                <p>{{ header.description }}</p>
                <router-link class="button" v-if="header.button" :to="header.button.link">{{ header.button.title }}</router-link>
            </div>
        </div>
    </div>
    
</template>

<script>
export default {
    data() {
        return {
            headers : "",
        }
    },
    created() {
        this.headers = this.$store.state.headers_modul.headers;
    },
}
</script>

<style lang="scss">
@import "../scss/header.scss";
</style>