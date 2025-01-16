import axios from "axios";
import ProductCard from "./components/ProductCard";
import { useEffect, useState } from "react";
import { Button } from "./components/ui/button";

interface Products {
  id: number;
  title: string;
  description: string;
  category: string;
  price: number;
  stock: number;
  thumbnail: string;
  tags: string[];
}

const App = () => {
  const [products, setProducts] = useState<Products[]>([]);
  const baseUrl = import.meta.env.VITE_BASE_URL;


  const fetchData = async () => {
    try {
      const response = await axios.get(`${baseUrl}/products`);
      setProducts(response.data.products);
      console.log(products);
    } catch (error) {
      console.log(error)
    }

  }

  useEffect(()=>{
    fetchData()
  }, [])

  return (
    <div className="bg-gradient-to-r from-slate-800 to-gray-900 min-h-screen p-5">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-white text-center mb-8">
          Product Showcase
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 ">
          {products.map((product) => (
            <div key={product.id} className="group relative ">
              <ProductCard
                title={product.title}
                category={product.category}
                description={product.description}
                price={product.price}
                stock={product.stock}
                tags={product.tags}
                id={product.id}
                thumbnail={product.thumbnail}
              />
              {/* Floating Quick View Button */}
              <div className="absolute inset-0 bg-black bg-opacity-50 flex justify-center items-center opacity-0 group-hover:opacity-100 transition duration-300">
                <Button >
                  Quick View
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;
