<template>
  <div class="phone-area-code-box">
    <!-- <div class="search-box">
      <el-input :placeholder="currCoinLangFun('search', 'all')" prefix-icon="el-icon-search" v-model="search"></el-input>
    </div> -->
    <div class="select-cont-box">
      <!-- <el-scrollbar ref="scrollMenuRef"> -->
      <div v-infinite-scroll="load" style="overflow:auto">
        <div class="areaBox infinite-list-item" v-for="item in areaData" :key="item.letter">
          <div class="areaBox_title">{{ item.letter }}</div>
          <div v-for="dataItem in item.data" :key="dataItem.phoneCode">
            <p class="areaBox_code"> {{ dataItem.phoneCode }}</p>
          </div>
        </div>
      </div>

      <!-- </el-scrollbar> -->
    </div>

  </div>
</template>

<script>
import { getDataApi, getAreaListApi, getCountryCode } from '@/api/system'
import { mapGetters } from 'vuex'
export default {
  name: 'PhoneAreaCode',
  props: {
    value: [String, Number],
    language: String,
  },
  data() {
    return {
      // search: '',
      areaData: []
    }
  },
  model: {
    prop: 'value',
    event: 'change',
  },
  watch: {
    language() {
      this.getAreaDataFun()
    },
  },
  computed: {
    ...mapGetters(['language']),
    input: {
      get() {
        return this.value
      },
      set(val) {
        this.$emit('change', val) // 触发
      },
    },


  },
  created() {
    this.getAreaDataFun()
  },
  methods: {
    async getAreaDataFun() {
      let dataRes = await getCountryCode()
      let data = dataRes.data.data
      this.areaData = data
      console.log("areaData", this.areaData);
    },
    currCoinLangFun(code, type = 'user') {
      return this.coinLangFun(type, code)
    },
  },
}
</script>

<style></style>
<style lang="scss">
.flex-container {
  display: flex;
  flex-direction: column;
  // flex-wrap: wrap;
  justify-content: flex-start;
}

.flex-item {
  flex: 0 0 auto;
  margin-right: 10px;
  /* 可以根据需要调整间距 */
}

.phone-area-code-popper {
  padding: 0;

  .phone-area-code-box {
    width: 100%;
    height: 268px;
    overflow-y: hidden;
    position: relative;

    .search-box {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      padding: 12px 12px 8px;
      box-sizing: border-box;

      .el-input {
        position: relative;
        font-size: 14px;
        display: inline-block;
        width: 100%;

        .el-input__inner {
          background-color: transparent;
          padding-left: 30px;
          height: 42px;
          line-height: 42px;
        }
      }
    }

    .select-cont-box {
      overflow: hidden;
      padding: 10px 0;
      // position: relative;
      // margin-top: 62px;


      // .areaBox {
      //   padding: 0 4px;
      // }

      .areaBox {
        // height: 28px;
        // line-height: 28px;
        padding: 0 27px 0 8px;
        cursor: pointer;
        // justify-content: space-between;

        .areaBox_title {
          line-height: 20px;
          font-size: 14px;
        }
      }
    }
  }
}
</style>
