import Link from "next/link";
import styles from "./../../styles/Home.module.scss";
import Chip from "@/components/common/Chip";
import { MdOutlineArrowBackIosNew } from "react-icons/md";
import VideoPlayer from "@/components/common/VideoPlayer";
import Separator from "@/components/common/Separator";
import MainLayout from "@/components/MainLoyout";

const HeaderProps = {
  title: "Проверка авто из США – Аукционы | Info4cars",
  description: "Узнайте, как проверять историю автомобилей из США с помощью видеоинструкции.",
  keywords: "авто из США, аукционы, Copart, IAAI, проверка VIN",
};

export default function USAuctionsPage() {
  return (
    <MainLayout {...HeaderProps}>
      <main className={`${styles.main} `}>
        <div className={styles.card}>
          При покупке автомобиля из США важно проверить его историю, особенно если он был куплен на аукционе. Данные с американских аукционов, таких
          как Copart, IAAI, Manheim и других, помогают получить полную картину о состоянии машины до продажи.
          <hr />
          <Separator />
          <VideoPlayer src="/videos/US_auction.mp4" />
        </div>
      </main>
    </MainLayout>
  );
}
