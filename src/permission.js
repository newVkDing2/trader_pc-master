import router from "@/router/index";
import NProgress from "nprogress"; // progress bar
import "nprogress/nprogress.css"; // progress bar style
NProgress.configure({ showSpinner: false });
router.beforeEach((to, from, next) => {
  // console.log("to======>",to)

  if (to.query.key !== from.query.key) {
    NProgress.start();
  }

  if (to.fullPath.includes("/i&")) {
    const inviteCode = to.fullPath.split("/i&")[1]; // 提取 invite_code 部分
    const redirectPath = `/user/register?invite_code=${inviteCode}`;
    next(redirectPath); // 执行特殊重定向
  } else if (to.matched.length > 0) {
    next(); // 路由匹配，直接放行
  } else {
    next("/home/index"); // 路由不匹配，重定向到 '/home/index'
  }

  // if (to.fullPath.includes('/i&')) {
  //   // 截取 invite_code 部分
  //   const inviteCode = to.fullPath.split('/i&')[1]; // 获取 `1T90BW` 部分

  //   // 构建重定向路径
  //   const redirectPath = `/user/register?invite_code=${inviteCode}`;

  //   // 执行重定向
  //   next(redirectPath);
  // } else {
  //   // 没有特殊处理需求，直接放行
  //   next();
  // }

  // if(to.matched.length>0){
  //   next()
  // }else{
  //   next('/home/index')
  // }
});

router.afterEach(() => {
  NProgress.done();
});
