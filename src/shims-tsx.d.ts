import Vue, { VNode } from 'vue'
import * as lodash from 'lodash'
import _moment from 'moment'

declare global {
  namespace JSX {
    // tslint:disable no-empty-interface
    interface Element extends VNode {}
    // tslint:disable no-empty-interface
    interface ElementClass extends Vue {}
    interface IntrinsicElements {
      [elem: string]: any
    }
  }
  namespace _ {
    const _lodash: typeof lodash
  }
  const moment: typeof _moment
}
