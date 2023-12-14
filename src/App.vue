<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png" /> -->
    <!-- <MoviesList v-if="showMovieList" />
    <MovieListNew v-if="showNEWMovieList" /> -->
    <NavbarMenu />
    <router-view></router-view>
  </div>
</template>

<script>
// import MoviesList from "./components/MoviesList";
// import MovieListNew from "./components/MovieListNew.vue";
import NavbarMenu from "./components/NavbarMenu.vue";

export default {
  name: "App",
  components: {
    // MoviesList,
    // MovieListNew,
    NavbarMenu,
  },
  data: function () {
    return {
      isNewMovie: false,
      showMovieList: true,
      showNEWMovieList: false,
    };
  },
  methods: {
    fetchMovies() {
      this.$store.dispatch("fetchMovies");
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
