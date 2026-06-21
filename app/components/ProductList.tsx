import Card from "./Card";
import { searchProduct } from "@/lib/product-action";

const defaultItems = [
  {
    title: "Sion Softside Expandable Roller Luggage, Black, Checked-Large 29-Inch",
    amazonLink: "https://www.amazon.com/dp/B014TMV5YE",
    imageURL: "https://m.media-amazon.com/images/I/815dLQKYIYL._AC_UL320_.jpg",
  },
  {
    title: "Turtle Travel Luggage Cover Protector Summer Blue Water Sea Turtle Palm Leaves Tropical Flowers Suitcase Covers for Luggage Washable Baggage Case Covers for Suitcase 25-28 Inch",
    amazonLink: "https://www.amazon.com/dp/B0C3X8GWHL",
    imageURL: "https://m.media-amazon.com/images/I/61W2tgRZnbL._AC_UL320_.jpg",
  },
  {
    title: "Men's Tech 2.0 1/2 Zip",
    amazonLink: "https://www.amazon.com/dp/B078141ML8",
    imageURL: "https://m.media-amazon.com/images/I/71hEuSAH07L._AC_UL320_.jpg",
  },
];

export default async function ProductList({ query }: { query?: string }) {
  const items = query ? await searchProduct(query) : defaultItems;

  return (
    <>
      {(items ?? defaultItems).map((item) => (
        <Card key={item.amazonLink} product={item} />
      ))}
    </>
  );
}