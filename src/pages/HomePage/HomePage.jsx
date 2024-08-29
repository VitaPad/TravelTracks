import BagroundImg from "../../components/BagroundImg/BagroundImg";
import { Header } from "../../components/Header/Header";
import css from "./HomePage.module.css";

export default function HomePage() {
  return (
    <div className={css.container}>
      <Header />
      <BagroundImg />
    </div>
  );
}
