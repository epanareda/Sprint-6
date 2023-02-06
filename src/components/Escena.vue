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

</style>