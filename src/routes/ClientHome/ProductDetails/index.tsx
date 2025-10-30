import "./styles.css";
import ButtonInverse from "../../../components/ButtonInverse";
import ButtonPrimary from "../../../components/ButtonPrimary";
import ProductDetailsCard from "../../../components/ProductDetailsCard";
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

export default function ProductDetails() {
  return (
    <main>
      <section id="product-details-section" className="dsc-container">
        <ProductDetailsCard product={product} />
        <div className="dsc-btn-page-container">
          <ButtonPrimary text="Comprar" />
          <ButtonInverse text="Início" />
        </div>
      </section>
    </main>
  );
}
