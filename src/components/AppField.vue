<template>
  <div>
    <label class="form-label">{{ title }}</label>
    <input type="text" class="form-control"
           @input="onInputMy($event.target.value)"
           :value="value"
           :class="{
              'is-valid': valid && activated,
              'is-invalid': !valid && activated
            }"
    />
  </div>
</template>

<script>
export default {
  props: {
    title: {type: String, required: true},
    value: {type: String, required: true},
    valid: {type: Boolean, required: true},
  },
  emits: {
    input: null,
    onmychange: true
  },
  data(){
    return {
      activated: !!this.value
    }
  },
  methods: {
    onInputMy(val) {
      this.activated = true;
      this.$emit('input',val);
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
</style>
