<template>
    <div>
        <Escena :items="sentences"/>
    </div>
</template>

<script>
import Escena from './Escena.vue';
import data from "./../assets/json/data.json";

// console.log(data);

export default {
    name: "Home",
    components: {
        Escena
    },
    data() {
        return {
            sentences: data
        }
    }
};
</script>

<style scoped>

</style>