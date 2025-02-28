function changeBgColor() {
    let profileCard = document.querySelector(".profile");

    // 產生隨機但較柔和的顏色 (避免太亮或太暗)
    let hue = Math.floor(Math.random() * 360); // 0~360 色相
    let pastelColor = `hsl(${hue}, 70%, 80%)`; // HSL 色彩 (70% 飽和度, 80% 亮度)

    // 設定新的背景顏色
    profileCard.style.backgroundColor = pastelColor;
}
