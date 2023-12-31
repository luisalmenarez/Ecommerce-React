import { useContext } from "react";
import { CartContext } from "../../Context/CartContext";
import { ItemCount } from "../ItemCount/ItemCount";
import Swal from "sweetalert2";

export const ItemDetail = ({ id, name, description, img, price, stock }) => {
  const { addItem } = useContext(CartContext);

  const handleAddToCart = (count) => {
    if (count === 0) {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "You must add at least one product to the cart.",
      });
    } else {
      addItem({ id, img, name, price }, count);
      Swal.fire({
        position: "center",
        icon: "success",
        title: "Correctly added",
        showConfirmButton: false,
        timer: 1500,
      });
    }
  };

  return (
    <main className="w-full grid grid-cols-1 md:grid-cols-2 bg-black text-center text-white p-4">
      <section className="grid place-items-center p-2">
        <img className="rounded-md" src={img} alt={name} />
      </section>
      <section className="flex flex-col justify-center items-center gap-2">
        <h5 className="text-3xl font-bold mb-4  text-green-500">{name}</h5>
        <p className="w-5/6 text-gray-500 text-xl border-b border-gray-500 pb-6">
          {description}
        </p>
        <p className="text-gray-500 text-2xl font-bold">
          Price: <span className="text-white"> ${price} USD </span>
        </p>
        <ItemCount stock={stock} onAdd={handleAddToCart} />
      </section>
    </main>
  );
};
