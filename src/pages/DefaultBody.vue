<template>
  <div class="h-full flex flex-col">
    <MContainer BGpath="bg-first-section.png">
      <FirstSection></FirstSection>
    </MContainer>
    <MContainer class="flex-1" BGcolor="bg-m-gray-100">
      <SecondSection></SecondSection>
    </MContainer>
  </div>
</template>
<script>
import FirstSection from "./Sections/FirstSection/index.vue";
import SecondSection from "./Sections/SecondSection/index.vue";
export default {
  components: {
    FirstSection,
    SecondSection,
  },
};
</script>