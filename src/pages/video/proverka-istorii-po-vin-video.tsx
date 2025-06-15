import styles from "./../../styles/Home.module.scss";
import Separator from "@/components/common/Separator";
import VideoPlayer from "@/components/common/VideoPlayer";
import MainLayout from "@/components/MainLoyout";

const HeaderProps = {
  title: "Видеоинструкция: как проверить историю автомобиля по VIN",
  description:
    "Пошаговое видео — как проверить историю автомобиля по VIN: ДТП, пробег, ограничения, залоги. Всё, что нужно знать перед покупкой авто.",
  keywords:
    "проверка истории автомобиля по VIN видео, как проверить авто по VIN, видеоинструкция VIN, пробить авто по VIN видео, проверка VIN номер видео",
};

export default function VINHistoryPageVideo() {
  return (
    <MainLayout {...HeaderProps}>
      <main className={`${styles.main} `}>
        <div className={styles.card}>
          <h1>Видеоинструкция: как проверить историю автомобиля по VIN</h1>

          <p>
            Вы получите информацию из Таможни Республики Беларусь, утраченные решистрационные знаки. Наличие действующего договора страхования.
            Информация находиться ли авто в розыске.
          </p>
          <hr />
          <Separator />
          <VideoPlayer src="/videos/ptoverka-istorii-po-vin.mp4" />
        </div>
      </main>
    </MainLayout>
  );
}
