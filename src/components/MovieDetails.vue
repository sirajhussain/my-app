<template>
    <div>
        <!-- Display movie details based on the ID -->
        <h1>Movie Details</h1>
        <p>ID: {{ movie.id }}</p>
        <p>Title: {{ movie.Title }}</p>
        <p>Director: {{ movie.Director }}</p>
        <!-- Display other movie details -->
    </div>
</template>
  
<script>
import { mapGetters } from 'vuex';

export default {
    computed: {
        ...mapGetters(['getMovieById']),
        movie() {
            // Fetch movie details using the Vuex getter based on the route parameter
            return this.getMovieById(this.$route.params.id);
        }
    }
};
</script>
  