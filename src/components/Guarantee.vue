<template>
  <v-container style="position: fixed">
    <v-row align="center" justify="center">
      <v-col cols="12" sm="8" md="8" xl="8">
        <v-card>
          <v-card-title class="display-1">ขอเอกสารยืนยันตัวตนผู้ค้ำประกัน</v-card-title>
          <v-card-text>
            <v-form>
              <v-text-field label="เลขบัตรประชาชนผู้ค้ำประกัน" v-model="idCard"></v-text-field>
              <v-text-field label="เลขประจำหน่วยงาน" v-model="departmentId"></v-text-field>
            </v-form>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <!-- <v-btn color="primary" v-on:click="qrCode">ยืนยัน</v-btn> -->
            <Dialog :dialog="dialog" @QRCode="qrCode"/>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
    <v-row align="center" justify="center">
      <img :src="qr" />
    </v-row>
  </v-container>
</template>
<script>
import Dialog from './Dialog'
import qrcode from "qrcode";
var CryptoJS = require("crypto-js");
export default {
  components: {
    Dialog
  },
  data: () => ({
    idCard: "",
    departmentId: "",
    qr: "",
    dialog: null
  }),
  methods: {
    qrCode: async function() {
      const _skey = "hackathonsec";
      const data = {
        idCard: this.idCard,
        departmentId: this.departmentId
      };
      const ciphertext = CryptoJS.AES.encrypt(JSON.stringify(data), _skey);
      // eslint-disable-next-line
      console.log(ciphertext.toString());
      this.qr = await qrcode.toDataURL(ciphertext.toString());
      // eslint-disable-next-line
      console.log(this.qr);
    }
  }
};
</script>
