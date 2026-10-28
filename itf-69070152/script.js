// -------------------- รายการเมนูอาหาร --------------------
// เก็บเป็น Array ของ Object เพื่ออ่านและแก้ไขได้ง่าย
const foods = [
  {
    name: "ข้าวมันไก่",
    desc: "ไก่นุ่ม ๆ กับข้าวมันหอมมัน ราดน้ำจิ้มรสเด็ด อิ่มท้องสบายใจ",
    price: "฿45",
    img: "food_list/khao-man-gai.jpg"
  },
  {
    name: "ข้าวกะเพรา",
    desc: "กะเพราหอม ๆ กับหมูสับและไข่ดาวกรอบ รสจัดจ้านถูกปาก",
    price: "฿45",
    img: "food_list/krapao.jpg"
  },
  {
    name: "ผัดไทย",
    desc: "เส้นจันท์ผัดสูตรดั้งเดิม กุ้งสด เต้าหู้ ถั่วงอก รสเปรี้ยวหวานกลมกล่อม",
    price: "฿50",
    img: "food_list/pad-thai.jpg"
  },
  {
    name: "ราเมง",
    desc: "ราเมงน้ำซุปเข้มข้น เส้นเหนียวนุ่ม เครื่องครบชามโต",
    price: "฿90",
    img: "food_list/ramen.jpg"
  },
  {
    name: "ข้าวแกงกะหรี่",
    desc: "แกงกะหรี่หอมเข้มกับหมูชิ้นโตและข้าวสวยร้อน ๆ",
    price: "฿75",
    img: "food_list/curry-rice.jpg"
  }
];

// เชื่อมโยงกับองค์ประกอบใน HTML
const imgEl = document.getElementById("food-img");
const nameEl = document.getElementById("food-name");
const descEl = document.getElementById("food-desc");
const priceEl = document.getElementById("price-badge");
const btn = document.getElementById("pick-btn");

// -------------------- ฟังก์ชันสุ่มเมนูอาหาร --------------------
function pickRandomFood() {
  const index = Math.floor(Math.random() * foods.length);
  const food = foods[index];

  imgEl.src = food.img;
  imgEl.alt = "รูปภาพ " + food.name;
  nameEl.textContent = food.name;
  descEl.textContent = food.desc;
  priceEl.textContent = food.price;
}

// สุ่มเมนูแรกทันทีเมื่อหน้าเว็บโหลดเสร็จ
window.addEventListener("DOMContentLoaded", () => {
  pickRandomFood();
});

// เหตุการณ์เมื่อกดปุ่ม "สุ่มเมนูอาหาร"
btn.addEventListener("click", pickRandomFood);
