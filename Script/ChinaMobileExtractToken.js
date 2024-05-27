// ChinaMobileExtractToken.js

// 提取 Cookie
let responseBody = $response.body;

// 检查是否成功获取到 Cookie
if (responseBody) {
  // 记录日志，换行后打印 Cookie 值
  console.log("移动云盘App\n获取包含Token响应体:\n" + responseBody);
  // 发送通知（可选）
  //$notify("移动云盘App", "包含Token的响应体获取成功", responseBody);
} else {
  console.log('移动云盘App\n没有获取到包含Token的响应体，刷新一下页面试试！');
  $notify("移动云盘App", "没有获取到包含Token的响应体，刷新一下页面试试！");
}

/*
  提取 token 关键值并发送通知
*/

const originalContent = responseBody;

const regex = /<token>([^<]+)<\/token>/;
const match = originalContent.match(regex);

if (match) {
  const token = match[1];
  console.log("移动云盘App\nToken 获取成功\n" + token);
  // 发送通知
  $notify("移动云盘App", "Token 获取成功:", token);
} else {
  console.log("移动云盘App\Token 获取失败，刷新一下页面试试！");
  // 发送通知
  $notify("移动云盘App", "Token 获取失败，刷新一下页面试试！");
}

$done();
