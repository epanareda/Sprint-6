<template>
    <div>
        <Botons @decrease="previousScene" @increase="nextScene"/>
        <Escena :items="sentences" :sentence="currentSentence"/>
        <!-- {{currentSentence}} -->
    </div>
</template>

<script>
import Escena from './Escena.vue';
import Botons from './Botons.vue';
import data from "./../assets/json/data.json";

// console.log(data);

export default {
    name: "Home",
    components: {
        Escena,
        Botons
    },
    data() {
        return {
            sentences: data,
            currentSentence: 0
        }
    },
    methods: {
        previousScene() {
            this.currentSentence === 0 ? this.currentSentence : this.currentSentence--;
        },

        nextScene() {
            this.currentSentence === 3 ? this.currentSentence : this.currentSentence++;
        }
    }
};
</script>

<style>

</style>