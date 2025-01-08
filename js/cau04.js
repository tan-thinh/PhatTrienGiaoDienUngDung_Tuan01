var order = 275.40;
var tip = (order >= 50 && order <= 300) ? (0.15 * order) : (0.2 * order)
console.log(`tổng tiền tip(test1): ${tip+order}`);
var order = 430;
var tip = (order >= 50 && order <= 300) ? (0.15 * order) : (0.2 * order)
console.log(`tổng tiền tip(test2): ${tip+order}`);