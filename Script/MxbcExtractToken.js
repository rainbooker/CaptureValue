// chageeExtractToken.js

// 提取 Cookie
let Token = $request.headers['Access-Token'];

// 检查是否成功获取到 Cookie
if (Token) {
  // 记录日志，换行后打印 Cookie 值
  console.log("蜜雪冰城 小程序\n获取到的 Access-Token:\n" + Token);
  // 发送通知（可选）
  $notify("蜜雪冰城Applet", "Access-Token 获取成功", Token);
} else {
  console.log('蜜雪冰城 小程序\n没有获取到Access-Token，刷新一下页面试试！');
  $notify("蜜雪冰城Applet", "没有获取到Access-Token，刷新一下页面试试！");
}

// 结束响应处理并返回原始响应体
$done({});
