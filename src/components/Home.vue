<template>
    <div>
        <div v-if="welcomePage" id="welcome-page">
            <h1>Benvingut</h1>
            <p>
                Aquesta aplicació web consisteix en un recull d'escenes que composen una breu història d'un heroi que navega per l'espai. Per conèixer aquesta història es recorreran diferents imatges acompanyades de frases que explicaran el que està passant en cada moment, d'aquesta manera es podrà seguir el fil de l'aventura d'una manera dinàmica i devertida.
            </p>
            <button @click="welcomePage = false">
                COMENÇAR
            </button>
        </div>
        <div v-else>
            <Botons @decrease="previousScene" @increase="nextScene"/>
            <Escena :items="sentences" :sentence="currentSentence"/>
            <!-- {{currentSentence}} -->
        </div>
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
            currentSentence: 0,
            welcomePage: true
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

<style scoped>
    #welcome-page {
        position: absolute;
        top: 20%;
        left: 20%;
        width: 50%;
        height: 50%;
        background-image: linear-gradient(135deg,rgba(92, 171, 235, 0.4),  rgba(218, 231, 143, 0.4), rgb(255, 192, 203, 0.4));
        border-radius: 50px;
        box-shadow: 0.1rem 0.1rem 1rem 0.5rem rgba(128, 128, 128, 0.319);

        padding: 2.5% 5%;
        display: flex;
        flex-direction: column;
        text-align: center;
        gap: 2rem;
    }

    button {
        width: 10rem;
        margin: 0 auto;
        padding: 1rem 0;
        font-size: 1.1rem;
    }

    p {
        line-height: 1.5rem;
        text-align: justify;
        font-size: 1.05rem;
    }

    @media screen and (max-width: 992px) {
        #welcome-page {
        top: 15%;
        left: 10%;
        width: 70%;
        height: 55%;

        padding: 2.5% 5%;
        }
    }

    @media screen and (max-width: 576px) {
        #welcome-page {
        top: 2.5%;
        left: 2.5%;
        width: 80%;
        height: 92%;

        padding: 2% 7.5%;

        justify-content: center;
        }
    }
</style>