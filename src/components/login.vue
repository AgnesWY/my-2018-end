<template>

  <div class="login">
    <el-form :model="ruleForm2" status-icon :rules="rules2" ref="ruleForm2" label-width="100px" class="demo-ruleForm">
        <el-form-item label="用户名" prop="username">
            <el-input type="text" v-model="ruleForm2.username" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password">
            <el-input type="password" v-model="ruleForm2.password" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item>
            <el-button type="primary" @click="submitForm('ruleForm2')">提交</el-button>
        </el-form-item>
    </el-form>
  
  </div>
</template>

<script>
export default {
  name: 'login',
  data () {
    var validateName = (rule,value, callback)=>{
        if(!value){
            return callback(new Error("姓名不能为空"))
        }else{
            callback();
        }

    };
    var validatePass = (rule,value, callback)=>{

        if(!value){
            return callback(new Error("密码不能为空"))
        }else{
            return callback();
        }

    };
    var validateAge = (rule,value, callback)=>{
        if(!value){
            return callback(new Error("年龄不能为空"))
        }
        setTimeout(()=>{
            if(!Number.isInteger(value)){
                callback(new Error("请输入数字"))
            }else{
                if(value < 18){
                    callback(new Error("哈哈哈哈"))
                } else{
                    callback();
                }
            }
        },1000)

    }; 
    return {
        ruleForm2:{
            username:"",
            password:"",
            age:""
        },
        rules2:{
            username:[{
                validator:validateName,
                trigger:"blur"

            }],
            password:[{
                validator:validatePass,
                trigger:"blur"

            }],
            age:[{
                validator:validateAge,
                trigger:"blur"

            }]

        }
    }
  },
  methods:{
    submitForm(formname){
        var reqData={
            json: {
                account: this.username,
                password: this.password
            }
        }
        this.$refs[formname].validate((valid)=>{
            if(valid){
                alert("submits")
                 this.$http.post('/dladmin/login/login.html',reqData, {emulateJSON:true}).then( ({data,ok,statusText}) => {
                    if(ok){
                        if(data.status == 0){
                            location.href = "/"

                        }
                    
                    }else { 
                        that.$message.error('系统错误，请稍后再试');
                    }
                })

            }else{
                alert("fail")
                return false;
            }
        })

    }
    
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
