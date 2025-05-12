import { type } from "jquery";

export const headerList = [
  {
    name: "navbar.home",
    linkUrl: "/home/index",
    isOpen: true,
  },
  {
    name: "navbar.market",
    linkUrl: "/quotes/index",
    isOpen: true,
  },
  {
    name: "navbar.trade",
    linkUrl: "/trade/index",
    isOpen: true,
    children: [
      {
        name: "navbar.flash",
        linkUrl: "/trade/index",
        query: "sec",
        isOpen: true,
      },
      {
        name: "navbar.spot",
        linkUrl: "/trade/index",
        query: "spot",
        isOpen: true,
      },
      {
        name: "navbar.uContracts",
        linkUrl: "/trade/index",
        query: "usta",
        isOpen: true,
      },
    ],
  },
  {
    name: "navbar.deFiMining",
    linkUrl: "/defis/index",
    isOpen: true,
  },
  {
    name: "navbar.staking",
    linkUrl: "/pledge/index",
    isOpen: true,
  },
  {
    name: "navbar.power",
    linkUrl: "/loan/index",
    isOpen: true,
  },
  {
    name: "navbar.rules",
    linkUrl: "/rule/index",
    isOpen: true,
  },
  {
    name: "navbar.finance",
    linkUrl: "/finance/investment",
    isOpen: true,
  },
];

export const footerList = [
  {
    title_code: "bottomNavAdd.title3",
    title_text: "bottomNav.nav1",
    child_list: [
      {
        title_code: "bottomNav.nav12",
        openUrl: "https://www.coincheckusa.com/app",
      },{
        title_code: "bottomNavAdd.nav2",
        linkUrl: "/reserves",
      },{
        title_code: "bottomNavAdd.nav1",
        linkUrl: "/denki",
      },{
        title_code: "bottomNavAdd.nav3",
        linkUrl: "/gas",
      },{
        title_code: "bottomNavAdd.nav4",
        linkUrl: "/survey",
      },{
        title_code: "bottomNavAdd.nav5",
        linkUrl: "/lending",
      }

    ],
  },
  {
    title_code: "bottomNavAdd.title4",
    title_text: "bottomNav.nav1",
    child_list: [
      {
        title_code: "bottomNav.nav12",
        openUrl: "https://www.coincheckusa.com/app",
      },
      {
        title_code: "bottomNav.nav1",
        linkUrl: "/quotes/index",
      },
      {
        title_code: "bottomNav.nav2",
        linkUrl: "/trade/index",
        query: {
          type: "sec",
        },
      },
      {
        title_code: "bottomNav.nav3",
        linkUrl: "/trade/index",
        query: {
          type: "usta",
        },
      },
      {
        title_code: "bottomNav.nav4",
        linkUrl: "/pledge/index",
      },
      {
        title_code: "bottomNav.nav5",
        linkUrl: "/trade/index",
        query: {
          type: "sec",
        },
      },
      {
        title_code: "bottomNav.nav13",
        linkUrl: "/user/index",
        query: {
          key: "termsService",
        },
      },
      {
        title_code: "bottomNav.nav14",
        linkUrl: "customerService",
      },
      {
        title_code: "",
      },
      {
        title_code: "bottomNav.nav6",
        linkUrl: "/assets/index",
        query: {
          key: "recharge",
        },
      },
      {
        title_code: "bottomNav.nav7",
        linkUrl: "/trade/index",
        query: {
          type: "sec",
          symbol: "btc",
        },
      },
      {
        title_code: "bottomNav.nav8",
        linkUrl: "/trade/index",
        query: {
          type: "sec",
          symbol: "eth",
        },
      },
      {
        title_code: "bottomNav.nav9",
        linkUrl: "/trade/index",
        query: {
          type: "sec",
          symbol: "bnb",
        },
      },
      {
        title_code: "bottomNav.nav10",
        linkUrl: "/trade/index",
        query: {
          type: "sec",
        },
      }
    ],
  },
  {
    title_code: "bottomNavAdd.title5",
    title_text: "bottomNav.nav1",
    child_list: [
      {
        title_code: "bottomNavAdd.nav6",
        linkUrl: "/info/fee",
      },{
        title_code: "bottomNavAdd.nav7",
        linkUrl: "/info/fee_nft",
      },{
        title_code: "bottomNavAdd.nav8",
        linkUrl: "/about/disputes_policy",
      }

    ],
  }, {
    title_code: "bottomNavAdd.title6",
    title_text: "bottomNav.nav1",
    child_list: [
      // {
      //   title_code: "bottomNavAdd.nav9",
      //   linkUrl: "/about/disputes_policy",
      // },{
      //   title_code: "bottomNavAdd.nav10",
      //   linkUrl: "/about/disputes_policy",
      // },
      {
        title_code: "bottomNavAdd.nav11",
        openUrl: "https://assets-coincheck.s3.ap-northeast-1.amazonaws.com/uploads/agreement/document/english_file/coincheck_transaction_manual_20250225_jp.pdf",
      },{
        title_code: "bottomNavAdd.nav12",
        openUrl: "https://assets-coincheck.s3.ap-northeast-1.amazonaws.com/uploads/agreement/document/english_file/coincheck_tsumitate_transaction_manual_20231031.pdf",
      },{
        title_code: "bottomNavAdd.nav13",
        openUrl: "https://assets-coincheck.s3.ap-northeast-1.amazonaws.com/uploads/agreement/document/english_file/coincheck_tsumitate_transaction_manual_20231031.pdf",
      },{
        title_code: "bottomNavAdd.nav14",
        openUrl: "https://assets-coincheck.s3.ap-northeast-1.amazonaws.com/uploads/agreement/document/english_file/coincheck_tsumitate_transaction_manual_20231031.pdf",
      },{
        title_code: "bottomNavAdd.nav15",
        openUrl: "https://assets-coincheck.s3.ap-northeast-1.amazonaws.com/uploads/agreement/document/english_file/coincheck_tsumitate_transaction_manual_20231031.pdf",
      },{
        title_code: "bottomNavAdd.nav16",
        openUrl: "https://assets-coincheck.s3.ap-northeast-1.amazonaws.com/uploads/agreement/document/english_file/coincheck_tsumitate_transaction_manual_20231031.pdf",
      },{
        title_code: "bottomNavAdd.nav17",
        openUrl: "https://x.com/",
      },{
        title_code: "bottomNavAdd.nav18",
        openUrl: "https://www.facebook.com/",
      }

    ],
  }, {
    title_code: "bottomNavAdd.title7",
    title_text: "bottomNavAdd.title2",
    child_list: [

      {
        title_code: "bottomNavAdd.about30",
        openUrl: "https://corporate.coincheck.com/",
      },
      // {
      //   title_code: "bottomNavAdd.about31",
      //   linkUrl: "https://assets-coincheck.s3.ap-northeast-1.amazonaws.com/uploads/agreement/document/english_file/coincheck_transaction_manual_20250225_jp.pdf",
      // },
      {
        title_code: "bottomNavAdd.about32",
        openUrl: "https://corporate.coincheck.com/recruit",
      },


      {
        title_code: "bottomNavAdd.about1",
        openUrl: "https://webapi.coincheckusa.top/profile/upload/about1en-US.pdf",
      },{
        title_code: "bottomNavAdd.about2",
        openUrl: "https://webapi.coincheckusa.top/profile/upload/about2en-US.pdf",
      },{
        title_code: "bottomNavAdd.about3",
        openUrl: "https://webapi.coincheckusa.top/profile/upload/about3en-US.pdf",
      },{
        title_code: "bottomNavAdd.about4",
        openUrl: "https://webapi.coincheckusa.top/profile/upload/about4en-US.pdf",
      },{
        title_code: "bottomNavAdd.about5",
        openUrl: "https://webapi.coincheckusa.top/profile/upload/about5en-US.pdf",
      },{
        title_code: "bottomNavAdd.about6",
        openUrl: "https://webapi.coincheckusa.top/profile/upload/about6en-US.pdf",
      },{
        title_code: "bottomNavAdd.about7",
        openUrl: "https://webapi.coincheckusa.top/profile/upload/about7en-US.pdf",
      },{
        title_code: "bottomNavAdd.about8",
        openUrl: "https://webapi.coincheckusa.top/profile/upload/about8en-US.pdf",
      },{
        title_code: "bottomNavAdd.about9",
        openUrl: "https://webapi.coincheckusa.top/profile/upload/about9en-US.pdf",
      },{
        title_code: "bottomNavAdd.about10",
        openUrl: "https://webapi.coincheckusa.top/profile/upload/about10en-US.pdf",
      },{
        title_code: "bottomNavAdd.about11",
        openUrl: "https://webapi.coincheckusa.top/profile/upload/about11en-US.pdf",
      },{
        title_code: "bottomNavAdd.about12",
        openUrl: "https://webapi.coincheckusa.top/profile/upload/about12en-US.pdf",
      },{
        title_code: "bottomNavAdd.about13",
        openUrl: "https://webapi.coincheckusa.top/profile/upload/about13en-US.pdf",
      },{
        title_code: "bottomNavAdd.about14",
        openUrl: "https://webapi.coincheckusa.top/profile/upload/about14en-US.pdf",
      },{
        title_code: "bottomNavAdd.about15",
        openUrl: "https://webapi.coincheckusa.top/profile/upload/about15en-US.pdf",
      },{
        title_code: "bottomNavAdd.about16",
        openUrl: "https://webapi.coincheckusa.top/profile/upload/about16en-US.pdf",
      },{
        title_code: "bottomNavAdd.about17",
        openUrl: "https://webapi.coincheckusa.top/profile/upload/about17en-US.pdf",
      }
    ],
  }
];
