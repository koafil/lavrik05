<template>
  <div>
    <label class="form-label">{{ title }}
      <transition appear
        enter-active-class="animate__animated animate__fadeIn"
      >
      <template v-if="activated">
        <transition
          mode="out-in"
          enter-active-class="animate__animated animate__flipInY"
          leave-active-class="animate__animated animate__flipOutY"
        >
          <b-icon-check-circle class="text-success" v-if="valid"/>
          <b-icon-exclamation-circle class="text-danger" v-else/>
        </transition>
      </template>
      </transition>
    </label>
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
import {BIconCheckCircle, BIconExclamationCircle} from 'bootstrap-icons-vue';

export default {
  components: {
    BIconCheckCircle, BIconExclamationCircle
  },
  props: {
    title: {type: String, required: true},
    value: {type: String, required: true},
    valid: {type: Boolean, required: true},
  },
  emits: {
    input: null,
    onmychange: true
  },
  data() {
    return {
      activated: !!this.value
    }
  },
  methods: {
    onInputMy(val) {
      this.activated = true;
      this.$emit('input', val);
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
</style>
