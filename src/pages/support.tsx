import MainLayout from "@/components/MainLoyout";
import styles from "./../styles/Home.module.scss";
import Image from "next/image";
import qrCodeImage from "../../public/qr-code-payments.png";

export default function SupportUsPage() {
  return (
    <MainLayout>
      <main className={`${styles.main}`}>
        <h3>
          <b>Поддержка проекта</b>
        </h3>

        <div>
          <div>
            - Пожертвования являются добровольными и не являются обязательными для пользователей сайта. Вы можете поддержать сайт, но это не влияет на
            доступ к контенту или сервисам
          </div>
          <div>
            - Пожертвования идут на поддержание работы приложения, улучшение пользовательского опыта и на продвижение контента, который является
            важным для нашей аудитории.
          </div>
        </div>

        <div>
          <div>
            <b>Оплата по л/с через сервис E-POS</b>

            <div>
              Для оплаты клиенту необходимо в приложении банка выбрать: ЕРИП / сервис E-POS / внести лицевой счет: <b>30916-1-1</b>
            </div>
          </div>
        </div>

        <div>
          <b>Отсканируйте Qr-code для оплаты</b>
        </div>

        <Image alt="logo" src={qrCodeImage} />
      </main>
    </MainLayout>
  );
}
