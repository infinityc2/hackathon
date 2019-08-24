<template>
  <v-app id="keep">
    <v-app-bar app clipped-left color="primary">
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
      <span class="title ml-3 mr-5">
        Personal&nbsp;
        <span class="font-weight-light">Identify</span>
      </span>
    </v-app-bar>

    <v-navigation-drawer v-model="drawer" app clipped color="grey lighten-4">
      <v-list dense class="grey lighten-4">
        <v-list-item link to="guarantee">
          <v-list-item-action>
            <v-icon></v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title class="grey--text">ค้ำประกัน</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list-item link to="authorize">
          <v-list-item-action>
            <v-icon></v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title class="grey--text">มอบฉันทะ</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-divider class="mt-3"></v-divider>
        <v-list-item link to="/login">
          <v-list-item-action>
            <v-icon></v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title class="grey--text">ออกจากระบบ</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-content>
      <v-container fluid>
        <v-fade-transition>
          <router-view />
        </v-fade-transition>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
export default {
  data: () => ({
    drawer: null
  })
};
</script>