<template>
    <div class="main-nav">
        <a href="/"><h4><img src="../assets/coffeebeans34.png" alt="">coffeeroasters</h4></a>
        <div class="nav-menu">
            <router-link class="nav-item" v-for="category in categories" :key="category.title" :to="category.link">{{ category.title }}</router-link>
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

</style>