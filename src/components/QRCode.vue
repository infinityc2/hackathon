<template>
  <v-container>
    <v-text-field v-model="message"></v-text-field>
    <v-btn @click="qrCode" color="primary">Click</v-btn>
  </v-container>
</template>

<script>
import Vue from "vue";
import qrcode from 'qrcode'

export default {
  data: () => ({
    message: ""
  }),
  methods: {
    qrCode: function () {
      const res = qrcode.toDataURL(this.message).then(res => console.log(res))
    }
  }
};
</script>