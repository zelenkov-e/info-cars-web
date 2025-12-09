import MainLayout from "@/components/MainLoyout";
import styles from "./../styles/Home.module.scss";
import Chip from "@/components/common/Chip";
import { FaAndroid } from "react-icons/fa";
import { MdOutlineArrowBackIosNew } from "react-icons/md";
import Button from "@/components/common/Button";

const HeaderProps = {
  title: "Проверка авто по номеру — узнать сведения об автомобиле",
  description: "Введите номер автомобиля и получите информацию: ДТП, пробег, ограничения, участие в розыске. Быстрая проверка по номерному знаку.",
  keywords: "проверка авто по номеру, история автомобиля по номеру, данные по госномеру, розыск по номеру авто, проверить машину по номеру",
};

export default function NumberHistoryPage() {
  const handleButtonClick = () => {
    if (typeof window !== "undefined" && (window as any).umami) {
      (window as any).umami.track("start-web-proverka-avto-ponomeru");
    }
    window.open("https://app.info4cars.com", "_blank", "noopener,noreferrer");
  };

  return (
    <MainLayout {...HeaderProps}>
      <main className={`${styles.main}`}>
        <Button onClick={handleButtonClick}>Начать проверку авто</Button>

        <h1>Проверка авто по номеру: найдите данные о машине по госномеру</h1>
        <p>
          Не всегда есть доступ к VIN-коду, но госномер автомобиля также позволяет получить много полезной информации. С помощью нашего сервиса вы можете проверить авто по номеру и узнать его историю.
        </p>

        <p>Скачайте приложение и узнайте полную информацию об автомобиле по номеру: ДТП, залоги, ограничения, участие в розыске и многое другое.</p>

        <h2>Что даст проверка по номеру автомобиля?</h2>
        <ul>
          <li>История ДТП и страховых случаев</li>
          <li>Наличие ограничений и арестов</li>
          <li>Пробег и техосмотры</li>
          <li>Розыск, участие в ДТП</li>
          <li>Регистрации и количество владельцев</li>
        </ul>

        <p>Проверка авто по номеру особенно полезна, если продавец не даёт VIN-код или вы хотите быстро получить предварительную информацию о машине.</p>

        <h2>Где берутся данные?</h2>
        <p>Информация собирается из государственных источников: страховые службы, налоговая служба и другие. Все данные актуальны и проверяются в реальном времени.</p>

        <h2>Как проверить авто по номеру?</h2>

        <p>Не рискуйте — проверьте автомобиль перед покупкой!</p>
        <Chip href="https://play.google.com/store/apps/details?id=com.company.infocars">
          скачать версию для Андроид
          <FaAndroid size={24} color="green" />
        </Chip>
      </main>
    </MainLayout>
  );
}
