
function loadCoins() {
  let stored = localStorage.getItem("global_coins");
  if (stored === null) {
    return 100; // 初回のみ初期値
  }
  let coins = parseInt(stored, 10);
  return isNaN(coins) ? 100 : coins; // 数値でなければ初期化
}


// コインを加算
function addCoins(amount) {
  let coins = loadCoins();
  coins += amount;
  saveCoins(coins);
  return coins;
}

// コインを消費（成功ならtrue、足りなければfalse）
function spendCoins(amount) {
  let coins = loadCoins();
  if (coins >= amount) {
    coins -= amount;
    saveCoins(coins);
    return true;
  } else {
    return false;
  }
}