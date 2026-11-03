
const express = require("express");

const app = express();
app.use(express.json());

const PORT = process.env.PORT || 3000;

function booAL(message) {
  const text = message.toLowerCase().trim();

  if (/xin chào|hello|chào/.test(text))
    return "Xin chào! Mình là BOO AL 🤖 Rất vui được gặp bạn!";

  if (/bạn là ai|tên gì/.test(text))
    return "Mình là BOO AL, trợ lý vui vẻ của bạn! 😎";

  if (/roblox/.test(text))
    return "Roblox! 🎮 Bạn đang chơi trò chơi nào vậy?";

  if (/discord/.test(text))
    return "Discord là nơi tuyệt vời để xây dựng cộng đồng! 💬";

  if (/kể chuyện/.test(text))
    return "Một chú robot đi học muộn vì... đang cập nhật phiên bản mới! 😂";

  if (/cảm ơn/.test(text))
    return "Không có gì! BOO AL luôn sẵn sàng hỗ trợ 😁";

  return "BOO AL đang nghe đây! Bạn kể thêm cho mình nhé 💙";
}

app.get("/", (req, res) => {
  res.send("🤖 BOO AL đang hoạt động!");
});

app.post("/chat", (req, res) => {
  const message = req.body.message;

  if (typeof message !== "string" || !message.trim()) {
    return res.status(400).json({
      error: "Vui lòng nhập tin nhắn."
    });
  }

  res.json({
    bot: "BOO AL",
    reply: booAL(message)
  });
});

app.listen(PORT, "0.0.0.0", () => {
  console.log("BOO AL is running on port " + PORT);
});
  
