import BagroundImg from "../../components/BagroundImg/BagroundImg";
import { Header } from "../../components/Header/Header";
import HomeTitle from "../../components/HomeTitle/HomeTitle";
import ViewNowLink from "../../components/ViewNowLink/ViewNowLink";
import css from "./HomePage.module.css";

export default function HomePage() {
  return (
    <div className={css.container}>
      <Header />
      <BagroundImg />
      <HomeTitle />
      <ViewNowLink />
    </div>
  );
}
