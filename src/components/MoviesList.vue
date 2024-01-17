<template>
  <div style="margin-top: 15px;">
    <!-- <el-button type="primary" @click="fetchMovies">Fetch Movies</el-button> -->
    <div>
      <el-table :data="movies" v-loading="loading" height="400" class="bg-white shadow-md rounded-lg">
        <el-table-column prop="Title" label="Title">
        </el-table-column>
        <el-table-column prop="Release Date" label="Release Date">
        </el-table-column>
        <el-table-column prop="Major Genre" label="Major Genre">
        </el-table-column>
        <!-- Edit Column -->
        <el-table-column>
          <template slot-scope="scope">
            <el-button type="primary" @click="handleEdit(scope.row)">Edit</el-button>
          </template>
        </el-table-column>

        <!-- Delete Column -->
        <el-table-column>
          <template slot-scope="scope">
            <el-button type="danger" @click="handleDelete(scope.row)">Delete</el-button>
          </template>
        </el-table-column>
        <el-table-column>
          <template slot-scope="scope">
            <el-button @click="showMovieDialog(scope.row)">View Details</el-button>
          </template>
        </el-table-column>
        <el-table-column>
          <template slot-scope="scope">
            <el-button @click="navigateToDetails(scope.row)">Details</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <!-- Dialog component instance -->
    <movie-detail-dialog :dialogVisible="dialogVisible" :selectedMovie="selectedMovie"
      @update:dialogVisible="updateDialogVisibility"></movie-detail-dialog>
  </div>
</template>
   
<script>
import MovieDetailDialog from './MovieDetailDialog.vue';
import { mapGetters, mapActions, mapState } from "vuex";

export default {
  components: {
    MovieDetailDialog
  },
  data() {
    return {
      loading: true,
      dialogVisible: false,
      selectedMovie: null,
    }
  },
  computed: {
    ...mapState(["movies"]),
    ...mapGetters(["movies"]),
  },
  methods: {
    ...mapActions(["fetchMovies", "deleteMovie", "addMovie", "updateMovie"]),
    sortMovies() {
      this.movies.sort((a, b) => a.Title.localeCompare(b.Title));
    },
    handleEdit(row) {
      // Handle edit action for the row
      const { Id } = row;
      console.log(Id);
    },
    handleDelete(row) {
      // Handle delete action for the row
      console.log(row)
      const { id } = row;
      this.deleteMovie(id)
        .then(() => {
          this.$message({
            type: 'success',
            message: 'Movie deleted successfully'
          });
        })
        .catch(error => {
          //Handle error
          console.error('Failed to delete movie:', error);
        });

    },
    showMovieDialog(movie) {
      // Set the selected movie data and show the dialog
      this.selectedMovie = movie;
      this.dialogVisible = true;
    },
    updateDialogVisibility(value) {
      // Update the dialog visibility based on the emitted event
      this.dialogVisible = value;
    },
    navigateToDetails(row) {
      const { id } = row;
      this.$router.push({ name: 'MovieDetails', params: { id } });
    }
  },
  created() {
    this.loading = true;
    this.fetchMovies();
    this.loading = false;
  },
};
</script>
<style>
/* Import Tailwind CSS */
@import '~tailwindcss/base';
@import '~tailwindcss/components';
@import '~tailwindcss/utilities';

/* Custom styling using Tailwind CSS */
/* You can directly apply Tailwind utility classes to Element UI components */

/* Manual application of Tailwind utility classes */
.bg-white {
  background-color: #fff;
  /* Replace with your desired background color */
}

.shadow-md {
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
  /* Replace with your desired shadow */
}

.rounded-lg {
  border-radius: 0.5rem;
  /* Adjust to set the border-radius */
}



.el-table__header-wrapper {
  position: sticky;
  top: 0;
  z-index: 1;
  background-color: #f5f7fa;
}

.el-table__body-wrapper {
  max-height: 500px;
  /* Set the maximum height */
  overflow-y: auto;
  /* Enable vertical scrolling */
}
</style>