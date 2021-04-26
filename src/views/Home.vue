<template>
    <div>
        <Header/>
        <Coffees/>
    </div>
</template>

<script>
// @ is an alias to /src
import Header from '../components/Header.vue';
import Coffees from '../components/Coffees.vue';

export default {
   components: {
      Header,
      Coffees,
    }
}
</script>
