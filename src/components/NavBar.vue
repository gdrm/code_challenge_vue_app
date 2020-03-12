<template>
  <div>
    <v-toolbar>
      <v-toolbar-title @click="redirectionToHome">Code Challenge</v-toolbar-title>
      <div class="flex-grow-1"></div>
      <v-btn v-if="isLoggedIn" color="teal" elevation="1">{{ userName }}</v-btn>
    </v-toolbar>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  methods: {
    redirectionToHome () {
      this.$router.push('/dashboard')
    }
  },
  computed: {
    ...mapGetters(['userName']),
    ...mapGetters(['isLoggedIn'])
  }
}
</script>
