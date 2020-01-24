<template>
  <v-container fluid>
    <v-row justify="center" align="start">
      <v-col cols="12" sm="8" md="4">
        <v-card class="elevation-12">
          <v-toolbar dark flat>
            <v-toolbar-title>Login Form</v-toolbar-title>
            <div class="flex-grow-1"></div>
            <v-tooltip bottom></v-tooltip>
          </v-toolbar>
          <v-card-text>
            <v-form>
              <v-text-field
                label="Email"
                name="email"
                type="text"
                v-model="email"
              ></v-text-field>
              <v-text-field
                id="password"
                label="Password"
                name="password"
                type="password"
                v-model="password"
              ></v-text-field>
            </v-form>
          </v-card-text>
          <v-card-actions>
            <div class="flex-grow-1"></div>
            <v-btn color="primary" @click="validateLogin">Login</v-btn>
            <v-btn color="error" @click="resetForm" class="reset">Reset Form</v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapActions } from 'vuex'
import SweetAlert from '@/services/sweetAlert'

export default {
  data () {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    ...mapActions(['loginAction']),
    resetForm () {
      this.email = ''
      this.password = ''
    },
    validateLogin () {
      const userDetails = {
        email: this.email,
        password: this.password
      }
      this.loginAction(userDetails)
        .then(() => {
          this.$router.push('/dashboard')
          this.resetForm()
          SweetAlert.successfullLogin()
        })
        .catch(() => {
          this.$router.push('/login')
          this.resetForm()
          SweetAlert.failureLogin()
        })
    }

  }
}
</script>
