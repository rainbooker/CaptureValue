// ExtractCookie.js

// 提取 Cookie
let cookie = $request.headers['Cookie'] || $request.headers['cookie'];

// 检查是否成功获取到 Cookie
if (cookie) {
  // 记录日志，换行后打印 Cookie 值
  console.log("获取到的 Cookie:\n" + cookie);
  // 发送通知（可选）
  $notify("Quantumult X", "Cookie 获取成功", cookie);
} else {
  console.log('没有获取到Cookie，刷新一下页面试试！');
  $notify("Quantumult X", "没有获取到Cookie，刷新一下页面试试！");
}

// 结束响应处理并返回原始响应体
$done({});
