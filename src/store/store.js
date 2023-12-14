import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    movies: [],
    movie: {},
    errors: [],
  },
  mutations: {
    SET_MOVIES(state, movies) {
      state.movies = movies;
    },
    SET_MOVIE(state, movie) {
      state.movie = movie;
    },
    SET_ERRORS(state, errors) {
      state.errors = errors;
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
    async fetchMovies({ commit }) {
      const response = await axios.get("http://localhost:5000/movies");
      commit("SET_MOVIES", response.data);
    },
    async addMovie({ commit }, movie) {
      const response = await axios.post("http://localhost:5000/movies", movie);
      commit("ADD_MOVIE", response.data);
    },
    async updateMovie({ commit }, updatedMovie) {
      const response = await axios.put(
        `http://localhost:5000/movies/${updatedMovie.id}`,
        updatedMovie
      );
      commit("UPDATE_MOVIE", response.data);
    },
    async deleteMovie({ commit }, movieId) {
      await axios.delete(`http://localhost:5000/movies/${movieId}`);
      commit("DELETE_MOVIE", movieId);
    },
  },
});
