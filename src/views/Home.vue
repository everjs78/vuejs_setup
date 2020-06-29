<template>
  <Vertical class="component login-form" base="fill">
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
  </Vertical>
</template>

<script>
// @ is an alias to /src
import { Vertical } from "@aergoenterprise/lib-components/src/layout";
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "Home",
  components: {
    Vertical,
    HelloWorld
  }
};
</script>

<style lang="scss">
.component.login-form {
  padding: 50px;
  border-radius: 8px;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.08);
  background-color: #ffffff;

  .logo {
    margin: 20px 0 56px;
  }
  .dialog-title {
    margin-bottom: 32px;
  }
  .username,
  .password {
    margin-bottom: 16px;
  }
  .login-button {
    margin-top: 32px;
  }
}
</style>
