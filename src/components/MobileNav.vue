<template>
    <div>
        <div class="hamb-icon">
            <i class="fa fa-solid fa-bars"></i>
        </div>
        <transition>
            <div class="sidebar">
                <router-link class="nav-item" v-for="category in categories" :key="category.title" :to="category.link">{{ category.title }}</router-link>
            </div>
        </transition>
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
        console.log(this.categories);
    }
}
</script>

