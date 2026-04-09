import { Inter } from "next/font/google";
import styles from "./../styles/Home.module.scss";
import { FaInfoCircle, FaHandsHelping, FaAndroid, FaCarSide, FaCarCrash, FaVideo, FaKey, FaCar, FaFlagCheckered } from "react-icons/fa";
import { useRouter } from "next/router";
import Chip from "@/components/common/Chip";
import Fab from "@/components/common/Fab";
import { IoMail } from "react-icons/io5";
import MainLayout from "@/components/MainLoyout";
import Button from "@/components/common/Button";
import { ANDROID_EVENT, ANDROID_PATH, START_WEB_PATH } from "@/common/constant";

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
  description: "Узнайте всё об автомобиле перед покупкой: история по VIN и номеру, ДТП, пробег, владельцы, ограничения. Бесплатная проверка с расширенным отчётом.",
  keywords: "проверка автомобиля онлайн, история авто, проверить машину по vin, проверка по номеру авто, проверка машины перед покупкой, проверка авто бесплатно",
};

const START_WEB_EVENT = "start-web-main-layout";

export default function Home() {
  const router = useRouter();

  const trackEvent = (eventName: string) => {
    if (typeof window !== "undefined" && (window as any).umami) {
      (window as any).umami.track(eventName);
    }
  };

  const handleInternalClick = (path: string) => {
    const eventName = path.replace(/^\//, "") || "home";
    trackEvent(eventName);
    router.push(path);
  };

  const handleExternalClick = (e: React.MouseEvent, path: string, eventName: string) => {
    e.preventDefault();
    trackEvent(eventName);

    setTimeout(() => {
      window.open(path, "_blank", "noopener,noreferrer");
    }, 150);
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

        <Button onClick={(e) => handleExternalClick(e, START_WEB_PATH, START_WEB_EVENT)}>Начать проверку авто</Button>

        <div className={styles.grid}>
          {PAGES.map((page) => (
            <div key={page.title} className={styles.card} onClick={() => handleInternalClick(page.path)}>
              <div className={styles.cardIcon}>{page.icon}</div>
              <h2>{page.title}</h2>
              <p>{page.describtion}</p>
            </div>
          ))}
        </div>

        <Chip href={ANDROID_PATH} onClick={(e) => handleExternalClick(e, ANDROID_PATH, ANDROID_EVENT)}>
          скачать версию для Андроид
          <FaAndroid size={24} color="green" />
        </Chip>

        <Fab onClick={() => handleInternalClick("/contact")} icon={<IoMail />} />
      </main>
    </MainLayout>
  );
}
