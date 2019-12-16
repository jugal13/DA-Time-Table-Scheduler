<template>
  <v-container grid-list-xl fluix>
    <v-layout row wrap>
      <v-flex sm12>Welcome</v-flex>
      <v-divider></v-divider>
      <v-flex sm12>
        <v-card raised to="/facultyinfo">
          <v-card-title>Faculty Information</v-card-title>
        </v-card>
      </v-flex>
      <v-flex sm12>
        <v-card raised to="/subjectinformation">
          <v-card-title>Subject Information</v-card-title>
        </v-card>
      </v-flex>
      <v-flex sm12>
        <v-card raised to="/subjectmap">
          <v-card-title>Subject Mapping</v-card-title>
        </v-card>
      </v-flex>
      <v-flex sm12>
        <v-card raised to="/generation">
          <v-card-title>Generate Time Table</v-card-title>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>
<script>
export default {};
</script>