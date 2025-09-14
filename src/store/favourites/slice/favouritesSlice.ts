import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import toast from 'react-hot-toast'

import type { FavouritesSchema } from '../types/favourites'

const initialState: FavouritesSchema = {
	ids: []
}

export const favouritesSlice = createSlice({
	name: 'favourites',
	initialState,
	reducers: {
		toggle: (state, action: PayloadAction<{ id: number }>) => {
			const { id } = action.payload

			if (state.ids.includes(id)) {
				state.ids = state.ids.filter(item => item !== id)
				toast.success('Удалено из избранного')
				return
			}

			toast.success('Добавлено в избранное')
			state.ids.push(id)
		}
	}
})

export const { actions: favouritesAction } = favouritesSlice
export const { reducer: favouritesReducer } = favouritesSlice
