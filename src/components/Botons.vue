<template>
    <div>
        <button @click="this.$emit('decrease')">
            Anterior
        </button>
        <button @click="this.$emit('increase')">
            Següent
        </button>
    </div>
</template>

<script>
export default {
    name: "Botons",

}
</script>

<style scoped>
    button {
        width: 50%;
        padding: 1rem 0;
        font-size: 1.25rem;
    }
</style>