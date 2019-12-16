<template>
  <div v-if="tabledata">
    <v-container grid-list-xl fluix>
      <v-layout row wrap>
        <v-flex sm12>
          <h4>Sec A</h4>
          <v-divider></v-divider>
          <br />
          <v-data-table :headers="headers" :items="classA" class="elevation-1">
            <template v-slot:no-data>
              <v-progress-linear :indeterminate="true"></v-progress-linear>
            </template>
          </v-data-table>
          <br />
          <h4>Sec B</h4>
          <v-divider></v-divider>
          <br />
          <v-data-table :headers="headers" :items="classB" class="elevation-1">
            <template v-slot:no-data>
              <v-progress-linear :indeterminate="true"></v-progress-linear>
            </template>
          </v-data-table>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
  <div v-else>
    <h1>Please wait while the Genetic Algorithm Runs</h1>
    <v-progress-linear :indeterminate="true"></v-progress-linear>
  </div>
</template>
<script>
export default {
  data: () => ({
    headers: [
      { text: "Day", value: "day" },
      { text: "9:00-9:55", value: "9:00-9:55" },
      { text: "9:55-10:50", value: "9:55-10:50" },
      { text: "11:05-12:00", value: "11:05-12:00" },
      { text: "12:00-12:55", value: "12:00-12:55" }
    ]
  }),
  fetch: ({ store }) => {
    store.dispatch("gettimetable");
  },
  computed: {
    tabledata() {
      return this.$store.state.tabledata;
    },
    classA() {
      return this.$store.state.tabledata.a;
    },
    classB() {
      return this.$store.state.tabledata.b;
    }
  },
  mounted() {},
  methods: {}
};
</script>