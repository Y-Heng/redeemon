declare module '*.vue' {
  import Vue from 'vue'
  export default Vue
}
declare module 'vue/types/vue' {
  import VueRouter, { Route } from 'vue-router'
  import VueI18n from 'vue-i18n'
  interface Vue {
    // $message: any
    // $i18n: VueI18n;
    $router: VueRouter
    $route: Route
  }
}
