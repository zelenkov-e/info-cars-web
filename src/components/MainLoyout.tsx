import Link from "next/link";
import Chip from "./common/Chip";
import { MdOutlineArrowBackIosNew } from "react-icons/md";
import { Inter } from "next/font/google";
import Fab from "./common/Fab";
import { IoMail } from "react-icons/io5";
import { useRouter } from "next/router";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

interface MainLayoutProps {
  title?: string;
  description?: string;
  keywords?: string;
  children: React.ReactNode;
  image?: string;
}

const defaultMeta = {
  title: "Info4cars — Удобное авто-приложение",
  description: "Info4cars — это приложение для получения информации об автомобилях: история, характеристики, данные с госресурсов.",
  image: "/imgs/logo.jpg",
  keywords: "автомобиль, vin, история авто, проверка авто, госномера, авто Беларусь",
};

const MainLayout = ({ title, description, keywords, children, image }: MainLayoutProps) => {
  const router = useRouter();

  const metaTitle = title || defaultMeta.title;
  const metaDesc = description || defaultMeta.description;
  const metaImage = image || defaultMeta.image;
  const metaKeywords = keywords || defaultMeta.keywords;

  return (
    <>
      <Head>
        <title>{metaTitle}</title>
        <meta name="description" content={metaDesc} />
        <meta name="keywords" content={metaKeywords} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        {/* Open Graph */}
        <meta property="og:title" content={metaTitle} />
        <meta property="og:description" content={metaDesc} />
        <meta property="og:type" content="website" />
        <meta property="og:image" content={metaImage} />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={metaTitle} />
        <meta name="twitter:description" content={metaDesc} />
        <meta name="twitter:image" content={metaImage} />
      </Head>
      <main className={`${inter.className}`}>
        <Link href="/">
          <Chip>
            <MdOutlineArrowBackIosNew size={24} color="black" />
            на главную
          </Chip>
        </Link>
        {children}
        <Fab onClick={() => router.push("/contact")} icon={<IoMail />} />
      </main>
    </>
  );
};
export default MainLayout;
