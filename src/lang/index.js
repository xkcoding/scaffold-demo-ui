import Vue from "vue";
import VueI18n from "vue-i18n";
import elementZhLocale from "element-ui/lib/locale/lang/zh-CN"; // element-ui lang
import zhLocale from "./zh";
import { getStore } from "@/util/store";
Vue.use(VueI18n);
const Avue = window.AVUE;
const messages = {
  zh: {
    ...zhLocale,
    ...elementZhLocale,
    ...Avue.locale.zh
  }
};

const i18n = new VueI18n({
  locale: getStore({ name: "language" }) || "zh",
  messages
});

export default i18n;
