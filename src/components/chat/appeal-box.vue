<template>
  <div class="appeal-box">
    <el-dialog width="1036px" :visible.sync="appealBoxDialog" @close="closeAppealFun()">
      <div class="appeal-content" v-loading="pageLoading">
        <!-- == -->
        <div style="padding: 0 40px 30px 40px" v-show="pageStatus == 0">
          <div class="appeal_title" style="margin-bottom: 30px; position: relative" v-if="appealType == 1">
            <!-- 申诉 -->
            {{ currCoinLangFun("shensu_text") }}
            <i class="close el-icon-close fit-tc-tertiary" @click="closeAppealFun()"></i>
          </div>

          <div class="appeal_title" style="margin-bottom: 30px" v-if="appealType == 4">
            <!-- 补充描述 -->
            {{
                        currCoinLangFun(
                        "supplementaryDescription_text",
                        "move_transaction"
                        )
                        }}
          </div>

          <div class="tips fit-tc-primary" style="padding-bottom: 20px">
            <!-- 申诉方等待说明 -->
            <template v-if="appealType == 1">
              <p>
                <!-- 1、申诉原因及凭证将同时展示给双方和客服，请注意隐私信息保护。 -->
                1、{{
                                currCoinLangFun(
                                "ssyyjpzjtszsgsfhke_qzyysxxbh_tips",
                                "move_transaction"
                                )
                                }}
              </p>
              <p>
                <!-- 2、恶意申诉属于扰乱平台正常运营秩序的行为，情节严重将冻结账户。 -->
                2、{{
                                currCoinLangFun(
                                "eysssyrlptzcyyjxdxw_qjyzjdjzh_tips",
                                "move_transaction"
                                )
                                }}
              </p>
            </template>
            <!-- 等待客服处理提示 -->

            <template v-else>
              <p>
                <!-- 申诉描述及凭证将同时展示给被申诉人和客服，请注意隐私信息保护 -->
                {{
                                currCoinLangFun(
                                "ssmsjpzjtszsgbssrhkf_qzyysxxbh_tips",
                                "move_transaction"
                                )
                                }}
              </p>
            </template>
          </div>
          <el-form :model="form" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
            <div class="" style="display: flex">
              <div class="left_box">
                <template v-if="appealType == 1">
                  <el-form-item label-width="0" prop="reason">
                    <div class="reason_title">
                      <!-- 申诉理由(必填) -->
                      {{ currCoinLangFun("ssly_bt_text") }}
                    </div>
                  </el-form-item>

                  <el-select v-model="form.reason" :placeholder="currCoinLangFun('selectLy_text')" class="status"
                    popper-class="fit-background-select">
                    <el-option v-for="item in reasonList" :key="item.value" :label="item.label"
                      :value="item.label"></el-option>
                  </el-select>
                </template>

                <el-form-item label-width="0" prop="proof">
                  <div class="reason_title">
                    <!-- 添加凭证(必填) -->
                    {{
                                        appealType == 1
                                        ? currCoinLangFun("add_pingzheng_bt")
                                        : currCoinLangFun("add_pz_text")
                                        }}
                  </div>
                </el-form-item>
                <div class="upload-image">
                  <!--  -->
                  <el-upload :action="action" list-type="picture-card" :on-preview="handlePictureCardPreview"
                    :on-success="upSuccess" :on-remove="handleRemove" :before-upload="beforeUpload" :multiple="true"
                    :headers="headers" :auto-upload="true" :limit="20" ref="upload">
                    <i class="el-icon-plus"></i>
                  </el-upload>
                  <el-dialog :visible.sync="dialogVisible">
                    <img width="100%" :src="dialogImageUrl" alt="" />
                  </el-dialog>
                  <!--  -->
                </div>
              </div>
              <div class="right_box">
                <!-- 必填 -->
                <template v-if="appealType == 1">
                  <el-form-item label-width="0" prop="contact">
                    <div class="reason_title">
                      {{ currCoinLangFun("lianxiren_text") }}
                    </div>
                  </el-form-item>
                  <el-input v-model="form.contact" :placeholder="currCoinLangFun('qsrlxr_tips')" :maxlength="30"
                    class="input_box"></el-input>
                  <el-form-item label-width="0" prop="phone">
                    <div class="reason_title">
                      {{ currCoinLangFun("lx_phone_text") }}
                    </div>
                  </el-form-item>
                  <el-input v-model="form.phone" :placeholder="currCoinLangFun('qsrlx_phone_text')" :maxlength="30"
                    class="input_box"></el-input>
                </template>

                <el-form-item label-width="0" prop="description">
                  <div class="reason_title">
                    {{ currCoinLangFun("miaoshu_text") }}
                  </div>
                </el-form-item>
                <div class="input-area">
                  <el-input v-model="form.description" type="textarea" show-word-limit autosize
                    :placeholder="currCoinLangFun('qingshurumiaoshu_text')" resize="none" :maxlength="500"></el-input>
                </div>
                <div class="ricorso-box">
                  <el-button type="primary" size="small" :loading="submitBtnLoa" @click="submit()">{{
                                      currCoinLangFun("querenmiaoshu_text") }}</el-button>
                </div>
              </div>
            </div>
          </el-form>
        </div>
        <!-- == -->
        <!-- == -->
        <div v-show="pageStatus == 1" style="height: 100%">
          <div class="details_box" style="display: flex">
            <div class="details_left_box">
              <div class="left_title">
                <p class="title_status">{{ titleStatusFun }}</p>
                <p class="title_tips">
                  {{ titleTipsFun }}
                  <span style="color: #e9bf4d; margin-left: 6px" v-if="appealStatus != 2">{{ time }}</span>
                </p>
              </div>
              <div class="tb-order fit-tc-primary">
                <div>
                  <div class="coin-name">
                    <span class="buy" v-if="orderData.type == '1'">{{
                                          currCoinLangFun("buy_text", "all")
                                          }}</span>
                    <span class="sell" v-if="orderData.type == '2'">
                      {{ currCoinLangFun("sell_text", "all") }}</span>{{ orderData.coin_symbol }}
                  </div>
                  <div class="order-num">
                    <span class="fit-tc-tertiary">{{
                                          currCoinLangFun("ddh_text", "move_contract")
                                          }}</span>{{ orderData.order_code }}
                  </div>
                </div>
                <div>
                  <div class="fit-tc-tertiary">
                    {{ currCoinLangFun("entrust_money", "full") }}
                    <span style="padding-left: 5px">{{ ` ${orderData.exchange_code}`
                                          }}{{
                                            toThousands(Number(orderData.fiat_currency_amount))
                                            }}</span>
                  </div>
                  <div class="fit-tc-tertiary">
                    {{ currCoinLangFun("text_unit_price", "exchange") }}

                    <span class="fit-tc-primary">{{
                                          toThousands(Number(orderData.unit_price))
                                          }}</span>
                  </div>
                  <div class="fit-tc-tertiary">
                    {{ currCoinLangFun("table_coin_num", "exchange") }}

                    <span class="fit-tc-primary">{{ toThousands(Number(orderData.coin_cou)) }}
                      {{ orderData.coin_symbol }}</span>
                  </div>
                </div>
              </div>
              <div class="tips fit-tc-primary" style="padding: 20px 0">
                <!-- 申诉方等待说明 -->
                <template v-if="
                                    appealStatus == 0 &&
                                    currentRole == 'initiator' &&
                                    appealStatus != 4
                                  ">
                  <p>
                    <!-- 1.如己协商解决，可以点击撤销申诉按钮。撤销申诉后可以继续交易。订单不会被取消。 -->
                    1.{{ currCoinLangFun("ryxsjj_kydjcxssan_tips") }}
                  </p>
                  <p>
                    <!-- 2.申诉方超时未处理，将有客服介入。 -->
                    2.{{ currCoinLangFun("ssfcswcl_jykfjr_tips") }}
                  </p>
                  <p>
                    <!-- 3.若需要添加更多说明，请补充描述。对方和客服的留言可在申诉最新进度中查看。 -->
                    3.{{
                                        currCoinLangFun(
                                        "rxytjgdsm_qbcms_dfhkfdlykzsszxjdzck_tips"
                                        )
                                        }}
                  </p>
                </template>
                <!-- 等待客服处理提示 -->

                <template v-else-if="appealStatus == 2 && appealStatus != 4">
                  <p>
                    <!-- 1.申诉原因及凭证将同时展示给双方和客服，请注意隐私信息保护。 -->
                    1.{{
                                        currCoinLangFun(
                                        "ssyyjpzjtszsgsfhke_qzyysxxbh_tips",
                                        "move_transaction"
                                        )
                                        }}
                  </p>
                  <p>
                    <!-- 2.恶意申诉属于扰乱平台正常运营秩序的行为，情节严重将冻结账户。 -->
                    2.{{
                                        currCoinLangFun(
                                        "eysssyrlptzcyyjxdxw_qjyzjdjzh_tips",
                                        "move_transaction"
                                        )
                                        }}
                  </p>
                </template>
                <!-- //处理申诉中说明 -->
                <!-- 协商处理&&申诉未结束||被申诉人的0&1状态 -->
                <template v-else-if="
                                    (appealStatus == 3 && appealStatus != 4) ||
                                    ([0, 1].includes(appealStatus) &&
                                      currentRole == 'associate' &&
                                      appealStatus != 4)
                                  ">
                  <p>
                    <!-- 1.如已协商一致，请点“已协商一致”。确认后申诉将撤销。 -->
                    1.{{ currCoinLangFun("ryxsyz_qdyss_tips") }}
                  </p>
                  <p>
                    <!-- 2.如无法协商一致，请点“协商无果”。将有客服介入。 -->
                    2.{{ currCoinLangFun("rwfxsyz_qdxswg_tips") }}
                  </p>
                  <p>
                    <!-- 3.申诉方超时未处理，将有客服介入。 -->
                    3.{{ currCoinLangFun("ssfcswcl_jykfjr_tips") }}
                  </p>
                  <p>
                    <!-- 4.若需要添加更多说明，请补充描述。对方和客服的留言可在申诉最新进度中查看。 -->
                    4.{{
                                        currCoinLangFun(
                                        "rxytjgdsm_qbcms_dfhkfdlykzsszxjdzck_tips"
                                        )
                                        }}
                  </p>
                </template>

                <!-- 结束说明 -->
                <template v-else-if="appealStatus == 4">
                  <p>1.{{ currCoinLangFun("sscxhkyjxjy_ddbhbqx_tips") }}</p>
                  <p>2.{{ currCoinLangFun("rydqtwth_nkzcfqss_tips") }}</p>
                  <p>3.{{ currCoinLangFun("mtddcfsszdbn5c_tips") }}</p>
                </template>
              </div>
              <!-- 申诉人的3状态||被申诉人是0&1状态 -->
              <div class="consult-box" v-if="
                                (currentRole == 'initiator' && appealStatus == 3) ||
                                ([0, 1].includes(appealStatus) && currentRole == 'associate')
                              ">
                <div class="consult_fail" @click="consultFailFun()">
                  {{ currCoinLangFun("xswg_btn") }}
                </div>
                <div class="consult_success" @click="consultSuccessFun()">
                  {{ currCoinLangFun("yxsyz_btn") }}
                </div>
              </div>
              <!-- 被申诉人3状态 -->
              <div class="consult-box" v-else-if="currentRole == 'associate' && appealStatus == 3">
                <div class="success">
                  {{ currCoinLangFun("yxsyz_ddssrty_tips") }}
                </div>
              </div>
              <div class="details_btn_box">
                <!-- 被申诉人没有撤销权限 -->
                <template v-if="currentRole == 'initiator' && appealStatus != 4">
                  <el-button size="small" @click="revokeFun()">{{
                                      currCoinLangFun("cxss_btn")
                                      }}</el-button>
                </template>

                <el-button type="primary" size="small" v-if="appealStatus == 4" @click="appealAgain()">{{
                                  currCoinLangFun("zcss_btn") }}</el-button>
                <el-button type="primary" size="small" v-else @click="supplementFun()">{{
                                  currCoinLangFun(
                                  "supplementaryDescription_text",
                                  "move_transaction"
                                  )
                                  }}</el-button>
              </div>
            </div>
            <div class="details_right_box">
              <div class="right_title">
                {{ currCoinLangFun("sszxjd_title") }}
                <i class="close el-icon-close fit-tc-tertiary" @click="closeAppealFun()"></i>
              </div>

              <div class="right_content">
                <div class="list-item" v-for="(item, index) in list" :key="index">
                  <div class="time">
                    {{ item.time }}
                  </div>
                  <div class="result-box" v-if="item.status == 0">
                    <div class="result-title">
                      {{ item.title }}
                    </div>
                    <div class="result-content">
                      {{ item.text }}
                    </div>
                    <div class="corner-marker" v-show="index == 0"></div>
                  </div>

                  <div class="appeal-box" v-else>
                    <div class="appeal-title">
                      {{ item.title }}
                    </div>
                    <div class="appeal-user">
                      <span class="avatar_text">
                        {{ item.name && item.name.slice(0, 1) }}
                      </span>
                      <span class="name">
                        {{ item.name }}
                      </span>
                    </div>
                    <div class="reason-box" v-if="item.ly_label">
                      <div class="reason">
                        {{ item.ly_label }}
                      </div>
                      <div class="reason-text">
                        {{ item.ly_text }}
                      </div>
                    </div>

                    <div class="reason-box" v-if="item.ms_label">
                      <div class="reason">
                        {{ item.ms_label }}
                      </div>
                      <div class="reason-text">
                        {{ item.ms_text }}
                      </div>
                    </div>
                    <div class="img-box" v-if="item.urls && item.urls.length > 0">
                      <div v-for="(data, k) in item.urls" :key="k">
                        <el-image style="
                            width: 100px;
                            height: 100px;
                            margin: 0 6px 6px 0;
                          " :src="data" fit="contain" :preview-src-list="item.urls"></el-image>
                      </div>
                    </div>

                    <div class="corner-marker" v-show="index == 0"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- == -->
      </div>
    </el-dialog>
  </div>
</template>

<script>
import { getDicTableData, uploadeFileApi } from "@/api/system.js";
import {
  appealFun,
  getAppealOrder,
  getServicePayment,
  appealCancelFun,
  appealOrderFun,
} from "@/api/otc.js";
import config from "@/config/index";
import { getToken } from "@/util/auth";
import website from "@/config/index";
import mqtt from "@/mixins/mqtt.js";
import { toThousands, getCurrentDateFun } from "@/util/util";
export default {
  props: {
    appealBoxDialog: Boolean,
    closeAppealFun: Function,
    userInfo: Object,
    paterOrderData: Object,
    isMerchant: {
      type: Boolean,
      default: false,
    },
    serviceType: {
      type: String,
      default: "1",
    },
  },
  mixins: [mqtt],
  data() {
    return {
      pageLoading: false,
      currentRole: "associate", //associate 被申诉人,initiator 申诉人
      appealData: {}, //申诉信息
      orderData: {}, //订单详情
      submitBtnLoa: false,
      action: `/api/${config.apiRequestHead}/cgform-api/upload/file`, //上传地址
      toThousands: toThousands,
      getCurrentDateFun: getCurrentDateFun,
      reasonList: [], //理由list
      dialogImageUrl: "",
      dialogVisible: false,
      headers: {
        [website.tokenHeader]: "bearer " + getToken(),
      },
      upSuccessList: [],
      pageStatus: undefined, //0发起描述,1申诉详情
      appealStatus: undefined, //申诉人状态：0申诉方发起申诉 。 ||||  被申诉人状态：。1被申诉方处理中。 |||| 公用状态：2等待客服处理。4申诉结束。3被申诉方已协商后，申诉方处理处理。
      appealType: 1, //类型(1:申述 2:协商一致 3:协商无果 4:补充描述 5:客服留言)
      rules: {
        reason: [{ required: true, message: "请选择理由", trigger: "change" }],
        proof: [{ required: true, message: "请添加凭证", trigger: "change" }],
        description: [
          { required: false, message: "描述不能为空", trigger: "change" },
        ],
        contact: [
          { required: true, message: "请添写联系人", trigger: "change" },
        ],
        phone: [
          { required: true, message: "请添写联系方式", trigger: "change" },
        ],
      },
      form: {
        userId: "",
        orderId: "",
        type: 1, //类型(1:申述 2:协商一致 3:协商无果 4:补充描述 5:客服留言)
        reason: "", //理由
        description: "", //描述
        proof: [], //资料图片list
        contact: "", //联系人
        phone: "", //手机号
      },
      list: [],
      countDownTimer: undefined,
      time: "",
    };
  },
  computed: {
    titleTipsFun() {
      if (this.appealStatus == 0 || this.appealStatus == 1) {
        // 请等待被申诉方处理，还剩
        return this.currentRole == "initiator"
          ? this.currCoinLangFun("qddbssfclhs_tips")
          : this.currCoinLangFun("qclss_hs_tips");
        // 请处理申诉，还剩
      } else if (this.appealStatus == 2) {
        // "请等待客服处理"
        return this.currCoinLangFun("qddkfcl_tips");
      } else if (this.appealStatus == 3) {
        return this.currentRole == "initiator"
          ? this.currCoinLangFun("qclss_hs_tips")
          : this.currCoinLangFun("ddssfclss_hs_tips");
        //等待申诉方处理申诉，还剩
      } else if (this.appealStatus == 4) {
        // 对订单还存在异议可再次发起申诉
        return this.currCoinLangFun("dddhczyykzcfqss_tips");
      }
    },
    titleStatusFun() {
      if ([0, 1, 2, 3].includes(this.appealStatus)) {
        // 申诉中
        return this.currCoinLangFun("shenshuzhong_tips");
      } else if (this.appealStatus == 4) {
        // 申诉已结束
        return this.currCoinLangFun("shenshuyijieshu_tips");
      }
    },
  },
  created() {
    this.rules = {
      reason: [
        {
          required: true,
          message: this.currCoinLangFun("selectLy_text"),
          trigger: "change",
        },
      ],
      proof: [
        {
          required: true,
          message: this.currCoinLangFun("qtjpz_tips"),
          trigger: "change",
        },
      ],
      description: [
        {
          required: false,
          message: this.currCoinLangFun("msbnwk_tips"),
          trigger: "change",
        },
      ],
      contact: [
        {
          required: true,
          message: this.currCoinLangFun("qsrlxr_tips"),
          trigger: "change",
        },
      ],
      phone: [
        {
          required: true,
          message: this.currCoinLangFun("qsrlx_phone_text"),
          trigger: "change",
        },
      ],
    };

    this.init();

    //mq推送
    this.initMqtt(`refresh_${this.userInfo.id}`, (data) => {
      this.pageLoading = true;
      if (data.type == "appeal") {
        this.init();
      }
    });
  },
  methods: {
    //协商一致
    consultSuccessFun() {
      // 确认双方协商一致后，申诉将撤销
      this.$confirm(
        `${this.currCoinLangFun("qrsfxsyzh_ssjcx_tips")}`,
        `${this.currCoinLangFun("tips", "all")}`,
        {
          confirmButtonText: this.currCoinLangFun("confirm", "all"), //"确定"
          cancelButtonText: this.currCoinLangFun("cancel", "all"), //"取消"
          type: "warning",
        }
      ).then((suc) => {
        this.pageLoading = true;

        if (this.currentRole == "initiator") {
          //申诉人直接撤销申诉就行
          appealCancelFun(this.orderData.id).then((res) => {
            this.init();
          });
        } else if (this.currentRole == "associate") {
          appealFun({
            orderId: this.orderData.id,
            type: 2, //类型(1:申述 2:协商一致 3:协商无果 4:补充描述 5:客服留言)
          }).then((res) => {
            this.init();
          });
        }
      });
    },
    //协商无果
    consultFailFun() {
      this.$confirm(
        // 协商无果将等待客服支持协助
        `${this.currCoinLangFun("xswgjddkfzcxz_tips")}`,
        `${this.currCoinLangFun("tips", "all")}`,
        {
          confirmButtonText: this.currCoinLangFun("confirm", "all"), //"确定"
          cancelButtonText: this.currCoinLangFun("cancel", "all"), //"取消"
          type: "warning",
        }
      ).then((suc) => {
        this.pageLoading = true;

        appealFun({
          orderId: this.orderData.id,
          type: 3, //类型(1:申述 2:协商一致 3:协商无果 4:补充描述 5:客服留言)
        }).then((res) => {
          this.init();
        });
      });
    },
    // 补充描述
    supplementFun() {
      this.appealType = 4;
      this.form = {
        userId: this.userInfo.id,
        orderId: this.orderData.id,
        type: 4, //类型(1:申述 2:协商一致 3:协商无果 4:补充描述 5:客服留言)
        reason: "", //理由
        description: "", //描述
        proof: [], //资料图片list
        contact: "", //联系人
        phone: "", //手机号
      };
      this.pageStatus = 0;
      this.rules = {
        reason: [
          {
            required: false,
            message: this.currCoinLangFun("selectLy_text"),
            trigger: "change",
          },
        ],
        proof: [
          {
            required: false,
            message: this.currCoinLangFun("qtjpz_tips"),
            trigger: "change",
          },
        ],
        description: [
          {
            required: true,
            message: this.currCoinLangFun("msbnwk_tips"),
            trigger: "change",
          },
        ],
        contact: [
          {
            required: false,
            message: this.currCoinLangFun("qsrlxr_tips"),
            trigger: "change",
          },
        ],
        phone: [
          {
            required: false,
            message: this.currCoinLangFun("qsrlx_phone_text"),
            trigger: "change",
          },
        ],
      };
    },
    //撤销申诉
    revokeFun() {
      // 确认撤销申诉吗?
      this.$confirm(
        `${this.currCoinLangFun("qrcxssm_tips")}`,
        `${this.currCoinLangFun("tips", "all")}`,
        {
          confirmButtonText: this.currCoinLangFun("confirm", "all"), //"确定"
          cancelButtonText: this.currCoinLangFun("cancel", "all"), //"取消"
          type: "warning",
        }
      ).then(() => {
        this.pageLoading = true;
        appealCancelFun(this.orderData.id).then((res) => {
          this.init();
        });
      });
    },
    //再次申诉
    appealAgain() {
      this.appealType = 1;
      this.form = {
        userId: this.userInfo.id,
        orderId: this.orderData.id,
        type: 1, //类型(1:申述 2:协商一致 3:协商无果 4:补充描述 5:客服留言)
        reason: "", //理由
        description: "", //描述
        proof: [], //资料图片list
        contact: "", //联系人
        phone: "", //手机号
      };
      this.rules = {
        reason: [
          {
            required: true,
            message: this.currCoinLangFun("selectLy_text"),
            trigger: "change",
          },
        ],
        proof: [
          {
            required: true,
            message: this.currCoinLangFun("qtjpz_tips"),
            trigger: "change",
          },
        ],
        description: [
          {
            required: false,
            message: this.currCoinLangFun("msbnwk_tips"),
            trigger: "change",
          },
        ],
        contact: [
          {
            required: true,
            message: this.currCoinLangFun("qsrlxr_tips"),
            trigger: "change",
          },
        ],
        phone: [
          {
            required: true,
            message: this.currCoinLangFun("qsrlx_phone_text"),
            trigger: "change",
          },
        ],
      };
      this.pageStatus = 0;
    },
    submit() {
      this.$refs["ruleForm"].validate((valid) => {
        if (!valid) {
          return false;
        } else {
          this.submitBtnLoa = true;
          appealFun({
            ...this.form,
            proof: this.form.proof.toString(),
          })
            .then((res) => {
              this.submitBtnLoa = false;
              this.init();
              this.$message({
                message: this.currCoinLangFun("shenshuchenggong_tips"),
                type: "success",
              });
              this.$refs.upload.clearFiles();
            })
            .catch((err) => {
              this.submitBtnLoa = false;
            });
        }
      });
    },

    async init() {
      this.pageStatus = undefined;
      this.pageLoading = true;
      await getServicePayment({
        orderId: this.paterOrderData.id,
      }).then((res) => {
        this.orderData = res.data.data;
      });
      this.form.userId = this.userInfo.id;
      this.form.orderId = this.orderData.id;

      //获取选择字典
      getDicTableData(
        `${
          this.orderData.type == 1
            ? "order_appeal_reason_buy"
            : "order_appeal_reason_sell"
        }`,
        {}
      ).then((res) => {
        this.reasonList = res.data.data;
      });

      //获取申诉进度
      appealOrderFun(this.orderData.id).then((res) => {
        let typeList = [
          {
            label: this.currCoinLangFun("shensu_text"),
            value: 1,
          },
          {
            label: this.currCoinLangFun("qrxsyz_text"),
            value: 2,
          },
          {
            label: this.currCoinLangFun("xswg_btn"),
            value: 3,
          },
          {
            label: this.currCoinLangFun(
              "supplementaryDescription_text",
              "move_transaction"
            ),
            value: 4,
          },
          {
            label: this.currCoinLangFun("kefuliuyan_text"),
            value: 5,
          },
          {
            label: this.currCoinLangFun("shenshujiesu_text"),
            value: 6,
          },
        ];
        this.list = res.data.data.map((item) => {
          if (item.type == 6) {
            return {
              ...item,
              status: 0, //0使用结束模板
              time: item.create_time,
              title: this.currCoinLangFun("shenshujieguo_title"),
              text: this.currCoinLangFun("shenshuyichexiao_tips"),
            };
          } else {
            return {
              ...item,
              status: 1, //1使用其它模板
              time: item.create_time,
              title: (() => {
                if (item.type == 1) {
                  return this.currCoinLangFun("shenshurentijiaoshenshu_tips");
                } else if (item.type == 5) {
                  return this.currCoinLangFun("kefuliuyan_text");
                } else if (item.initiator_id) {
                  return (
                    this.currCoinLangFun("shenshuren_text") +
                    typeList.filter((key) => key.value == item.type)[0].label
                  );
                } else if (!item.initiator_id) {
                  return (
                    this.currCoinLangFun("beishenshuren_text") +
                    typeList.filter((key) => key.value == item.type)[0].label
                  );
                }
              })(),
              avatar: "",
              name: item.name,
              text: "",
              ly_label:
                item.type == 1 ? this.currCoinLangFun("liyou_text") : "",
              ly_text: item.reason,
              ms_label: this.currCoinLangFun("miaoshu_text"),
              ms_text: item.description,
              urls: item["proof"] ? item.proof.split(",") : [],
            };
          }
        });
      });

      //0未申诉过，1申诉中，2申诉结束
      if (
        this.orderData.appeal_status == 1 ||
        this.orderData.appeal_status == 2
      ) {
        this.pageStatus = 1;
        //当前审核信息
        await getAppealOrder(this.orderData.id).then((res) => {
          this.appealData = res.data.data[0];
          this.appealStatus = this.appealData.status;
          if (this.appealData.associate_id == this.userInfo.id) {
            this.currentRole = "associate"; //associate 被申诉人,initiator 申诉人
          } else if (this.appealData.initiator_id == this.userInfo.id) {
            this.currentRole = "initiator"; //associate 被申诉人,initiator 申诉人
          }

          //超时直接客服处理
          if ([0, 1, 3].includes(this.appealStatus)) {
            this.countDownFun();

            let startTime = new Date(this.appealData.create_time).getTime();
            //30分钟超时
            let endTime = startTime + 30 * 60 * 1000;
            let currTime = new Date().getTime();
            let time = endTime - currTime;

            let m = Math.floor(time / 60000); //分
            let s = Math.floor(time / 1000) - m * 60; //秒
            if (!time || time < 0) {
              this.appealStatus = 2;
              this.appealData.status = 2;
            }
          }
        });
      } else {
        this.pageStatus = 0;
      }
      this.pageLoading = false;
    },
    //倒计时
    countDownFun() {
      if (!this.appealData && !this.appealData.create_time) {
        return false;
      }
      let startTime = new Date(this.appealData.create_time).getTime();
      //30分钟超时
      let endTime = startTime + 30 * 60 * 1000;

      if (this.countDownTimer) {
        clearInterval(this.countDownTimer);
      }

      //结束时间蹉
      this.countDownTimer = setInterval(() => {
        if ([0, 1, 3].includes(this.appealStatus)) {
          let currTime = new Date().getTime();
          let time = endTime - currTime;

          let m = Math.floor(time / 60000); //分
          let s = Math.floor(time / 1000) - m * 60; //秒
          if (time >= 0) {
            this.time = `${m}"${s < 10 ? "0" + s : s}'s`;
          } else if (!time || time < 0) {
            this.time = ``;
            this.appealStatus = 2;
            this.appealData.status = 2;
            clearInterval(this.countDownTimer);
          }
        } else {
          clearInterval(this.countDownTimer);
        }
      }, 1000);
    },
    beforeUpload(file) {
      //限制大小
      if (file.size > 5242880) {
        this.$message.error(this.currCoinLangFun("tpdxbndy5m_err"));
        return false;
      }
    },
    //上传成功
    upSuccess(response, file, fileList) {
      this.form.proof = fileList.map((item) => item.response.data.link);
    },
    //删除
    handleRemove(file, fileList) {
      this.form.proof = fileList.map((item) => item.response.data.link);
    },
    //预览
    handlePictureCardPreview(file) {
      this.dialogImageUrl = file.url;
      this.dialogVisible = true;
    },
    currCoinLangFun(code, type = "buy_coins_relevant") {
      return this.coinLangFun(type, code);
    },
  },
  beforeDestroy() {
    clearInterval(this.countDownTimer);
  },
};
</script>

<style lang="scss" scoped>
.flex-box {
  display: flex;
  align-items: center;
}

.appeal-box {
  ::v-deep.el-dialog {
    .el-dialog__header {
      display: none;
    }

    .el-dialog__body {
      padding: 0 !important;
    }
  }

  .appeal-content {
    height: 642px;

    .appeal_title {
      font-size: 16px;
      display: flex;
      align-items: center;
      justify-content: center;
      line-height: 50px;
      font-weight: 600;

      .close {
        position: absolute;
        right: 0;
        top: 50%;
        transform: translateY(-50%);
      }
    }

    .tips {
      p {
        margin-bottom: 5px;
      }
    }

    .reason_title {
      font-size: 14px;
      font-weight: 600;
      margin-bottom: 10px !important;
    }

    ::v-deep.el-form-item__content {
      line-height: normal;
    }

    .left_box {
      width: 50%;
      margin-right: 20px;

      .upload-image {
        height: 300px;
        overflow-y: scroll;

        ::v-deep.el-upload-list__item {
          width: 120px;
          height: 120px;
        }

        ::v-deep.el-upload--picture-card {
          width: 120px;
          height: 120px;
          line-height: 120px;
        }
      }

      ::v-deep.el-select {
        box-sizing: border-box;

        input.el-input__inner {
          height: 36px !important;
        }

        &.status {
          width: 100%;
          margin-bottom: 20px !important;

          .el-input__suffix {
            display: flex;
            align-items: center;
            transition: all 0.3s;
            pointer-events: none;

            .el-input__suffix-inner {
              display: inline-block;
              line-height: 36px;

              i {
                line-height: 40px !important;
              }
            }
          }
        }
      }
    }

    .right_box {
      width: 50%;
      margin-left: 20px;
      position: relative;

      .input_box {
        margin-bottom: 20px;
        height: 36px;
      }

      .input-area {
        ::v-deeptextarea.el-textarea__inner {
          padding: 10px !important;
          height: 100px !important;
        }
      }

      .ricorso-box {
        position: absolute;
        right: 0;
        bottom: 0;
      }
    }

    .details_box {
      height: 100%;

      .details_left_box {
        width: 50%;
        height: 100%;
        padding: 20px 30px;
        position: relative;
        box-sizing: border-box;

        .left_title {
          padding-bottom: 20px;

          .title_status {
            font-size: 22px;
            font-weight: 600;
            margin-bottom: 8px;
          }

          .title_tips {
            font-size: 14px;
          }
        }

        .tb-order {
          font-size: 12px;
          padding: 20px 0;

          &>div:first-child {
            font-size: 12px;
            display: flex;

            .coin-name {
              font-weight: 600;
              padding-right: 18px;

              .buy,
              .sell {
                border-radius: 2px;
                padding: 0 6px;
                display: inline-block;
                margin-right: 6px;
              }
            }

            .order-num {
              margin-left: 18px;

              span {
                margin-right: 4px;
              }
            }
          }

          &>div:last-child {
            margin-top: 10px;
            display: flex;

            &>div:nth-child(1) {
              flex: 0 0 245px;

              span {
                font-size: 18px;
              }
            }

            &>div:nth-child(2) {
              flex: 0 0 104px;

              span {
                margin-left: 4px;
              }
            }

            &>div:nth-child(3) {
              flex: 0 0 156px;

              span {
                margin-left: 4px;
              }
            }
          }
        }

        .consult-box {
          display: flex;
          justify-content: center;
          align-items: center;
          padding: 20px 0;

          .consult_fail {
            border-radius: 50px;
            padding: 5px 20px;
            border: 1px solid #e55764;
            color: #e55764;
            margin-right: 20px;
            cursor: pointer;
          }

          .consult_success {
            border-radius: 50px;
            padding: 5px 20px;
            border: 1px solid #5ac690;
            color: #5ac690;
            cursor: pointer;
          }

          .success {
            color: #5ac690;
          }
        }

        .details_btn_box {
          position: absolute;
          right: 30px;
          bottom: 20px;
        }
      }

      .details_right_box {
        width: 50%;
        height: 100%;

        .right_title {
          line-height: 51px;
          font-size: 18px;
          font-weight: 600;
          text-align: center;
          position: relative;

          .close {
            position: absolute;
            right: 20px;
            top: 50%;
            transform: translateY(-50%);
            cursor: pointer;
            font-size: 14px;
          }
        }

        .right_content {
          width: 100%;
          height: calc(100% - 54px);
          overflow-y: scroll;
          box-sizing: border-box;
          padding: 20px;

          .corner-marker {
            transform: rotate(-135deg);
            border: 10px solid #e05461;
            border-left: 10px solid transparent;
            border-right: 10px solid transparent;
            border-bottom: 10px solid transparent;
            position: absolute;
            right: -10px;
            top: -10px;
          }

          .list-item {
            margin-bottom: 20px;

            .time {
              color: #83888e;
              font-size: 12px;
              margin-bottom: 5px;
            }

            .result-box {
              background-color: #fdfbe8;
              border: 1px solid #eaebee;
              padding: 10px;
              border-radius: 3px;
              position: relative;

              .result-title {
                color: #7f8185;
                font-size: 13px;
                margin-bottom: 3px;
              }

              .result-content {
                color: #000;
                font-size: 14px;
              }
            }

            .appeal-box {
              background-color: #fff;
              border: 1px solid #eaebee;
              border-radius: 3px;
              position: relative;

              .appeal-title {
                color: #000;
                padding: 10px;
                font-size: 15px;
                font-weight: 600;
                border-bottom: 1px solid #eaebee;
              }

              .appeal-user {
                padding: 12px 10px;
                display: flex;
                align-items: center;

                .avatar {
                  width: 20px;
                  height: 20px;
                  border-radius: 50%;
                }

                .avatar_text {
                  width: 20px;
                  height: 20px;
                  border-radius: 50%;
                  background-color: #55aaff;
                  color: #fff;
                  font-size: 14px;
                  display: flex;
                  justify-content: center;
                  align-items: center;
                  flex-direction: row;
                }

                .name {
                  color: #000;
                  font-size: 15px;
                  margin-left: 5px;
                }
              }

              .reason-box {
                padding: 0 10px 12px 10px;

                .reason {
                  color: #7f8185;
                  font-size: 13px;
                  margin-bottom: 3px;
                }

                .reason-text {
                  color: #000;
                  font-size: 14px;
                }
              }

              .img-box {
                padding: 0 10px 12px 10px;
                display: flex;
              }
            }
          }
        }
      }
    }
  }
}
</style>

<style lang="scss">
.theme-night {
  .appeal-box {
    .appeal-content {
      background-color: #0d1324;

      .appeal_title {
        color: #dfdfdf;
        border-bottom: 1px solid #262d38;
      }

      .reason_title {
        color: #9bb4cc;
      }

      .left_box {
        width: 50%;
      }

      .details_box {
        .details_left_box {
          .left_title {
            border-bottom: 1px solid #262d38;

            .title_status {
              color: #fff;
            }

            .title_tips {
              color: #fff;
            }
          }

          .tb-order {
            border-bottom: 1px solid #262d38;

            &>div:first-child {
              .coin-name {
                border-right: 1px solid #262d38;

                .buy {
                  background-color: #5ab993;
                  color: #ffffff;
                }

                .sell {
                  background-color: #e00b0b;
                  color: #ffffff;
                }
              }
            }

            &>div:last-child {
              &>div:nth-child(1) {
                span {
                  color: #d4651b;
                }
              }
            }
          }

          .consult-box {
            background: #151d29;
          }
        }

        .details_right_box {
          background: #151d29;

          .right_title {
            color: #fff;
            border-bottom: 1px solid #262d38;
          }
        }
      }
    }
  }
}

.theme-daytime {
  .appeal-box {
    .appeal-content {
      background-color: #fff;

      .appeal_title {
        color: #151d29;
        border-bottom: 1px solid #f3f3f3;
      }

      .reason_title {
        color: #4e6073;
      }

      .left_box {
        width: 50%;
      }

      .details_box {
        .details_left_box {
          .left_title {
            border-bottom: 1px solid #f3f3f3;

            .title_status {
              color: #10171f;
            }

            .title_tips {
              color: #10171f;
            }
          }

          .tb-order {
            border-bottom: 1px solid #f3f3f3;

            &>div:first-child {
              .coin-name {
                border-right: 1px solid #f3f3f3;

                .buy {
                  background-color: #5ab993;
                  color: #ffffff;
                }

                .sell {
                  background-color: #e00b0b;
                  color: #ffffff;
                }
              }
            }

            &>div:last-child {
              &>div:nth-child(1) {
                span {
                  color: #d4651b;
                }
              }

              &>div:nth-child(2) {
                span {
                  color: #10171f;
                }
              }

              &>div:nth-child(3) {
                span {
                  color: #10171f;
                }
              }
            }
          }

          .consult-box {
            background: #f5f6fa;
          }
        }

        .details_right_box {
          background: #f5f6fa;

          .right_title {
            color: #10171f;
            border-bottom: 1px solid #f3f3f3;
          }
        }
      }
    }
  }
}
</style>
