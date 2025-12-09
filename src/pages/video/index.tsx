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

export default function VideoPage() {
  const router = useRouter();

  const handleClick = (path: string) => {
    const eventName = path.replace(/^\//, "");

    if (typeof window !== "undefined" && (window as any).umami) {
      (window as any).umami.track(eventName);
    }
    router.push(path);
  };

  const handleButtonClick = () => {
    if (typeof window !== "undefined" && (window as any).umami) {
      (window as any).umami.track("start-web-video");
    }
    window.open("https://app.info4cars.com", "_blank", "noopener,noreferrer");
  };

  return (
    <MainLayout {...HeaderProps}>
      <main className={`${styles.main} `}>
        <Button onClick={handleButtonClick}>Начать проверку авто</Button>

        <h3>Видео инструкции по пользованию приложением</h3>

        <div className={styles.grid}>
          {PAGES.map((page) => (
            <div key={page.title} className={styles.card}>
              <div className={styles.cardIcon}>{page.icon}</div>
              <h2>{page.title}</h2>
              <Image src={page.imgPath} alt={page.imgAlt} width={400} height={300} rounded />
              <Separator />
              <Button onClick={() => handleClick(page.path)}>{page.describtion}</Button>
            </div>
          ))}
        </div>
        <Separator size="large" />
        <div className={styles.description}>
          <Chip href="https://play.google.com/store/apps/details?id=com.company.infocars">
            скачать версию для Андроид
            <FaAndroid size={24} color="green" />
          </Chip>
        </div>
      </main>
    </MainLayout>
  );
}
