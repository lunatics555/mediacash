<template>
  <div
    class="flex flex-col items-center bg-cover bg-no-repeat px-4"
    :class="BGcolor"
    :style="`background-image: url(images/${BGpath});`"
  >
    <div class="max-w-ws w-full">
      <slot></slot>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    BGpath: {
      type: String,
      default: null,
    },
    BGcolor: {
      type: String,
      default: null,
    },
  },
};
</script>