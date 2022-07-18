<template>
  <div>
    <div class="header">
      <img src="../assets/home.svg" class="header__home" />
      <a
        target="_blank"
        href="https://tyreplus.com.tw/"
        rel="noreferrer"
        class="header__logo"
      >
        <img alt="tyre" src="../assets/tyre-icon.svg" />
      </a>
      <ul class="header__sections desktop">
        <li
          v-for="(section, i) in sections"
          class="header__sections--item"
          :class="{ active: nowSection[0] === i + 1 }"
          :key="i"
        >
          {{ section.name[0] }}{{ section.name[1] }}
        </li>
      </ul>
      <div class="header__right">
        <img
          alt="burger "
          src="../assets/burger.svg"
          class="header__burger mobile"
          :class="{ open: shouldShowSideBar }"
          @click="handleClickBurger"
        />
        <div v-click-outside="() => setShouldShowShareIcon(false)">
          <img
            alt="share"
            src="../assets/share-icon.svg"
            class="header__share"
            @click="() => setShouldShowShareIcon(!shouldShowShareIcon)"
          />
          <div
            v-show="shouldShowShareIcon"
            class="header__share-icons share-icons"
          >
            <a
              target="_blank"
              href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fwww.mirrormedia.mg%2Fcampaigns%2Ftyreplus2022%2Findex.html&amp;src=sdkpreparse"
              rel="noreferrer"
              class="share-icons__item"
              ><img alt="fcebook" src="../assets/fb.svg"
            /></a>
            <a
              target="_blank"
              href="https://social-plugins.line.me/lineit/share?url=https://www.mirrormedia.mg/campaigns/tyreplus2022/index.html"
              rel="noreferrer"
              class="share-icons__item"
              ><img alt="line" src="../assets/line.png"
            /></a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ClickOutside from "vue-click-outside";
export default {
  name: "Header",
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
  data() {
    return {
      shouldShowShareIcon: false,
    };
  },
  directives: {
    ClickOutside,
  },
  methods: {
    setShouldShowShareIcon(value) {
      this.shouldShowShareIcon = value;
    },
    handleClickBurger() {
      this.$emit("toggleSideBar");
    },
  },
  mounted() {
    // prevent click outside event with popupItem.
    this.popupItem = this.$el;
  },
};
</script>

<style lang="scss" scoped>
.header {
  display: flex;
  justify-content: space-between;
  padding: 30px 20px;
  z-index: 200;
  position: fixed;
  top: 0;
  left: 0;
  width: calc(100% - 40px);
  align-items: center;
  background: #009944;
  @media screen and (min-width: 768px) {
    padding: 20px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    z-index: 500;
  }

  &__home {
    height: 24px;
    &:hover {
      cursor: pointer;
    }
    @media screen and (min-width: 768px) {
      height: 36px;
    }
  }

  &__logo {
    position: absolute;
    top: 28px;
    left: 50%;
    transform: translate(-50%, 0);
    width: 76px;
    @media screen and (min-width: 768px) {
      top: 20px;
      left: 76px;
      transform: none;
      width: 108px;
    }
  }

  &__right {
    display: flex;
    align-items: center;
  }

  &__share {
    width: 24px;
    height: 24px;
    margin-left: 12px;
    &:hover {
      cursor: pointer;
    }
    @media screen and (min-width: 768px) {
      width: 34px;
      height: 32px;
    }
  }

  &__burger {
    width: 28px;
    height: 16px;
    transition: transform 2s;
    &:hover {
      cursor: pointer;
    }
    &.open {
      transform: rotate(90deg);
    }
  }

  .share-icons {
    position: absolute;
    top: 10px;
    right: 0;
    transform: translate(0, 70px);
    padding: 0 20px;
    z-index: 200;
    height: 24px;
    &__item {
      background: #fff;
      width: 24px;
      height: 24px;
      border-radius: 50%;
      z-index: 200;
      display: flex;
      align-items: center;
      justify-content: center;
      border: 1px solid #009944;
      &:hover {
        cursor: pointer;
        box-shadow: 2px 2px 0 rgba(0, 0, 0, 0.5);
        transform: translate(1px, 1px);
      }
      &:not(:first-child) {
        margin-top: 12px;
      }
      @media screen and (min-width: 768px) {
        width: 36px;
        height: 36px;
      }

      img {
        height: 70%;
      }
    }
  }

  &__sections {
    display: flex;
    font-weight: 700;
    font-size: 16px;
    line-height: 23px;
    color: #ffffff;
    &--item {
      position: relative;
      list-style-type: none;
      &:not(:first-child) {
        margin-left: 96px;
      }
      &:after {
        display: block;
        height: 4px;
        width: calc(100% - 30px);
        background: #ffff29;
        position: absolute;
        bottom: -28px;
        left: 15px;
      }
      &:hover {
        cursor: pointer;
        color: #ffff29;
        &:after {
          content: "";
        }
      }

      &.active {
        color: #ffff29;
        &:after {
          content: "";
        }
      }
    }
  }
}

.desktop {
  display: none;
  @media screen and (min-width: 768px) {
    display: inherit;
  }
}

.mobile {
  @media screen and (min-width: 768px) {
    display: none;
  }
}
</style>
