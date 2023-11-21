import Link from "next/link";
import { Fragment } from "react";
import styles from "@/components/NavItems.module.css";
import { useRouter } from "next/router";

const NavItems: React.FC<{ title: string; href: string }> = ({
  title,
  href,
}) => {
  const router = useRouter();

  return (
    <Fragment>
      <Link
        href={href}
        className={`${styles["nav-item"]} ${
          router.asPath === href ? styles.active : ""
        }`}
      >
        {title}
      </Link>
    </Fragment>
  );
};

export default NavItems;
