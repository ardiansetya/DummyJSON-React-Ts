import {
  Card,
  CardContent,
  CardDescription,
  
  CardHeader,
  CardTitle,
} from "./ui/card";

interface ProductProps {
  id: number;
  title: string;
  description: string;
  category: string;
  price: number;
  stock: number;
  thumbnail: string;
  tags: string[];
}

const ProductCard = ({
  id,
  title,
  description,
  category,
  price,
  stock,
  tags,
  thumbnail,
}: ProductProps) => {
  return (
    <Card className="min-h-[30rem] shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white rounded-lg">
      {/* Card Header */}
      <CardHeader className="p-4 border-b border-gray-200">
        <CardTitle className="text-lg font-semibold text-gray-800">
          {id} {title}
        </CardTitle>
        <CardDescription className="text-sm text-gray-600">
          {category}
        </CardDescription>
      </CardHeader>

      {/* Card Content */}
      <CardContent className="p-4 flex flex-col items-center">
        <img
          src={thumbnail}
          alt={title}
          className="w-32 h-32 object-cover mb-4 rounded-md"
        />
        <p className="text-gray-700 text-sm mb-2">{description}</p>
        <p className="text-gray-800 font-semibold mb-2">Price: ${price}</p>
        <p className="text-gray-800 font-medium mb-2">Stock: {stock}</p>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag, index) => (
            <span
              key={index}
              className="bg-blue-100 text-blue-800 text-xs font-medium px-2 py-1 rounded-full">
              #{tag}
            </span>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
