<template>
  <div class="action">
    <div class="action__title">{{ action.title }}</div>
    <div class="action__desc">{{ action.desc }}</div>
  </div>
</template>

<script>
export default {
  name: "Action",
  props: {
    action: {
      type: Object,
      default: () => ({}),
    },
  },
};
</script>

<style lang="scss" scoped>
.action {
  background: #77bc1f;
  color: #fff;
  margin: 0 auto;
  padding: 177px 56px;
  min-height: 80vh;
  @media (min-width: 768px) {
    padding: 207px 40px 0 351px;
  }

  &__title {
    font-size: 20px;
    text-align: center;
    max-width: 677px;
    color: #fff;
    margin: 0 auto;
    @media (min-width: 768px) {
      font-size: 24px;
      line-height: 35px;
    }
  }

  &__desc {
    font-weight: 350;
    font-size: 14px;
    line-height: 20px;
    margin-top: 28px;
    max-width: 677px;
    color: #fff;
    margin: 0 auto;
    @media (min-width: 768px) {
      margin-top: 34px;
      font-size: 16px;
      line-height: 23px;
    }
  }
}
</style>
