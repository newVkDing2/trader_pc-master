import {
  setToken,
  setRefreshToken,
  removeToken,
  removeRefreshToken,
} from "@/util/auth";
import { Message } from "element-ui";
import { setStore, getStore } from "@/util/store";
import md5 from "js-md5";
import { signIn, getUserInfo, updatePwd } from "@/api/user";
import { getFinger } from "@/util/fingerprint2";
import { initWebSocket } from "@/socket/index";

const user = {
  state: {
    isLogin: getStore({ name: "isLogin" }) || false,
    tenantId: getStore({ name: "tenantId" }) || "",
    userInfo: getStore({ name: "userInfo" }) || [],
    token: getStore({ name: "token" }) || "",
    refreshToken: getStore({ name: "refreshToken" }) || "",
  },
  actions: {
    //登录
    async login({ commit, dispatch }, data) {
      // let deviceId = getStore({ name: "deviceId" });
      // if (deviceId) {
      //   data.params.deviceId = getStore({ name: "deviceId" });
      // } else {
      //   data.params.deviceId = await getFinger();//浏览器指纹ID
      //   setStore({ name: "deviceId", content: data.params.deviceId });
      // }
      // data.params.password = md5(data.params.password)
      return new Promise((resolve, reject) => {
        signIn(data)
          .then(async (res) => {
            console.log("登录结果=======>", res);

            let data = res.data;

            commit("SET_USER_INFO", data);
            commit("SET_TOKEN", data.data.satoken);
            // commit('SET_REFRESH_TOKEN', data.refresh_token);

            let memberRes = await getUserInfo();

            console.log("用户信息=======>", memberRes);

            let memberInfo = memberRes.data.data;
            data = {
              ...data,
              ...memberInfo,
            };
            //初始化socket
            initWebSocket(memberInfo.user.userId);
            // dispatch('trade/getCoinList', { root: true });

            // commit('SET_USER_INFO', data);

            commit("SET_IS_LOGIN", true);

            resolve(data);

            resolve();
          })
          .catch((error) => {
            reject(error);
          });
      });
    },
    updatePassword({ commit }, params) {
      let data = JSON.parse(JSON.stringify(params));
      data.newPassword = md5(data.newPassword);
      data.newPassword1 = md5(data.newPassword1);
      data.oldPassword = md5(data.oldPassword);

      return new Promise((resolve, reject) => {
        updatePwd(data)
          .then((res) => {
            resolve(res);
          })
          .catch((error) => {
            reject(error);
          });
      });
    },
    refreshToken({ state, commit }) {
      window.console.log("handle refresh token");
      return new Promise((resolve, reject) => {
        // userLoginAndRegisterApi({}, {
        //   grant_type: 'refresh_token',
        //   refresh_token: state.refreshToken,
        //   type: '',
        // }, {
        //   clientId: "member",
        //   clientSecret: "member_secret",
        // }).then(res => {
        //   const data = res.data;
        //   commit('SET_TOKEN', data.access_token);
        //   commit('SET_REFRESH_TOKEN', data.refresh_token);
        //   commit('SET_USER_INFO', data);
        //   resolve();
        // }).catch(error => {
        //   reject(error)
        // })
      });
    },
    //获取用户信息
    getUserInfoData() {
      return new Promise((resolve) => {
        getUserInfo().then((res) => {
          const data = res.data.data;
          resolve(data);
        });
      });
    },
    getUserInfo({ commit }) {
      getUserInfo().then((res) => {
        if (res.data.code == 200) {
          const data = res.data.data;
          commit("SET_USER_INFO", data);
        }
      });
    },
    //清除登录信息
    FedLogOut({ commit }) {
      return new Promise((resolve) => {
        commit("SET_TOKEN", "");
        commit("SET_USER_INFO", {});
        commit("SET_IS_LOGIN", false);
        removeToken();
        removeRefreshToken();
        resolve();
      });
    },
  },
  mutations: {
    SET_IS_LOGIN: (state, isLogin) => {
      state.isLogin = isLogin;
      setStore({ name: "isLogin", content: state.isLogin });
    },
    SET_USER_INFO: (state, userInfo) => {
      if (!userInfo.avatar) {
        userInfo.avatar = "/img/user-img.png";
      }
      state.userInfo = userInfo;
      setStore({ name: "userInfo", content: state.userInfo });
    },
    SET_TENANT_ID: (state, tenantId) => {
      state.tenantId = tenantId;
      setStore({ name: "tenantId", content: state.tenantId });
    },
    SET_TOKEN: (state, token) => {
      setToken(token);
      state.token = token;
      setStore({ name: "token", content: state.token });
    },
    SET_REFRESH_TOKEN: (state, refreshToken) => {
      setRefreshToken(refreshToken);
      state.refreshToken = refreshToken;
      setStore({ name: "refreshToken", content: state.refreshToken });
    },
  },
};
export default user;
