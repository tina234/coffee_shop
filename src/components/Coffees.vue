<template>
    <div class="coffee-cont">
        <div class="grey-text"><p>our collection</p></div>
        <div class="coffee-box" v-for="coffee in coffees" :key="coffee.title">
            <img :src="getImgUrl(coffee.image)" alt="">
            <div class="info-box">
                <h3>{{ coffee.title }}</h3>
                <p>{{ coffee.description }}</p>
            </div>        
        </div>          
    </div>
    
</template>

<script>
export default {
    data() {
        return {
            coffees : "",
        }
    },
    created() {
        this.coffees = this.$store.state.coffees_modul.coffees;
    }
    
}
</script>

<style lang="scss">

</style>