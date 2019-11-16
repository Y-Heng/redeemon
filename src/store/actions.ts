import { ActionTree } from 'vuex'
import { AppState } from './types'

const actions: ActionTree<AppState, any> = {
  // 前端 登出
  LogOut({ commit }) {
    return new Promise(resolve => {
      commit('REMOVE')
      resolve()
    })
  }
}

export default actions
