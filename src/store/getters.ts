import { AppState } from './types'
import { GetterTree } from 'vuex'

const getters: GetterTree<AppState, any> = {
  user: (state: AppState) => state.user
}

export default getters
