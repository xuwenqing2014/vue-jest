<template>
    <div>
        <div>{{count}}</div>
        <button @click="increase">增加</button>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                count: 0
            }
        },
        methods: {
            increase() {
                this.count ++;
            }
        },
    }
</script>

<style lang="scss" scoped>

</style>