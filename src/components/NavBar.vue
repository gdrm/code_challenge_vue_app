<template>
  <div>
    <v-toolbar>
      <v-toolbar-title @click="redirectionToHome">Code Challenge</v-toolbar-title>

      <div class="flex-grow-1"></div>
      <v-toolbar-items v-if="isLoggedIn">
        <v-menu :open-on-hover="true" :close-on-click="true">
          <template v-slot:activator="{ on }">
            <v-btn color="teal" elevation="1">{{ user.name }}</v-btn>
          </template>
        </v-menu>
      </v-toolbar-items>
    </v-toolbar>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  methods: {
    redirectionToHome () {
      this.$router.push('/')
    }
  },
  computed: {
    ...mapGetters(['user']),
    ...mapGetters(['isLoggedIn'])
  }
}
</script>
