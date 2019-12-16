<template>
  <v-container grid-list-xl fluid>
    <v-layout row wrap>
      <v-flex sm12>
        <h2>Faculty Information</h2>
        <h6>(Please click submit to update information)</h6>
        <v-divider></v-divider>
      </v-flex>
      <v-flex sm12>
        <v-form v-model="valid">
          <div>
            <v-data-table :headers="headers" :items="facultyInfo">
              <template v-slot:item.facultyName="props">{{ props.item.index }}</template>
              <template v-slot:item.facultyName="props">
                <v-edit-dialog
                  :return-value.sync="Name"
                  lazy
                  @save="save(props.item.index, Name, 'facultyName')"
                  @cancel="cancel"
                  @open="open(props.item.facultyName, 'Name')"
                  @close="close"
                >
                  {{ props.item.facultyName }}
                  <template v-slot:input>
                    <v-text-field
                      v-model="Name"
                      :rules="[max50chars]"
                      label="Edit"
                      placeholder="Faculty Name"
                      counter
                    ></v-text-field>
                  </template>
                </v-edit-dialog>
              </template>
              <template v-slot:item.facultyInitials="props">
                <v-edit-dialog
                  :return-value.sync="Initials"
                  lazy
                  @save="save(props.item.index, Initials, 'facultyInitials')"
                  @cancel="cancel"
                  @open="open(props.item.facultyInitials, 'Initials')"
                  @close="close"
                >
                  {{ props.item.facultyInitials }}
                  <template v-slot:input>
                    <v-text-field
                      v-model="Initials"
                      :rules="[max50chars]"
                      label="Edit"
                      placeholder="Faculty Initials"
                      counter
                    ></v-text-field>
                  </template>
                </v-edit-dialog>
              </template>
              <template v-slot:item.facultyDesignation="props">
                <v-edit-dialog
                  :return-value.sync="Designation"
                  lazy
                  @save="save(props.item.index, Designation, 'facultyDesignation')"
                  @cancel="cancel"
                  @open="open(props.item.facultyDesignation, 'Designation')"
                  @close="close"
                >
                  {{ props.item.facultyDesignation }}
                  <template v-slot:input>
                    <v-combobox
                      v-model="Designation"
                      :items="designation"
                      label="Select designation"
                    ></v-combobox>
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
    Name: "",
    Initials: "",
    Designation: "",
    max50chars: v => v.length <= 50 || "Input too long!",
    headers: [
      {
        text: "Sl no.",
        align: "left",
        value: "index"
      },
      { text: "Faculty Name", value: "facultyName" },
      { text: "Faculty Initials", value: "facultyInitials" },
      { text: "Faculty Designation", value: "facultyDesignation" },
      { text: "Actions", value: "action" }
    ],
    designation: ["Professor", "Associate Professor", "Assistant Professor"]
  }),
  computed: {
    facultyInfo() {
      return this.$store.state.facultyInfo;
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
      this.$store.commit("updatefacultyinfo", dataarray);
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
        case "Name":
          this.Name = value;
          break;
        case "Initials":
          this.Initials = value;
          break;
        case "Designation":
          this.Designation = value;
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
      const index = this.facultyInfo.length + 1;
      const data = {
        index: index,
        facultyName: "",
        facultyInitials: "",
        facultyDesignation: ""
      };
      this.$store.commit("addfacultyinfo", data);
    },
    remove() {
      // this.items.pop();
    },
    deleteItem(item) {
      const index = this.facultyInfo.indexOf(item);
      this.$store.commit("removefacultyinfo", index);
    }
  }
};
</script>