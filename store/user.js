//保存user下的数据
export const state = {
    // 这是登录后的数据，包含token和user的对象
    userInfo:{}
}

// 同步修改state的数据
export const mutations = {
    // mutations函数的第一个参数必顺是state ，state就是上面的state对象
    // 函数的修改方式是为了方便修改其他逻辑
    setName(state,data){
        // 把请求到的数据赋值给userInfo
        state.userInfo = data;
    }
}

// 异步修改state的数据，存放公共的请求函数，并且该函数可能会修改state的数据（也不一定修改）
export const actions = {
    // 登录函数可能会复用，会多个地方调用到，刚好该函数请求完成后修改state中的userInfo
    login(store,data){
        //登录接口提交，（必须要添加return）
    return this.$axios({
            url:"/accounts/login",
            method:"POST",
            data
        }).then(res=>{
            // this.$router.back();
             // 调用user下的mutations的方法
            store.commit('setName', res.data)
            // 返回 true 出去 用来判断是否登录成功 给予用户提示
            return true
        })
    }
}