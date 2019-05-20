roll.onclick = function () {
    const spots = ["Искандер", "Фо бо", "Мак", "Грузия", "Три правила", "Теремок", "Вкусвилл", "Обед буфет", "Meat&Fish", "Фрайдейс", "Додо", "Прайм", "Сандерс", "Переход"];
    const randomize = Math.floor(Math.random() * spots.length);
    const result = spots[randomize];
    place.innerText = result;
};
document.addEventListener('touchmove', function(event) {
    event = event.originalEvent || event;
    if(event.scale > 1) {
        event.preventDefault();
    }
}, false);