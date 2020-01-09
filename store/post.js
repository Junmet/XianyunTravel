
export const state =()=> ({
    // 新增文章对象
    newly:[]
})

export const mutations = {
    storage(state,data){
        state.newly.push(data)
    }

}
