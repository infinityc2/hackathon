<template>
  <v-app id="inspire">
    <v-content>
      <v-container class="fill-height" fluid>
        <v-row align="center" justify="center">
          <v-col cols="12" sm="8" md="5">
            <v-card class="elevation-12">
              <v-toolbar color="primary" dark flat>
                <v-toolbar-title>ระบบขอเอกสารยืนยันตัวตนออนไลน์</v-toolbar-title>
              </v-toolbar>
              <v-card-text>
                <v-form>
                  <v-text-field label="เลขบัตรประชาชน" name="login" prepend-icon="person" type="text"></v-text-field>

                  <v-text-field
                    id="password"
                    label="รหัสผ่าน"
                    name="password"
                    prepend-icon="lock"
                    type="password"
                  ></v-text-field>
                </v-form>
              </v-card-text>
              <v-card-actions>
                <v-btn text replace to="/register">สมัคร</v-btn>
                <v-spacer></v-spacer>
                <v-btn color="primary" replace to="/menu">เข้าสู่ระบบ</v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-content>
  </v-app>
</template>