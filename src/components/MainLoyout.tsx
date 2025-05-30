import Link from "next/link";

const MainLayout = (props: any) => (
  <div>
    <Link href="/">
      <p>{"назад"}</p>
    </Link>
    {props.children}
  </div>
);
export default MainLayout;
