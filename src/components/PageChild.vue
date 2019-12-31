<template>
    <div>
        <ul class="list">
            <li v-for="item in messages" :key="item">{{item}}</li>
        </ul>
    </div>
</template>

<script>
    export default {
        props: ['messages'],
    }
</script>

<style lang="scss" scoped>

</style>