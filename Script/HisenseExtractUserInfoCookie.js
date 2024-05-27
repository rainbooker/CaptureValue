// ExtractCookie.js

// 提取 Cookie
let cookie = $request.headers['Cookie'] || $request.headers['cookie'];

// 检查是否成功获取到 Cookie
if (cookie) {
  // 记录日志，换行后打印 Cookie 值
  console.log("海信爱家 公众号\n获取到用户积分信息的 Cookie:\n" + cookie);
  // 发送通知（可选）
  $notify("海信爱家 公众号", "用户积分信息Cookie 获取成功", cookie);
} else {
  console.log('海信爱家 公众号\n没有获取到用户积分信息Cookie，刷新一下页面试试！');
  $notify("海信爱家 公众号", "没有获取到用户积分信息Cookie，刷新一下页面试试！");
}

// 结束响应处理并返回原始响应体
$done({});
