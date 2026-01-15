const btn = document.getElementById('start-btn');
const music = document.getElementById('bg-music');
const message = document.getElementById('message');

btn.addEventListener('click', () => {
    // Включаем музыку
    music.play();

    // Устанавливаем комфортную громкость
    music.volume = 0.4;

    // Показываем текст
    message.classList.add('show');

    // Можно добавить эффект "взрыва" сердечек или просто сменить заголовок
    document.querySelector('.title').textContent = "Это песня для тебя...";
});