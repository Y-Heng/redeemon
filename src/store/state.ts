import { getLocal } from '@/store/localstorage'
import SessionKey from './keys'
import { AppState } from './types'

const state: AppState = {
  user: getLocal(SessionKey.USER_KEY)
}

export default state
