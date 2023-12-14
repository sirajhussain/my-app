<template>
  <div>
    <h1>Movies</h1>
    <input type="text" v-model="search" placeholder="Search by title..." />
    <button @click="sortMovies">Sort by Title</button>
    <ul>
      <li v-for="movie in filteredMovies" :key="movie.id">
        {{ movie.Title }} - {{ movie.Distributor }}
        <button @click="deleteMovie(movie.id)">Delete</button>
        <button @click="updateMovie(movie.id)">Update</button>
      </li>
    </ul>
    <button @click="addMovie">Create New Movie</button>
  </div>
</template>
   
   <script>
import { mapGetters, mapActions, mapState } from "vuex";

export default {
  data() {
    return {
      search: "",
    };
  },
  computed: {
    ...mapState(["movies"]),
    ...mapGetters(["movies"]),
    filteredMovies() {
      return this.movies.filter((movie) =>
        movie.Title === "string"
          ? movie.Title.toLowerCase()
          : "".includes(this.search.toLowerCase())
      );
    },
  },
  methods: {
    ...mapActions(["fetchMovies", "deleteMovie", "addMovie", "updateMovie"]),
    sortMovies() {
      this.movies.sort((a, b) => a.Title.localeCompare(b.Title));
    },
  },
  created() {
    this.fetchMovies();
  },
};
</script>