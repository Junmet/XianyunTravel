export const state = () => ({
    // 历史搜索
    record:[],
    // 机票总价格
    totalPrice:0
})

export const mutations = {
    searchRecord(state,data){
        state.record.unshift(data);
    },
    // 修改机票的总价格
    airTickePrice(state,data){
        state.totalPrice = data
    }
}