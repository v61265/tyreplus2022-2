<template>
  <div id="app">
    <div class="scroll-container">
      <div
        class="scroll-area landing"
        v-observe-visibility="{
          callback: landingVisibilityChanged,
          intersection: {
            threshold: 0.3,
          },
        }"
      >
        <Landing />
      </div>
      <div class="scroll-area">
        <Layout
          :sections="wording.sections"
          :nowSection="nowSection"
          :shouldShowLayout="shouldShowLayout"
        >
          <MainContent
            :conclusions="wording.conclusions"
            :sot="wording.sot"
            :feedbacks="wording.feedbacks"
            :action="wording.action"
            @setNowSection="setNowSection"
          />
        </Layout>
      </div>
    </div>
  </div>
</template>

<script>
import Landing from "./components/Landing.vue";
import Layout from "./components/Layout.vue";
import MainContent from "./components/MainContent.vue";

export default {
  name: "App",
  components: {
    Landing,
    Layout,
    MainContent,
  },
  data() {
    return {
      nowSection: [1, 1],
      shouldShowLayout: false,
      wording: {
        sections: [
          {
            name: ["最強職人", "養護愛車調查大公開"],
            parts: [
              "汽車保養廠的選擇關鍵",
              "完美保養必備要件",
              "最重視的零件品質",
              "最在意的服務細節",
            ],
          },
          {
            name: ["米其林認證保養", "體驗心得大直擊"],
            parts: [
              "「頂尖對決」滿意度大挑戰",
              "車主體驗真心話",
              "網友好評回饋",
            ],
          },
        ],
        conclusions: [
          {
            title: "挑選專業保養廠的主要關鍵？",
            subtitle: "價格透明是關鍵",
            content: [
              "88.5%車主認為價格透明為挑選汽車專業保養廠的主要關鍵。在保養過程中，車主除了在意價格透明、售後保障外，維修技術更佔了86.7%的比例。此外有車主表示，在過去曾遇到比自己懂得還少的技師，讓他在來回溝通裡漸失去對保養廠的信任。",
              "馳加始終堅持在客戶沒有清楚了解車輛狀況及所需費用下，不會擅自施工，同時在輪胎、機油及煞車系統三大核心業務上，更是以扎實流程、精湛技術獲得廣大消費者一致認可。",
            ],
            graph: "",
          },
          {
            title: "是否會期待技師的維修、保養技術與保護細節？",
            subtitle: "專業維修保養好安心",
            content: [
              "問卷調查顯示，41%車主認為在汽車保養過程中若能以專業儀器輔助，更能讓人安心。",
              "馳加店家除了備有專業儀器輔助，讓技師更能全面掌握整個車子狀況外；在檢查過程中也會盡可能保護車輛、確認細節，以提供車主值得信任的服務體驗。",
            ],
            graph: "",
          },
          {
            title:
              "對於汽車保養更換的零件，你會擔心零件是否為原廠或質量問題嗎？",
            subtitle: "原廠零件品質有保障",
            content: [
              "問卷調查顯示：85%車主擔心保養維修時，保養廠提供非原廠、品質不佳之零件。其中也有車主表示曾擅自被更換二手零件，卻在最後才被通知要收取費用。",
              "馳加在保養過程中，會不斷與車主確認報價，所供應之零部件均為可信賴之國際品牌：如MICHELIN米其林輪胎、TOTAL道達爾潤滑油、BOSCH博世煞車零配件等，除確保商品的品質與穩定外，更保障車主的行車體驗與安全。",
            ],
            graph: "",
          },
          {
            title: "會在意技師/接待員的服務態度嗎？",
            subtitle: "服務至上是關鍵",
            content: [
              "調查中顯示，98%的車主對於汽車保養的消費體驗是注重的，在消費者越來越重視消費體驗與滿意度下，汽車快保已非過往傳統黑手形象，馳加除了優質的技術專業度外，從店內環境、接待流程到報價流程，都希望帶給消費者不同於傳統且更貼近於原廠的體驗過程。",
            ],
            graph: "",
          },
        ],
        sot: {
          vidoeId: "ZOmz-ng-gEo",
          title: "直擊！米其林認證汽車保養體驗！最狂愛車魔人是他！",
          desc: "近期馳加針對最呵護愛車、以車為業的多元計程車司機們進行問卷調查。在過程中，我們發現大多數司機最在意：專業技術、透明的價格，與良好的售後服務等三大重點。因此，我們這次邀請這些愛車司機們來馳加店裡實際體驗保養與換胎服務。究竟馳加的專業技師們如何提供米其林認證的高品質服務？而這些司機們到最後是否滿意呢？",
        },
        feedbacks: [
          {
            name: "陳欽輝",
            isMr: true,
            desc: [
              "第一次到馳加發現店家非常明亮乾淨，因為剛好遇到下雨，我車才剛開到接待人員馬上打傘出來接我，服務很好！開始檢查前還會細心把方向盤、座位都套上保護套，檢查過程中有什麼問題也是跟我一一說明也提供清楚的報價單，技師也不會強迫一定要換，完全尊重我的意見。過程中我問了很多問題，技師好像朋友聊天一樣回答，很親切但也非常專業，是一個很棒的體驗，能多認識一間可信賴的保養廠我很開心。",
            ],
            img: [],
          },
          {
            name: "童閔浩",
            isMr: true,
            desc: [
              "這次馳加保養和換胎體驗跟我以前自己去的車廠有很大的不同，全車健檢時技師非常細心，換機油的時候還會把引擎裝保護罩，不用擔心車被弄髒。以前換輪胎看其它車廠做輪胎平衡都不會幫車主把輪框特別擦乾淨，這次看到他們一個一個輪框認真擦，覺得他們真的非常細心！",
              "技師也非常專業，全車健檢時幫我檢查出漏油，我前陣子才去檢查車子，當時完全沒有檢查出來！還有我沒想過保養廠的休息室可以做的這麼精緻舒服，這點也是大加分！",
            ],
            img: [],
          },
          {
            name: "彭博皓",
            isMr: true,
            desc: [
              "我本身是米其林輪胎的愛用者，之前就去過馳加其它分店做過輪胎定位，雖然很多車廠有類似服務，但靠機器定位完，技師還要開上路試車確認，這就非常考驗技師的真功夫，專業的技師就會讓人覺得安心。",
              "馳加讓我驚豔的是，我今天體驗的這間店素質也很好，要能連鎖又品質穩定真的不容易，會讓我覺得如果我以後在不同縣市遇到問題，就可以放心到當地馳加，加上他們價目表在牆上一目了然，也不用擔心說在異地亂找保養廠被坑錢。",
            ],
            img: [],
          },
          {
            name: "陳正弘",
            isMr: true,
            desc: [
              "這次體驗我很期待，我原本輪胎也是有廠牌的，但連乘客都反應輪胎聲音很大，聽說米其林輪胎安靜、好用，等不及想要用看看！以前我都是交給一般保養廠用車，這次發現米其林認證的保養果然不一樣，像四輪定位，店家說他們最近才進了最新的機器，景氣不好還這樣投資，真的很用心！",
              "我們營業車很注重用在車子上的每一分錢，技師提供的報價一目了然，講解過程也都把選擇權交在我們手上，不會覺得壓力很大，整體感受起來真的滿舒服的！",
            ],
            img: [],
          },
          {
            name: "黃海華",
            isMr: false,
            desc: [
              "這次體驗我最喜歡的是環境很舒服乾淨，重要的是坐在休息室就可以看到車子保養的狀況，一般我都是回原廠保養，原廠車一開走什麼就看不到，就發生過保養完車有問題的爭議，可以直接看到技師做到什麼步驟，感覺很安心，而且服務態度也很親切。",
              "我覺得既然買了油電車，就要多了解它，我甚至自己也都是買機油去原廠換，這次體驗用的Total機油是不錯的品牌，加上搭配米其林輪胎，都是可信任的大品牌，會讓我覺得原廠之外也多了一個新的選擇！",
            ],
            img: [],
          },
        ],
        action: {
          title: "網友好評回饋  現正蒐集中",
          desc: "法國米其林集團旗下品牌「TYREPLUS馳加」以專業維修技術、價格透明、售後服務品質有保障，讓消費者享有國際水準的輪胎購買與汽車服務體驗，在網路上早有一大票死忠粉絲。看完「頂尖對決」專業車主的實際保養體驗心得，網友怎麼說？請期待!",
        },
      },
    };
  },
  methods: {
    setNowSection(sectionArr) {
      this.nowSection = sectionArr;
    },
    landingVisibilityChanged(visibility) {
      this.shouldShowLayout = !visibility;
    },
  },
};
</script>

<style lang="scss" scoped>
@import url(//fonts.googleapis.com/earlyaccess/notosanstc.css);
#app {
  font-family: "Noto Sans TC";
  margin: 0;

  .scroll-container,
  .scroll-area {
    max-width: 100vw;
    height: 100vh;
  }

  .scroll-container {
    overflow: auto;
    scroll-snap-type: y mandatory;
  }

  .scroll-area {
    scroll-snap-align: start;
    position: relative;
  }

  .landing {
    height: 235vw;
    @media (min-width: 768px) {
      height: 66.46vw;
      min-height: 100vh;
    }
  }
}
</style>
