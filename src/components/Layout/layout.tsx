import { ReactNode } from "react";
import styles from "./layout.module.css";

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return <div className={styles.container}>{children}</div>;
}
