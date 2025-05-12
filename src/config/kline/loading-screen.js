export const getLoadingScreen = (theme) => {
  let themes = {
    light: {
      // 背景色
      backgroundColor: '#ffffff',
      foregroundColor: '#4BBD83'
    },
    dark: {
      // 背景色
      backgroundColor: '#252834',
      foregroundColor: '#4BBD83'
    }
  }
  return themes[theme]
}
