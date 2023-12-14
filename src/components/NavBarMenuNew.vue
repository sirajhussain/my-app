<template>
    <div style="margin: 20px;">
        <router-link v-for="navItem in navItems" :key="navItem.title" :to="navItem.url" style="margin: 20px;">{{
            navItem.title }}</router-link>
    </div>
</template>
  
<script>
export default {
    data: function () {
        return {
            navItems: []
        };
    },
    created: async function () {
        this.navItems = [
            // !!! API CALL !!!
            {
                title: "MoviesList",
                url: "/MoviesList"
            },
            {
                title: "AddMovie",
                url: "/AddMovie"
            },
            {
                title: "DesignPage",
                url: "/DesignPage"
            }
        ];

        const routes = await this.navItems.map(async navItem => {
            const { url } = navItem;
            console.log(url)
            return {
                path: url,
                component: await import(`../views${url}.vue`)
            };
        });

        this.$router.addRoutes(routes);
    }
};
</script>