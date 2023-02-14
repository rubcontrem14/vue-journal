// export const myMutation = (state) => {
//    
// }

export const setEntries = (state, entries) => {
   state.entries = [...state.entries, ...entries]
   state.isLoading = false
}

export const updateEntry = (state, entry) => {

   const idx = state.entries.map(e => e.id).indexOf(entry.id)
   state.entries[idx] = entry
   
}

export const addEntry = (state, entry) => {
   state.entries.unshift(entry)
}

export const deleteEntry = (state, id) => {

   // const index = state.entries.indexOf(id)
   // state.entries = state.entries.splice(index,1)
   state.entries = state.entries.filter(entry => entry.id !== id)
}