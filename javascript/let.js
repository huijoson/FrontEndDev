function varMing () {
  var ming = '小明';
  if (true) {
    var ming = '杰哥';  
    // 這裡的 ming 依然是外層的小明，所以小明即將被取代
  }
  console.log(ming);  // '杰哥'
}

function letMing () {
  let ming = '小明';
  if (true) {
    let ming = '杰哥';  
    // 這裡的 ming 是不同的，只有在這個 if block 才有作用
  }
  console.log(ming);  // '小明'
}
varMing(); letMing();