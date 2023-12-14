<template>
    <el-menu :default-active="$route.path" class="el-menu-demo" mode="horizontal" @select="handleSelect" :router="true">
        <el-menu-item index="/moviesList" route="/moviesList">Movies list</el-menu-item>
        <el-menu-item index="/addMovie" route="/addMovie">Add movie</el-menu-item>
        <el-menu-item index="/designpage" route="/designpage">Design page</el-menu-item>
    </el-menu>
</template>
  
<script>
export default {
    name: 'NavBarMenu',
    methods: {
        handleSelect(key, keyPath) {
            console.log(key, keyPath);
        }
    }
}
</script>