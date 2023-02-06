<template>
    <div>
        <p v-for="(item, index) in items" :key="index" :class="{active: index===objItems[sentence]}">
            {{ item }}
        </p>
    </div>
</template>

<script>
export default {
    name: "Escena",
    props: ["items", "sentence"],
    data() {
        return {
            // Becasue I used a json file and not an array, I must define an array with the index of the object to evaluate the "currentSentence" and add the class "active".
            objItems: Object.keys(this.items)
        }
    }
};
</script>

<style scoped>
    p {
        padding: 1rem 0;
        margin: 1rem;

        text-align: center;

        border: 3px solid black;
        border-radius: 500px;
    }

    .active {
        background-color: rgb(251, 182, 174);
    }
</style>