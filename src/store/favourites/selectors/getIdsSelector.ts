import { RootState } from '../../store'

export const getIdsSelector = (state: RootState) => state.favourites.ids
