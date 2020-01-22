<template lang="pug">
  #app
    pm-header
    section.section
      nav.nav.has-shadow
        .container
          .columns
            input.column.is-three-quarters.input.is-large(
              type="text",
              placeholder="Buscar canciones",
              v-model="searchQuery"
            )
            a.column.button.is-info.is-large(@click="search") Buscar
            a.column.button.is-danger.is-large &times;
          .columns
            p.column
              small {{ searchMessage }}
      .container.results
        .columns(v-for="t in tracks")
          .column {{ t.name }} - {{ t.artists[0].name}}
    pm-footer
</template>

<script>
import trackService from './services/platzi-music'
import PmFooter from './components/layout/Footer.vue'
import PmHeader from './components/layout/Header.vue'

export default {
  name: 'app',

  components: { PmFooter, PmHeader },

  data() {
    return {
      searchQuery: '',
      tracks: []
    }
  },

  computed: {
    searchMessage() {
      return `Encontrados: ${this.tracks.length}`
    }
  },

  methods: {
    search() {
      if (!this.searchQuery) return

      trackService
        .search(this.searchQuery)
        .then(res => (this.tracks = res.tracks.items))
    }
  }
}
</script>

<style lang="scss">
@import './scss/main.scss';

.results {
  margin-top: 20px;
}
</style>
