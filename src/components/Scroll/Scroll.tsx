"use client";
import type { IScrollProps } from "./";
import styles from "./Scroll.module.css";

export default function Scroll(props: IScrollProps) {
  return <div className={styles.scroll}>{props.children}</div>;
}
