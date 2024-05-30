// MoonBoxExtractRequestBody.js

// 提取 请求体
let requestBody = $request.body;

// 检查是否成功获取到 请求体
if (requestBody) {
  // 记录日志，换行后打印 请求体
  console.log("联通App 阅光宝盒\n获取到请求体:\n" + requestBody);
  // 发送通知（可选）
  $notify("联通App 阅光宝盒", "请求体 获取成功", requestBody);
} else {
  console.log('联通App 阅光宝盒\n没有获取请求体，刷新一下页面试试！');
  $notify("联通App 阅光宝盒", "没有获取请求体，刷新一下页面试试！");
}

// 结束响应处理并返回原始响应体
$done({});
