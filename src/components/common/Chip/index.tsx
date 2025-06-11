import React from "react";
import styles from "./Chip.module.scss";
// import clsx from "clsx";

type ChipProps = {
  children: React.ReactNode;
  href?: string;
  className?: string;
  disabled?: boolean;
};

const Chip: React.FC<ChipProps> = ({ children, href, className, disabled }) => {
  if (href) {
    return (
      <a
        href={disabled ? undefined : href}
        target={disabled ? undefined : "_blank"}
        rel={disabled ? undefined : "noopener noreferrer"}
        className={`${styles.chipLink} ${disabled ? styles.disabled : ""}`}
      >
        {children}
      </a>
    );
  }

  return <div className={styles.chipLink}>{children}</div>;
};

export default Chip;
