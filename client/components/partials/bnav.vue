<template>
  <div class="container">
    <b-navbar type="is-primary">
      <template slot="brand">
        <b-navbar-item href="/">
          <p class="display" style="font-size:20px">{{site_name}}</p>
        </b-navbar-item>
      </template>
      <template slot="start">
        <b-navbar-item v-for="(item,key) in items_start" :key="key" :href="item.href" class="navbar-item" :class="{'is-active':$route.path == item.href}">
          {{item.name}}
        </b-navbar-item>
      </template>
      <template slot="end">
        <b-navbar-item v-for="(item,key) in items" :key="key" :href="item.href" class="navbar-item" :class="{'is-active':$route.path == item.href}">
          {{item.name}}
        </b-navbar-item>
      </template>
    </b-navbar>
  </div>
</template>
<script>
export default {
  computed: {
    items() {
      let t = [];
      this.$auth.loggedIn ? t.push({ href: '/home', name: this.$auth.user.name }, { href: '/logout', name: 'Αποσύνδεση' }) : t.push({ href: '/login', name: 'Σύνδεση' }, { href: '/register', name: 'Εγγραφή' });
      return t;
    },
    items_start() {
      return [{ href: "/", name: "Αρχική" }]
    },
    site_name(){
      
      return process.env.siteName
    }

  }
}

</script>
