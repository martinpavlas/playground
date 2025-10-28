<template>
    <div class="preset-link">
      <div class="label">Try it yourself</div>
      <a :href="presetUrl" target="_blank" rel="noopener noreferrer" class="preset-card">
        <div class="preset-icon">🚀</div>
        <div class="preset-name">{{ name }}</div>
      </a>
    </div>
  </template>
  
  <script setup>
  import { computed } from 'vue'
  
  const { name, projectId } = defineProps({
    name: String,
    projectId: String
  })
  
  const presetUrl = computed(() => `https://app.electra.one/preset/${projectId}`)
  </script>
  
  <style scoped>
  .label{
    color: var(--vp-code-lang-color);
    font-size: 12px;
  }

  .preset-link {
    display: flex;
    flex-direction: column;
  }
  
  .preset-card {
    display: inline-flex;
    align-items: center;
    padding: 0.8rem 1.2rem;
    border: 1px solid var(--vp-c-divider);
    border-radius: 8px;
    text-decoration: none;
    transition: background-color 0.2s, box-shadow 0.2s;
  }
  
  .preset-card:hover {
    background-color: var(--vp-c-bg);
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  }
  
  .preset-icon {
    font-size: 1.5rem;
    margin-right: 0.8rem;
  }
  
  .preset-name {
    font-weight: bold;
    color: var(--vp-c-brand);
  }
  </style>
  