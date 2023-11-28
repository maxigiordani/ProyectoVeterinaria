/* eslint-disable react/prop-types */
import axios from "axios";
import { STATUS } from "../../constant";
import Swal from "sweetalert2";
//import { Link } from "react-router-dom";
const Pacients = ({ pacients, getAPI }) => {
  const URL = import.meta.env.VITE_API_VETERINARIA;
  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",

      text: "You won't be able to revert this!",

      icon: "warning",

      showCancelButton: true,

      confirmButtonColor: "#3085d6",

      cancelButtonColor: "#d33",

      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          const res = await axios.delete(`${URL}/${id}`);

          console.log(res);
          if (res.status === STATUS.STATUS_OK) {
            Swal.fire("Deleted!", "Your product has been deleted", "success");
            getAPI();
          }
        } catch (error) {
          console.log(error);
        }
      }
    });
  };

  return (
    <tr>
      <td>{pacients?._id}</td>
      <td>{pacients?.ownerName}</td>
      <td>{pacients?.email}</td>
      <td>{pacients?.tel}</td>
      <td>{pacients?.petName}</td>
      <td>{pacients?.specie}</td>
      <td>{pacients?.race}</td>

      <td className="w-25">
        <div className="d-flex justify-content-center">
      {/*    { <Link
            to={`/product/edit/${product?._id}`}
            className="btn-orange mx-1 text-decoration-none text-center"
          > }
            Update
       {/   </Link> */}
          <button
            className="btn-red mx-1"
            onClick={() => handleDelete(pacients?._id)}
          > 
            Delete
        </button> 
        </div>
      </td>
    </tr>
  );
};

export default Pacients;
