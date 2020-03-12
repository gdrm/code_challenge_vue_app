<template>
  <v-container fluid>
    <v-row v-for="(challenge, index) in allChallenges" :key="index" class="ma-6">
      <v-card width="100%" outlined>
        <v-container>
          <v-card-title class="headline"> {{ challenge.title }}</v-card-title>
          <v-row>
            <v-col cols="22">
              <v-card-text> {{ challenge.description }} </v-card-text>
              <v-card-text> {{ challenge.examples }} </v-card-text>
              <v-card-text v-html="challenge.test_cases"></v-card-text>
            </v-col>
            <v-col cols="2">
              <v-btn width="80%" v-if="isActive(challenge)" color="primary" @click="goToChallenge(challenge)">Let's do it</v-btn>
              <v-btn width="80%" v-else color="success" @click="goToSolutions(challenge)">Ver Resultados</v-btn>
            </v-col>
          </v-row>
        </v-container>
      </v-card>
    </v-row>
  </v-container>
</template>

<script>
import { mapGetters } from 'vuex'
import moment from 'moment'

export default {
  computed: {
    ...mapGetters(['allChallenges'])
  },
  methods: {
    isActive (challenge) {
      return moment().isBetween(moment(challenge.challenge_start_at), moment(challenge.challenge_end_at))
    },
    goToChallenge (challenge) {
      this.$router.push(`/challenge/${challenge.id}`)
    },
    goToSolutions (challenge) {
      this.$router.push(`/challenge/${challenge.id}/solutions`)
    }
  }
}
</script>
