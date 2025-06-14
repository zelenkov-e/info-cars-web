import MainLayout from "@/components/MainLoyout";
import styles from "./../styles/Home.module.scss";
import Separator from "@/components/common/Separator";
import Chip from "@/components/common/Chip";
import { FaAndroid } from "react-icons/fa";

const HeaderProps = {
  title: "Проверка истории автомобиля по VIN — узнать всё об авто",
  description: "Проверьте историю автомобиля по VIN: ДТП, ограничения, залоги, пробег, розыск. Быстрая и полная проверка по ВИН номеру и госномеру.",
  keywords: "проверка истории автомобиля по VIN, проверка авто по VIN номеру, пробить авто по VIN, история авто по ВИН, проверка авто по номеру",
};

export default function VINHistoryPage() {
  return (
    <MainLayout {...HeaderProps}>
      <main className={`${styles.main} `}>
        <div>
          <h1>Проверка истории автомобиля по VIN</h1>
          <p>скачай приложение и узнайте полную информацию об автомобиле по VIN: ДТП, ограничения, пробег, участие в розыске и многое другое.</p>
          {/* Остальной контент страницы */}
        </div>
        <Separator size="large" />
        <div className={styles.description}>
          <Chip href="https://play.google.com/store/apps/details?id=com.company.infocars">
            скачать версию для Андроид
            <FaAndroid size={24} color="green" />
          </Chip>

          {/* <Chip href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app">
            скачать версию для IOS
            <FaApple size={30} color="black" />
          </Chip> */}
        </div>
      </main>
    </MainLayout>
  );
}
