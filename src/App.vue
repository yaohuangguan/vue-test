<template>
  <v-app id="app">
    <v-main id="nav">
      <v-container>
        <!-- <v-form-base
          :col="{ cols: 12, sm: 6, md: 3 }"
          :model="model"
          :schema="schema"
          @input="log"
        /> -->
      </v-container>
    </v-main>

    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
    <router-view />

  </v-app>

</template>

<style lang="scss">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
