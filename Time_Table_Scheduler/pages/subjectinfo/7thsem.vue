<template>
  <v-container grid-list-xl fluid>
    <v-layout row wrap>
      <v-flex sm12>
        <h2>7th Semester</h2>
        <h6>(Please click submit to update information)</h6>
        <v-divider></v-divider>
      </v-flex>
      <v-flex sm12>
        <v-form v-model="valid">
          <div>
            <v-data-table :headers="headers" :items="seventhSemSubjects">
              <template v-slot:item.index="props">{{ props.item.index }}</template>
              <template v-slot:item.courseCode="props">
                <v-edit-dialog
                  :return-value.sync="Code"
                  lazy
                  @save="save(props.item.index, Code, 'courseCode')"
                  @cancel="cancel"
                  @open="open(props.item.courseCode, 'Code')"
                  @close="close"
                >
                  {{ props.item.courseCode }}
                  <template v-slot:input>
                    <v-text-field
                      v-model="Code"
                      :rules="[max50chars]"
                      label="Edit"
                      placeholder="Course Code"
                      counter
                    ></v-text-field>
                  </template>
                </v-edit-dialog>
              </template>
              <template v-slot:item.courseName="props">
                <v-edit-dialog
                  :return-value.sync="Name"
                  lazy
                  @save="save(props.item.index, Name, 'courseName')"
                  @cancel="cancel"
                  @open="open(props.item.courseName, 'Name')"
                  @close="close"
                >
                  {{ props.item.courseName }}
                  <template v-slot:input>
                    <v-text-field
                      v-model="Name"
                      :rules="[max50chars]"
                      label="Edit"
                      placeholder="Course Name"
                      counter
                    ></v-text-field>
                  </template>
                </v-edit-dialog>
              </template>
              <template v-slot:item.courseTheory="props">
                <v-edit-dialog
                  :return-value.sync="Theory"
                  lazy
                  @save="save(props.item.index, Theory, 'courseTheory')"
                  @cancel="cancel"
                  @open="open(props.item.courseTheory, 'Theory')"
                  @close="close"
                >
                  {{ props.item.courseTheory }}
                  <template v-slot:input>
                    <v-text-field
                      v-model="Theory"
                      type="number"
                      :rules="[max50chars]"
                      label="Edit"
                      placeholder="Theory Credits"
                      counter
                    ></v-text-field>
                  </template>
                </v-edit-dialog>
              </template>
              <template v-slot:item.courseTutorial="props">
                <v-edit-dialog
                  :return-value.sync="Tutorial"
                  lazy
                  @save="save(props.item.index, Tutorial, 'courseTutorial')"
                  @cancel="cancel"
                  @open="open(props.item.courseTutorial, 'Tutorial')"
                  @close="close"
                >
                  {{ props.item.courseTutorial }}
                  <template v-slot:input>
                    <v-text-field
                      v-model="Tutorial"
                      type="number"
                      :rules="[max50chars]"
                      label="Edit"
                      placeholder="Tutorial Credits"
                      counter
                    ></v-text-field>
                  </template>
                </v-edit-dialog>
              </template>
              <template v-slot:item.courseLab="props">
                <v-edit-dialog
                  :return-value.sync="Lab"
                  lazy
                  @save="save(props.item.index, Lab, 'courseLab')"
                  @cancel="cancel"
                  @open="open(props.item.courseLab, 'Lab')"
                  @close="close"
                >
                  {{ props.item.courseLab }}
                  <template v-slot:input>
                    <v-text-field
                      v-model="Lab"
                      type="number"
                      :rules="[max50chars]"
                      label="Edit"
                      placeholder="Lab Credits"
                      counter
                    ></v-text-field>
                  </template>
                </v-edit-dialog>
              </template>
              <template v-slot:item.courseSelfStudy="props">
                <v-edit-dialog
                  :return-value.sync="SelfStudy"
                  lazy
                  @save="save(props.item.index, SelfStudy, 'courseSelfStudy')"
                  @cancel="cancel"
                  @open="open(props.item.courseSelfStudy, 'SelfStudy')"
                  @close="close"
                >
                  {{ props.item.courseSelfStudy }}
                  <template v-slot:input>
                    <v-text-field
                      v-model="SelfStudy"
                      type="number"
                      :rules="[max50chars]"
                      label="Edit"
                      placeholder="Self Study Credits"
                      counter
                    ></v-text-field>
                  </template>
                </v-edit-dialog>
              </template>
              <template v-slot:item.action="{ item }">
                <v-icon small @click="deleteItem(items)">delete</v-icon>
              </template>
            </v-data-table>
            <v-snackbar v-model="snack" :timeout="3000" :color="snackColor">
              {{ snackText }}
              <v-btn text @click="snack = false">Close</v-btn>
            </v-snackbar>
          </div>
          <br />
          <center>
            <v-btn class="form-btn" @click="addmore">Add</v-btn>
            <v-btn class="form-btn" @click="remove">Remove</v-btn>
          </center>
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
    Code: "",
    Name: "",
    Theory: 0,
    Tutorial: 0,
    Lab: 0,
    SelfStudy: 0,
    valid: true,
    max50chars: v => v.length <= 50 || "Input too long!",
    headers: [
      { text: "Sl No", align: "left", value: "index" },
      { text: "Course Code", value: "courseCode" },
      { text: "Course Name", value: "courseName" },
      { text: "Theory Credits", value: "courseTheory" },
      { text: "Tutorial Credits", value: "courseTutorial" },
      { text: "Lab Credits", value: "courseLab" },
      { text: "Self Study Credits", value: "courseSelfStudy" },
      { text: "Actions", value: "action" }
    ],
  }),
  computed: {
    seventhSemSubjects() {
      return this.$store.state.seventhSemSubjects;
    }
  },
  mounted() {},
  methods: {
    submit() {},
    clear() {},
    save(index, update, type) {
      index = index - 1;
      let dataarray = {
        index: index,
        update: update,
        type: type
      };
      this.$store.commit("update7thsemsubject", dataarray);
      this.snack = true;
      this.snackColor = "success";
      this.snackText = "Data saved";
    },
    cancel() {
      this.snack = true;
      this.snackColor = "error";
      this.snackText = "Canceled";
    },
    open(value, field) {
      switch (field) {
        case "Code":
          this.Code = value;
          break;
        case "Name":
          this.Name = value;
          break;
        case "Theory":
          this.Theory = value;
          break;
        case "Tutorial":
          this.Tutorial = value;
          break;
        case "Lab":
          this.Lab = value;
          break;
        case "SelfStudy":
          this.SelfStudy = value;
          break;
      }
      this.snack = true;
      this.snackColor = "info";
      this.snackText = "Dialog opened";
    },
    close() {
      this.snack = true;
      this.snackColor = "info";
      this.snackText = "Dialog closed";
    },
    addmore() {
      const index = this.seventhSemSubjects.length + 1;
      const data = {
        index: index,
        courseCode: "",
        courseName: "",
        courseTheory: "",
        courseTutorial: "",
        courseLab: "",
        courseSelfStudy: ""
      };
      this.$store.commit("add7thsemsubject", data);
    },
    remove() {
      // this.items.pop();
    },
    deleteItem(item) {
      const index = this.items.indexOf(item);
      this.$store.commit("remove7thsemsubject", index);
    }
  }
};
</script>