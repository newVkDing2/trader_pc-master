<template>
  <div class="box">
    <!-- {{ address }}-address -->
    <div class="erweima">
      <!-- {{ address }}-address -->
      <img :src="qrCodeImg" alt="" :width="width" />
    </div>
  </div>
</template>

<script>
import QRCode from "qrcode";

export default {
  props: {
    address: {
      type: String,
      default: "",
    },
    width: {
      type: String,
      default: "110px",
    },
  },
  data() {
    return {
      qrCodeImg: "",
    };
  },
  watch: {
    address: {
      handler: "generateQRCode",
      immediate: true,
    },
  },
  methods: {
    generateQRCode(newVal) {
      if (newVal) {
        QRCode.toDataURL(newVal, {
          version: "",
          errorCorrectionLevel: "H",
          maskPattern: 2,
          margin: 2,
          scale: 3,
          height: 170,
          width: 170,
          scal: 200,
          color: {
            dark: "#000",
            light: "#fff",
          },
        }).then((url) => {
          this.qrCodeImg = url;
        });
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.box {
  // display: flex;
  // justify-content: center;
  // padding: 50px 0;
  .erweima {
    // font-size: 0;
    // padding: 0;
    // width: 170px;
    // height: 170px;
    // border: 1px solid var(--ex-border-color4);
    img {
      // width: 100%;
    }
  }
}
</style>
