<template>
  <v-app>
    <v-content>
      <v-container class="fill-height" fluid>
        <v-row align="center" justify="center">
          <v-col cols="12" sm="8" md="6">
            <v-card class="elevation-12">
              <v-toolbar color="primary" dark flat>
                <v-toolbar-title>Register</v-toolbar-title>
              </v-toolbar>
              <v-card-text>
                <v-form>
                  <v-file-input label="Image"></v-file-input>
                  <v-text-field label="ID Card" prepend-icon="person" type="text"></v-text-field>

                  <v-text-field
                    id="password"
                    label="Password"
                    name="password"
                    prepend-icon="lock"
                    type="password"
                  ></v-text-field>
                  <v-text-field label="PIN"></v-text-field>
                  <v-text-field label="ID Card Identify"></v-text-field>
                  <v-text-field label="Email" type="email"></v-text-field>
                  <v-select label="Prefix" :items="prefix"></v-select>
                  <v-row>
                    <v-col cols="12" md="6">
                      <v-text-field label="Name (thai)"></v-text-field>
                    </v-col>
                    <v-col cols="12" md="6">
                      <v-text-field label="Surname (thai)"></v-text-field>
                    </v-col>
                  </v-row>
                  <v-row>
                    <v-col cols="12" md="6">
                      <v-text-field label="Name (Eng)"></v-text-field>
                    </v-col>
                    <v-col cols="12" md="6">
                      <v-text-field label="Surname (Eng)"></v-text-field>
                    </v-col>
                  </v-row>
                  <v-menu
                    ref="menu"
                    v-model="menu"
                    :close-on-content-click="false"
                    :return-value.sync="date"
                    transition="scale-transition"
                    offset-y
                    full-width
                    min-width="290px"
                  >
                    <template v-slot:activator="{ on }">
                      <v-text-field
                        v-model="date"
                        label="Birthdate"
                        prepend-icon="event"
                        readonly
                        v-on="on"
                      ></v-text-field>
                    </template>
                    <v-date-picker v-model="date" no-title scrollable>
                      <div class="flex-grow-1"></div>
                      <v-btn text color="primary" @click="menu = false">Cancel</v-btn>
                      <v-btn text color="primary" @click="$refs.menu.save(date)">OK</v-btn>
                    </v-date-picker>
                  </v-menu>

                  <v-text-field label="religion"></v-text-field>
                  <v-textarea label="Addresss"></v-textarea>
                </v-form>
              </v-card-text>
              <v-card-actions>
                  <v-btn text link to="/login">Back</v-btn>
                <v-spacer></v-spacer>
                <v-btn color="primary">Register</v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-content>
  </v-app>
</template>


<script>
export default {
  data: () => ({
    date: new Date().toISOString().substr(0, 10),
    menu: false,
    prefix: [
        {
            text: 'นาย',
            value: 1
        },
        {
            text: 'นาง',
            value: 2
        },
        {
            text: 'นางสาว',
            value: 3
        }
    ]
  })
};
</script>