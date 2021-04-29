<template>
    <div class="footer-cont">
        <div class="footer-box">
            <h4><img src="../assets/coffeebeans.png" alt=""> coffeeroasters</h4>
            <div class="nav-icons">
                <div class="footer-nav">
                    <router-link v-for="category in categories" :key="category.title" :to="category.link">{{ category.title }}</router-link>
                </div> 
                <div class="icons">
                    <span><i class="fa fa-facebook-official" aria-hidden="true"></i></span>
                    <span><i class="fa fa-twitter" aria-hidden="true"></i></span>
                    <span><i class="fa fa-instagram" aria-hidden="true"></i></span>
                </div>
            </div>
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
@import "../scss/footer.scss";
</style>