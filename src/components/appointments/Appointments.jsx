
import axios from "axios";
import Swal from "sweetalert2";
import { STATUS } from "../constant";
import { Link } from "react-router-dom";

const Appointments = ({appointments, getTurnosAPI}) => {

    const URLTURNO = import.meta.env.VITE_API_APPOINTMENTS;

    const handleDelete = (id) => {
      Swal.fire({
        title: "¿Está seguro?",

        text:"Esta acción no se puede deshacer",
  
        icon: "warning",
  
        showCancelButton: true,
  
        confirmButtonColor: "#3085d6",
  
        cancelButtonColor: "#d33",

        cancelButtonText: "Cancelar",
  
        confirmButtonText: "Si, Eliminar",
      }).then(async (result) => {
        if (result.isConfirmed) {
          try {
            const res = await axios.delete(`${URLTURNO}/${id}`);
  
            console.log(res);
            if (res.status === STATUS.STATUS_OK) {
              Swal.fire("Eliminado", "El paciente fue eliminado", "success");
              getTurnosAPI();
            }
          } catch (error) {
            console.log(error);
          }
        }
      });
    };
    return (
        <tr>
        <td>{appointments?._id}</td>
        <td>{appointments?.appointmentDetail}</td>
        <td>{ appointments?.veterinarian}</td>
        <td>{appointments?.pet}</td>
        <td>{appointments?.date}</td>
        <td>{appointments?.time}</td>
        <td className="w-25">
        <div className="d-flex justify-content-center">
          <Link
            to={`/turnos/edit/${appointments?._id}`}
            className= "btn btn-warning mx-1 "
          >
        Editar 
          </Link>
          <button
            className="btn btn-danger mx-1"
            onClick={() => handleDelete(appointments?._id)}
          >
           Eliminar
          </button>
        </div>
      </td>
    </tr>
    );
};

export default Appointments;