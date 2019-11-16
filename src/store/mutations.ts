import { MutationTree } from 'vuex'
import { AppState } from './types'
import SessionKey from './keys'
import { setLocal, removeLocal } from '@/store/localstorage'

const mutations: MutationTree<AppState> = {
  SET_user: (state, user) => {
    state.user = user
    setLocal(SessionKey.USER_KEY, user)
  },
  REMOVE: state => {
    state.user = undefined
    removeLocal(SessionKey.USER_KEY)
  }
}

export default mutations
