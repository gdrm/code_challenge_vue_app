<template>
  <v-contanier fluid >
    <v-row class="ma-6">
      <h1>Roman Numerals</h1>
      <v-card width="100%" outlined>
        <v-card-text> Create a RomanNumerals class that can convert a roman numeral to and from an integer value. It should follow the API demonstrated in the examples below. Multiple roman numeral values will be tested for each helper method. </v-card-text>
      </v-card>
    </v-row>
    <v-row class="d-flex solution ma-6">
      <p class="font-weight-medium text-center">Gerardo Rocha</p>
      <prism-editor v-model="code" :language="language" :line-numbers="lineNumbers" class="editor-solution"></prism-editor>
      <v-btn class="align-self-right" text icon color="deep-orange">
        <v-icon>mdi-thumb-up</v-icon>
      </v-btn>
      <v-btn class="ma-3" text small color="primary">Comment</v-btn>
    </v-row>
  </v-contanier>
</template>

<script>
import ApiHelper from '@/services/apiHelper'
import PrismEditor from 'vue-prism-editor'

export default {
  components: {
    PrismEditor
  },
  data: function () {
    return {
      challenge: null,
      select: 'Ruby',
      language: 'ruby',
      languages: ['Ruby', 'Java', 'C'],
      code: '#Write your code here...',
      lineNumbers: false
    }
  },
  created () {
    ApiHelper.challenge(this.$route.params.id)
      .then(response => {
        this.challenge = response
      })
  },
  watch: {
    select: function () {
      this.language = this.select.toLowerCase()
    }
  },
  methods: {
    resetEditor () {
      this.code = '#Write your code here...'
    },
    sendSolution () {
      ApiHelper.createSolution(this.challenge.id, {
        code: this.code,
        language: this.language
      }).then(response => {
        this.$router.push(`/${this.challenge.id}/solutions`)
      })
    }
  }
}
</script>

<style>
  .editor-solution {
    max-height: 300px;
  }

  .solution {
    padding: 5px;
    border: 1px solid lightgrey;
  }
</style>
