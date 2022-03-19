<template>
    <div>
        <Header/>
        <Coffees/>
        <WhyUs/>
        <HowItWorks/>
    </div>
</template>

<script>
// @ is an alias to /src
import Header from '../components/Header.vue';
import Coffees from '../components/Coffees.vue';
import WhyUs from '../components/WhyUs.vue';
import HowItWorks from '../components/HowItWorks.vue';

export default {
   components: {
      Header,
      Coffees,
      WhyUs,
      HowItWorks,
    }
}
</script>
