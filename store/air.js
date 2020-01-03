export const state = () => ({
    record:[]
})

export const mutations = {
    searchRecord(state,data){
        state.record.unshift(data);
    }
}