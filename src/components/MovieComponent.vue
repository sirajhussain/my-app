<template>
  <div>
    <h2>{{ movie.title }}</h2>
    <p>Release Date: {{ movie.release_date }}</p>
    <p>Genre: {{ movie.genre }}</p>
  </div>
</template>
     
<script>
export default {
  props: {
    movie: {
      type: Object,
      required: true,
    },
  },
};
</script>