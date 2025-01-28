<template>
  <h1>{{ $greeting('Nicolas') }}</h1>
  <input v-focus="{ firstFocus: true, color: 'green' }" type="text" />

  <div>
    <FancyButton />
  </div>
</template>

<script setup lang="ts">
import { inject } from 'vue'
import { symGreeting } from './shared/plugins/examplePlugin'
const greeting = inject(symGreeting)
console.log(greeting('Paul'))
</script>

<style lang="scss">
@use './assets/scss/base.scss';
</style>
