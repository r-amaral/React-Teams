import { createSlice, PayloadAction } from '@reduxjs/toolkit';
interface languages {
    name: string;
    favorite: boolean;
}

const INITIAL_STATE: languages[] = [
    { name: 'JAVA', favorite: false },
    { name: 'C#', favorite: false },
    { name: 'JavaScript', favorite: false }
]

const sliceLanguages = createSlice({
    name: 'languages',
    initialState: INITIAL_STATE,
    reducers: {
        addLanguages(state, { payload }: PayloadAction<string>) {
            return [...state, { name: payload, favorite: false }]
        },
        toFavorite(state, { payload }: PayloadAction<string>) {
            return state.map(st => st.name === payload ? { ...st, favorite: !st.favorite } : st)
        },
        basic(state, { payload }: PayloadAction<string>) {
            return [...state,]
        }
    }
})

export default sliceLanguages.reducer;

export const { addLanguages, toFavorite } = sliceLanguages.actions;

export const useLanguages = (state: any) => {
    return state.languages as languages[];
}

