<template>
  <div class="sot">
    <youtube video-id="ZOmz-ng-gEo"></youtube>
    <div class="sot__content">
      <div class="sot__content--title">{{ sot.title }}</div>
      <div class="sot__content--desc">{{ sot.desc }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Sot",
  props: {
    sot: {
      type: Object,
      default: () => ({}),
    },
  },
};
</script>

<style lang="scss" scoped>
.sot {
  padding: 85px 0px 21px 0px;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  min-height: calc(100vh - 88.5px);
  @media (min-width: 768px) {
    padding: 165px 86px 68px 388px;
    min-height: calc(100vh - 233px);
  }

  &__content {
    padding: 28px 56px;
    @media (min-width: 768px) {
      padding: 15px 74px;
    }
    &--title {
      font-weight: 700;
      font-size: 24px;
      line-height: 35px;
      text-align: center;
      color: #009944;
      @media (min-width: 768px) {
        font-size: 48px;
        line-height: 70px;
        text-align: start;
      }
    }
    &--desc {
      margin-top: 28px;
      font-weight: 350;
      font-size: 14px;
      line-height: 20px;
      color: #009944;
      @media (min-width: 768px) {
        font-size: 20px;
        line-height: 29px;
        margin-top: 16px;
      }
    }
  }
}
</style>
