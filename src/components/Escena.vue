<template>
    <div>
        <p v-for="(item, index) in items" :key="index" :class="{active: index===sentence, inactive: index!==sentence}">
            {{ item.txt }}
        </p>
        <!-- Here I had some issues getting the image by binding the src attribute. Checking on the internet, I saw this solution that works perfectly. -->
        <img :src="require(`./../assets/images/${this.items[this.sentence].img}.jpg`)" alt="background image">
    </div>
</template>

<script>
export default {
    name: "Escena",
    props: ["items", "sentence"]
};
</script>

<style scoped>
    p {
        padding: 1rem;
        margin: 1rem;

        text-align: center;

        border: 3px solid black;
        border-radius: 500px;
    }

    .active {
        background-color: rgb(251, 182, 174);
    }

    .inactive {
        background-color: rgba(255, 255, 255, 0.75);
    }

    img {
        position: absolute;
        bottom: 0;
        left: 0;
        z-index: -1;
        /* This size works and it's responisve, even though not always looks its best. */
        width: 100%;
        height: 100%;
    }
</style>