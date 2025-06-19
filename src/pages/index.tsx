import { Inter } from "next/font/google";
import styles from "./../styles/Home.module.scss";
import { FaInfoCircle, FaHandsHelping, FaAndroid, FaCarSide, FaCarCrash, FaVideo, FaKey, FaCar } from "react-icons/fa";
import { useRouter } from "next/router";
import Chip from "@/components/common/Chip";
import Fab from "@/components/common/Fab";
import { IoMail } from "react-icons/io5";
import MainLayout from "@/components/MainLoyout";

const inter = Inter({ subsets: ["latin"] });

const PAGES = [
  { title: "car history (VIN)", icon: <FaCarSide />, path: "/proverka-istorii-po-vin", describtion: "Проверка истории автомобиля по VIN" },
  { title: "car history (NUM)", icon: <FaCar />, path: "/proverka-avto-po-nomeru", describtion: "Проверка авто по номеру" },
  { title: "car check history (VIN)", icon: <FaCarCrash />, path: "/probit-avto-vin", describtion: "Пробить авто по VIN" },
  { title: "videos", icon: <FaVideo />, path: "/video", describtion: "Видео иструкции по пользованию приложением" },
  { title: "about", icon: <FaInfoCircle />, path: "/about", describtion: "Информация о сервисе" },
  { title: "support us", icon: <FaHandsHelping />, path: "/support", describtion: "Возможность поблагодарить" },
  { title: "privacy policy", icon: <FaKey />, path: "/policy", describtion: "Конфиденциальность" },
];

const HeaderProps = {
  title: "Проверка автомобиля онлайн — история по VIN и госномеру",
  description:
    "Узнайте всё об автомобиле перед покупкой: история по VIN и номеру, ДТП, пробег, владельцы, ограничения. Бесплатная проверка с расширенным отчётом.",
  keywords:
    "проверка автомобиля онлайн, история авто, проверить машину по vin, проверка по номеру авто, проверка машины перед покупкой, проверка авто бесплатно",
};

export default function Home() {
  const router = useRouter();

  const handleClick = (path: string) => {
    router.push(path);
  };

  return (
    <MainLayout {...HeaderProps}>
      <main className={`${styles.main} ${inter.className}`}>
        <div className={styles.hero}>
          <div>
            <h1>Проверка автомобиля онлайн — история по VIN и номеру</h1>
            <h2>Info4Cars - сервис по поиску полезной информации об авто.</h2>
          </div>
        </div>
        <div className={styles.description}>
          <Chip href="https://play.google.com/store/apps/details?id=com.company.infocars">
            скачать версию для Андроид
            <FaAndroid size={24} color="green" />
          </Chip>

          <Chip disabled href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app">
            скачать версию для IOS (в разработке..)
            {/* <FaApple size={30} color="black" /> */}
          </Chip>
        </div>
        <div className={styles.grid}>
          {PAGES.map((page) => (
            <div key={page.title} className={styles.card} onClick={() => handleClick(page.path)}>
              <div className={styles.cardIcon}>{page.icon}</div>
              <h2>{page.title}</h2>
              <p>{page.describtion}</p>
            </div>
          ))}
        </div>
        <Fab onClick={() => router.push("/contact")} icon={<IoMail />} />
      </main>
    </MainLayout>
  );
}
