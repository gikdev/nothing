const tapSound = document.querySelector('#tap-sound')
let current = 0
const sentences = [
  "هیچی",
  "گفتم هیچی...",
  "عه! هیـــچـــی نیست دیگه!",
  "ای بابا، برو ولم کن 😤",
  "دست بردار نیستی‌ها؟!",
  "باشه خودت خواستی",
  "نگی نگفتم‌ها؟!",
  "هشدار آخر بودها؟!",
  "باشه دیگه هرچی شد با خودت! به من هیچ ربطی نداره...",
  "آماده‌ای؟؟؟",
  "۳",
  "۲",
  "۱",
  "و حالا...",
]
function next(title) {
  current++
  if (current === sentences.length) current = 0
  title.innerText = sentences[current]
  tapSound.play()
}