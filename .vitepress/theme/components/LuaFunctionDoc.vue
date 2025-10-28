<template>
    <div class="lua-function-doc">
      <div class="prototype">{{ prototype }}</div>
      <div class="description">
        <slot name="description">{{ description }}</slot>
      </div>
  
      <div v-if="parameters.length" class="parameters">
        <h6>Parameters</h6>
        <div v-for="(param, index) in parameters" :key="index" class="parameter-item">
            <div class="param-name">{{ param.name }}</div>
            <div class="param-description">{{ param.description }}</div>
        </div>
      </div>
  
      <div v-if="returnValue" class="return-value">
        <h6>Returns</h6>
        <div class="returned-value">{{ returnValue }}</div>
      </div>
    </div>
  </template>
  
  <script setup>
  defineProps({
    prototype: String,
    description: String,
    parameters: {
      type: Array,
      default: () => []
    },
    returnValue: {
      type: String,
      default: ''
    }
  })
  </script>
  
  <style scoped>
  .lua-function-doc {
    font-size: var(--vp-code-font-size);
    border-radius: 8px;
    padding: 18px 0;
    margin-top: 2.0rem;
    /* background-color: var(--vp-c-bg-soft); */
  }
  
  .prototype {
    font-family: monospace;
    font-weight: bold;
    color: var(--vp-c-brand);
    margin-bottom: 0.5rem;
    font-size: 1.0rem;
  }
  
  .description {
    margin-bottom: 0.8rem;
    font-size: 1.0rem;
  }
  
  .parameters, .return-value {
    margin-top: 0.5rem;
  }
  
  .returned-value {
    padding-left: 1.0rem;
  }
  
  h6 {
    font-size: 0.9rem;
    margin-bottom: 0.5rem;
    color: var(--vp-c-text-2);
  }

.parameter-item {
  display: flex;
  margin-bottom: 0.4rem;
  padding-left: 1.0rem;
}

.param-name {
  margin-right: 1.0rem;
  border-radius: 4px;
  padding: 1px 3px;
  background-color: var(--vp-code-bg);
  font-family: monospace;
  font-size: var(--vp-code-font-size);
  color: var(--vp-code-color);
}

.param-description {
  flex: 1;
}
</style>
  