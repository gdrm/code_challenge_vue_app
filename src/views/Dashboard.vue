<template>
  <v-contanier fluid>
    <v-row v-for="(challenge, index) in challenges" :key="index" class="ma-6">
      <v-card width="100%" outlined>
        <v-contanier>
          <v-card-title class="headline"> {{ challenge.title }}</v-card-title>
          <v-row>
            <v-col cols="22">
              <v-card-text> {{ challenge.description }} </v-card-text>
              <v-card-text> {{ challenge.examples }} </v-card-text>
              <v-card-text v-html="challenge.test_cases"></v-card-text>
            </v-col>
            <v-col cols="2">
              <v-btn v-if="isActive(challenge)" color="primary" @click="goToChallenge">Let's do it</v-btn>
              <v-btn v-else color="success" @click="goToChallenge(challenge)">Ver Resultados</v-btn>
            </v-col>
          </v-row>
        </v-contanier>
      </v-card>
    </v-row>
  </v-contanier>
</template>

<script>
import ApiHelper from '@/services/apiHelper'
import moment from 'moment'

export default {
  data: function () {
    return {
      challenges: []
    }
  },
  created () {
    ApiHelper.challenges()
      .then(response => {
        this.challenges = response.challenges
      })
  },
  methods: {
    isActive (challenge) {
      return moment().isBetween(moment(challenge.challenge_start_at), moment(challenge.challenge_end_at))
    },
    goToChallenge (challenge) {
      this.$router.push(`/challenge/${challenge.id}`)
    }
  }
}
</script>
