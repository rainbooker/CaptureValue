// ChinaMobileExtractAuthorization.js

// 提取 Cookie
let Authorization = $request.headers['Authorization'];

// 检查是否成功获取到 Cookie
if (Authorization) {
  // 记录日志，换行后打印 Cookie 值
  console.log("移动云盘App\n获取到的 Authorization:\n" + Authorization);
  // 发送通知（可选）
  $notify("移动云盘App", "Authorization 获取成功", Authorization);
} else {
  console.log('移动云盘App\n没有获取到Authorization，刷新一下页面试试！');
  $notify("移动云盘App", "没有获取到Authorization，刷新一下页面试试！");
}

// 结束响应处理并返回原始响应体
$done({});
