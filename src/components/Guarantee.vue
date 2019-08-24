<template>
  <v-container style="position: fixed">
    <v-row align="center" justify="center">
      <v-col cols="12" sm="8" md="8" xl="8">
        <v-card>
          <v-card-title>ค้ำประกัน</v-card-title>
          <v-card-text>
            <v-form>
              <v-text-field label="ID CARD"></v-text-field>
              <v-text-field label="ID หน่วยงาน"></v-text-field>
            </v-form>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="primary">ยืนยัน</v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>