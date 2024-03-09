<script setup lang="ts">
import { useRouter } from 'vue-router';

const router = useRouter();
</script>

<template>
  <div
    style="
      display: flex;
      margin-left: 10px;
      justify-content: center;
      align-items: center;
    "
  >
    <img class="aurora-logo" src="/aurora-original.png" />
    <h1 id="header" @click="router.push({ name: 'Home' })">Aurora UI</h1>
  </div>
</template>

<style scoped lang="sass">
.aurora-logo
  width: 48px
  height: 48px

#header
  margin-left: 10px
  margin-top: 0
  margin-bottom: 0
  cursor: pointer
</style>
