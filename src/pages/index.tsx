import { Inter } from "next/font/google";
import styles from "./../styles/Home.module.scss";
import { FaInfoCircle, FaHandsHelping, FaAndroid, FaApple, FaVideo, FaKey } from "react-icons/fa";
import { useRouter } from "next/router";
import Chip from "@/components/common/Chip";
import Fab from "@/components/common/Fab";
import { IoMail } from "react-icons/io5";

const inter = Inter({ subsets: ["latin"] });

const PAGES = [
  { title: "info", icon: <FaVideo />, path: "/info", describtion: "Видео иструкции по пользованию приложением" },
  { title: "about", icon: <FaInfoCircle />, path: "/about", describtion: "Информация о сервисе" },
  { title: "support us", icon: <FaHandsHelping />, path: "/support", describtion: "Возможность поблагодарить" },
  { title: "privacy policy", icon: <FaKey />, path: "/policy", describtion: "Конфиденциальность" },
];

export default function Home() {
  const router = useRouter();

  const handleClick = (path: string) => {
    router.push(path);
  };

  return (
    <main className={`${styles.main} ${inter.className}`}>
      <div className={styles.hero}>
        <div>
          <h1>Welcome to Info4Cars</h1>
          <h2>Info4Cars - сервис по поиску полезной информации об авто.</h2>
        </div>
      </div>
      <div className={styles.description}>
        <Chip href="https://play.google.com/store/apps/details?id=com.company.infocars">
          скачать версию для Андроид
          <FaAndroid size={24} color="green" />
        </Chip>

        <Chip href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app">
          скачать версию для IOS
          <FaApple size={30} color="black" />
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
  );
}
