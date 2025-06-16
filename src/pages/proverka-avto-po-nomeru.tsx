import MainLayout from "@/components/MainLoyout";
import styles from "./../styles/Home.module.scss";
import Separator from "@/components/common/Separator";
import Chip from "@/components/common/Chip";
import { FaAndroid } from "react-icons/fa";
import Link from "next/link";
import { MdOutlineArrowBackIosNew } from "react-icons/md";

const HeaderProps = {
  title: "Проверка авто по номеру — узнать историю автомобиля",
  description: "Проверьте авто по номеру: история ДТП, залоги, ограничения, розыск, пробег. Удобная и быстрая проверка автомобиля по номеру.",
  keywords: "проверка авто по номеру, проверить авто по номеру, история автомобиля по номеру, пробить машину по номеру, проверка авто",
};

export default function NumberHistoryPage() {
  return (
    <MainLayout {...HeaderProps}>
      <main className={`${styles.main}`}>
        <div>
          <h1>Проверка авто по номеру</h1>
          <p>Скачайте приложение и узнайте полную информацию об автомобиле по номеру: ДТП, залоги, ограничения, участие в розыске и многое другое.</p>
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
