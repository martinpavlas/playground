<template>
  <div v-if="isClient" class="sysex-bytes-description" v-md>
    <slot />
  </div>
</template>

<script setup>
const isClient = typeof window !== 'undefined'
</script>

<style scoped>
.sysex-bytes-description {
  font-size: 0.9rem;
  padding: 0 20px 10px;
}

</style>