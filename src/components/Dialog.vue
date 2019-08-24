<template>
    <v-dialog v-model="dialog" max-width="300">
        <template v-slot:activator="{ on }">
            <v-btn
            color="primary"
            v-on="on"
            >
            ยืนยัน
            </v-btn>
        </template>

        <v-card>
            <v-card-title>
                ต้องการยืนยันหรือไม่
            </v-card-title>
            <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn text @click="dialog = !dialog">ยกเลิก</v-btn>
                <v-btn color="primary" @click="$emit('QRCode')">ยืนยัน</v-btn>
            </v-card-actions>
        </v-card>
    </v-dialog>
</template>

<script>
export default {
    props: ['dialog']
}
</script>