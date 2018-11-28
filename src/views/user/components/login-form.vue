<template>
  <el-card class='custom-login-card'>
    <div slot="header">
      <span class="custom-login-card-title">账号登录</span>
    </div>
    <el-form ref="loginForm" :rules="ruleValidate" :model="formValidate">
      <el-form-item prop="userName">
        <el-input size="small" v-model="formValidate.userName" placeholder="请输入用户名" @keyup.enter.native="onLogin">
          <template slot="prepend">
            <i class="custom-el-icon-user"></i>
          </template>
        </el-input>
      </el-form-item>
      <el-form-item prop="password">
        <el-input size="small" type="password" v-model="formValidate.password" placeholder="请输入账号密码" class="custom-mtb10"
          @keyup.enter.native="onLogin">
          <template slot="prepend">
            <i class="custom-el-icon-locking"></i>
          </template>
        </el-input>
      </el-form-item>
      <el-button type="primary" size="small" class="custom-login-submit" @click="onLogin">登录</el-button>
    </el-form>
    <p class="custom-login-tip">输入任意用户名和密码即可</p>
  </el-card>
</template>
<script>
export default {
  data() {
    return {
      formValidate: {},
      ruleValidate: {
        userName: [
          {
            required: true,
            message: '请输入用户名',
            trigger: 'change'
          }
        ],
        password: [
          {
            required: true,
            message: '请输入密码',
            trigger: 'change'
          }
        ]
      }
    };
  },
  methods: {
    onLogin(formName) {
      this.$refs['loginForm'].validate(valid => {
        if (valid) {
          alert('submit!');
        } else {
          console.log('error submit!!');
          return false;
        }
      });
    }
  }
};
</script>
<style lang='less'>
.custom-login-card {
  .el-form-item {
    margin-bottom: 10px;
  }

  .el-card__header {
    padding: 10px 20px !important;
    font-size: 14px;
    border-bottom: 1px solid #909399;
  }

  .el-input__inner {
    padding: 0 10px;
  }

  .el-input__inner,
  .el-input-group__prepend {
    background-color: rgb(44, 49, 60);
    border: 1px solid #909399;
    color: #fff;
  }

  .el-input-group__prepend {
    border-right: none;
    color: #dddee1;
    padding: 0 10px;
  }

  .custom-login-card-title {
    border-bottom: 2px #3a8ee6 solid;
    padding: 0 4px 10px 4px;
  }

  .custom-login-submit {
    width: 100%;
    margin-top: 10px;
  }

  .custom-login-tip {
    color: #c3c3c3;
    font-size: 10px;
    text-align: center;
    margin-top: 30px;
  }

  .el-form-item__content {
    margin-left: 0 !important;
  }
}
</style>
