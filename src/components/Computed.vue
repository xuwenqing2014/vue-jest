<template>
    <div>
        输入前：
        <input type="text" name="" id="" v-model="inputValue">
        <hr>
        {{outputValue}}
    </div>
</template>

<script>
    export default {
        props: {
            needReverse:{
                type: Boolean,
                default: false
            }
        },
        data() {
            return {
                inputValue: ''
            }
        },
        computed: {
            outputValue() {
                return this.inputValue && this.needReverse ? [...this.inputValue].reverse().join('') : this.inputValue;
            }
        },
    }
</script>

<style lang="scss" scoped>

</style>