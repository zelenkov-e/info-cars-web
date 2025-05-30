import Link from "next/link";
import styles from "@/styles/Home.module.css";
import MainLayout from "@/components/MainLoyout";

export default function AboutPage() {
  return (
    <MainLayout>
      <h1>About</h1>
      <p>Видео инструкции по пользованию приложением</p>
    </MainLayout>
  );
}
