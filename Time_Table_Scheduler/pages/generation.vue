<template>
  <v-container grid-list-xl fluix>
    <v-layout row wrap>
      <v-flex sm12>
        <h2>Pick a Semester</h2>
        <v-divider></v-divider>
      </v-flex>
      <v-flex sm12>
        <v-card raised to="/generatetimetable/oddtimetable">
          <v-card-title>Odd Semester</v-card-title>
        </v-card>
      </v-flex>
      <!-- <v-flex sm12>
        <v-card raised to="/generatetimetable/eventimetable">
          <v-card-title>Even Semester</v-card-title>
        </v-card>
      </v-flex> -->
    </v-layout>
  </v-container>
</template>
<script>
export default {};
</script>