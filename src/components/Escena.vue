<template>
    <div>
        <p v-for="(item, index) in items" :key="index">
            {{ item }}
        </p>
    </div>
</template>

<script>
export default {
    name: "Escena",
    props: ["items"]
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
</style>