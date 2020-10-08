<template>
  <v-container fill-height fluid class="pa-0">
    <v-row align="center" justify="center">
      <v-col>
        <div class="component welcome mx-auto">
          <p class="text-center welcome-text">{{ $t('text.welcome') }}</p>
          <p class="text-center welcome-text">{{ $t('text.welcome2') }}</p>
          <p class="text-center account">{{ userId }}</p>

          <div class="welcome-button">
            <v-btn large block color="primary" @click="goLogin">
              {{ $t('buttons.continue') }}
            </v-btn>
          </div>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import Vue from 'vue';
//import Logo from '../../components/basic/Logo.vue';
//import Copyrights from '../../components/basic/Copyrights.vue';

export default Vue.extend({
  name: 'Welcome',
  components: {
    //Logo,
    //Copyrights,
  },
  data() {
    return {
      userId: '',
    };
  },
  methods: {
    goLogin(): void {
      console.log('go main');
      this.$router.replace({ name: 'login' });
    },
  },
  created() {
    this.userId = window.localStorage.getItem('userId') || '';
  },
});
</script>

<style lang="scss">
@import '@/components/styles/variables.scss';

.component.welcome {
  width: 300px;
  height: 300px;

  .welcome-text {
    font-size: 24px;
    text-align: center;
  }

  .welcome-button {
    margin-top: 30px;
    height: 30px;
  }

  .account {
    font-size: 24px;
    color: #5d80fd;
  }
}
</style>

<i18n>
{
  "en": {
    "text": {
      "welcome": "Welcome",
      "welcome2": "New Account is established"
    },
    "buttons": {
      "continue": "Continue"
    }
  },
  "ko": {
    "text": {
      "welcome": "환영합니다",
      "welcome2": "새로운 계정이 생성되었습니다"
    },
    "buttons": {
      "continue": "계속"
    }
  }
}
</i18n>
