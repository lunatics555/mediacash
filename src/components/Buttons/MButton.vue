<template>
  <button
    :disabled="disabled ? true : false"
    class="
      leading-relaxed
      font-medium
      flex
      items-center
      justify-center
      cursor-pointer
      border
      focus:outline-none
      py-[10.4px]
      rounded-medium
      px-4
    "
    :class="[
      height,
      width,
      {
        [`btn-${btn}`]: !outline && !disabled && !active,
        [`btn-${btn}-outline`]: outline && !disabled,
        [`${icon ? 'px-3' : 'px-6'}`]: icon,
        '! rounded-full': round,
      },
    ]"
    v-bind="$attrs"
    v-on="$listeners"
  >
    <slot></slot>
  </button>
</template>
<script>
export default {
  inheritAttrs: false,
  props: {
    btn: {
      type: String,
      default: "primary",
    },
    width: {
      type: String,
      default: "w-fit",
    },
    height: {
      type: String,
      default: "h-fit",
    },
    outline: Boolean,
    icon: Boolean,
    round: Boolean,
    disabled: Boolean,
    active: Boolean,
  },
};
</script>
<style lang="scss" scoped>
// Primary button style
.btn-primary {
  @apply bg-m-orange-300 text-white hover:bg-m-orange-500  border-0;
}

.btn-primary-outline {
  @apply border-black text-black hover:bg-gray-400 hover:bg-opacity-10  bg-white;
}

.btn-secondary {
  @apply bg-m-blue-500 text-white hover:bg-m-blue-500  border-0;
}

.btn-secondary-outline {
  @apply border-m-blue-500 text-m-blue-500 hover:bg-m-blue-500 hover:bg-opacity-10  bg-white;
}
</style>