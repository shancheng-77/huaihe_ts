import {createSlice, PayloadAction} from '@reduxjs/toolkit'

export type Test = {
	length: number;
	info: {
		name: string,
		value: number
	}
}
const initialState: Test = {
	length: 1,
	info: {
		name: 'number',
		value: 2
	}
}
export const objectSlice = createSlice({
	name: 'object',
	initialState,
	reducers: {
		addLength: state => {
			state.length += 1
		},
		setName: (state, action: PayloadAction<string>) => {
			state.info.name = action.payload
		},
		setValue: (state, action: PayloadAction<number>) => {
			state.info.value = action.payload
		}
	}
})

export const {
	addLength,
	setName,
	setValue,
} = objectSlice.actions

export default objectSlice.reducer
