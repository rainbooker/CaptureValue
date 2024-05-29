/*
  提取响应体中的accessToken和refreshToken
*/

// 获取和解析响应体内容
let responseBody = $response.body;

// 尝试解析响应体为 JSON 对象
let responseJson;
try {
  responseJson = JSON.parse(responseBody);
} catch (e) {
  console.log("解析响应体失败:", e);
  $notify("提取失败", "解析响应体失败", "请检查响应体格式是否为正确的JSON");
  $done();
  return;
}

// 检查data部分是否存在
if (responseJson && responseJson.data) {
  let accessToken = responseJson.data.accessToken; // 提取accessToken
  let refreshToken = responseJson.data.refreshToken; // 提取refreshToken
  if (accessToken && refreshToken) {
      let message = `${accessToken}&${refreshToken}`;
    //let message = `{"AT":"${accessToken}","RT":"${refreshToken}"}`;
    console.log(`广汽传祺App 获取 Token\n` + message);
    $notify("广汽传祺App", "获取 Token 成功", message);
  } else {
    console.log("广汽传祺App\n未找到accessToken或refreshToken");
    $notify("广汽传祺App", "未找到accessToken或refreshToken", "请检查响应体的data部分是否包含accessToken和refreshToken");
  }
} else {
  console.log("广汽传祺App\n响应体中未找到data部分");
  $notify("广汽传祺App", "未找到data部分", "请检查响应体是否包含data");
}

$done();


