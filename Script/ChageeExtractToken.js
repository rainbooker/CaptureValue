// chageeExtractToken.js

// 提取 Cookie
let Token = $request.headers['Qm-User-Token'];

// 检查是否成功获取到 Cookie
if (Token) {
  // 记录日志，换行后打印 Cookie 值
  console.log("霸王茶姬小程序获取到的 Token:\n" + Token);
  // 发送通知（可选）
  $notify("霸王茶姬Applet", "Token 获取成功", Token);
} else {
  console.log('没有获取到Token，刷新一下页面试试！');
  $notify("霸王茶姬Applet", "没有获取到Token，刷新一下页面试试！");
}

// 结束响应处理并返回原始响应体
$done({});
