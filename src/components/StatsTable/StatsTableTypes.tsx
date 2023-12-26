export type IStatsInfo = {
    profit?: number,
    reportEntryDtoList?: [
      {
        articleNumber?: number,
        commonProfit?: number,
        demo?: number,
        productName?: string,
        profit?: number,
        quantity?: number,
        sellerName?: string
      }
    ],
    sumRevenue?: number
  }
