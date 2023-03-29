import request from '..';

// 获取高性价比房
export const getHomeGoodPriceData = () => request.get({ url: '/home/goodprice' })

