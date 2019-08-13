<template>
  <div>
    <hero class="is-dark"/>
    <div class="section section container">
      <form @submit.prevent="login">
        <b-field label="Email" :type="{ 'is-danger': errors('email') }" :message="messages('email')">
          <b-input v-model="form.email"></b-input>
        </b-field>
        <b-field label="Password" :type="{ 'is-danger': errors('password') }" :message="messages('password')">
          <b-input v-model="form.password" type="password"></b-input>
        </b-field>
        <b-button type="is-primary" native-type="submit">Σύνδεση</b-button>
      </form>
    </div>
  </div>
</template>
<script>
import hero from '@/components/partials/hero'
export default {
  components: { hero },
  data() {
    return {
      Errors: '',
      form: {

        password: '',
        email: ''
      }
    }
  },
  methods: {
    errors(w) {
      return this.Errors[w] ? true : false;
    },
    messages(w) {
      if (this.Errors && this.Errors[w]) {
        return this.Errors[w][0]
      }
    },

    async login() {
      this.$auth.loginWith('local', {
        data: {
          email: this.form.email,
          password: this.form.password
        }
      })
    }
  }
}

</script>
