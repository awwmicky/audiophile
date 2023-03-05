import type { FCC } from 'react'
import { createStore, persist, createTypedHooks, StoreProvider } from 'easy-peasy'
import localforage  from 'localforage'
import { type ICartModel, cartStore } from './model'

const store = createStore<ICartModel>(persist(cartStore, {
	storage: localforage.createInstance({
		driver: localforage.INDEXEDDB,
		// name: 'GLOBAL_STORAGE',
	}),
}), {
	name: 'GLOBAL_STORE',
})

const storeTypedHooks = createTypedHooks<ICartModel>()
export const useStoreActions = storeTypedHooks.useStoreActions
export const useStoreDispatch = storeTypedHooks.useStoreDispatch
export const useStoreState = storeTypedHooks.useStoreState

/*  */

const AppStoreProvider: FCC = ({ children }) => (
	<StoreProvider store={ store }>{ children }</StoreProvider>
)

export { AppStoreProvider }
