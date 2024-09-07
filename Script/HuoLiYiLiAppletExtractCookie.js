// 原始响应体字符串
let responseBody = $response.body;

// 解析为 JSON 对象
let jsonData = JSON.parse(responseBody);

// 提取关键内容并转换格式
let extractedData = [{
  "mobile": jsonData.data.userInfo.mobile,
  "openId": jsonData.data.userInfo.openId,
  "unionId": jsonData.data.userInfo.unionId,
  "nickName": jsonData.data.userInfo.nickName,
  "avatarUrl": jsonData.data.userInfo.avatarUrl,
  "yiliToken": jsonData.data.accessToken
}];

// 输出结果
//console.log(JSON.stringify(extractedData));

console.log(`活力伊利小程序\n获取 Cookie 成功\n` + JSON.stringify(extractedData));

$notify("活力伊利小程序", "获取 Cookie 成功", JSON.stringify(extractedData));



// 结束脚本
$done({});
