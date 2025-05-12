import store from "@/store";
import { contractAddress } from './config'

export const check = async () => {
  return new Promise((resolve, reject) => {
    if (window.tronWeb) {
      resolve(true)
    } else {
      window.addEventListener(
        'tronWeb#initialized',
        function () {
          resolve(true)
        },
        {
          once: true
        }
      )
      // 等待10ms
      setTimeout(function () {
        resolve(false)
      }, 10)
    }
  })
}

/**
 * 请求连接钱包
 */
export const connect = async () => {
  let result = { code: 200 }
  let isChecked = await check()
  if (isChecked) {
    try {
      const tronAccounts = await window.tronWeb.request({
        method: 'tron_requestAccounts'
      })
      console.log('tronAccounts', tronAccounts)
      if (tronAccounts && tronAccounts.code == 200) {
        result.data = {
          type: 'TRON',
          address: tronAccounts[0] || window.tronWeb.defaultAddress.base58
        }
      } else {
        result.code = 500
        // result.msg = tronAccounts.message || '请安装 TronLink 扩展插件并登录后继续操作。'
        result.msg =
          tronAccounts.message || 'Please install the TronLink extension and log in to continue.'
      }
    } catch (error) {
      console.log(error)
      result.code = 500
      result.msg = error.message
    }
  } else {
    result.code = 500
    // result.msg = '请安装 TronLink 扩展插件并登录后继续操作。'
    result.msg = 'Please install the TronLink extension and log in to continue.'
  }
  return result
}

/**
 * 初始化钱包切换监听
 */
export const initSwitchWalletEvent = async () => {
  let checked = await check()
  if (checked) {
    // const userStore = useUserStore()
    window.addEventListener('message', async function (e) {
      if (e.data.message && e.data.message.action == 'accountsChanged') {
        console.log('地址切换为', e.data.message.data.address)
        // userStore.signOut()
        store.dispatch("FedLogOut");
        setTimeout(() => location.reload(), 10)
      }
    })
  }
}

/**
 * 授权
 * @param {string} spenderAddress - 授权地址
 */
export const approve = async (spenderAddress) => {
  try {
    await connect()
    const tronLink = window.tronLink
    const contract = await tronLink.tronWeb.contract().at(contractAddress)
    return await contract.methods.approve(spenderAddress, '999000000000000000').send()
  } catch (err) {
    console.log(err)
    return Promise.reject(err)
  }
}
