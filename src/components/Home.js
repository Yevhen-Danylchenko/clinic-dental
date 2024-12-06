import React from "react";
import dental_1 from "../images/dental_1.jpg";
import Photo_2 from "../images/Photo_2.jpg";
import Photo_3 from "../images/Photo_3.jpg";
import Photo_4 from "../images/Photo_4.jpg";
import Photo_5 from "../images/Photo_5.jpg";

function Home() {
    return (
        <div>
            <h2 className="title-text">Чому саме клініка Еліт</h2>
            <ul className="flex ul-content-photo">
                <li>
                    <img src={dental_1} alt="photo-1" className="photo-clinic" />
                </li>
                <li>
                    <p className="text">
                        Чудова новина для мешканців Біла Церква та численних туристів міста
                        Над річкою Рось. Мережа стоматологій Еліт, яка вже
                        зарекомендувала себе як найпотужніша мережа в Києві, відчиняє свої
                        двері за адресою: проспект Шевченка, 7. Ця стоматологія у центрі
                        Білої Церкви знаходиться в пішій доступності від БРУМУ, ТЦ "Сільпо",
                        Парка Александрія та ТЦ “Ельдорадо”. Тож це чудова можливість
                        поєднати прогулянку центром міста, вікенд із дітьми або недільний
                        шопінг із візитом до зубного кабінету.
                    </p>
                    <h3 className="title-text">Комплексне лікування в одному місці</h3>
                </li>
            </ul>

            <ul className="flex ul-photo">
                <li>
                    <img src={Photo_2} alt="photo-2" className="photo" />
                </li>
                <li>
                    <img src={Photo_3} alt="photo-3" className="photo" />
                </li>
                <li>
                    <p className="text text-two">
                        Що це означає? Пропонуємо вам змоделювати ситуацію. Припустимо, вас
                        турбує біль у зубах, і ви завітали на консультацію до
                        лікаря-стоматолога Біла Церква. Огляд стоматолога, консультація та
                        складання плану лікування, де ви побачите усі етапи та ціни на
                        послуги, будуть для вас безкоштовними. Це гарна традиція мережі
                        Еліт у Києві, яку ми привезли з собою до Білої Церкви. Далі ви
                        приймаєте рішення, чи хочете ви проходити лікування. Жодного тиску:
                        ви можете прийняти рішення одразу після консультації або ж взяти із
                        собою план лікування, обміркувати його та за потреби записатися на
                        інший день. Якщо ваше рішення з приводу лікування є схвальним,
                        лікар-стоматолог приступає до роботи. І тут стає зрозуміло, чому
                        комплексне лікування в одному місці - це дуже важливий чинник.
                    </p>
                </li>
            </ul>
            <ul className="flex ul-photo ul-photo-li">
                <li>
                    <img src={Photo_4} alt="photo-2" className="photo" />
                </li>
                <li>
                    <img src={Photo_5} alt="photo-3" className="photo" />
                </li>
            </ul>
        </div>
    );
}

export default Home;