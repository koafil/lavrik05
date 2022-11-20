<template>
  <div>
    <label class="form-label">{{ title }}
      <transition appear
                  name="fade"
      >
        <span v-if="activated">
          <transition name="rotate" mode="out-in">
            <b-icon-check-circle class="text-success" v-if="valid" />
            <b-icon-exclamation-circle class="text-danger" v-else />
          </transition>
        </span>
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
.fade-enter-active {
  animation: fadeIn 0.5s;
}

.rotate-enter-active {
  animation: rotateIn 0.2s;
}

.rotate-leave-active {
  animation: rotateOut 0.2s;
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

@keyframes rotateIn {
  from {
    transform: rotateY(90deg);
  }
  to {
    transform: rotateY(0);
  }
}

@keyframes rotateOut {
  from {
    transform: rotateY(0);
  }
  to {
    transform: rotateY(90deg);
  }
}
</style>
