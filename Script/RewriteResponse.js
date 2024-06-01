/*
2024-06-01
测试了修改统一茄皇活动的兑换页面，能够成功修改兑换页面

let usableStockCount = 0;
let nameCount = 0;

let body = $response.body;

// 替换第3个 "usableStock" 的值为 500
body = body.replace(/"usableStock"\s*:\s*\d+/g, (match) => {
  usableStockCount++;
  if (usableStockCount === 3) {
    return '"usableStock": 500';
  }
  return match;
});

// 替换第5个 "name" 的值为 "已经抢完了！"
body = body.replace(/"name"\s*:\s*".*?"/g, (match) => {
  nameCount++;
  if (nameCount === 5) {
    return '"name": "已经抢完了！"';
  }
  return match;
});

$done({ body });

*/








/**
 * 美团外卖抢券修改时间以及显示可抢按钮
 *
status" : 0 立即抢券
status" : 2 今日已抢完
status" : 6 即将开抢
在仅改时间后status" : 6  不可领取
progressPercent":0 表示券已经抢了百分之0
使用说明：
比如当天11点场，先去获取当天11:01:00的时间戳，毫秒下的时间戳，替换掉下面data":1691809260000，里面的这一窜数字，点击右上角 √ ，保存这个脚本。然后去重写里面，把美团改时间的重写 √ ，开启重写，打开抓包功能，刷新美团优惠券的页面后，会出现 立即抢券 的按钮，点击按钮，会提示 网络故障 ，不用管这个网络故障，然后关闭抓包，URL中搜：

https://promotion.waimai.meituan.com/lottery/limitcouponcomponent/info?couponReferIds

https://promotion.waimai.meituan.com/lottery/limitcouponcomponent/fetchcoupon?couponReferId

搜这两个链接，看看响应体，然后生成脚本发给我，总共是2个链接生成的2个脚本。

抓包完之后，再把美团改时间的重写去掉☑️，关闭美团改时间的重写。
 */

/*
//广汽传祺 答题抽奖得G豆
body = $response.body.replace(/prizeName":"(\d+)G豆/g, 'prizeName":"1000G豆').replace(/prizePrompt":"恭喜您获得(\d+)G豆/g, 'prizePrompt":"恭喜您获得1000G豆');
$done({body});

*/


/*
//统一茄皇修改库存
body = $response.body.replace(/data":\d+/g, 'data":1703037660000').replace(/usableStock":\d+/g, 'usableStock":10');
$done({body});
*/


let usableStockCount = 0;
let nameCount = 0;
let imgUrlCount = 0;

let body = $response.body;

// 替换第3个 "usableStock" 的值为 5
body = body.replace(/"usableStock"\s*:\s*\d+/g, (match) => {
  usableStockCount++;
  if (usableStockCount === 3) {
    return '"usableStock": 5';
  }
  return match;
});

// 替换第5个 "name" 的值为 "已经抢完了！"
body = body.replace(/"name"\s*:\s*".*?"/g, (match) => {
  nameCount++;
  if (nameCount === 5) {
    return '"name": "好看吗 ！"';
  }
  return match;
});

// 替换第3个 "imgUrl" 的值为 "https://raw.githubusercontent.com/LovedGM/Quantumult-X-TuBiao/main/zishi-cs/zs6.png"
body = body.replace(/"imgUrl"\s*:\s*".*?"/g, (match) => {
  imgUrlCount++;
  if (imgUrlCount === 3) {
    return '"imgUrl": "https://cdni.pornpics.com/1280/1/126/64738031/64738031_014_8b07.jpg"';
  }
  return match;
});

$done({ body });
