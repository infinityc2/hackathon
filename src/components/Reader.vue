<template>
    <div>
        <p class="error">{{ error }}</p>
        <p>Raw data: {{ raw }}</p>
        <p class="decode-result">Last result: <b>{{ result }}</b></p>
        <qrcode-stream @decode="onDecode" @init="onInit" />
    </div>
</template>

<script>
    import { QrcodeStream } from 'vue-qrcode-reader'
    var CryptoJS = require("crypto-js");
    export default {
        components: { QrcodeStream },
        data :() => {
            return {
                result: '',
                error: '',
                raw: ''
            }
        },
        methods: {
            onDecode (result) {
                this.raw = result
                const _skey = 'hackathonsec';
                const bytes = CryptoJS.AES.decrypt(result, _skey);
                this.result = bytes.toString(CryptoJS.enc.Utf8);
            },
            async onInit (promise) {
                try {
                    await promise
                } catch (error) {
                    if (error.name === 'NotAllowedError') {
                        this.error = "ERROR: you need to grant camera access permisson"
                    } else if (error.name === 'NotFoundError') {
                        this.error = "ERROR: no camera on this device"
                    } else if (error.name === 'NotSupportedError') {
                        this.error = "ERROR: secure context required (HTTPS, localhost)"
                    } else if (error.name === 'NotReadableError') {
                        this.error = "ERROR: is the camera already in use?"
                    } else if (error.name === 'OverconstrainedError') {
                        this.error = "ERROR: installed cameras are not suitable"
                    } else if (error.name === 'StreamApiNotSupportedError') {
                        this.error = "ERROR: Stream API is not supported in this browser"
                    }
                }
            }
        }
    }
</script>
