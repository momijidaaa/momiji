// coins.js

// コインを読み込み（なければ初期値100）
function loadCoins() {
  return parseInt(localStorage.getItem("global_coins")) || 100;
}

// コインを保存
function saveCoins(coins) {
  localStorage.setItem("global_coins", coins);
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