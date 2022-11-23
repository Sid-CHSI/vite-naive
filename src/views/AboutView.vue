<template>
  <div class="about">
    <h1>This is an about page</h1>
    <n-button>naive-ui</n-button>
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>

<script lang="ts" setup>
import { NButton } from "naive-ui";
</script>
