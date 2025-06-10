import MainLayout from "@/components/MainLoyout";
import styles from "./../styles/Home.module.scss";
import Separator from "@/components/common/Separator";
import Chip from "@/components/common/Chip";
import { FaAndroid } from "react-icons/fa";

const HeaderProps = {
  title: "О приложении Info4cars — Полная информация об автомобилях по VIN и госномеру",
  description:
    "Узнайте, как Info4cars помогает автовладельцам получать важную информацию об автомобилях: история эксплуатации, характеристики, техобслуживание, проверки по VIN и госномеру. Бесплатно для зарегистрированных пользователей.",
  keywords:
    "Info4cars, проверка авто, VIN, госномер, история автомобиля, техобслуживание, ДТП, доверенность, угон, исполнительные документы, регистрация авто",
};

export default function AboutPage() {
  return (
    <MainLayout {...HeaderProps}>
      <div className={styles.about}>
        <div>
          <p>
            Info4cars — это удобное и функциональное приложение, которое помогает владельцам автомобилей получать важные сведения о своем транспортном
            средстве. С его помощью можно быстро найти данные о характеристиках, истории эксплуатации, техническом обслуживании и других аспектах,
            связанных с автомобилем..
          </p>
        </div>
      </div>
      <main className={`${styles.main} `}>
        <div>
          <div>
            <div>
              <strong>Для зарегестрированных пользователей:</strong> информациия по авто по стране регитрации, история репортов(заказов) и др инф.
              Зарегестрироваться возможно в приложении
              <h3>Функции приложения</h3>
              <ul>
                <li>
                  <strong>Поиск информации:</strong> узнайте технические характеристики автомобиля по VIN-коду, госномеру или другим параметрам.
                </li>

                <li>
                  <strong>Предоставление информации:</strong> Находиться ли авто в угоне, информация из таможни
                </li>

                <li>
                  <strong>Предоставление информации по исполнительным документам:</strong> Задолженностей по исполнительным документам,наличие
                  действующая доверенности
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
          <Chip href="https://play.google.com/store/apps/details?id=com.company.infocars">
            скачать версию для Андроид
            <FaAndroid size={24} color="green" />
          </Chip>

          {/* <Chip href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app">
            скачать версию для IOS
            <FaApple size={30} color="black" />
          </Chip> */}
        </div>
      </main>
    </MainLayout>
  );
}
