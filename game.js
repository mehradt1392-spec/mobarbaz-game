const storyButton = document.getElementById("story-btn");
const fightButton = document.getElementById("fight-btn");
const settingsButton = document.getElementById("settings-btn");

storyButton.addEventListener("click", () => {
showMessage("حالت داستانی", "ماجرای مبارزباز به‌زودی آغاز می‌شود!");
});

fightButton.addEventListener("click", () => {
showMessage("مبارزه آزاد", "آماده انتخاب مبارز خودت باش!");
});

settingsButton.addEventListener("click", () => {
showMessage("تنظیمات", "تنظیمات بازی به‌زودی اضافه می‌شود.");
});

function showMessage(title, message) {
const oldMessage = document.getElementById("game-message");

if (oldMessage) {
    oldMessage.remove();
}

const box = document.createElement("div");
box.id = "game-message";

box.innerHTML = `
    <h2>${title}</h2>
    <p>${message}</p>
    <button id="close-message">بازگشت</button>
`;

document.getElementById("game").appendChild(box);

document.getElementById("close-message").addEventListener("click", () => {
    box.remove();
});

}
