<template>
  <Header>
    <template #left>
      <AuroraLogo></AuroraLogo>
    </template>
  </Header>
  <div class="hero">
    <div class="hero-content">
      <h1>Welcome to Our Website</h1>
      <p>Discover amazing experiences.</p>
      <Button @click="router.push({ name: 'GettingStarted' })"
        >Get Started</Button
      >
    </div>
  </div>
</template>

<script setup lang="ts">
import { Button, Header } from '@aurora_ui/vue';
import { useRouter } from 'vue-router';
import AuroraLogo from '@/components/logo/AuroraLogo.vue';

const router = useRouter();
</script>
<style lang="sass">

.homepage-header
  font-size: 2rem
  display: flex
  align-items: center
  justify-content: center
  padding: 0px 0px 0px 5px
  font-weight: bolder


.hero
  background: linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab)
  background-size: 400% 400%
  animation: gradient 15s ease infinite
  height: 60vh

  display: flex
  align-items: center
  justify-content: center

  .hero-content
    text-align: center
    color: #fff

    h1
      font-size: 3rem
      margin-bottom: 1rem

    p
      font-size: 1.5rem
      margin-bottom: 2rem

    button
      padding: 1rem 2rem
      font-size: 1.2rem
      border: none
      background-color: #ff7f50
      color: #fff
      border-radius: 5px
      cursor: pointer
      transition: background-color 0.3s

      &:hover
        background-color: #ff6347



@keyframes gradient
  0%
    background-position: 0% 50%

  50%
    background-position: 100% 50%

  100%
    background-position: 0% 50%
</style>
