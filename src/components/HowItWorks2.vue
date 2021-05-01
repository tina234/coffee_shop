<template>
    <div class="hiw-cont" style="background-color: #333333; border-radius: 15px;">
        <div class="hiw-box">
            <div class="hiw-item" v-for="(argument, index) in how_it_works.arguments" :key="argument.title">
                <span>0{{ index + 1 }}</span>
                <h1>{{ argument.title }}</h1>
                <p>{{ argument.description }}</p>
            </div>
        </div>
    </div>        
</template>

<script>
export default {
    data() {
        return {
            how_it_works : "",
        }
    },
    created() {
        this.how_it_works = this.$store.state.how_it_works_modul.how_it_works;
    }    
}
</script>