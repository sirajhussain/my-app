<template>
  <div class="start">
    <h1 v-if="isActive">Hello, its my first component! {{ msg }}</h1>
    <h3>{{ GetFullName() }}</h3>
    <el-table
      stripe
      :data="movies"
      style="width: 100%">
      <el-table-column
        prop="Release Date"
        label="Release Date">
      </el-table-column>
      <el-table-column
        prop="Title"
        label="Title">
      </el-table-column>
      <el-table-column
        prop="Distributor"
        label="Distributor">
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import axios from "axios";
export default {
  props:{
    msg: String
  },
  data: function(){
    return{
      isActive: true,
      firstName: "Siraj",
      lastName: "Hussain",
      movies: [],
    }
  },
  methods:{
    GetFullName: function(){
      return this.firstName+ " "+ this.lastName;
    }
  },
  async created(){
    const res = await axios.get("http://localhost:3000/movies");
    this.movies = res.data;
  }
}
</script>

<style>

</style>