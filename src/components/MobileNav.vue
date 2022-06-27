<template>
    <div>
        <div class="hamb-icon" :class="{ hamb_float: float_meni }" @click="toggleSidebar">
            <i class="fa fa-solid fa-bars"></i>
             <transition>
                <div class="sidebar" v-show="sidebar">
                    <router-link class="nav-item" v-for="category in categories" :key="category.title" :to="category.link">{{ category.title }}</router-link>
                </div>
            </transition>
        </div>  
    </div>
</template>

<script>
export default {
    data() {
        return {
            categories : "",
            sidebar: false,
            float_meni: false,
        }
    },

    created() {
        this.categories = this.$store.state.categories_modul.categories;
        window.addEventListener("scroll", this.floatMeni);
    },

    methods: {
        toggleSidebar() {
            this.sidebar = !this.sidebar;
        },

        floatMeni() {
            this.float_meni = window.pageYOffset > 150 ? true : false;
            console.log(this.float_meni);
        }
    }
}
</script>

