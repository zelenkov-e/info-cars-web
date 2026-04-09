import React from "react";
import styles from "./Chip.module.scss";

type ChipProps = {
  children: React.ReactNode;
  href?: string;
  className?: string;
  disabled?: boolean;
  onClick?: (e: React.MouseEvent<HTMLAnchorElement | HTMLDivElement>) => void;
};

const Chip: React.FC<ChipProps> = ({ children, href, className, onClick, disabled }) => {
  const commonProps = {
    className: `${styles.chipLink} ${disabled ? styles.disabled : ""} ${className || ""}`,
    onClick: disabled ? undefined : onClick,
  };

  if (href) {
    return (
      <a {...commonProps} href={disabled ? "#" : href} target="_blank" rel="noopener noreferrer">
        {children}
      </a>
    );
  }

  return <div {...commonProps}>{children}</div>;
};

export default Chip;
