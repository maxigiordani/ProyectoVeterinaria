import axios from "axios";
import { STATUS } from "../constant";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";
const Pacients = ({ pacients, getAPI }) => {
  const URL = import.meta.env.VITE_API_VETERINARIA;
  const handleDelete = (id) => {
    Swal.fire({
      title: "¿Está seguro?",

      text: "Esta acción no se puede deshacer",

      icon: "warning",

      showCancelButton: true,

      confirmButtonColor: "#3085d6",

      cancelButtonColor: "#d33",

      cancelButtonText: "Cancelar",

      confirmButtonText: "Si, Eliminar",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          const res = await axios.delete(`${URL}/${id}`);

          console.log(res);
          if (res.status === STATUS.STATUS_OK) {
            Swal.fire("Eliminado", "El paciente fue eliminado", "success");
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
          <Link
            to={`/pacient/edit/${pacients?._id}`}
            className="btn btn-warning mx-1 "
          >
            Editar
          </Link>
          <button
            className="btn btn-danger mx-1"
            onClick={() => handleDelete(pacients?._id)}
          >
            Eliminar
          </button>
        </div>
      </td>
    </tr>
  );
};

export default Pacients;
