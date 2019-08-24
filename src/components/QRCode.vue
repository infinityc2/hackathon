<template>
  <v-container>
    <v-text-field v-model="message"></v-text-field>
    <v-btn @click="qrCode" color="primary">Click</v-btn>
  </v-container>
</template>

<script>
import qrcode from 'qrcode'

export default {
  data: () => ({
    message: ""
  }),
  methods: {
    qrCode: async function () {
      const res = await qrcode.toDataURL(this.message);
      // eslint-disable-next-line
      console.log(res)
    }
  }
};
</script>
