<template>
    <div class="main-nav">
        <router-link to="/"><h4><img src="../assets/coffeebeans34.png" alt="">coffeeroasters</h4></router-link>
        <MobileNav v-if="mobileView" />
        <div class="nav-menu" v-if="!mobileView">
            <router-link class="nav-item" v-for="category in categories" :key="category.title" :to="category.link">{{ category.title }}</router-link>
        </div>
    </div>
</template>

<script>
import MobileNav from "../components/MobileNav.vue";

export default {

    data() {
        return {
            categories : "",
            mobileView : false,
            showNav : false,
        }
    },

    methods: {
        handleResize() {
            this.mobileView = window.innerWidth <= 700;
        }
    },

    created() {
        this.handleResize();
        this.categories = this.$store.state.categories_modul.categories;
        window.addEventListener("resize", this.handleResize);
    },
    
    destroyed() {
        window.removeEventListener("resize", this.handleResize);
    },

    components : {
        MobileNav,
    }
}
</script>

<style lang="scss">

</style>