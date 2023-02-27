import type { FCC } from 'react'
import { createStore, createTypedHooks, StoreProvider } from 'easy-peasy'
import { type ICartModel, cartStore } from './model'

const store = createStore<ICartModel>(cartStore)
const storeTypedHooks = createTypedHooks<ICartModel>()

export const useStoreActions = storeTypedHooks.useStoreActions
export const useStoreDispatch = storeTypedHooks.useStoreDispatch
export const useStoreState = storeTypedHooks.useStoreState

const AppStoreProvider: FCC = ({ children }) => (
	<StoreProvider store={ store }>{ children }</StoreProvider>
)

export { AppStoreProvider }
