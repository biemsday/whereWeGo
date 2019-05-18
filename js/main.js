roll.onclick = function () {
    const spots = ["Искандер", "Фо бо", "Бургеры", "Грузия"];
    const randomize = Math.floor(Math.random() * spots.length);
    const result = spots[randomize];
    place.innerText = result;
};