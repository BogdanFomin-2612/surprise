document.addEventListener('DOMContentLoaded', () => {
    const btn = document.getElementById('start-btn');
    const music = document.getElementById('bg-music');
    const message = document.getElementById('message');
    const title = document.getElementById('main-title');
    const heartWrapper = document.querySelector('.heart-button-wrapper');

    // Функция создания одного падающего сердца
    function createHeart() {
        const heart = document.createElement('div');
        heart.classList.add('falling-heart');

        // Рандомизация параметров для естественности

        // Позиция по горизонтали (от 0% до 100% ширины экрана)
        heart.style.left = Math.random() * 100 + 'vw';

        // Скорость падения (от 3 до 8 секунд)
        const duration = Math.random() * 5 + 3;
        heart.style.animation = `fall ${duration}s linear infinite`;

        // Задержка перед началом падения (чтобы не все сразу посыпались)
        heart.style.animationDelay = Math.random() * 5 + 's';

        // Случайный размер (от 0.5 до 1.2 от базового)
        const scale = Math.random() * 0.7 + 0.5;
        heart.style.transform = `scale(${scale}) rotate(-45deg)`;

        // Случайная прозрачность
        heart.style.opacity = Math.random() * 0.5 + 0.3;

        document.body.appendChild(heart);

        // Удаляем сердце после того, как оно упало, чтобы не перегружать браузер
        // (хотя с infinite анимацией это не обязательно, но хорошая практика)
        /* setTimeout(() => {
            heart.remove();
        }, (duration + 5) * 1000); 
        */
    }

    // Функция запуска снегопада
    function startHeartRain() {
        // Создаем 50 сердечек
        for (let i = 0; i < 50; i++) {
            createHeart();
        }
    }


    // --- ГЛАВНОЕ СОБЫТИЕ КЛИКА ---
    btn.addEventListener('click', () => {
        // 1. Включаем музыку
        music.play().then(() => {
            music.volume = 0.4; // Громкость 40%
        }).catch(e => console.log("Ошибка воспроизведения:", e));

        // 2. Меняем заголовок
        title.textContent = "Эта песня для тебя...";
        title.style.color = "#ff4d4d";

        // 3. Показываем скрытое сообщение
        message.classList.add('show-message');

        // 4. Останавливаем пульсацию главной кнопки, чтобы не отвлекала
        heartWrapper.style.animation = 'none';

        // 5. ЗАПУСКАЕМ СНЕГОПАД ИЗ СЕРДЕЦ
        startHeartRain();
    }, { once: true }); // { once: true } - чтобы сработало только один раз
});