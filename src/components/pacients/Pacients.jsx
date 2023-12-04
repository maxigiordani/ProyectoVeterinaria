import React from "react";
import axios from "axios";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";
import { STATUS } from "../constant";


const Pacients = ({ pacients, getAPI }) => {
  const URL = import.meta.env.VITE_API_VETERINARIA;

  const handleDelete = async (id) => {
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
  };

  return (
    <tr>
      <td>
      {pacients?._id}
      </td>
      <td>
       {pacients?.ownerName}
      </td>
      <td>
     {pacients?.email}
      </td>
      <td>
   {pacients?.tel}
      </td>
      <td>
       {pacients?.petName}
      </td>
      <td>
      {pacients?.specie}
      </td>
      <td>
       {pacients?.race}
      </td>

      <td> 
        <div className="d-flex flex-column align-items-center justify-content-center ">
          <Link
            to={`/pacient/edit/${pacients?._id}`}
            className="btn btn-warning my-2"
          >
            Update
          </Link>
          <button
            className="btn btn-danger my-2"
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
