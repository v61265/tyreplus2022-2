<template>
  <div class="conclusion">
    <div class="conclusion__title">{{ conclusion.title }}</div>
    <div class="conclusion__info info">
      <img class="info__img" />
      <div class="info__content">
        <div class="info__content--subtitle">{{ conclusion.subtitle }}</div>
        <div
          class="info__content--paragraph"
          v-for="(paragraph, i) in conclusion.content"
          :key="i"
        >
          {{ paragraph }}
        </div>
      </div>
    </div>
    <div class="conclusion__next" @click="scrollToNext" />
  </div>
</template>

<script>
export default {
  name: "ConclusionItem",
  props: {
    conclusion: {
      type: Object,
      default: () => ({}),
    },
  },
  methods: {
    scrollToNext() {},
  },
};
</script>

<style lang="scss" scoped>
.conclusion {
  padding: 109.5px 24px 21px 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  min-height: calc(100vh - 88.5px);
  @media (min-width: 768px) {
    padding: 165px 86px 68px 388px;
    min-height: calc(100vh - 233px);
  }

  &__title {
    font-weight: 900;
    font-size: 26px;
    line-height: 38px;
    color: #009944;
    text-align: center;
    @media (min-width: 768px) {
      font-size: 52px;
      line-height: 75px;
    }
  }

  .info {
    &__content {
      padding: 23px 15px 47px 15px;
      background: #ffffe7;
      border: 3px solid #009944;
      border-radius: 62px;
      max-width: 348px;
      margin: 0 auto;
      @media (min-width: 768px) {
        padding: 32px;
      }

      &--subtitle {
        font-weight: 700;
        font-size: 22px;
        line-height: 32px;
        text-align: center;
        text-decoration-line: underline;
        color: #009944;
        margin-bottom: 23px;
        @media (min-width: 768px) {
          font-size: 28px;
          line-height: 41px;
        }
      }

      &--paragraph {
        font-weight: 350;
        font-size: 14px;
        line-height: 20px;
        color: #009944;
        &:not(:first-child) {
          margin-top: 2em;
        }
        @media (min-width: 768px) {
          font-size: 18px;
          line-height: 26px;
        }
      }
    }
  }

  &__next {
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 24.2px 14px 0 14px;
    border-color: #009945 transparent transparent transparent;
    position: absolute;
    bottom: 60px;
    left: 50%;
    transform: translate(-50%, -50%);
    &:hover {
      cursor: pointer;
    }
  }
}
</style>
