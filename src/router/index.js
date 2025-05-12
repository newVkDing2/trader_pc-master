import Vue from "vue";
import VueRouter from "vue-router";
import Layout from "@/page/index/index.vue";
import accountLayout from "@/views/account/center/center-menu.vue";
import walletLayout from "@/views/account/wallet/wallet-menu.vue";
import entrustWenu from "@/views/account/entrust/entrust-menu.vue";
import articleLayout from "@/views/article/main.vue";
// import i18n from '@/lang' // Internationalization 国际化 多语言
// import Store from '../store/'; // vuex
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    redirect: "/home",
  },
  {
    path: "/home",
    redirect: "/home/index",
    component: Layout,
    children: [
      {
        path: "index",
        name: "首页",
        component: () =>
          import(/* webpackChunkName: "views" */ "@/views/home/index.vue"),
      },
    ],
  },
  // 登录注册
  {
    path: "/user",
    redirect: "/user/login",
    component: Layout,
    children: [
      {
        path: "login", //登录
        name: "",
        component: () =>
          import(/* webpackChunkName: "views" */ "@/views/user/login.vue"),
      },
      {
        path: "register", //注册
        name: "",
        component: () =>
          import(/* webpackChunkName: "views" */ "@/views/user/register.vue"),
      },
      {
        path: "reset", //重置密码
        name: "",
        component: () =>
          import(/* webpackChunkName: "views" */ "@/views/user/reset.vue"),
      },
      {
        path: "index", //用户相关的子页面
        name: "",
        component: () =>
          import(/* webpackChunkName: "views" */ "@/views/user/index.vue"),
      },
    ],
  },

  // 费率
  {
    path: "/rate",
    redirect: "/rate/index",
    component: Layout,
    children: [
      {
        path: "index",
        component: () =>
          import(/* webpackChunkName: "views" */ "@/views/rate/index.vue"),
      },
    ],
  },
  // 行情
  {
    path: "/quotes",
    redirect: "/quotes/index",
    component: Layout,
    children: [
      {
        path: "index",
        component: () =>
          import(/* webpackChunkName: "views" */ "@/views/quotes/index.vue"),
      },
    ],
  },
  // 交易
  {
    path: "/trade",
    redirect: "/trade/index",
    component: Layout,
    children: [
      {
        path: "index",
        component: () =>
          import(/* webpackChunkName: "views" */ "@/views/trade/index.vue"),
      },
    ],
  },
  // 助力贷
  {
    path: "/loan",
    redirect: "/loan/index",
    component: Layout,
    children: [
      {
        path: "index",
        component: () =>
          import(/* webpackChunkName: "views" */ "@/views/loan/index.vue"),
      },
      {
        path: "order",
        component: () =>
          import(/* webpackChunkName: "views" */ "@/views/loan/order.vue"),
      },
    ],
  },
  //DeFi挖矿
  {
    path: "/defis",
    redirect: "/defis/index",
    component: Layout,
    children: [
      {
        path: "index",
        component: () =>
          import(/* webpackChunkName: "views" */ "@/views/defis/index.vue"),
      },
      {
        path: "details",
        component: () =>
          import(/* webpackChunkName: "views" */ "@/views/defis/details.vue"),
      },
    ],
  },
  //规则
  {
    path: "/rule",
    redirect: "/rule/index",
    component: Layout,
    children: [
      {
        path: "index",
        component: () =>
          import(/* webpackChunkName: "views" */ "@/views/rule/index.vue"),
      },
    ],
  },
  // 质押挖矿
  {
    path: "/pledge",
    redirect: "/pledge/index",
    component: Layout,
    children: [
      {
        path: "index",
        component: () =>
          import(/* webpackChunkName: "views" */ "@/views/pledge/index.vue"),
      },
      {
        path: "add",
        name: "",
        component: () =>
          import(/* webpackChunkName: "views" */ "@/views/pledge/add.vue"),
      },
      {
        path: "order",
        name: "",
        component: () =>
          import(/* webpackChunkName: "views" */ "@/views/pledge/order.vue"),
      },
    ],
  },
  // 市值
  {
    path: "/market",
    redirect: "/market/main",
    component: Layout,
    children: [
      {
        path: "main",
        component: () =>
          import(
            /* webpackChunkName: "views" */ "@/views/market/market_main.vue"
          ),
      },
    ],
  },
  // 文章
  {
    path: "/article",
    redirect: "/article/main",
    component: Layout,
    children: [
      {
        path: "main",
        redirect: "/article/main/index",
        component: articleLayout,
        children: [
          {
            path: "index",
            name: "",
            component: () =>
              import(
                /* webpackChunkName: "views" */ "@/views/article/index.vue"
              ),
          },
          {
            path: "categories/:id",
            name: "",
            component: () =>
              import(
                /* webpackChunkName: "views" */ "@/views/article/article-categories.vue"
              ),
          },
          {
            path: "sections/:id",
            name: "",
            component: () =>
              import(
                /* webpackChunkName: "views" */ "@/views/article/article-sections.vue"
              ),
          },
          {
            path: "content/:type/:id",
            name: "",
            component: () =>
              import(
                /* webpackChunkName: "views" */ "@/views/article/article-content.vue"
              ),
          },
        ],
      },
    ],
  },
  // 账户
  {
    path: "/account",
    redirect: "/account/center",
    component: Layout,
    children: [
      {
        path: "center",
        redirect: "/account/center/info",
        component: accountLayout,
        children: [
          {
            path: "info", //账户信息
            name: "",
            component: () =>
              import(
                /* webpackChunkName: "views" */ "@/views/account/center/info.vue"
              ),
          },
          {
            path: "security", //安全设置
            name: "",
            component: () =>
              import(
                /* webpackChunkName: "views" */ "@/views/account/center/security.vue"
              ),
            children: [
              {
                path: "setting/phone", //设置手机号
                name: "",
                component: () =>
                  import(
                    /* webpackChunkName: "views" */ "@/views/account/center/setting/phone.vue"
                  ),
                meta: {
                  isChild: true,
                },
              },
              {
                path: "setting/google", //设置谷歌验证
                name: "",
                component: () =>
                  import(
                    /* webpackChunkName: "views" */ "@/views/account/center/setting/google.vue"
                  ),
                meta: {
                  isChild: true,
                },
              },
              {
                path: "setting/email", //设置邮箱
                name: "",
                component: () =>
                  import(
                    /* webpackChunkName: "views" */ "@/views/account/center/setting/email.vue"
                  ),
                meta: {
                  isChild: true,
                },
              },
              {
                path: "setting/login-pwd", //设置密码
                name: "",
                component: () =>
                  import(
                    /* webpackChunkName: "views" */ "@/views/account/center/setting/login-pwd.vue"
                  ),
                meta: {
                  isChild: true,
                },
              },
              {
                path: "setting/trade-pwd", //资金密码
                name: "",
                component: () =>
                  import(
                    /* webpackChunkName: "views" */ "@/views/account/center/setting/trade-pwd.vue"
                  ),
                meta: {
                  isChild: true,
                },
              },
              {
                path: "setting/anti-code", //防钓鱼码
                name: "",
                component: () =>
                  import(
                    /* webpackChunkName: "views" */ "@/views/account/center/setting/anti-code.vue"
                  ),
                meta: {
                  isChild: true,
                },
              },
            ],
          },
          {
            path: "device-management", //账户活动
            name: "",
            component: () =>
              import(
                /* webpackChunkName: "views" */ "@/views/account/center/device-management.vue"
              ),
          },
          {
            path: "kyc", //身份验证
            name: "",
            component: () =>
              import(
                /* webpackChunkName: "views" */ "@/views/account/center/kyc.vue"
              ),
          },
          {
            path: "reward-center", //奖励中心
            name: "",
            component: () =>
              import(
                /* webpackChunkName: "views" */ "@/views/account/center/reward-center.vue"
              ),
          },
          {
            path: "merchant", //商家管理
            name: "merchant",
            component: () =>
              import(
                /* webpackChunkName: "views" */ "@/views/account/center/merchant-info.vue"
              ),
          },
          {
            path: "contractAgents/agentManagement", //身份验证
            name: "agentManagement",
            component: () =>
              import(
                /* webpackChunkName: "views" */ "@/views/account/center/contractAgents/agent-management.vue"
              ),
          },
        ],
      },
      {
        path: "wallet",
        redirect: "/account/wallet/assets",
        component: walletLayout,
        children: [
          {
            path: "assets", //资产
            name: "Assets",
            component: () =>
              import(
                /* webpackChunkName: "views" */ "@/views/account/wallet/assets.vue"
              ),
          },
          {
            path: "deposit", //充值
            name: "",
            component: () =>
              import(
                /* webpackChunkName: "views" */ "@/views/account/wallet/deposit.vue"
              ),
          },
          {
            path: "withdrawal", //提现
            name: "",
            component: () =>
              import(
                /* webpackChunkName: "views" */ "@/views/account/wallet/withdrawal.vue"
              ),
          },
          {
            path: "history-deposit", //充值记录
            name: "",
            component: () =>
              import(
                /* webpackChunkName: "views" */ "@/views/account/wallet/history-deposit.vue"
              ),
          },
          {
            path: "history-withdrawal", //提现记录
            name: "",
            component: () =>
              import(
                /* webpackChunkName: "views" */ "@/views/account/wallet/history-withdrawal.vue"
              ),
          },
          {
            path: "bills", //我的账单
            name: "",
            component: () =>
              import(
                /* webpackChunkName: "views" */ "@/views/account/wallet/bills.vue"
              ),
          },
        ],
      },
      {
        path: "entrust",
        redirect: "/account/entrust/spot",
        component: entrustWenu,
        children: [
          {
            path: "spot", //币币交易
            name: "",
            component: () =>
              import(
                /* webpackChunkName: "views" */ "@/views/account/entrust/spot.vue"
              ),
          },
          {
            path: "margin-all", //杠杆交易-全仓
            name: "",
            component: () =>
              import(
                /* webpackChunkName: "views" */ "@/views/account/entrust/margin-all.vue"
              ),
          },
          {
            path: "margin-fixed", //杠杆交易-逐仓
            name: "",
            component: () =>
              import(
                /* webpackChunkName: "views" */ "@/views/account/entrust/margin-fixed.vue"
              ),
          },
          {
            path: "future/u", //U本位永续合约
            name: "",
            component: () =>
              import(
                /* webpackChunkName: "views" */ "@/views/account/entrust/future/u.vue"
              ),
          },
          {
            path: "future/coin", //币本位永续合约
            name: "",
            component: () =>
              import(
                /* webpackChunkName: "views" */ "@/views/account/entrust/future/coin.vue"
              ),
          },
        ],
      },
    ],
  },
  // // 登录注册
  // {
  //   path: "/user",
  //   redirect: "/user/login",
  //   component: Layout,
  //   children: [
  //     {
  //       path: "login", //登录
  //       name: "",
  //       component: () =>
  //         import(/* webpackChunkName: "views" */ "@/views/user/login.vue"),
  //     },
  //     {
  //       path: "register", //注册
  //       name: "",
  //       component: () =>
  //         import(/* webpackChunkName: "views" */ "@/views/user/register.vue"),
  //     },
  //     {
  //       path: "reset", //重置密码
  //       name: "",
  //       component: () =>
  //         import(/* webpackChunkName: "views" */ "@/views/user/reset.vue"),
  //     },
  //   ],
  // },
  // 交易
  {
    path: "/exchange",
    redirect: "/exchange/index",
    component: Layout,
    children: [
      {
        path: "index",
        component: () =>
          import(/* webpackChunkName: "views" */ "@/views/exchange/index.vue"),
      },
      {
        path: "full-screen/:type",
        component: () =>
          import(
            /* webpackChunkName: "views" */ "@/views/exchange/full-screen.vue"
          ),
      },
      {
        path: "full-contract/:type",
        component: () =>
          import(
            /* webpackChunkName: "views" */ "@/views/exchange/full-contract.vue"
          ),
      },
    ],
  },
  // 买卖币种
  {
    path: "/otc",
    redirect: "/otc/common",
    component: Layout,
    children: [
      {
        path: "common",
        component: () =>
          import(/* webpackChunkName: "views" */ "@/views/otc/common.vue"),
      },
      {
        path: "order",
        name: "order",
        component: () =>
          import(/* webpackChunkName: "views" */ "@/views/otc/order.vue"),
      },
      {
        path: "ordinary",
        component: () =>
          import(/* webpackChunkName: "views" */ "@/views/otc/ordinary.vue"),
      },
    ],
  },
  //商家
  {
    path: "/merchant",
    redirect: "/merchant/index",
    component: Layout,
    children: [
      {
        path: "index",
        component: () =>
          import(/* webpackChunkName: "views" */ "@/views/merchant/index.vue"),
      },
      {
        path: "deal",
        component: () =>
          import(/* webpackChunkName: "views" */ "@/views/merchant/deal.vue"),
      },
    ],
  },
  //资产管理
  {
    path: "/assets",
    redirect: "/assets/index",
    component: Layout,
    children: [
      {
        path: "index",
        component: () =>
          import(/* webpackChunkName: "views" */ "@/views/assets/index.vue"),
      },
    ],
  },
  //财富管理
  {
    path: "/finance",
    redirect: "/finance/investment",
    component: Layout,
    children: [
      {
        path: "investment",
        component: () =>
          import(
            /* webpackChunkName: "views" */ "@/views/finance/investment.vue"
          ),
      },
      {
        path: "detail",
        component: () =>
          import(/* webpackChunkName: "views" */ "@/views/finance/detail.vue"),
      },
      // {
      //   path: "detail2",
      //   component: () =>
      //     import(
      //       /* webpackChunkName: "views" */ "@/views/finance/detail2.vue"
      //     ),
      // },
    ],
  },
  //资产管理
  {
    path: "/reserves",
    redirect: "/nav/reserves",
    component: Layout,
    children: [
      {
        path: "/",
        component: () =>
          import(/* webpackChunkName: "views" */ "@/views/nav/reserves_lp.vue"),
      },
    ],
  },
  {
    path: "/denki",
    redirect: "/nav/denki",
    component: Layout,
    children: [
      {
        path: "/",
        component: () =>
          import(/* webpackChunkName: "views" */ "@/views/nav/denki.vue"),
      },
    ],
  },
  {
    path: "/lending",
    redirect: "/nav/lending",
    component: Layout,
    children: [
      {
        path: "/",
        component: () =>
          import(/* webpackChunkName: "views" */ "@/views/nav/lending.vue"),
      },
    ],
  },
  {
    path: "/gas",
    redirect: "/nav/gas",
    component: Layout,
    children: [
      {
        path: "/",
        component: () =>
          import(/* webpackChunkName: "views" */ "@/views/nav/gas.vue"),
      },
    ],
  },
  {
    path: "/survey",
    redirect: "/nav/survey",
    component: Layout,
    children: [
      {
        path: "/",
        component: () =>
          import(/* webpackChunkName: "views" */ "@/views/nav/survey.vue"),
      },
    ],
  },







  {
    path: "/info",
    redirect: "/info",
    component: Layout,
    children: [
      {
        path: "fee",
        component: () =>
          import(/* webpackChunkName: "views" */ "@/views/info/fee.vue"),
      },{
        path: "fee_nft",
        component: () =>
          import(/* webpackChunkName: "views" */ "@/views/info/feeNft.vue"),
      },
    ],
  },{
    path: "/about",
    redirect: "/about",
    component: Layout,
    children: [
      {
        path: "disputes_policy",
        component: () =>
          import(/* webpackChunkName: "views" */ "@/views/about/disputes_policy.vue"),
      }
    ],
  }
];

const router = new VueRouter({
  routes,
});

export default router;
