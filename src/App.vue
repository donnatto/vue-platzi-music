<template lang="pug">
  #app
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
          .column {{ t.name }} - {{ t.artist}}
</template>

<script>
const tracks = [
  { name: 'Muchacha', artist: 'Luis Alberto Spineta' },
  { name: 'Hoy aca en el baile', artist: 'El Pepo' },
  { name: 'I was made for loving you', artist: 'Kiss' }
]

export default {
  name: 'app',
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
      this.tracks = tracks
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
