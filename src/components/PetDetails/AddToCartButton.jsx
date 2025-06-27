// import { Check, ShoppingCart } from "lucide-react";
// import { useState } from "react";
// import useCartContext from "../../hooks/useCartContext";

// const AddToCartButton = ({pet}) => {
//     const [isAdding,setIsAdding] = useState(false);
//     const [isAdded,setIsAdded] = useState(false);
//     const { AddCartItems } = useCartContext();

//     const addToCart = async() => {
//         setIsAdding(true);
//         try {
//             await AddCartItems(pet.id);
//             setIsAdded(true);
//             setIsAdding(false);
//         } catch (error) {
//             console.log(error);
//             setIsAdding(false);
//         }
//     }

//     return (
//         <div
//             className="space-y-4"
//         >
//             <div 
//                 className=""
//             >
//                 <button
//                     className="btn btn-warning w-full"
//                     onClick={addToCart}
//                     disabled={isAdding || isAdded || pet.availability === false}
//                 >
                    
//                         {isAdding ? (
//                             <span
//                                 className="flex items-center"
//                             >
//                                 <span
//                                     className="loading loading-spinner loading-sm mr-2"
//                                 >
//                                 </span>
//                                 Adding...
//                             </span>
//                         ) : isAdded ? (
//                             <span
//                                 className="flex items-center"
//                             >
//                                 <Check
//                                     className="mr-2 h-4 w-4"
//                                 />
//                                 Added to cart
//                             </span>
//                         ) : (
//                             <span
//                                 className="flex items-center"
//                             >
//                                 <ShoppingCart
//                                     className="mr-2 h-4 w-4"
//                                 />
//                                 Add to cart
//                             </span>
//                         )
//                     }
//                 </button>
//             </div>
//         </div>
//     );
// };

// export default AddToCartButton;

import { Check, PawPrint } from "lucide-react";
import { useEffect, useState } from "react";
import useCartContext from "../../hooks/useCartContext";
import useAuthContext from "../../hooks/useAuthContext";
import authApiClient from "../../services/auth-api-client";

const AddToCartButton = ({ pet, setPet }) => {
  const [isAdding, setIsAdding] = useState(false);
  const [hasOrdered, setHasOrdered] = useState(false);
  const { AddCartItems } = useCartContext();
  const { user } = useAuthContext();

  useEffect(() => {
    if (user) {
        const token = localStorage.getItem("authToken");
        authApiClient
        .get(`/orders/has-ordered/${pet.id}/`, {
            headers: {
            Authorization: `Bearer ${token}`,
            },
        })
        .then((res) => setHasOrdered(res.data.hasOrdered))
        .catch((err) => console.log("Adoption check error:", err));
    }
    }, [pet.id, user]);

  const addToCart = async () => {
    setIsAdding(true);
    try {
      await AddCartItems(pet.id);
      setIsAdding(false);
      setHasOrdered(true); // adopt hoyeche
      setPet({ ...pet, availability: false }); // frontend e availability false kore dibo
    } catch (error) {
      console.error("Cart Error", error);
      setIsAdding(false);
    }
  };

  return (
    <button
      className="btn btn-warning w-full"
      onClick={addToCart}
      disabled={isAdding || hasOrdered || pet.availability === false}
    >
      {hasOrdered || pet.availability === false ? (
        <span className="flex items-center text-white">
          <PawPrint className="mr-2 h-4 w-4" />
          Adopted
        </span>
      ) : isAdding ? (
        <span className="flex items-center">
          <span className="loading loading-spinner loading-sm mr-2"></span>
          Adding...
        </span>
      ) : (
        <span className="flex items-center">
          <Check className="mr-2 h-4 w-4" />
          Adopt
        </span>
      )}
    </button>
  );
};

export default AddToCartButton;
