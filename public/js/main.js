import Header from "./Header.js";
import { MySwiper, MySwiperTwo, MySwiperReviews, MySwiperProduct } from "./Slider.js";
import CircleText from './CircleText.js';
import LightboxHandler from "./LightboxHandler.js"; 
import TelegramForm from "./TelegramForm.js"; 


new Header()
new MySwiper();
new MySwiperTwo();
new MySwiperReviews();
new MySwiperProduct();
new Datepicker('#arrivalDate');
new Datepicker('#departureDate');
new TelegramForm();
new CircleText();
new LightboxHandler();