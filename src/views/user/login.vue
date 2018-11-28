<template>
  <el-container class='custom-login-container'>
    <vue-particles color="#dedede" class='particles-js'></vue-particles>
    <transition name="el-zoom-in-top">
      <login-form v-if="isShowLoginForm"></login-form>
    </transition>
  </el-container>
</template>
<script>
  import loginForm from './components/login-form'
  export default {
    components: {
      loginForm
    },
    data() {
      return {
        isShowLoginForm: false
      };
    },
    mounted() {
      setTimeout(() => {
        this.isShowLoginForm = true;
      }, 400)
    },
  };

</script>
