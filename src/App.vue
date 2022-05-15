<template>
  <div id="app" class="flex-1 flex w-full justify-center text-sm">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>

<style lang="scss">
html {
  height: 100%;
}
body {
  overflow: auto;
  min-height: 100%;
  width: 100%;
  position: relative;
  overflow-x: hidden;
  display: flex;
  flex-direction: column;
  font-weight: 200;
}
* {
  outline: 0;
}
</style>

<style src="./assets/styles/tailwind.css"></style>
