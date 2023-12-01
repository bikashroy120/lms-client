import React from "react";
import style from "./Loader.module.css"

type Props = {};

const Loader2 = (props: Props) => {
  return (
    <div className={style.loader}>
      Loading
      <span></span>
    </div>
  );
};

export default Loader2;
