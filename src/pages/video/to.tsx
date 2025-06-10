import Link from "next/link";
import styles from "./../../styles/Home.module.scss";
import Chip from "@/components/common/Chip";
import { MdOutlineArrowBackIosNew } from "react-icons/md";
import Separator from "@/components/common/Separator";
import VideoPlayer from "@/components/common/VideoPlayer";

export default function TOPage() {
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
          Информацию о наличии прохождении технического осмотра транспортным средством на территории Республики Беларусь. В базу заносятся все ТС,
          которые прошли техосмотр на диагностических станциях.
          <hr />
          <Separator />
          <VideoPlayer src="/videos/to.mp4" />
        </div>
      </main>
    </>
  );
}
