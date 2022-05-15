<template>
  <validation-provider
    class="flex flex-col space-y-1 w-full"
    :rules="rules"
    v-slot="{ errors }"
  >
    <label
      v-if="label"
      :for="uniqueId"
      class="flex justify-between font-light text-promy-gray-200"
      >{{ label }} <span v-if="label_value">{{ label_value }}</span></label
    >
    <div class="relative">
      <input
        :id="uniqueId"
        :dir="dir"
        :name="name ? name : label"
        :type="type"
        :placeholder="placeholder ? placeholder : label"
        :value="value"
        @input="handleInput($event.target.value)"
        :disabled="disabled"
        :class="[
          errors[0] ? 'input-error' : '',
          !clearBG ? 'bg-promy-gray-background-300' : 'bg-white',
          classes,
        ]"
        autocomplete="off"
      />
    </div>
    <span v-show="errors[0]" class="msg-error">{{ errors[0] }}</span>
  </validation-provider>
</template>

<script>
export default {
  props: {
    dir: {
      type: String,
      default: null,
    },
    classes: {
      type: String,
      default: "py-1",
    },
    label: {
      type: String,
      default: null,
    },
    label_value: {
      type: String,
    },
    value: {
      type: [String, Number],
    },
    rules: {
      type: String,
    },
    placeholder: {
      type: String,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    name: {
      type: String,
    },
    type: {
      type: [String, Number],
      default: "text",
    },
    clearBG: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    uniqueId() {
      return `input-${this._uid}`;
    },
  },
  methods: {
    handleInput(value) {
      this.$emit("input", value);
    },
  },
};
</script>

<style lang="scss" scoped>
input {
  @apply px-2  text-black border-solid border w-full border-black;
}
input:hover {
  @apply border-m-orange-500;
}
input:focus {
  @apply outline-none bg-white border-m-orange-500;
}
input[disabled] {
  @apply border-gray-100 bg-gray-100;
}
.msg-error {
  @apply rounded-lg w-full  italic text-xs text-red-400;
}
.input-error {
  @apply border-red-200;
}
</style>
