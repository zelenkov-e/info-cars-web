import Link from "next/link";
import styles from "./../../styles/Home.module.scss";
import Chip from "@/components/common/Chip";
import { MdOutlineArrowBackIosNew } from "react-icons/md";
import VideoPlayer from "@/components/common/VideoPlayer";
import Separator from "@/components/common/Separator";

export default function USAuctionsPage() {
  return (
    <>
      <Link href="/video">
        <Chip>
          <MdOutlineArrowBackIosNew size={24} color="black" />
          назад
        </Chip>
      </Link>
      <main className={`${styles.main} `}>
        <div className={styles.card}>
          При покупке автомобиля из США важно проверить его историю, особенно если он был куплен на аукционе. Данные с американских аукционов, таких
          как Copart, IAAI, Manheim и других, помогают получить полную картину о состоянии машины до продажи.
          <hr />
          <Separator />
          <VideoPlayer src="/videos/US_auction.mp4" />
        </div>
      </main>
    </>
  );
}
