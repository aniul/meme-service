import { useEffect, useState } from "react";
import styles from "./ProgressiveImg.module.scss";

export const ProgressiveImg = ({ placeholderSrc, src, ...props }) => {
  const [imgSrc, setImgSrc] = useState(placeholderSrc || src);

  const loadingState =
    placeholderSrc && imgSrc === placeholderSrc ? "loading" : "loaded";

  useEffect(() => {
    const img = new Image();
    img.src = src;
    img.onload = () => {
      setImgSrc(src);
    };
  }, [src]);

  return (
    <img
      {...{ src: imgSrc, ...props }}
      alt={props.alt || ""}
      className={`${styles.image}} ${loadingState}`}
    />
  );
};
