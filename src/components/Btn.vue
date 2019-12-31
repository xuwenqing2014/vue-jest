<template>
    <button @click="btnClick">按钮点击{{count}}</button>
</template>

<script>
    export default {
        data() {
            return {
                count: 0
            }
        },
        methods: {
            btnClick() {
                this.$emit('add', this.count);
            }
        },
    }
</script>

<style lang="scss" scoped>

</style>