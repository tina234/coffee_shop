<template>
    <div class="main-nav">
        <h4><img src="../assets/coffeebeans34.png" alt="">coffeeroasters</h4>
        <div class="nav-menu">
            <router-link v-for="category in categories" :key="category.title" :to="category.link">{{ category.title }}</router-link>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            categories : "",
        }
    },
    created() {
        this.categories = this.$store.state.categories_modul.categories;
    }
}
</script>

<style lang="scss">
@import "../scss/navbar.scss";
</style>