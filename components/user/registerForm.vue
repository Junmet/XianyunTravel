<template>
    <el-form :model="form" ref="form" :rules="rules" class="form">
            <el-form-item class="form-item" prop="username">
                <el-input placeholder="用户名手机" v-model="form.username" ></el-input>
            </el-form-item>

            <el-form-item class="form-item">
                <el-input placeholder="验证码" v-model="form.captcha" >
                    <template slot="append">
                        <el-button plain @click="handleSendCaptcha">
                            发送验证码
                        </el-button>
                    </template>
                </el-input>
            </el-form-item>

            <el-form-item class="form-item" prop="nickname">
                <el-input placeholder="你的名字" v-model="form.nickname" ></el-input>
            </el-form-item>

            <el-form-item class="form-item" prop="password">
                <el-input placeholder="密码" type="password" v-model="form.password"></el-input>
            </el-form-item>

            <el-form-item class="form-item" prop="checkPassword">
                <el-input placeholder="确认密码" type="password" v-model="form.checkPassword"></el-input>
            </el-form-item>

            <el-button class="submit" type="primary" @click="handleRegSubmit">注册</el-button>
        </el-form>
</template>

<script>
export default {
    data(){
        // 用户名规则
        var validateUsername = (rule, value, callback) => {
            let reg = /^(0|86|17951)?(13[0-9]|15[012356789]|166|17[3678]|18[0-9]|14[57])[0-9]{8}$/;
            if(reg.test(value)){
                callback()
            }else{
                callback("用户名格式不正确！")
            }
      };
    //   昵称的规则
        var validateNickname = (rule, value, callback) => {
            let reg2 = /^[\u4e00-\u9fa5]{2,8}$/
            if(reg2.test(value)){
                callback()
            }else{
                callback("昵称格式不正确！")
            }
      };
    //   密码的规则
       var validatePassword = (rule, value, callback) => {
        if (value === '') {
          callback("请输入密码！！！");
        } else {
          if (this.form.checkPassword !== '') {
            // validateField 对部分表单字段进行校验的方法
            this.$refs.form.validateField('checkPassword');
          }
          callback();
        }
      };
    //   再次确认密码
        var validateCheckPassword = (rule, value, callback) => {
        if (value === '') {
          callback('请再次输入密码！！！');
        } else if (value !== this.form.password) {
          callback('两次输入密码不一致！！！');
        } else {
          callback();
        }
      };
        return {
            // 表单数据
            form: {
                username:'', //用户名
                nickname:'',//昵称
                captcha:'',//验证码
                password:'',//密码
                checkPassword:''//密码再次确认
            },
            // 表单规则
            rules: {
                username:[{ validator: validateUsername, trigger: 'blur' }],
                nickname:[{ validator: validateNickname, trigger: 'blur' }],
                password:[{ validator: validatePassword, trigger: 'blur' }],
                checkPassword:[{ validator: validateCheckPassword, trigger: 'blur' }]
            },
        }
    },
    methods: {
        // 发送验证码
        handleSendCaptcha(){
            // console.log(mes);
            
            this.$axios({
                url:"/captchas",
                method:"POST",
                data:{tel:this.form.username}
            }).then(res=>{
                // console.log(res);
                // let mes = res.data.code
                // // console.log(mes);
                // return mes
            }),
             this.$notify({
                title: '你的验证码为',
                message:"000000",
                type: 'success'
            });

        },


        // 注册
        handleRegSubmit(){
        //    console.log(this.form)
           let {checkPassword,...props} = this.form
        //    console.log(params);
           this.$axios({
                url: "/accounts/register",
                method: "POST",
                data: props
           }).then(res=>{
               console.log(res);
               if(res.status===200){
                this.$message.success("注册成功,去登录"); 
                this.form =""
               }
           })
        }
    }
}
</script>

<style scoped lang="less">
    .form{
        padding:25px;
    }

    .form-item{
        margin-bottom:20px;
    }

    .form-text{
        font-size:12px;
        color:#409EFF;
        text-align: right;
        line-height: 1;
    }

    .submit{
        width:100%;
        margin-top:10px;
    }
</style>