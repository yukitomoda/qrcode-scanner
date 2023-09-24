import { Html5Qrcode } from 'html5-qrcode';

export default defineNuxtPlugin((nuxtApp) => {
    return {
        provide: {
            QrCode: Html5Qrcode
        }
    };
});
