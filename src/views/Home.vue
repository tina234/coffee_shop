<template>
    <div>
        <Header/>
        <Coffees/>
        <WhyUs/>
    </div>
</template>

<script>
// @ is an alias to /src
import Header from '../components/Header.vue';
import Coffees from '../components/Coffees.vue';
import WhyUs from '../components/WhyUs.vue';

export default {
   components: {
      Header,
      Coffees,
      WhyUs,
    }
}
</script>
