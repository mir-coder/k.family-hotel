import Header from "./Header.js";
import { MySwiper, MySwiperTwo, MySwiperDop } from "./Slider.js";
import LightboxHandler from "./LightboxHandler.js";


new Header();

new MySwiper();
new MySwiperTwo();
new MySwiperDop();

// Создаем экземпляры слайдеров
// document.addEventListener('DOMContentLoaded', () => {
//     const mySwiper = new MySwiper();
//     const mySwiperTwo = new MySwiperTwo();
//     const mySwiperDop = new MySwiperDop();
// });

// Инициализация lightbox с колбэками
document.addEventListener('DOMContentLoaded', () => {
    const lightboxConfigs = [
        {
            id: "first-lightbox",
            onOpenCallback: function () {
                console.log("The first lightbox has opened.");
            }
        },
        {
            id: "second-lightbox",
            onOpenCallback: function () {
                console.log("The second lightbox has opened.");
            }
        }
    ];

    new LightboxHandler(lightboxConfigs); // Инициализация с конфигурацией
});