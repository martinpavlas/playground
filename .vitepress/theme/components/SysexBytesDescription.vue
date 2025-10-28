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
  border-radius: 8px;
  padding: 4px 0;
  margin-top: 2.0rem;
  border: 1px solid var(--vp-c-border);
}

.sysex-bytes-description ::v-deep(ul) {
  list-style: none;
  padding-left: 1rem;
}

.sysex-bytes-description ::v-deep(li + li) {
    margin-top: 0;
}
</style>