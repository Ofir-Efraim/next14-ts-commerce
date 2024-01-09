import { product } from "@types";
import Products from "@components/Products/Products";
const data: product[] = [
  {
    name: "לחם קינואה עדשים",
    description:
      "לחם קינואה עדשים בריאות מצמחים, ללא גלוטן ללא חומריםן משמרים",
    price: 20,
    picture:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2hvZXN8ZW58MHx8MHx8fDA%3D",
    id: "1",
  },

  {
    name: "לחם קינואה עדשים",
    description:
      "לחם קינואה עדשים  בריאות מצמחים בריאות מצמחיםבריאות מצמחים, ללא גלוטן ללא חומריםן משמרים",
    price: 20,
    picture:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2hvZXN8ZW58MHx8MHx8fDA%3D",
    id: "1",
  },
  {
    name: "לחם קינואה עדשים",
    description:
      "לחם קינואה עדשים בריאות מצמחים, ללא גלוטן ללא חומריםן משמרים",
    price: 20,
    picture:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2hvZXN8ZW58MHx8MHx8fDA%3D",
    id: "1",
  },
  {
    name: "לחם קינואה עדשים",
    description:
      "לחם קינואה עדשים בריאות מצמחים, ללא גלוטן ללא חומריםן משמרים",
    price: 20,
    picture:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2hvZXN8ZW58MHx8MHx8fDA%3D",
    id: "1",
  },
];
export default function Home() {
  return (
    <main>
      <Products products={data} />
    </main>
  );
}
