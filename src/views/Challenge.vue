<template>
  <v-contanier fluid>
    <v-row>
      <v-col class="mx-4">
        <h1>{{ challenge.title }}</h1>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <v-card width="100%" outlined>
          <v-card-text> {{ challenge.description }} </v-card-text>
          <v-card-text> {{ challenge.examples }} </v-card-text>
          <prism-editor v-model="challenge.test_cases" :language="language" readonly class="test-cases"></prism-editor>
        </v-card>
      </v-col>
      <v-col class=" mr-6">
        <prism-editor v-model="code" :language="language" :line-numbers="lineNumbers" class="editor"></prism-editor>
        <v-row>
          <v-select
            v-model="select"
            :items="languages"
            menu-props="{ top: true, offsetY: true }"
            label="Language"
            class="mx-3"
          ></v-select>
          <v-switch
            v-model="lineNumbers"
            label="LineNumbers"
          ></v-switch>
          <v-btn class="ma-3" color="secondary" @click="resetEditor">Reset</v-btn>
          <v-btn class="ma-3" color="primary" @click="sendSolution">Submit</v-btn>
        </v-row>
      </v-col>
    </v-row>
  </v-contanier>
</template>

<script>
import ApiHelper from '@/services/apiHelper'
// import moment from 'moment'
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
        this.$router.push(`/challenge/${this.challenge.id}/solutions`)
      })
    }
  }
}
</script>

<style>
  .editor {
    min-height: 700px;
    max-height: 700px;
  }
  .test-cases {
    min-height: 300px;
    max-height: 300px;
  }
</style>
