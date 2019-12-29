<template>
  <el-form :model="form" ref="form" :rules="rules" class="form">
    <el-form-item class="form-item" prop="username">
      <el-input v-model="form.username" placeholder="用户名/手机"></el-input>
    </el-form-item>

    <el-form-item class="form-item">
      <el-input v-model="form.password" placeholder="密码" type="password"></el-input>
    </el-form-item>

    <p class="form-text">
      <nuxt-link to="#">忘记密码</nuxt-link>
    </p>

    <el-button class="submit" type="primary" @click="handleLoginSubmit">登录</el-button>
  </el-form>
</template>

<script>
export default {
  data() {
    //   判断定义用户名规则
    var validateUsername = (rule, value, callback) => {
      let reg =/^\d{11}$/;
      if (reg.test(value)) {
        callback();
      } else {
        callback("用户名格式有误");
      }
    };
    return {
      // 表单数据
      form: {
        username: "13800138000",
        password: "123456"
      },
      // 表单规则
      rules: {
        username: [{ validator: validateUsername, trigger: "blur" }]
      }
    };
  },
  methods: {
    // 提交登录
    handleLoginSubmit() {
      this.$refs['form'].validate(valid => {
        //   console.log(valid);
        // if (valid) {
        //   this.$axios({
        //       url:"/accounts/login",
        //       method:"POST",
        //       data:this.form
        //   }).then(res=>{
        //       console.log(res.data);
        //   })
        // } else {
        //   return false;
        // }
        this.$store.dispatch('user/login', this.form).then(res=>{
            console.log(res);
            if(res === true){
                this.$message.success("登录成功，返回上一个页面");
                // 定时跳转
                setTimeout(() => {
                        this.$router.replace("/")
                    }, 1000);
            }  
        })
      });
    // this.$store.commit("user/setName",res.data) 
    }
  }
};
</script>

<style scoped lang="less">
.form {
  padding: 25px;
}

.form-item {
  margin-bottom: 20px;
}

.form-text {
  font-size: 12px;
  color: #409eff;
  text-align: right;
  line-height: 1;
}

.submit {
  width: 100%;
  margin-top: 10px;
}
</style>
