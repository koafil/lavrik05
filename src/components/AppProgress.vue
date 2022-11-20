<template>
  <div class="progress mt-4">
    <div class="progress-bar" role="progressbar" aria-label="Example with label"
         :style="{ width: Math.trunc(progress)+'%'}"
    >
      <span v-if="progress>4">{{ Math.trunc(progress) }}%</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "AppProgress",
  props:{
    progress: {type: Number, default: 0}
  }
}
</script>

<style scoped>

</style>