import MainLayout from "@/components/MainLoyout";
import styles from "./../styles/Home.module.scss";
import Separator from "@/components/common/Separator";
import Chip from "@/components/common/Chip";
import { FaAndroid } from "react-icons/fa";
import Button from "@/components/common/Button";
import { ANDROID_EVENT, ANDROID_PATH, START_WEB_PATH } from "@/common/constant";

const HeaderProps = {
  title: "О приложении Info4cars — Полная информация об автомобилях по VIN и госномеру",
  description:
    "Узнайте, как Info4cars помогает автовладельцам получать важную информацию об автомобилях: история эксплуатации, характеристики, техобслуживание, проверки по VIN и госномеру. Бесплатно для зарегистрированных пользователей.",
  keywords: "Info4cars, проверка авто, VIN, госномер, история автомобиля, техобслуживание, ДТП, доверенность, угон, исполнительные документы, регистрация авто",
};

const START_WEB_EVENT = "start-web-aboutt";

export default function AboutPage() {
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

  return (
    <MainLayout {...HeaderProps}>
      <div className={styles.about}>
        <div>
          <p>
            Info4cars — это удобное и функциональное приложение, которое помогает владельцам автомобилей получать важные сведения о своем транспортном средстве. С его помощью можно быстро найти данные
            о характеристиках, истории эксплуатации, техническом обслуживании и других аспектах, связанных с автомобилем..
          </p>
        </div>
      </div>
      <main className={`${styles.main} `}>
        <Button onClick={(e) => handleExternalClick(e, START_WEB_PATH, START_WEB_EVENT)}>Проверить авто бесплатно</Button>
        <div>
          <div>
            <div>
              <strong>Для зарегестрированных пользователей:</strong> информациия по авто по стране регитрации, история репортов(заказов) и др инф. Зарегестрироваться возможно в приложении
              <h3>Функции приложения</h3>
              <ul>
                <li>
                  <strong>Поиск информации:</strong> узнайте технические характеристики автомобиля по VIN-коду, госномеру или другим параметрам.
                </li>

                <li>
                  <strong>Предоставление информации:</strong> Находиться ли авто в угоне, информация из таможни
                </li>

                <li>
                  <strong>Предоставление информации по исполнительным документам:</strong> Задолженностей по исполнительным документам,наличие действующая доверенности
                </li>

                <li>
                  <strong>История поиска авто:</strong> проверьте наличие зарегистрированных ДТП, предыдущих владельцев и другие важные данные.
                </li>
              </ul>
            </div>
          </div>
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
