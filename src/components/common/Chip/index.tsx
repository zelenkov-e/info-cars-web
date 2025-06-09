import React from "react";
import styles from "./Chip.module.scss";
// import clsx from "clsx";

type ChipProps = {
  children: React.ReactNode;
  href?: string;
  className?: string;
};

const Chip: React.FC<ChipProps> = ({ children, href, className }) => {
  if (href) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={styles.chipLink}>
        {children}
      </a>
    );
  }

  return <div className={styles.chipLink}>{children}</div>;
};

export default Chip;
