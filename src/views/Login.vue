<template>
  <v-form ref="form" v-model="valid" lazy-validation @submit.prevent="tryLogin">
    <v-row align="center" justify="center">
      <v-col cols="12" sm="8" md="4">
        <div class="component login d-flex flex-column">
          <v-card flat>
            <div class="login-form-container d-flex flex-column align-center">
              <div class="login-form">
                <!--<Logo :width="346" /> -->
                <span class="label-text">{{ $t('labels.user_id') }}</span>

                <v-text-field
                  v-model="userId"
                  :rules="[rules.required, rules.email]"
                  maxlength="100"
                  outlined
                  height="36px"
                />
                <span class="label-text">{{ $t('labels.password') }}</span>
                <v-text-field
                  v-model="password"
                  type="password"
                  :rules="[rules.required, rules.password]"
                  maxlength="16"
                  outlined
                  height="36px"
                />
                <v-btn block color="primary" height="40px" type="submit" :disabled="!valid" class="login-button">
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
      -->
        </div>
      </v-col>
    </v-row>
  </v-form>
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
    valid: false,
  }),
  methods: {
    tryLogin(): void {
      console.log('try login');
      if (!(this.$refs.form as Vue & { validate: () => boolean }).validate()) {
        return;
      }

      this.$rest
        .get('/ui/v1/login', undefined, { auth: { username: this.userId, password: this.password } })
        .then((data) => {
          console.log('login ok' + this.userId);
          window.localStorage.setItem('userId', this.userId);
          this.$router.replace({ name: 'welcome' });
        })
        .catch((error) => {
          console.log('api server err' + error);
          throw error;
        });
    },
  },
  computed: {
    rules() {
      return {
        required: (value: any) => !!value || this.$t('rules.required'),
        email: (value: any) => {
          const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
          return pattern.test(value) || this.$t('rules.email');
        },
        password: (value: any) => (value && value.length >= 4) || this.$t('rules.password'),
      };
    },
  },
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

      .v-text-field .v-input__control .v-input__slot {
        min-height: auto !important;
        display: flex !important;
        align-items: center !important;
      }

      .logo {
        align-content: center;
        margin: 20px 0 56px;
      }

      .label-text {
        display: inline-block;
        font-size: (13/14) * 1em;
      }
      .username,
      .password {
        height: 36px;
      }
      .login-button {
        margin-top: 10px;
        height: 30px;
        text-transform: none;
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
    "labels": {
      "user_id": "Email",
      "password": "Password",
      "remember_me": "Remember me"
    },
    "buttons": {
      "login": "Login",
      "login-facebook": "Facebook",
      "login-google": "Google"
    },
    "rules": {
      "required": "Required field",
      "email": "Invalid e-mail",
      "password": "Must be 8~16 characters"
    }
  },
  "ko": {
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
    },
    "rules": {
      "required": "입력이 필요한 필드입니다",
      "email": "잘못된 e-mail 입니다",
      "password": "8~16자를 입력하세요"
    }
  }
}
</i18n>
