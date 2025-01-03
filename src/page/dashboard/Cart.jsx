import { FaDollarSign } from "react-icons/fa";
import ReUse from "../../components/ReuseAble/ReUse";
import useCart from "../../hooks/useCart";
import CartTable from "./CartTable";

const Cart = () => {
  const [cart, refetch] = useCart();
  // console.log(cart);

  return (
    <>
      <div className="mx-20">
        <ReUse title="wanna add more?" subtitle="---My Cart---" />
        <div>
          <div className=" flex items-center justify-between  bg-white">
            <h1 className="text-2xl font-semibold">
              TOTAL ORDERS : {cart.length}
            </h1>
            <h1 className="text-2xl font-semibold flex items-center">
              TOTAL PRICE :
              <FaDollarSign />
              {cart.reduce((accumulator, item) => accumulator + item.price, 0)}
            </h1>
            <button className="btn bg-[#d1a054] text-white">Pay</button>
          </div>
          <div className="overflow-x-auto mt-8 rounded-xl rounded-b-lg">
            <table className="table">
              {/* head */}
              <thead className="bg-[#d1a054]">
                <tr>
                  <th></th>
                  <th>Image</th>
                  <th>Name</th>
                  <th>Price</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {cart.map((item, idx) => (
                  <CartTable
                    item={item}
                    refetch={refetch}
                    idx={idx}
                    key={item._id}
                  />
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
