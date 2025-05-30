import MainLayout from "@/components/MainLoyout";
import styles from "@/styles/Home.module.css";

export default function ContactPage() {
  return (
    <MainLayout>
      <main className={`${styles.main}`}>
        <div className={styles.contactUsImg} />
        <div color="warning">
          <p>У вас есть вопросы о нашем сервисе? Тогда напишите нам сообщение, и мы немедленно свяжемся с вами.</p>
        </div>

        <p>Форма отрправки вопроса</p>
      </main>
    </MainLayout>
  );
}
