import { ThreeDots } from "react-loader-spinner";
import css from "./Loading.module.css";

export default function Loading() {
  return (
    <div className={css.loader}>
      <ThreeDots
        visible={true}
        height="80"
        width="80"
        color="rgba(228, 72, 72, 1)"
        radius="9"
        ariaLabel="three-dots-loading"
        wrapperStyle={{}}
        wrapperClass=""
      />
    </div>
  );
}
