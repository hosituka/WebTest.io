// キャンバス要素の取得
const canvas = document.getElementById('matrix-canvas');
//描画する関数のセットの取得　今回は2d
const ctx = canvas.getContext('2d');

// キャンバスのサイズを画面全体に設定
canvas.width = canvas.clientWidth;
canvas.height = canvas.clientHeight;

// 表示する文字 (0と1)
const characters = '01';
const fontSize = 16;
// 画面の横幅から、表示できる文字の列数を計算
const columns = Math.floor(canvas.width / fontSize);

// 各列のY座標（文字がどこまで落ちてきたか）を保持する配列
const drops = [];
for (let i = 0; i < columns; i++) {
    drops[i] = 1;
}

// 描画関数
function draw() {
    // 背景を半透明の黒で塗りつぶす（残像効果のため）
    ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // 文字の色を緑に設定
    ctx.fillStyle = '#0F0';
    ctx.font = fontSize + 'px monospace';

    // 各列に対して処理を行う
    for (let i = 0; i < drops.length; i++) {
        // ランダムな文字を1つ選ぶ
        const text = characters.charAt(Math.floor(Math.random() * characters.length));
        // 文字を描画
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);

        // 文字が画面の下端に達したら、ランダムな確率で先頭に戻す
        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
            drops[i] = 0;
        }

        // Y座標をインクリメントして文字を下に移動させる
        drops[i]++;
    }
}

// 33ミリ秒ごと（約30FPS）に描画関数を呼び出す
setInterval(draw, 33);

// ウィンドウサイズが変更されたときにキャンバスサイズを再設定
window.addEventListener('resize', () => {
    canvas.width = canvas.clientWidth;
    canvas.height = canvas.clientHeight;
    
    // drops配列もリセットしないと、リサイズ後に描画が乱れるため追加
    const newColumns = Math.floor(canvas.width / fontSize);
    drops.length = 0; // 配列を空にする
    for (let i = 0; i < newColumns; i++) {
        drops.push(1);
    }
});
