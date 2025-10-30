import "./styles.css";
import SearchBar from "../../../components/SearchBar";
import CatalogCard from "../../../components/CatalogCard";
import ButtonNextPage from "../../../components/ButtonNextPage";
import type { ProductDTO } from "../../../models/product";

const product: ProductDTO = {
  id: 2,
  name: "Smart TV",
  description: "Esta TV é muito bonita",
  imgUrl:
    "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcRVD9zge-vA5bhgc0_GphiUR1nn-8T_P9ToN_egaY4UtzIWqRkgGawwrvxAeXpKnjN8iRtFzXbnitQuVG6Grbht-2SeWvjB5U5rOmUqR7LlKAbgHoUq_GipVSbrf82W5cQ6ZgVJYQ&usqp=CAc",
  price: 2500.99,
  categories: [
    {
      id: 2,
      name: "Eletrônicos",
    },
    {
      id: 3,
      name: "Computadores",
    },
    {
      id: 4,
      name: "Importados",
    },
  ],
};

export default function Catalog() {
  return (
    <main>
      <section id="catalog-section" className="dsc-container">
        <SearchBar />

        <div className="dsc-catalog-cards dsc-mb20 dsc-mt20">
          <CatalogCard product={product} />
          <CatalogCard product={product} />
          <CatalogCard product={product} />
          <CatalogCard product={product} />
          <CatalogCard product={product} />
          <CatalogCard product={product} />
          <CatalogCard product={product} />
          <CatalogCard product={product} />
          <CatalogCard product={product} />
          <CatalogCard product={product} />
          <CatalogCard product={product} />
        </div>

        <ButtonNextPage />
      </section>
    </main>
  );
}
