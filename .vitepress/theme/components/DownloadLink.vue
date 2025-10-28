<template>
<div class="download">
    <div class="linkContainer">
    <a :href="href">{{ filename }}</a>
    </div>
    <span class="description">{{ description }}</span>
</div>
</template>

<script>
export default {
  props: ['filename', 'href', 'description'],
  methods: {}
}
</script>

<style scoped>
.download {
  float: none;
  padding-top: 1em;
  display: flex;
  justify-content: left;
  align-items: center;
  width: 550px;
}
.linkContainer {
  text-align: left;
  width: 320px;
  float: left;
}
.description {
  color: #666;
  font-size: 0.8rem;
}
.download a {
  color: #d66448;
  text-decoration: none;
}
</style>
