<template>
  <div class="reward-center-box">
    <div class="fit-background reward-container">
      <div class="tab-box">
        <el-button type="primary" class="fit-tc-button"
          >BAIYIEX发放</el-button
        >
        <el-button class="mgleft">小额币兑换</el-button>
      </div>
      <div class="reward-wrapper"></div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.reward-center-box {
  .reward-container {
    .tab-box {
      padding-top: 16px !important;
      button {
        box-sizing: border-box;
        &.el-button--primary {
          display: inline-block;
          -webkit-appearance: none;
          text-align: center;
          outline: 0;
          margin: 0;
          transition: 0.1s;
        }
      }
    }
  }
}
</style>
<style lang="scss" scoped>
.theme-night {
  .reward-center-box {
    .reward-container {
      .tab-box {
        button {
          color: #0020FD;
          border-color: #223e69;
          background-color: #19283e;
          &:hover {
            color: #0020FD;
            border-color: #223e69;
            background-color: #19283e;
          }

          &.el-button--primary {
            color: #f5faff !important;
            border: 1px solid;
            background-color: #0020FD;
            border-color: #0020FD;
            &:hover {
              background: #3776d4;
              border-color: #3776d4;
            }
          }
        }
        .mgleft {
          margin-left: 16px;
        }
      }
    }
  }
}

.theme-daytime {
  .reward-center-box {
    .reward-container {
      .tab-box {
        button {
          background: #fff;
          border: 1px solid #d8dfeb;
          color: #4e6073;
          &:hover {
            color: #2271e6;
            border-color: #bdd4f8;
            background-color: #e9f1fd;
          }

          &.el-button--primary {
            background-color: #8BE5C9;
            border-color: #0020FD;
            border: 1px solid #d8dfeb;
            color: #4e6073;
            color: #f5faff !important;
            &:hover {
              background: #3776d4;
              border-color: #3776d4;
            }
          }
        }

        .mgleft {
          margin-left: 10px;
        }
      }
    }
  }
}
</style>
