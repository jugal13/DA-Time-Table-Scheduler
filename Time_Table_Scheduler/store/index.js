export const state = () => ({
  tabledata: {},
  facultyInfo: [
    {
      index: 1,
      facultyName: "Meera",
      facultyInitials: "M",
      facultyDesignation: "Associate Professor"
    },
    {
      index: 2,
      facultyName: "Parkavi",
      facultyInitials: "APK",
      facultyDesignation: "Professor"
    },
    {
      index: 3,
      facultyName: "Mallegowda",
      facultyInitials: "MG",
      facultyDesignation: "Professor"
    },
    {
      index: 4,
      facultyName: "Srinidhi",
      facultyInitials: "SH",
      facultyDesignation: "Assistant Professor"
    },
    {
      index: 5,
      facultyName: "Divakar",
      facultyInitials: "D",
      facultyDesignation: "Associate Professor"
    },
    {
      index: 6,
      facultyName: "Veena",
      facultyInitials: "V",
      facultyDesignation: "Assistant Professor"
    }
  ],
  seventhSemSubjects: [
    {
      index: 1,
      courseCode: "CS71",
      courseName: "CNS",
      courseTheory: "4",
      courseTutorial: "0",
      courseLab: "0",
      courseSelfStudy: "0"
    },
    {
      index: 2,
      courseCode: "CS72",
      courseName: "DA",
      courseTheory: "4",
      courseTutorial: "0",
      courseLab: "0",
      courseSelfStudy: "0"
    },
    {
      index: 3,
      courseCode: "CS73",
      courseName: "HPC",
      courseTheory: "4",
      courseTutorial: "0",
      courseLab: "0",
      courseSelfStudy: "0"
    },
    {
      index: 4,
      courseCode: "CSE23",
      courseName: "DL",
      courseTheory: "4",
      courseTutorial: "0",
      courseLab: "0",
      courseSelfStudy: "0"
    },
    {
      index: 5,
      courseCode: "CSE24",
      courseName: "PMEE",
      courseTheory: "4",
      courseTutorial: "0",
      courseLab: "0",
      courseSelfStudy: "0"
    },
    {
      index: 6,
      courseCode: "CSE14",
      courseName: "CC",
      courseTheory: "4",
      courseTutorial: "0",
      courseLab: "0",
      courseSelfStudy: "0"
    },
    {
      index: 7,
      courseCode: "CSL74",
      courseName: "DA Lab",
      courseTheory: "0",
      courseTutorial: "0",
      courseLab: "1",
      courseSelfStudy: "0"
    },
    {
      index: 8,
      courseCode: "CSL75",
      courseName: "HPC Lab",
      courseTheory: "0",
      courseTutorial: "0",
      courseLab: "1",
      courseSelfStudy: "0"
    }
  ],
  subjectMapping: []
});

export const mutations = {
  
  addfacultyinfo(state, data) {
    state.facultyInfo.push(data);
  },

  removefacultyinfo(state, index) {
    state.facultyInfo.splice(index, 1);
  },

  updatefacultyinfo(state, dataarrray) {
    state.facultyInfo[dataarrray.index][dataarrray.type] = dataarrray.update;
  },

  setfacultyinfo(state, data) {
    state.facultyInfo = data;
  },

  add7thsemsubject(state, data) {
    state.seventhSemSubjects.push(data);
  },

  remove7thsemsubject(state, index) {
    state.seventhSemSubjects.splice(index, 1);
  },

  update7thsemsubject(state, dataarrray) {
    state.seventhSemSubjects[dataarrray.index][dataarrray.type] =
      dataarrray.update;
  },

  set7thsemsubject(state, data) {
    state.seventhSemSubjects = data;
  },

  saveSubjectMap(state, data) {
    state.subjectMapping = data;
  },

  updatetabledata(state, data) {
    state.tabledata = data;
  }
};

export const actions = {

  async gettimetable({ commit, state }) {
    commit("updatetabledata", {})
    console.log("Started");
    console.log(state.subjectMapping);
    const response = await this.$axios.post("http://localhost:5000", state.subjectMapping);
    console.log("Ended");
    commit("updatetabledata", response.data)
  }
};
