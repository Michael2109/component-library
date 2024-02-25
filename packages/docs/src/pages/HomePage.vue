<template>
  <Header></Header>
  <div class="hero">
    <div class="hero-content">
      <h1>Welcome to Our Website</h1>
      <p>Discover amazing experiences.</p>
      <Button @click="router.push({ name: 'GettingStarted' })">Explore</Button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Button, Header } from '@linusborg/lib';
import { useRouter } from 'vue-router';

const router = useRouter();
</script>
<style lang="sass">
.hero
  background: linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab)
  background-size: 400% 400%
  animation: gradient 15s ease infinite
  height: 60vh
  background-size: 600% 600%
  animation: GradientAnimation 10s ease infinite

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
