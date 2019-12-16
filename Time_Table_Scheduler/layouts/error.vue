<template>
  <v-app dark>
    <v-layout row wrap justify-center align-center>
      <v-container fluid>
        <v-layout column justify-center align-center>
          <v-flex sm12>
            <v-card width="200" to="/">
              <center>
                <h1 v-if="error.statusCode === 404">{{ pageNotFound }}</h1>
                <h1 v-else>{{ otherError }}</h1>
                <NuxtLink to="/">Home page</NuxtLink>
              </center>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
    </v-layout>
  </v-app>
</template>

<script>
export default {
  layout: "empty",
  props: {
    error: {
      type: Object,
      default: null
    }
  },
  head() {
    const title =
      this.error.statusCode === 404 ? this.pageNotFound : this.otherError;
    return {
      title
    };
  },
  data() {
    return {
      pageNotFound: "404 Not Found",
      otherError: "An error occurred"
    };
  }
};
</script>

<style scoped>
h1 {
  font-size: 20px;
}
</style>
