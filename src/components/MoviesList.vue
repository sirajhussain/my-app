<template>
  <div style="margin-top: 15px;">
    <el-button type="primary" @click="fetchMovies">Fetch Movies</el-button>
    <div class="movieList" style="height: 500px">
      <el-table :data="movies" style="width: 100%">
        <el-table-column prop="Title" label="Title" width="180">
        </el-table-column>
        <el-table-column prop="Release Date" label="Release Date" width="180">
        </el-table-column>
        <el-table-column prop="Major Genre" label="Major Genre">
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>
   
<script>
import { mapGetters, mapActions, mapState } from "vuex";

export default {
  computed: {
    ...mapState(["movies"]),
    ...mapGetters(["movies"]),
  },
  methods: {
    ...mapActions(["fetchMovies", "deleteMovie", "addMovie", "updateMovie"]),
    sortMovies() {
      this.movies.sort((a, b) => a.Title.localeCompare(b.Title));
    },
  },
  //   created() {
  //     this.fetchMovies();
  //   },
};
</script>