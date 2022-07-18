import Vue from "vue";
import App from "./App.vue";
import "./assets/reset.css";
import VueYouTubeEmbed from "vue-youtube-embed";
import VueObserveVisibility from "vue-observe-visibility";

Vue.config.productionTip = false;

Vue.use(VueObserveVisibility);

Vue.use(VueYouTubeEmbed);

new Vue({
  render: (h) => h(App),
}).$mount("#app");
