<template>
  <div class="layout">
    <Header
      v-show="shouldShowLayout"
      :shouldShowSideBar="shouldShowSideBar"
      :sections="sections"
      :nowSection="nowSection"
      @toggleSideBar="toggleSideBar"
    />
    <Sidebar
      v-show="shouldShowLayout"
      :shouldShowSideBar="shouldShowSideBar"
      :sections="sections"
      :nowSection="nowSection"
    />
    <slot />
  </div>
</template>

<script>
import Header from "./Header.vue";
import Sidebar from "./SideBar.vue";
export default {
  name: "Layout",
  components: {
    Header,
    Sidebar,
  },
  props: {
    sections: {
      type: Array,
      default: () => [],
    },
    nowSection: {
      type: Array,
      default: () => [1, 1],
    },
    shouldShowLayout: {
      type: Boolean,
      default: false,
    },
  },

  data() {
    return {
      shouldShowSideBar: false,
    };
  },
  methods: {
    toggleSideBar() {
      this.shouldShowSideBar = !this.shouldShowSideBar;
    },
  },
};
</script>

<style lang="scss" scoped>
.layout {
  min-width: 100vw;
  max-width: 100vw;
  top: 0;
  left: 0;
}
</style>
