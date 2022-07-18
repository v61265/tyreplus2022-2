<template>
  <div class="wrapper scroll-container-inside">
    <div
      class="scroll-area-inside"
      v-for="(conclusion, i) in conclusions"
      :key="i"
      :id="i"
      v-observe-visibility="{
        callback: visibilityChanged,
        intersection: {
          threshold: 0.3,
        },
      }"
    >
      <ConclusionItem :conclusion="conclusion" />
    </div>
    <div
      class="scroll-area-inside"
      v-observe-visibility="{
        callback: sotVisibilityChanged,
        intersection: {
          threshold: 0.3,
        },
      }"
    >
      <Sot :sot="sot" />
    </div>
    <div v-observe-visibility="feedbackVisibilityChanged">
      <div
        class="scroll-area-inside"
        v-for="feedback in feedbacks"
        :key="feedback.name"
      >
        <FeedbackItem :feedback="feedback" />
      </div>
    </div>
    <div
      class="scroll-area-inside"
      v-observe-visibility="{
        callback: actionVisibilityChanged,
        intersection: {
          threshold: 0.3,
        },
      }"
    >
      <Action :action="action" />
    </div>
  </div>
</template>

<script>
import ConclusionItem from "./ConclusionItem.vue";
import Sot from "./Sot.vue";
import FeedbackItem from "./FeedbackItem.vue";
import Action from "./Action.vue";
export default {
  name: "MainContent",
  components: {
    ConclusionItem,
    Sot,
    FeedbackItem,
    Action,
  },
  props: {
    conclusions: {
      type: Array,
      default: () => [],
    },
    sot: {
      type: Object,
      default: () => ({}),
    },
    feedbacks: {
      type: Array,
      default: () => [],
    },
    action: {
      type: Object,
      default: () => ({}),
    },
  },
  methods: {
    visibilityChanged(isVisible, entry) {
      if (isVisible) {
        this.$emit("setNowSection", [1, parseInt(entry.target.id) + 1]);
      }
    },
    sotVisibilityChanged(isVisible) {
      if (isVisible) {
        this.$emit("setNowSection", [2, 1]);
      }
    },
    feedbackVisibilityChanged(isVisible) {
      if (isVisible) {
        this.$emit("setNowSection", [2, 2]);
      }
    },
    actionVisibilityChanged(isVisible) {
      if (isVisible) {
        this.$emit("setNowSection", [2, 3]);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.wrapper {
  .scroll-container-inside,
  .scroll-area-inside {
    max-width: 100vw;
  }

  .scroll-container-inside {
    overflow: auto;
    scroll-snap-type: y mandatory;
  }

  .scroll-area-inside {
    width: 100vw;
    min-height: calc(100vh - 88.5px);
    scroll-snap-align: start;
    @media (min-width: 768px) {
      min-height: calc(100vh - 95px);
    }
  }
}
</style>
