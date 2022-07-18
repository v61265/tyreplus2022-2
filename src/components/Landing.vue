<template>
  <div class="landing">
    <img src="../assets/cover-wording.png" class="wording" />
  </div>
</template>

<script>
export default {
  name: "Landing",
};
</script>

<style lang="scss" scoped>
.landing {
  min-width: 100vw;
  background: url("../assets/cover-bg-mobile.jpg");
  background-size: cover !important;
  background-position: center center;
  position: relative;
  @media (min-width: 768px) {
    background: url("../assets/cover-bg.jpg");
    background-position: center center;
  }

  .wording {
    position: absolute;
    max-width: 75vw;
    bottom: 5%;
    left: 50%;
    transform: translate(-50%, 0);
    @media (min-width: 768px) {
      bottom: 50%;
      left: 6%;
      transform: translate(0, 50%);
    }
  }
}
</style>
