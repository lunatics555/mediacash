<template>
  <div class="flex flex-col w-full justify-between">
    <div>
      <MContainer>
        <Menu></Menu>
      </MContainer>
    </div>
    <div class="flex flex-col flex-1">
      <router-view></router-view>
    </div>
    <div>
      <MContainer>
        <Footer></Footer>
      </MContainer>
    </div>
  </div>
</template>
<script>
import Footer from "../pages/Footer.vue";
import Menu from "../pages/Menu.vue";

export default {
  components: {
    Footer,
    Menu,
  },
};
</script>
