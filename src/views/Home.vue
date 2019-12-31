<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <Count />
    <Quantity />
    <Ajax />
    <Page />
    <Btn @add="addBtn" />
    <Computed :needReverse="true"/>
  </div>
</template>

<script>
import Count from '@/components/Count.vue';
import Quantity from '@/components/Quantity.vue';
import Ajax from '@/components/Ajax.vue';
import Page from '@/components/Page.vue';
import Btn from '@/components/Btn.vue';
import Computed from '@/components/Computed.vue';

export default {
  name: 'home',
  components: {
    Count,
    Quantity,
    Ajax,
    Page,
    Btn,
    Computed
  },
  methods: {
    addBtn(value) {
      alert(value);
    }
  },
}
</script>
