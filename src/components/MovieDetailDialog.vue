<template>
    <el-dialog :visible="dialogVisible" title="Movie Information" @close="closeDialog">
        <!-- Display movie information in the dialog -->
        <div v-if="selectedMovie">
            <p>Title: {{ selectedMovie.Title | capitalize }}</p>
            <p>Director: {{ selectedMovie.Director }}</p>
            <p>Release Date: {{ selectedMovie['Release Date'] }}</p>
        </div>
    </el-dialog>
</template>
  
<script>
export default {
    props: {
        dialogVisible: Boolean, // Controls the visibility of the dialog
        selectedMovie: Object
    },
    methods: {
        closeDialog() {
            // Emit an event to notify the parent component to close the dialog
            this.$emit('update:dialogVisible', false);
        }
    },
    filters: {
        capitalize: function (value) {
            if (!value) return ''
            value = value.toString()
            return value.charAt(0).toUpperCase() + value.slice(1)
        }
    }
};
</script>
  