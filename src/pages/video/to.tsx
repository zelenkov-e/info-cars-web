import styles from "./../../styles/Home.module.scss";
import Separator from "@/components/common/Separator";
import VideoPlayer from "@/components/common/VideoPlayer";
import MainLayout from "@/components/MainLoyout";

const HeaderProps = {
  title: "Проверка техосмотра автомобиля | Info4cars",
  description:
    "Узнайте, прошёл ли ваш автомобиль технический осмотр в Республике Беларусь. Данные поступают с диагностических станций после прохождения ТО.",
  keywords: "техосмотр, проверка ТО, автомобиль, Республика Беларусь, диагностическая станция, прохождение технического осмотра",
};

export default function TOPage() {
  return (
    <MainLayout {...HeaderProps}>
      <main className={`${styles.main} `}>
        <div className={styles.card}>
          Информацию о наличии прохождении технического осмотра транспортным средством на территории Республики Беларусь. В базу заносятся все ТС,
          которые прошли техосмотр на диагностических станциях.
          <hr />
          <Separator />
          <VideoPlayer src="/videos/to.mp4" />
        </div>
      </main>
    </MainLayout>
  );
}
