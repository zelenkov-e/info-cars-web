import Chip from "@/components/common/Chip";
import styles from "./../../styles/Home.module.scss";
import MainLayout from "@/components/MainLoyout";
import { useRouter } from "next/router";
import { RiAuctionFill } from "react-icons/ri";
import { TbPencilSearch } from "react-icons/tb";
import { FaAndroid, FaBarcode } from "react-icons/fa";
import Separator from "@/components/common/Separator";
import Image from "@/components/common/Image";
import Button from "@/components/common/Button";
import { ANDROID_EVENT, ANDROID_PATH, START_WEB_PATH } from "@/common/constant";

const PAGES = [
  {
    title: "US Аукцион",
    icon: <RiAuctionFill />,
    path: "/video/us-auctions",
    describtion: "смотреть видео",
    imgPath: "/imgs/us-auction-image.jpg",
    imgAlt: "изображение авто аукциона",
  },
  {
    title: "прохождение ТО",
    icon: <TbPencilSearch />,
    path: "/video/to",
    describtion: "смотреть видео",
    imgPath: "/imgs/to-image.jpg",
    imgAlt: "изображение ТО",
  },
  {
    title: "проверка истории по VIN",
    icon: <FaBarcode />,
    path: "/video/proverka-istorii-po-vin-video",
    describtion: "смотреть видео",
    imgPath: "/imgs/proverka-istorii-po-vin-image.jpg",
    imgAlt: "изображение проверка истории по VIN",
  },
];

const HeaderProps = {
  title: "Видео инструкции по использованию приложения | Info4cars",
  description: "Смотрите пошаговые видео инструкции по использованию приложения Info4cars. Узнайте, как проверять авто по VIN, техосмотру и другим параметрам.",
  keywords: "видео инструкция, как пользоваться Info4cars, проверка авто по VIN, проверка техосмотр, Беларусь, приложение, видео помощь",
};

const START_WEB_EVENT = "start-free-web-video";

export default function VideoPage() {
  const router = useRouter();

  const trackEvent = (eventName: string) => {
    if (typeof window !== "undefined" && (window as any).umami) {
      (window as any).umami.track(eventName);
    }
  };

  const handleExternalClick = (e: React.MouseEvent, path: string, eventName: string) => {
    e.preventDefault();
    trackEvent(eventName);

    setTimeout(() => {
      window.open(path, "_blank", "noopener,noreferrer");
    }, 150);
  };

  const handleInternalClick = (path: string) => {
    const eventName = path.replace(/^\//, "") || "home";
    trackEvent(eventName);
    router.push(path);
  };

  return (
    <MainLayout {...HeaderProps}>
      <main className={`${styles.main} `}>
        <Button onClick={(e) => handleExternalClick(e, START_WEB_PATH, START_WEB_EVENT)}>Проверить авто бесплатно</Button>

        <h3>Видео инструкции по пользованию приложением</h3>

        <div className={styles.grid}>
          {PAGES.map((page) => (
            <div key={page.title} className={styles.card}>
              <div className={styles.cardIcon}>{page.icon}</div>
              <h2>{page.title}</h2>
              <Image src={page.imgPath} alt={page.imgAlt} width={400} height={300} rounded />
              <Separator />
              <Button onClick={() => handleInternalClick(page.path)}>{page.describtion}</Button>
            </div>
          ))}
        </div>
        <Separator size="large" />
        <div className={styles.description}>
          <Chip href={ANDROID_PATH} onClick={(e) => handleExternalClick(e, ANDROID_PATH, ANDROID_EVENT)}>
            скачать версию для Андроид
            <FaAndroid size={24} color="green" />
          </Chip>
        </div>
      </main>
    </MainLayout>
  );
}
