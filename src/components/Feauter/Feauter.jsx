import { useParams } from "react-router-dom";
import FeauterInfo from "../FeauterInfo/FeauterInfo";
import css from "./Feauter.module.css";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { fetchTruckById } from "../../redax/catalog/operation";

export default function Feauter() {
  const [isLinkActive, setIsLinkActive] = useState("features");
  const { id } = useParams();
  const dispatch = useDispatch();
  useEffect(() => {
    if (id) {
      dispatch(fetchTruckById(id));
    }
  }, [id, dispatch]);
  return (
    <div className={css.container}>
      <div className={css.info}>
        <div className={css.links}>
          <p
            className={css.features}
            onClick={() => setIsLinkActive("features")}
          >
            Features
          </p>
          <span
            className={css.reviews}
            onClick={() => setIsLinkActive("reviews")}
          >
            Reviews
          </span>
          <div
            className={
              isLinkActive === "features"
                ? css.underlineRight
                : css.underlineLeft
            }
          ></div>
        </div>
        <FeauterInfo id={id} />
      </div>
      {/*   <div className={css.infoWrapper}>
        <div className={css.detailsReviews}>
          {isLinkActive === "features" ? <FeauterInfo /> : <TruckReviews />}
        </div>
        <Form />
      </div> */}
    </div>
  );
}
