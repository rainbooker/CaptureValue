/*
  提取 京东Cookie 关键值
*/


// ExtractCookie.js

// 提取 Cookie
let cookie = $request.headers['Cookie'] || $request.headers['cookie'];

// 检查是否成功获取到 Cookie
if (cookie) {
  // 记录日志，换行后打印 Cookie 值
  console.log("获取到京东 Cookie 完整值\n\n" + cookie);
  // 发送通知（可选）
  //$notify("Quantumult X", "Cookie 提取成功", cookie);
}

// 结束响应处理并返回原始响应体



let originalContent = cookie;

let regex = /pt_key=([^;]+);?\s*pt_pin=([^;]+)?/;
const match = originalContent.match(regex);

if (match) {
  const ptKey = match[1];
  const ptPin = match[2] ? `${match[2]};` : '';
  const output = `pt_key=${ptKey};pt_pin=${ptPin}`;
  console.log("获取到京东 Cookie 关键值\n\n" + output);
  $notify("京东网页版", "获取到京东 Cookie 关键值", output);
} else {
  console.log('pt_key 和 pt_pin 未找到');
  $notify("京东网页版", "未找到京东 Cookie 关键值，刷新一下页面试试！");
}

$done();
