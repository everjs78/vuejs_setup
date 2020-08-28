<template>
  <v-row align="center" justify="center">
    <v-col cols="12" sm="8" md="4">
      <div class="component login d-flex flex-column">
        <v-card flat>
          <div class="login-form-container d-flex flex-column align-center">
            <div class="login-form">
              <!--<Logo :width="346" /> -->
              <div class="login-title">
                {{ $t('title.login') }}
              </div>
              <v-text-field v-model="userId" :label="$t('labels.user_id')" required autofocus />
              <v-text-field
                v-model="password"
                type="password"
                :label="$t('labels.password')"
                :rules="rules"
                counter
                maxlength="16"
                hint="At least 8 characters"
                required
              />

              <v-checkbox v-model="rememberMe" :label="$t('labels.remember_me')" />
              <v-btn block color="primary" height="40px">
                {{ $t('buttons.login') }}
              </v-btn>
              <v-row justify="center">
                <v-col><v-divider class="login-divider" cols="4" /> </v-col>
                <v-col cols="2"> <div class="divider-text">OR</div></v-col>
                <v-col><v-divider class="login-divider" cols="4" /> </v-col>
              </v-row>
              <v-btn block color="primary" outlined class="login-button">
                <v-icon size="medium" class="login-button-icon">mdi-facebook</v-icon>
                <div class="login-button-label">{{ $t('buttons.login-facebook') }}</div>
              </v-btn>
              <v-btn block color="primary" outlined class="login-button">
                <v-icon size="small" class="login-button-icon">mdi-google</v-icon>
                <div class="login-button-label">{{ $t('buttons.login-google') }}</div>
              </v-btn>
            </div>
          </div>
        </v-card>
        <!--
      <div class="copyright-container d-flex flex-column align-center">
        <Copyrights />
      </div>
      --></div>
    </v-col>
  </v-row>
</template>

<script lang="ts">
import Vue from 'vue';
//import Logo from '../../components/basic/Logo.vue';
//import Copyrights from '../../components/basic/Copyrights.vue';

export default Vue.extend({
  name: 'Login',
  components: {
    //Logo,
    //Copyrights,
  },
  data: () => ({
    userId: '',
    password: '',
    rememberMe: false,
    rules: [(value: any) => (value && value.length >= 8) || 'Must be 8~16 characters'],
  }),
});
</script>

<style lang="scss">
@import '@/components/styles/variables.scss';

.component.login {
  width: 100%;
  height: 100%;

  .login-form-container {
    flex-grow: 1;
    padding: 50px 0px;

    .login-form {
      width: 480px;
      padding: 50px;
      border-radius: 8px;
      box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.08);
      background-color: #ffffff;

      .logo {
        align-content: center;
        margin: 20px 0 56px;
      }
      .login-title {
        margin: 0;
        margin-bottom: 32px;
        font-size: 16px;
        font-weight: 500;
        color: $color-grey-900;
      }
      .username,
      .password {
        margin-bottom: 16px;
      }
      .login-button {
        margin-top: 10px;
        height: 30px;
      }
      .login-divider {
        margin-top: 10px;
      }
      .divider-text {
        font-size: 12px;
        text-align: center;
        width: 100px;
        max-width: 100%;
      }
      .login-button-icon {
        margin-right: 5px;
      }
      .login-button-label {
        width: 100px;
        text-align: left;
      }
    }
  }
  .copyright-container {
    width: 100%;
    height: 100px;
    flex-grow: 0;
    flex-shrink: 0;
  }
}
</style>

<i18n>
{
  "en": {
    "title": {
      "login": "Login to your account"
    },
    "labels": {
      "user_id": "Email",
      "password": "Password",
      "remember_me": "Remember me"
    },
    "buttons": {
      "login": "Login",
      "login-facebook": "Facebook",
      "login-google": "Google"
    }
  },
  "ko": {
    "title": {
      "login": "계정에 로그인해 주십시오"
    },
    "labels": {
      "user_id": "아이디",
      "password": "비밀번호",
      "remember_me": "아이디 기억하기"
    },
    "placeholders": {
      "user_id": "아이디를 입력하세요",
      "password": "비밀번호를 입력하세요"
    },
    "buttons": {
      "login": "로그인",
      "login-facebook": "페이스북",
      "login-google": "구글"
    }
  }
}
</i18n>
