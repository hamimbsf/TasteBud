import { FaRegTrashAlt } from "react-icons/fa";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import Swal from "sweetalert2";

const CartTable = ({ item, idx, refetch }) => {
  const axiosSecure = useAxiosSecure();
  const handleDeleteItem = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.delete(`/carts/${id}`).then((res) => {
          if (res.data.deletedCount > 0) {
            refetch();
            Swal.fire({
              title: "Deleted!",
              text: "Your file has been deleted.",
              icon: "success",
            });
          }
        });
      }
    });
  };
  return (
    <>
      <tr className="bg-base-200">
        <th>{++idx}</th>
        <td>
          <div className="avatar">
            <div className="mask mask-squircle h-12 w-12">
              <img src={item.image} alt="Avatar Tailwind CSS Component" />
            </div>
          </div>
        </td>
        <td>{item.name}</td>
        <td>{item.price}</td>
        <td>
          <button
            onClick={() => handleDeleteItem(item._id)}
            className="btn btn-sm btn-error"
          >
            <FaRegTrashAlt />
          </button>
        </td>
      </tr>
    </>
  );
};

export default CartTable;
