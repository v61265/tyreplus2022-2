<template>
  <div class="sidebar" :class="{ show: shouldShowSideBar }">
    <div
      class="sidebar__section section"
      :class="{ mobile: nowSection[0] !== i + 1 }"
      v-for="(section, i) in sections"
      :key="i"
    >
      <div class="section__name mobile">
        <div
          class="section__name--item"
          v-for="(name, nameIndex) in section.name"
          :key="nameIndex"
        >
          {{ name }}
        </div>
      </div>
      <div class="section__parts">
        <div
          class="section__parts--item"
          :class="{
            active: nowSection[0] === i + 1 && nowSection[1] === partIndex + 1,
          }"
          v-for="(part, partIndex) in section.parts"
          :key="partIndex"
        >
          {{ part }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Sidebar",
  props: {
    sections: {
      type: Array,
      default: () => [],
    },
    shouldShowSideBar: {
      type: Boolean,
      default: false,
    },
    nowSection: {
      type: Array,
      default: () => [1, 1],
    },
  },
};
</script>

<style lang="scss" scoped>
.sidebar {
  background: #77bc1f;
  padding: 156px 40px 16px 40px;
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  z-index: 400;
  color: #ffffff;
  transition: transform 1s;
  transform: translate(-100%, 0);
  &.show {
    transform: translate(0, 0);
  }
  @media screen and (min-width: 768px) {
    padding: 208px 28px 16px 28px;
    transform: translate(0, 0);
  }

  .section {
    &:not(:first-child) {
      margin-top: 36px;
    }
    @media screen and (min-width: 768px) {
      margin-top: 24px;
    }

    &__name {
      font-weight: 700;
      font-size: 16px;
    }

    &__parts--item {
      margin-top: 16px;
      color: #f2f2f2;
      display: flex;
      align-items: center;
      font-size: 14px;
      &:before {
        content: "";
        display: block;
        width: 16px;
        height: 16px;
        background: #f2f2f2;
        margin-right: 8px;
        @media screen and (min-width: 768px) {
          width: 24px;
          height: 24px;
          margin-right: 12px;
        }
      }
      @media screen and (min-width: 768px) {
        font-weight: 700;
        font-size: 21px;
        line-height: 30px;
      }
      &.active {
        color: #ffed00;
        &:before {
          background: #ffed00;
        }
      }
    }
  }
}

.mobile {
  @media screen and (min-width: 768px) {
    display: none;
  }
}
</style>
