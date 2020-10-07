<template>
  <v-form ref="form" v-model="isValid" lazy-validation @submit.prevent="trySignUp">
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
                  autofocus
                  :rules="[rules.required, rules.email]"
                  maxlength="100"
                  outlined
                  required
                />
                <span class="label-text">{{ $t('labels.password') }}</span>
                <v-text-field
                  v-model="password"
                  type="password"
                  :rules="[rules.required, rules.password]"
                  maxlength="16"
                  outlined
                  required
                />

                <v-btn block color="primary" height="40px" type="submit" :disabled="!isValid">
                  {{ $t('buttons.sign_up') }}
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
  name: 'SignUp',
  components: {
    //Logo,
    //Copyrights,
  },
  data: () => ({
    userId: '',
    password: '',
    rememberMe: false,
    isValid: false,
  }),
  methods: {
    trySignUp(): void {
      console.log('try submit');
      if (!(this.$refs.form as Vue & { validate: () => boolean }).validate()) {
        return;
      }

      this.$rest
        .post('/ui/v1/signup', {
          userid: this.userId,
          password: this.password,
        })
        .then((data) => {
          console.log('signup ok');
          this.$router.replace({ name: 'projects' });
        })
        .catch((error) => {
          console.log('api server err');
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
        password: (value: any) => (value && value.length >= 8) || this.$t('rules.password'),
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
    "labels": {
      "user_id": "Email",
      "password": "Password",
      "remember_me": "Remember me"
    },
    "buttons": {
      "sign_up": "Sign up",
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
