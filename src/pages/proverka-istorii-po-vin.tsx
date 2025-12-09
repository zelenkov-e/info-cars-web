import MainLayout from "@/components/MainLoyout";
import styles from "./../styles/Home.module.scss";
import Chip from "@/components/common/Chip";
import { FaAndroid } from "react-icons/fa";
import Button from "@/components/common/Button";

const HeaderProps = {
  title: "Проверка истории автомобиля по VIN — ДТП, пробег, владельцы",
  description: "Проверьте историю автомобиля по VIN-коду: аварии, пробег, розыск, аресты, число владельцев. Подробный отчёт за 1 минуту.",
  keywords: "проверка истории автомобиля по VIN, история авто по вин номеру, ДТП по VIN, владельцы по VIN, авто в розыске, vin отчет",
};

export default function VINHistoryPage() {
  const handleButtonClick = () => {
    if (typeof window !== "undefined" && (window as any).umami) {
      (window as any).umami.track("start-web-proverka-istorii-po-vin");
    }
    window.open("https://app.info4cars.com", "_blank", "noopener,noreferrer");
  };

  return (
    <MainLayout {...HeaderProps}>
      <main className={`${styles.main} `}>
        <Button onClick={handleButtonClick}>Начать проверку авто</Button>

        <h1>Проверка истории автомобиля по VIN: узнайте правду о машине</h1>
        <p>
          VIN-код (Vehicle Identification Number) — это уникальный идентификатор автомобиля, который позволяет получить полную информацию о его прошлом. Перед покупкой поддержанного авто важно
          убедиться, что транспортное средство не числится в угоне, не участвовало в серьёзных ДТП и не находится в залоге.
        </p>
        <p>скачай приложение и узнайте полную информацию об автомобиле по VIN: ДТП, ограничения, пробег, участие в розыске и многое другое.</p>
        <h2>Что можно узнать по VIN-коду?</h2>
        <ul>
          <li>Историю ДТП и повреждений</li>
          <li>Пробег и его изменения</li>
          <li>Залоги и ограничения</li>
          <li>Розыск и угоны</li>
          <li>Количество владельцев</li>
          <li>Историю регистраций</li>
        </ul>

        <p>Проверка автомобиля по VIN даёт уверенность в том, что вы не покупаете "проблемную" машину. Это особенно актуально на вторичном рынке.</p>

        <h2>Как провести проверку?</h2>
        <p>
          Просто введите VIN-код в форму на сайте или скачайте мобильное приложение. Система проанализирует данные из официальных баз (ГИБДД, РСА, ФНС и других) и предоставит отчёт в течение
          нескольких секунд.
        </p>

        <h2>Почему важно проверить авто по VIN перед покупкой</h2>
        <p>
          Статистика показывает, что более 40% автомобилей на рынке имеют скрытые дефекты, залоги или скрученный пробег. Проверка истории по VIN — это надёжный способ защитить себя от потерь и обмана.
        </p>

        <Chip href="https://play.google.com/store/apps/details?id=com.company.infocars">
          скачать версию для Андроид
          <FaAndroid size={24} color="green" />
        </Chip>
      </main>
    </MainLayout>
  );
}
