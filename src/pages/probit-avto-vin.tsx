import MainLayout from "@/components/MainLoyout";
import styles from "./../styles/Home.module.scss";
import Chip from "@/components/common/Chip";
import { FaAndroid } from "react-icons/fa";
import Button from "@/components/common/Button";

const HeaderProps = {
  title: "Пробить авто по VIN — проверка на ДТП, залоги и пробег",
  description: "Пробейте машину по VIN и узнайте всё: наличие залога, участие в ДТП, розыск, скрученный пробег. Полная проверка перед покупкой.",
  keywords: "пробить авто по vin, vin проверка, проверить машину по vin номеру, скрученный пробег, авто в залоге, проверка автомобиля по vin",
};

export default function VINHistoryCheckPage() {
  const handleButtonClick = () => {
    if (typeof window !== "undefined" && (window as any).umami) {
      (window as any).umami.track("start-web-pobit-avto-vin");
    }
    window.open("https://app.info4cars.com", "_blank", "noopener,noreferrer");
  };

  return (
    <MainLayout {...HeaderProps}>
      <main className={`${styles.main} `}>
        <Button onClick={handleButtonClick}>Начать проверку авто</Button>

        <h1>Пробить авто по VIN: проверьте залоги, ДТП и владельцев</h1>
        <p>Пробивка авто по VIN-коду позволяет получить достоверную информацию о транспортном средстве: от года выпуска до участия в ДТП. Это обязательный шаг перед покупкой машины с пробегом.</p>
        <p>Скачайте приложение и узнайте полную информацию об автомобиле по VIN: ДТП, залоги, ограничения, участие в розыске и многое другое.</p>

        <h2>Какие данные включает отчёт по VIN?</h2>
        <ul>
          <li>Проверка на ДТП и повреждения</li>
          <li>История пробега</li>
          <li>Залог и арест</li>
          <li>Факты угона или розыска</li>
          <li>Количество владельцев</li>
          <li>Оценка рыночной стоимости</li>
        </ul>

        <p>Пробить авто по VIN можно прямо сейчас. Это займёт не больше минуты, но может уберечь от покупки проблемного автомобиля.</p>

        <h2>Почему это важно?</h2>
        <p>
          Многие автомобили выставляются на продажу после аварий или с юридическими ограничениями. Без проверки VIN вы рискуете потерять деньги и время. Наш сервис помогает сделать безопасный выбор.
        </p>

        <h2>Как это работает?</h2>
        <p>Вы вводите VIN-код автомобиля, и система автоматически анализирует базы данных и формирует отчёт. Всё просто, быстро и удобно.</p>
        <Chip href="https://play.google.com/store/apps/details?id=com.company.infocars">
          скачать версию для Андроид
          <FaAndroid size={24} color="green" />
        </Chip>
      </main>
    </MainLayout>
  );
}
