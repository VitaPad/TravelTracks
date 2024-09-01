import { useParams } from "react-router-dom";
import { fetchTruckById } from "../../redax/catalog/operation";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import TitleTruckById from "../../components/TitleTruckById/TitleTruckById";
import { Header } from "../../components/Header/Header";
import Feauter from "../../components/Feauter/Feauter";

export default function CamperDetailsPage() {
  const { id } = useParams();
  const dispatch = useDispatch();
  useEffect(() => {
    if (id) {
      dispatch(fetchTruckById(id));
    }
  }, [id, dispatch]);
  return (
    <>
      <Header />
      <TitleTruckById id={id} />
      <Feauter />
    </>
  );
}
