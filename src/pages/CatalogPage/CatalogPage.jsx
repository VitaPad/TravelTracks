import { useSelector } from "react-redux";
import { Header } from "../../components/Header/Header";
import ListTrucks from "../../components/ListTrucks/ListTrucks";
import Loading from "../../components/Loading/Loading";
import { selectIsLoading } from "../../redax/catalog/selector";

export default function CatalogPage() {
  const isLoading = useSelector(selectIsLoading);

  return (
    <>
      <Header />
      {isLoading && <Loading />}
      <ListTrucks />
    </>
  );
}
