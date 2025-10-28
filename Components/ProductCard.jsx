import Image from 'next/image';
import Link from 'next/link';

export default function ProductCard({ product }) {
  return (
    <Link href={`/product/${product.id}`} className="group">
      <div className="border rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-shadow">
        <div className="aspect-square relative bg-gray-100">
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-cover group-hover:scale-105 transition-transform"
          />
        </div>
        <div className="p-4">
          <h3 className="font-semibold text-lg">{product.name}</h3>
          <p className="text-sm text-gray-600">{product.brand}</p>
          <p className="text-xl font-bold text-rose-600 mt-2">
            {product.price.toLocaleString('fa-IR')} تومان
          </p>
        </div>
      </div>
    </Link>
  );
}