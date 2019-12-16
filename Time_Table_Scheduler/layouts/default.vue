<template>
  <v-app dark>
    <v-navigation-drawer :mini-variant.sync="mini" fixed app width="260" v-model="drawer">
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="title">Time Table</v-list-item-title>
          <v-list-item-subtitle>Scheduler</v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
      <v-divider></v-divider>
      <template v-for="item in items">
        <v-list dense nav :key="item.title" link>
          <v-list-item :to="item.href">
            <v-list-item-content>
              <v-list-item-title>{{ item.title }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <template v-for="subitem in item.items">
            <v-list-item dense nav v-if="subitem" :key="subitem.title">
              <v-list-item :to="subitem.href">
                <v-list-item-content>
                  <v-list-item-title>{{ subitem.title }}</v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </v-list-item>
          </template>
          <v-divider></v-divider>
        </v-list>
      </template>
    </v-navigation-drawer>
    <v-app-bar :clipped-left="clipped" fixed app>
      <v-app-bar-nav-icon @click.stop="toggleDrawer()"></v-app-bar-nav-icon>
      <v-toolbar-title>
        <v-btn text to="/welcome">{{ title }}</v-btn>
      </v-toolbar-title>
      <v-spacer />
    </v-app-bar>
    <v-content>
      <v-container>
        <nuxt />
      </v-container>
    </v-content>
    <v-footer :fixed="fixed" app>
      <v-spacer></v-spacer>
      <span>Made using Nuxtjs and Vuetifyjs</span>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      drawer: true,
      mini: false,
      clipped: false,
      fixed: false,
      items: [
        {
          title: "Faculty Information",
          href: "/facultyinfo"
        },
        {
          title: "Subject Information",
          href: "/subjectinformation",
          items: [
            // {
            //   title: "3rd Sem",
            //   href: "/subjectinfo/3rdsem"
            // },
            // {
            //   title: "4th Sem",
            //   href: "/subjectinfo/4thsem"
            // },
            // {
            //   title: "5th Sem",
            //   href: "/subjectinfo/5thsem"
            // },
            // {
            //   title: "6th Sem",
            //   href: "/subjectinfo/6thsem"
            // },
            {
              title: "7th Sem",
              href: "/subjectinfo/7thsem"
            }
            // {
            //   title: "8th Sem",
            //   href: "/subjectinfo/8thsem"
            // }
          ]
        },
        {
          title: "Subject Mapping",
          href: "/subjectmap",
          items: [
            {
              title: "Odd Semester",
              href: "/subjectmapping/oddmapping"
            }
            // {
            //   title: "Even Semester",
            //   href: "/subjectmapping/evenmapping"
            // }
          ]
        },
        {
          title: "Generate Time Table",
          href: "/generation",
          items: [
            {
              title: "Odd Semester",
              href: "/generatetimetable/oddtimetable"
            }
            // {
            //   title: "Even Semester",
            //   href: "/generatetimetable/eventimetable"
            // }
          ]
        }
      ],
      right: true,
      rightDrawer: false,
      title: "Time Table Generator"
    };
  },
  methods: {
    toggleDrawer(state) {
      this.drawer = !this.drawer;
    }
  }
};
</script>
