import type { IScrollProps } from "./";
import "./Scroll.module.css";

export default function Scroll(props: IScrollProps) {
  return <div className="scroll">{props.children}</div>;
}
