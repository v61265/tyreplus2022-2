<template>
  <div class="feedback">
    <div></div>
    <div class="feedback__content">
      <div class="feedback__content--title">{{ feedback.name }}</div>
      <div>
        <div
          class="feedback__content--desc"
          v-for="desc in feedback.desc"
          :key="desc"
        >
          {{ desc }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "FeedbackItem",
  props: {
    feedback: {
      type: Object,
      default: () => ({}),
    },
  },
};
</script>

<style lang="scss" scoped>
.feedback {
  padding: 85px 0px 21px 0px;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  min-height: calc(100vh - 88.5px);
  @media (min-width: 768px) {
    padding: 165px 0px 68px 302px;
    min-height: calc(100vh - 233px);
  }

  &__content {
    padding: 28px 56px;
    @media (min-width: 768px) {
      display: flex;
      max-width: 977px;
      padding: 40px;
      align-items: center;
    }
    &--title {
      font-weight: 700;
      font-size: 24px;
      line-height: 35px;
      text-align: center;
      color: #009944;
      margin-bottom: 32px;
      @media (min-width: 768px) {
        font-size: 40px;
        line-height: 58px;
        margin-bottom: 0;
        min-width: 177px;
      }
    }
    &--desc {
      font-weight: 350;
      font-size: 14px;
      line-height: 20px;
      color: #009944;
      @media (min-width: 768px) {
        font-size: 22px;
        line-height: 32px;
        flex: 1;
        &:not(:first-child) {
          margin-top: 16px;
        }
      }
    }
  }
}
</style>
