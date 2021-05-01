<template>
    <div class="main-cont">
        <div class="header-box" v-for="header2 in headers2" :key="header2.title" :style="{ 'background-image': 'url(' + getImgUrl(header2.image) + ')' }">
            <div class="header-text">
                <h1>{{ header2.title }}</h1>
                <p>{{ header2.description }}</p>
            </div>
        </div>
    </div>    
</template>

<script>
export default {
     data() {
        return {
            headers2 : "",
        }
    },
    created() {
        this.headers2 = this.$store.state.headers2_modul.headers2;
    },
}
</script>

<style lang="scss">

</style>