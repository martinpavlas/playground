<template>
    <div class="youtube-video">
      <iframe
        :src="'https://www.youtube.com/embed/' + id"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    </div>
  </template>
  
  <script setup>
  defineProps({
    id: String
  })
  </script>
  
  <style scoped>
  .youtube-video {
    position: relative;
    padding-bottom: 56.25%; /* 16:9 aspect ratio */
    height: 0;
    overflow: hidden;
    border-radius: 8px;
  }
  .youtube-video iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
  </style>
  