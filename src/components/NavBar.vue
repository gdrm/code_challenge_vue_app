<template>
  <div>
    <v-toolbar dark>
      <v-toolbar-title @click="redirectionToHome"> Code Challenge</v-toolbar-title>

      <div class="flex-grow-1"></div>
      <v-toolbar-items>
        <div class="d-flex align-center"><strong>User name</strong></div>
        <v-btn text>Profile</v-btn>
      </v-toolbar-items>
    </v-toolbar>
  </div>
</template>

<script>
export default {
  methods: {
    redirectionToHome () {
      this.$router.push('/')
    }
  }
}
</script>

<style>
</style>
