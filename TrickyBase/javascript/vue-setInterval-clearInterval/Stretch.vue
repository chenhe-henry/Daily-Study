<template>
  <div class="stretch">
    <button @click="startCount" :disabled="!roundDuration">Click</button>
    <progress :value="progress" :max="roundDuration"></progress>
  </div>
</template>

<script>
export default {
  data() {
    return {
      levels: ["Beginner", "Intermediate", "Advanced"],
      progress: 0,
      roundDuration: null,
      exhaleMusic: null,
      endMusic: null,
    };
  },
  methods: {
    startCount() {
      this.exhaleMusic.play();
      let test = setInterval(() => {
        if (this.progress >= this.roundDuration) {
          clearInterval(test);
          this.endMusic.play();
        } else {
          this.progress++;
        }
      }, 1000);
    },
  },
};
</script>

<style lang="scss" scoped>
</style>
