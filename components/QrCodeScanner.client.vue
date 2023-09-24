<script>
import ErrorView from './ErrorView.client.vue';
import ResultView from './ResultView.client.vue';


const targetId = 'qrcode-image';
export default {
  data() {
    return {
      result: '',
      error: '',
      targetId
    };
  },
  mounted() {
  },
  methods: {
    /**
     * @param {ClipboardEvent} ev
     */
    pasteImage(ev) {
      const item = ev.clipboardData.items[0];
      if (item.type.indexOf("image") === 0) {
        const file = item.getAsFile();
        const reader = new FileReader();
        reader.onload = (ev) => {
          document.getElementById(targetId).src = ev.target.result;
        };
        reader.readAsDataURL(file);
        this.scanFile(file).then((text) => {
          this.onSuccess(text);
        }, (error) => {
          this.onError(error);
        });
      }
      else {
        this.error = 'Pasted data is not an image.';
      }
    },
    scanFile(file) {
      const { $QrCode } = useNuxtApp();
      this.qrCode = new $QrCode(targetId);
      return this.qrCode.scanFile(file);
    },
    onSuccess(text) {
      this.result = text;
      this.error = '';
    },
    onError(message) {
      this.error = message;
      this.result = '';
    }
  },
  components: { ResultView, ErrorView }
}
</script>

<template>
  <div @paste="pasteImage">
    <div>
      Paste image here...
      <img :id="targetId">
    </div>
    <div>
      <ResultView :result="result"></ResultView>
    </div>
    <div>
      <ErrorView :error="error"></ErrorView>
    </div>
  </div>
</template>
