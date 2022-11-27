import Router from "koa-router"
const router = new Router();

router.get("/v1/a/b", (ctx, next) => {
  const data = { "code": "200", "success": true, "message": "成功", "data": [{ "concludePercent": 98.3742, "acceptNum": 25775, "registerNum": 25587, "areaName": "仓山区", "concludeNum": 25171, "registerPercent": 99.2706 }, { "concludePercent": 97.3053, "acceptNum": 9282, "registerNum": 9166, "areaName": "台江区", "concludeNum": 8919, "registerPercent": 98.7503 }, { "concludePercent": 97.9552, "acceptNum": 17200, "registerNum": 16970, "areaName": "晋安区", "concludeNum": 16623, "registerPercent": 98.6628 }, { "concludePercent": 99.5788, "acceptNum": 1665, "registerNum": 1662, "areaName": "永泰县", "concludeNum": 1655, "registerPercent": 99.8198 }, { "concludePercent": 98.7166, "acceptNum": 8416, "registerNum": 8415, "areaName": "福清市", "concludeNum": 8307, "registerPercent": 99.9881 }, { "concludePercent": 97.5884, "acceptNum": 622, "registerNum": 622, "areaName": "罗源县", "concludeNum": 607, "registerPercent": 100.0000 }, { "concludePercent": 99.9360, "acceptNum": 1563, "registerNum": 1563, "areaName": "连江县", "concludeNum": 1562, "registerPercent": 100.0000 }, { "concludePercent": 92.0736, "acceptNum": 1413, "registerNum": 1413, "areaName": "长乐区", "concludeNum": 1301, "registerPercent": 100.0000 }, { "concludePercent": 99.9830, "acceptNum": 5899, "registerNum": 5893, "areaName": "闽侯县", "concludeNum": 5892, "registerPercent": 99.8983 }, { "concludePercent": 95.4173, "acceptNum": 2684, "registerNum": 2684, "areaName": "闽清县", "concludeNum": 2561, "registerPercent": 100.0000 }, { "concludePercent": 97.8541, "acceptNum": 9282, "registerNum": 9087, "areaName": "马尾区", "concludeNum": 8892, "registerPercent": 97.8992 }, { "concludePercent": 100.0000, "acceptNum": 1140, "registerNum": 1140, "areaName": "高新区", "concludeNum": 1140, "registerPercent": 100.0000 }, { "concludePercent": 98.6932, "acceptNum": 14494, "registerNum": 14310, "areaName": "鼓楼区", "concludeNum": 14123, "registerPercent": 98.7305 }], "totals": null }
  ctx.body = data
})
module.exports = router