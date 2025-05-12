export const getOverrides = (theme) => {
  var themes = {
    light: {
      up: '#4BBD83',
      down: '#D62548',
      bg: '#ffffff',
      grid: '#F2F4F7',
      cross: '#333',
      border: '#f7f8fa',
      text: '#7D8AA3',
      line: '#ECECEC'
    },
    dark: {
      up: '#4BBD83',
      down: '#D62548',
      bg: '#202329',
      grid: '#35393E',
      cross: '#999',
      border: '#35393E',
      text: '#999',
      line: '#35393E'
    }
  }
  var t = themes[theme]
  return {
    volumePaneSize: 'medium', // 设置成交量面板的大小

    // 指标参数
    // 'paneProperties.legendProperties.showStudyArguments': false,
    // 'paneProperties.legendProperties.showStudyTitles': false,
    // 'paneProperties.legendProperties.showStudyValues': false,

    'paneProperties.legendProperties.showSeriesTitle': true, // 是否显示币种标题

    // 标题旁详情
    'paneProperties.legendProperties.showSeriesOHLC': false,
    // 展开按钮
    'paneProperties.legendProperties.showLegend': true, // 是否显示展开按钮
    // 标题旁百分比
    'paneProperties.legendProperties.showBarChange': false, // 是否显示标题旁的百分比变化
    'paneProperties.legendProperties.showOnlyPriceSource': false,

    'mainSeriesProperties.priceAxisProperties.autoScale': true, // 是否自动调整价格轴的刻度
    // 0：美国线
    // 1：蜡烛线
    // 3：面积图
    'mainSeriesProperties.style': 1,
    'mainSeriesProperties.priceLineWidth': 2,

    // 面积图样式配置
    'mainSeriesProperties.areaStyle.color1': 'rgba(75, 189, 131, 1)', // 完全不透明的黑色
    'mainSeriesProperties.areaStyle.color2': 'rgba(255, 255, 255, 1)', // 完全不透明的黑色

    'mainSeriesProperties.areaStyle.linecolor': '#4BBD83', // 边线颜色
    'mainSeriesProperties.areaStyle.linewidth': 4, // 边线宽度

    'paneProperties.topMargin': 30, // 设置图表面板的顶部边距
    'paneProperties.bottomMargin': 5, // 设置图表面板的底部边距
    'mainSeriesProperties.statusViewStyle.symbolTextSource': 'name',

    // 设置当前价格刻度线显示
    'scalesProperties.lineColor': t.line,
    'scalesProperties.textColor': t.text,
    'scalesProperties.fontSize': 12, // 设置刻度线和文本的颜色和大小

    'paneProperties.background': t.bg, // 设置图表面板的背景颜色
    'paneProperties.vertGridProperties.color': t.grid, // 设置垂直网格线的颜色
    'paneProperties.horzGridProperties.color': t.grid, // 设置水平网格线的颜色
    'paneProperties.crossHairProperties.color': t.cross, // 设置十字光标的颜色
    'paneProperties.crossHairProperties.style': 2, // 设置十字虚线样式
    // 设置上涨蜡烛的颜色
    'mainSeriesProperties.candleStyle.upColor': t.up,
    // 设置下跌蜡烛的颜色
    'mainSeriesProperties.candleStyle.downColor': t.down,
    // 是否绘制蜡烛的上影线和下影线
    'mainSeriesProperties.candleStyle.drawWick': true,
    // 是否绘制蜡烛的边框
    'mainSeriesProperties.candleStyle.drawBorder': true,
    // 设置蜡烛的边框颜色
    'mainSeriesProperties.candleStyle.borderColor': t.border,
    // 设置上涨蜡烛的边框颜色
    'mainSeriesProperties.candleStyle.borderUpColor': t.up,
    // 设置下跌蜡烛的边框颜色
    'mainSeriesProperties.candleStyle.borderDownColor': t.down,
    // 设置上涨蜡烛的上影线颜色
    'mainSeriesProperties.candleStyle.wickUpColor': t.up,
    // 设置下跌蜡烛的下影线颜色
    'mainSeriesProperties.candleStyle.wickDownColor': t.down,
    // 是否在前一根蜡烛收盘价相同的情况下绘制蜡烛
    'mainSeriesProperties.candleStyle.barColorsOnPrevClose': false,
    // 设置空心蜡烛图的上涨颜色
    'mainSeriesProperties.hollowCandleStyle.upColor': t.up,
    // 设置空心蜡烛图的下跌颜色
    'mainSeriesProperties.hollowCandleStyle.downColor': t.down,
    // 是否绘制空心蜡烛图的上影线和下影线
    'mainSeriesProperties.hollowCandleStyle.drawWick': true,
    // 是否绘制空心蜡烛图的边框
    'mainSeriesProperties.hollowCandleStyle.drawBorder': true,
    // 设置空心蜡烛图的边框颜色
    'mainSeriesProperties.hollowCandleStyle.borderColor': t.border,
    // 设置空心蜡烛图的上涨边框颜色
    'mainSeriesProperties.hollowCandleStyle.borderUpColor': t.up,
    // 设置空心蜡烛图的下跌边框颜色
    'mainSeriesProperties.hollowCandleStyle.borderDownColor': t.down,
    // 设置空心蜡烛图的上涨影线颜色
    'mainSeriesProperties.hollowCandleStyle.wickColor': t.line,
    // 设置 Heikin-Ashi 蜡烛图的上涨颜色
    'mainSeriesProperties.haStyle.upColor': t.up,
    // 设置 Heikin-Ashi 蜡烛图的下跌颜色
    'mainSeriesProperties.haStyle.downColor': t.down,
    // 是否绘制 Heikin-Ashi 蜡烛图的上影线和下影线
    'mainSeriesProperties.haStyle.drawWick': true,
    // 是否绘制 Heikin-Ashi 蜡烛图的边框
    'mainSeriesProperties.haStyle.drawBorder': true,
    // 设置 Heikin-Ashi 蜡烛图的边框颜色
    'mainSeriesProperties.haStyle.borderColor': t.border,
    // 设置 Heikin-Ashi 蜡烛图的上涨边框颜色
    'mainSeriesProperties.haStyle.borderUpColor': t.up,
    // 设置 Heikin-Ashi 蜡烛图的下跌边框颜色
    'mainSeriesProperties.haStyle.borderDownColor': t.down,
    // 设置 Heikin-Ashi 蜡烛图的影线颜色
    'mainSeriesProperties.haStyle.wickColor': t.border,
    // 是否在前一根蜡烛收盘价相同的情况下绘制 Heikin-Ashi 蜡烛图
    'mainSeriesProperties.haStyle.barColorsOnPrevClose': false,
    // 设置柱状图的上涨颜色
    'mainSeriesProperties.barStyle.upColor': t.up,
    // 设置柱状图的下跌颜色
    'mainSeriesProperties.barStyle.downColor': t.down,
    // 是否在前一根蜡烛收盘价相同的情况下绘制柱状图
    'mainSeriesProperties.barStyle.barColorsOnPrevClose': false,
    // 是否绘制柱状图的开盘价
    'mainSeriesProperties.barStyle.dontDrawOpen': false,
    // 设置主图线条的颜色
    'mainSeriesProperties.lineStyle.color': t.border,
    // 设置主图线条的宽度
    'mainSeriesProperties.lineStyle.linewidth': 2,
    // 设置主图线条的颜色、宽度和价格来源
    'mainSeriesProperties.lineStyle.priceSource': 'close'
  }
}
