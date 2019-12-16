<template>
  <v-container grid-list-xl fluid>
    <v-layout row wrap>
      <v-flex sm12>
        <h2>8th Semester</h2>
        <h6>(Please click submit to update information)</h6>
        <v-divider></v-divider>
      </v-flex>
      <v-flex sm12>
        <v-form v-model="valid">
          <div>
            <v-data-table :headers="headers" :items="items">
              <template v-slot:item.courseCode="props">
                <v-edit-dialog
                  :return-value.sync="props.item.courseCode"
                  lazy
                  @save="save"
                  @cancel="cancel"
                  @open="open"
                  @close="close"
                >
                  {{ props.item.courseCode }}
                  <template v-slot:input>
                    <v-text-field
                      v-model="props.item.courseCode"
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
                  :return-value.sync="props.item.courseName"
                  lazy
                  @save="save"
                  @cancel="cancel"
                  @open="open"
                  @close="close"
                >
                  {{ props.item.courseName }}
                  <template v-slot:input>
                    <v-text-field
                      v-model="props.item.courseName"
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
                  :return-value.sync="props.item.courseTheory"
                  lazy
                  @save="save"
                  @cancel="cancel"
                  @open="open"
                  @close="close"
                >
                  {{ props.item.courseTheory }}
                  <template v-slot:input>
                    <v-text-field
                      v-model="props.item.courseTheory"
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
                  :return-value.sync="props.item.courseTutorial"
                  lazy
                  @save="save"
                  @cancel="cancel"
                  @open="open"
                  @close="close"
                >
                  {{ props.item.courseTutorial }}
                  <template v-slot:input>
                    <v-text-field
                      v-model="props.item.courseTutorial"
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
                  :return-value.sync="props.item.courseLab"
                  lazy
                  @save="save"
                  @cancel="cancel"
                  @open="open"
                  @close="close"
                >
                  {{ props.item.courseLab }}
                  <template v-slot:input>
                    <v-text-field
                      v-model="props.item.courseLab"
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
                  :return-value.sync="props.item.courseSelfStudy"
                  lazy
                  @save="save"
                  @cancel="cancel"
                  @open="open"
                  @close="close"
                >
                  {{ props.item.courseSelfStudy }}
                  <template v-slot:input>
                    <v-text-field
                      v-model="props.item.courseSelfStudy"
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
    valid: true,
    pagination: {},
    max50chars: v => v.length <= 50 || "Input too long!",
    headers: [
      {
        text: "Course Code",
        align: "left",
        value: "courseCode"
      },
      { text: "Course Name", value: "courseName" },
      { text: "Theory Credits", value: "courseTheory" },
      { text: "Tutorial Credits", value: "courseTutorial" },
      { text: "Lab Credits", value: "courseLab" },
      { text: "Self Study Credits", value: "courseSelfStudy" },
      { text: "Actions", value: "action" }
    ],
    items: [
      {
        courseCode: "",
        courseName: "",
        courseTheory: "",
        courseTutorial: "",
        courseLab: "",
        courseSelfStudy: ""
      }
    ]
  }),
  computed: {},
  mounted() {},
  methods: {
    submit() {
      // TODO Submit
    },
    clear() {
      this.items = [
        {
          courseCode: "",
          courseName: "",
          courseTheory: "",
          courseTutorial: "",
          courseLab: "",
          courseSelfStudy: ""
        }
      ];
    },
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
    },
    addmore() {
      this.items.push({
        courseCode: "",
        courseName: "",
        courseTheory: "",
        courseTutorial: "",
        courseLab: "",
        courseSelfStudy: ""
      });
    },
    remove() {
      this.items.pop();
    },
    deleteItem(item) {
      const index = this.items.indexOf(item);
      this.items.splice(index, 1);
    }
  }
};
</script>