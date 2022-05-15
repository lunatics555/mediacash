<template>
  <validation-provider :rules="rules" v-slot="{ errors }">
    <label class="rounded-lg flex items-center cursor-pointer font-light">
      <input
        type="radio"
        :id="uniqueId"
        :value="label"
        @click="check"
        v-model="value"
        class="mr-1 cursor-pointer"
      />
      <span class="m-0" :for="uniqueId" />
      <div class="flex-1">
        <slot />
      </div>
    </label>
    <span v-show="errors[0]" class="msg-error">{{ errors[0] }}</span>
  </validation-provider>
</template>

<script>
export default {
  props: {
    value: {
      required: true,
    },
    label: {
      type: String,
    },

    classes: {
      type: String,
      default: "flex-row",
    },
    rules: {
      type: String,
    },
  },
  computed: {
    uniqueId() {
      return `radio-${this._uid}`;
    },
  },
  methods: {
    check() {
      this.$emit("change", this.label);
    },
  },
};
</script>

<style lang="scss" scoped>
input[type="radio"] {
  /* remove standard background appearance */
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  /* create custom radiobutton appearance */
  display: inline-block;
  width: 25px;
  height: 25px;
  padding: 3px;
  /* background-color only for content */
  background-clip: content-box;
  border: 2px solid #bbbbbb;
  background-color: #fff;
  border-radius: 50%;
}

/* appearance for checked radiobutton */
input[type="radio"]:checked {
  background-color: #ff931e;
}
</style>
