import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { DataGrid } from "@mui/x-data-grid";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { useAuth } from "../Context/AuthContext";

export default function ViewUser() {
  const [informations, setInformations] = useState([]);
  const { token } = useAuth();

  const fetchUsersData = () => {
    fetch(
      `${import.meta.env.VITE_BACKEND_URL ?? "http://localhost:5000"}/users`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    )
      .then((response) => response.json())
      .then((data) => {
        setInformations(data);
      });
  };

  const fetchDeleteData = (event, id) => {
    event.preventDefault();
    fetch(
      `${
        import.meta.env.VITE_BACKEND_URL ?? "http://localhost:5000"
      }/users/${id}`,
      {
        method: "delete",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    )
      .then(() => fetchUsersData())
      .catch((error) => {
        console.error("Error", error);
      });
  };

  useEffect(() => {
    fetchUsersData();
  }, []);

  const columns = [
    { field: "id", headerName: "ID", width: 90 },
    { field: "username", headerName: "Username", width: 150 },
    { field: "mail", headerName: "E-mail", width: 200 },
    { field: "is_admin", headerName: "Admin", width: 110 },
    {
      field: "button",
      headerName: "Modifier",
      width: 250,
      renderCell: (params) => (
        <button
          className="buttonDelete"
          type="button"
          onClick={(event) => fetchDeleteData(event, params.id)}
        >
          Supprimer
        </button>
      ),
    },
  ];

  return (
    <>
      <Navbar />
      <section className="viewUserContain">
        <h1>Tableau des utilisateurs</h1>
        <div className="arrayViewUser">
          <DataGrid
            style={{
              border: "none",
            }}
            rows={informations}
            columns={columns}
            initialState={{
              pagination: {
                paginationModel: { page: 0, pageSize: 5 },
              },
            }}
            pageSizeOptions={[5, 10, 25]}
          />
        </div>
        <Link className="returnViewUser" to="/profil">
          Retour
        </Link>
      </section>
      <Footer />
    </>
  );
}
