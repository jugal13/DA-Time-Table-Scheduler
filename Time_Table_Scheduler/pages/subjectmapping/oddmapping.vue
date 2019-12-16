<template>
  <v-container grid-list-xl fluid>
    <v-layout row wrap>
      <v-flex sm12>
        <h2>Subject Mapping</h2>
        <v-divider></v-divider>
        <v-form v-model="valid">
          <template>
            <br />
            <!-- <v-card raised>
              <v-card-title>3rd Semester</v-card-title>
            </v-card>
            <br />
            <v-data-table :headers="headers" :items="thirdSemItems">
              <template v-slot:item.courseCode="props">{{ props.item.courseCode }}</template>
              <template v-slot:item.courseName="props">{{ props.item.courseName }}</template>
              <template v-slot:item.facultyAssigned="props">
                <v-edit-dialog
                  :return-value.sync="props.item.facultyAssigned"
                  lazy
                  @save="save"
                  @cancel="cancel"
                  @open="open"
                  @close="close"
                >
                  {{ props.item.facultyAssigned }}
                  <template v-slot:input>
                    <v-combobox v-model="props.item.facultyAssigned" :items="listOfFaculty" label="Assign Faculty"></v-combobox>
                  </template>
                </v-edit-dialog>
              </template>
            </v-data-table>
            <v-snackbar v-model="snack" :timeout="3000" :color="snackColor">
              {{ snackText }}
              <v-btn text @click="snack = false">Close</v-btn>
            </v-snackbar>
          </template>
          <template>
            <br />
            <v-card raised>
              <v-card-title>5th Semester</v-card-title>
            </v-card>
            <br />
            <v-data-table :headers="headers" :items="fifthSemItems">
              <template v-slot:item.courseCode="props">{{ props.item.courseCode }}</template>
              <template v-slot:item.courseName="props">{{ props.item.courseName }}</template>
              <template v-slot:item.facultyAssigned="props">
                <v-edit-dialog
                  :return-value.sync="props.item.facultyAssigned"
                  lazy
                  @save="save"
                  @cancel="cancel"
                  @open="open"
                  @close="close"
                >
                  {{ props.item.facultyAssigned }}
                  <template v-slot:input>
                    <v-combobox v-model="props.item.facultyAssigned" :items="listOfFaculty" label="Assign Faculty"></v-combobox>
                  </template>
                </v-edit-dialog>
              </template>
            </v-data-table>
            <v-snackbar v-model="snack" :timeout="3000" :color="snackColor">
              {{ snackText }}
              <v-btn text @click="snack = false">Close</v-btn>
            </v-snackbar>
          </template>
          <template>
            <br />-->
            <v-card raised>
              <v-card-title>7th Semester</v-card-title>
            </v-card>
            <br />
            <v-data-table :headers="headers" :items="seventhSemItems">
              <template v-slot:item.courseName="props">{{ props.item.courseName }}</template>
              <template v-slot:item.facultyAssigned="props">
                <v-edit-dialog
                  :return-value.sync="props.item.facultyAssigned"
                  lazy
                  @save="save"
                  @cancel="cancel"
                  @open="open"
                  @close="close"
                >
                  {{ props.item.facultyAssigned }}
                  <template v-slot:input>
                    <v-combobox
                      v-model="props.item.facultyAssigned"
                      :items="listOfFaculty"
                      label="Assign Faculty"
                    ></v-combobox>
                  </template>
                </v-edit-dialog>
              </template>
            </v-data-table>
            <v-snackbar v-model="snack" :timeout="3000" :color="snackColor">
              {{ snackText }}
              <v-btn text @click="snack = false">Close</v-btn>
            </v-snackbar>
          </template>
          <br />
          <v-divider></v-divider>
          <br />
          <v-spacer></v-spacer>
          <div class="form-btn">
            <v-btn @click="submit" color="primary">Submit</v-btn>
            <v-btn @click="clear">Clear</v-btn>
          </div>
        </v-form>
      </v-flex>
    </v-layout>
  </v-container>
</template>
<script>
export default {
  data: () => ({
    snack: false,
    snackColor: "",
    snackText: "",
    valid: true,
    pagination: {},
    max50chars: v => v.length <= 50 || "Input too long!",
    headers: [
      { text: "Course Name", align: "left", value: "courseName" },
      { text: "Faculty Assigned", value: "facultyAssigned" }
    ],
    // thirdSemItems: [
    //   {
    //     courseCode: "1",
    //     courseName: "1",
    //     facultyAssigned: ""
    //   },
    //   {
    //     courseCode: "2",
    //     courseName: "2",
    //     facultyAssigned: ""
    //   },
    //   {
    //     courseCode: "3",
    //     courseName: "3",
    //     facultyAssigned: ""
    //   },
    //   {
    //     courseCode: "4",
    //     courseName: "4",
    //     facultyAssigned: ""
    //   },
    //   {
    //     courseCode: "5",
    //     courseName: "5",
    //     facultyAssigned: ""
    //   }
    // ],
    // fifthSemItems: [
    //   {
    //     courseCode: "1",
    //     courseName: "1",
    //     facultyAssigned: ""
    //   },
    //   {
    //     courseCode: "2",
    //     courseName: "2",
    //     facultyAssigned: ""
    //   },
    //   {
    //     courseCode: "3",
    //     courseName: "3",
    //     facultyAssigned: ""
    //   },
    //   {
    //     courseCode: "4",
    //     courseName: "4",
    //     facultyAssigned: ""
    //   },
    //   {
    //     courseCode: "5",
    //     courseName: "5",
    //     facultyAssigned: ""
    //   }
    // ],
    seventhSemItems: [
      {
        courseName: "CNS",
        courseTheory: "4",
        courseTutorial: "0",
        courseLab: "0",
        courseSelfStudy: "0",
        facultyAssigned: "Meera"
      },
      {
        courseName: "DA",
        courseTheory: "4",
        courseTutorial: "0",
        courseLab: "0",
        courseSelfStudy: "0",
        facultyAssigned: "Parkavi"
      },
      {
        courseName: "HPC",
        courseTheory: "4",
        courseTutorial: "0",
        courseLab: "0",
        courseSelfStudy: "0",
        facultyAssigned: "Mallegowda"
      },
      {
        courseName: "DL",
        courseTheory: "4",
        courseTutorial: "0",
        courseLab: "0",
        courseSelfStudy: "0",
        facultyAssigned: "Srinidhi"
      },
      {
        courseName: "PMEE",
        courseTheory: "4",
        courseTutorial: "0",
        courseLab: "0",
        courseSelfStudy: "0",
        facultyAssigned: "Veena"
      },
      {
        courseName: "CC",
        courseTheory: "4",
        courseTutorial: "0",
        courseLab: "0",
        courseSelfStudy: "0",
        facultyAssigned: "Divakar"
      },
      {
        courseName: "DA Lab",
        courseTheory: "0",
        courseTutorial: "0",
        courseLab: "1",
        courseSelfStudy: "0",
        facultyAssigned: "Parkavi"
      },
      {
        courseName: "HPC Lab",
        courseTheory: "0",
        courseTutorial: "0",
        courseLab: "1",
        courseSelfStudy: "0",
        facultyAssigned: "Mallegowda"
      },
    ]
  }),
  computed: {
    listOfFaculty() {
      return this.$store.state.facultyInfo.map(item => {
        return item["facultyName"];
      });
    },
    // seventhSemItems() {
    //   return this.$store.state.seventhSemSubjects.map(item => {
    //     return {
    //       courseName: item["courseName"],
    //       courseTheory: item["courseTheory"],
    //       courseTutorial: item["courseTutorial"],
    //       courseLab: item["courseLab"],
    //       courseSelfStudy: item["courseSelfStudy"],
    //       facultyAssigned: ""
    //     };
    //   });
    // }
  },
  mounted() {},
  methods: {
    submit() {
      this.$store.commit("saveSubjectMap", this.seventhSemItems);
      this.$router.push("/generatetimetable/oddtimetable");
    },
    clear() {},
    save() {
      this.snack = true;
      this.snackColor = "success";
      this.snackText = "Data saved";
    },
    cancel() {
      this.snack = true;
      this.snackColor = "error";
      this.snackText = "Canceled";
    },
    open() {
      this.snack = true;
      this.snackColor = "info";
      this.snackText = "Dialog opened";
    },
    close() {
      this.snack = true;
      this.snackColor = "info";
      this.snackText = "Dialog closed";
    }
  }
};
</script>