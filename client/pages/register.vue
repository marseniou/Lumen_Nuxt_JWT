<template>
  <div>
    <hero class="is-dark" />
    <section class="section container">
      <form @submit.prevent="register">
        <b-field label="Name" :type="{ 'is-danger': errors('name') }" :message="messages('name')">
          <b-input v-model="form.name"></b-input>
        </b-field>
        <b-field label="Email" :type="{ 'is-danger': errors('email') }" :message="messages('email')">
          <b-input v-model="form.email"></b-input>
        </b-field>
        <b-field label="Password" :type="{ 'is-danger': errors('password') }" :message="messages('password')">
          <b-input v-model="form.password" type="password"></b-input>
        </b-field>
        <b-field label="Password Confirm" :type="{ 'is-danger': errors('password_confirm') }" :message="messages('password_confirm')">
          <b-input v-model="form.password_confirm" type="password"></b-input>
        </b-field>
        <b-button type="is-primary" native-type="submit">Εγγραφή</b-button>
      </form>
    </section>
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
        name: '',
        password: '',
        password_confirm: '',
        email: '',
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
    async register() {
      let data = await this.$axios.$post('auth/register', this.form).catch(e => {
        this.Errors = e.response.data.errors;
      })
      if (data) {
        this.$auth.loginWith('local', { data: { email: data.email, password: data.password } })
      }
    }
  }
}

</script>
