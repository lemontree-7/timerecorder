// 为计数按钮绑定点击事件，每次点击后显示的计数数字增加。
// 为背景变换按钮添加点击事件，每次点击改变页面背景颜色
// ，可以用 linear-gradient​ 设置随机的渐变色。
//实现按钮加一功能
let numberDisplay = document.getElementById('numberDisplay');
let incrementButton = document.getElementById('add-button');
let currentNumber = 0;
function updateNumber() {
  currentNumber++; 
  numberDisplay.textContent = currentNumber; 
}
incrementButton.addEventListener('click', updateNumber);
//实现背景色功能
const changeColorButton = document.getElementById('change-button');
changeColorButton.addEventListener('click', function() {
    const color1 = `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`;
    const color2 = `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`;
    document.body.style.backgroundImage = `linear-gradient(to right, ${color1}, ${color2})`;
  });

