import Link from "next/link";
import Chip from "./common/Chip";
import { MdOutlineArrowBackIosNew } from "react-icons/md";
import { Inter } from "next/font/google";
import Fab from "./common/Fab";
import { IoMail } from "react-icons/io5";
import { useRouter } from "next/router";

const inter = Inter({ subsets: ["latin"] });

const MainLayout = (props: any) => {
  const router = useRouter();

  return (
    <main className={`${inter.className}`}>
      <Link href="/">
        <Chip>
          <MdOutlineArrowBackIosNew size={24} color="black" />
          назад
        </Chip>
      </Link>
      {props.children}
      <Fab onClick={() => router.push("/contact")} icon={<IoMail />} />
    </main>
  );
};
export default MainLayout;
