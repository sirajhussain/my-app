import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    movies: [],
    distributors: [],
    loading: false,
  },
  mutations: {
    SET_MOVIES(state, movies) {
      state.movies = movies;
    },
    SET_LOADING(state, loading) {
      state.loading = loading;
    },
    SET_DISTRIBUTORS(state, distributors) {
      state.distributors = distributors;
    },
    ADD_MOVIE(state, movie) {
      state.movies.push(movie);
    },
    UPDATE_MOVIE(state, updatedMovie) {
      const index = state.movies.findIndex(
        (movie) => movie.id === updatedMovie.id
      );
      if (index !== -1) {
        state.movies.splice(index, 1, updatedMovie);
      }
    },
    DELETE_MOVIE(state, movieId) {
      const index = state.movies.findIndex((movie) => movie.id === movieId);
      if (index !== -1) {
        state.movies.splice(index, 1);
      }
    },
  },
  actions: {
    fetchMovies({ commit }) {
      commit("SET_LOADING", true);
      axios
        .get("http://localhost:5000/movies")
        .then((response) => {
          commit("SET_MOVIES", response.data);
          commit("SET_LOADING", false);
        })
        .catch((error) => {
          console.log(error);
          commit("SET_LOADING", false);
        });
    },
    addMovie({ commit }, movie) {
      axios
        .post("http://localhost:5000/movies", movie)
        .then((response) => {
          commit("ADD_MOVIE", response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    },
    updateMovie({ commit }, updatedMovie) {
      axios
        .put(`http://localhost:5000/movies/${updatedMovie.id}`, updatedMovie)
        .then((response) => {
          commit("UPDATE_MOVIE", response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    },
    deleteMovie({ commit }, id) {
      axios
        .delete(`http://localhost:5000/movies/${id}`)
        .then(() => {
          commit("DELETE_MOVIE", id);
        })
        .catch((error) => {
          console.log(error);
        });
    },
    fetchDistributors({ commit }) {
      const distributors = [
        "Paramount Pictures",
        "Universal Studios",
        "Warner Bros",
        "20th Century Fox",
        "Sony Pictures",
      ];
      commit("SET_DISTRIBUTORS", distributors);
    },
  },
  getters: {
    movies: (state) => state.movies,
    loading: (state) => state.loading,
    distributors: (state) => state.distributors,
    getMovieById: (state) => (id) => {
      // Getter to retrieve movie details by ID
      return state.movies.find((movie) => movie.id === id);
    },
  },
});
