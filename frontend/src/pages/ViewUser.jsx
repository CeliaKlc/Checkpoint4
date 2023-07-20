import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { DataGrid } from "@mui/x-data-grid";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const columns = [
  { field: "id", headerName: "ID", width: 90 },
  { field: "username", headerName: "Username", width: 150 },
  { field: "mail", headerName: "E-mail", width: 200 },
  { field: "is_admin", headerName: "Admin", width: 110 },
];

export default function ViewUser() {
  const [informations, setInformations] = useState([]);

  useEffect(() => {
    fetch(
      `${import.meta.env.VITE_BACKEND_URL ?? "http://localhost:5000"}/users`
    )
      .then((response) => response.json())
      .then((data) => {
        setInformations(data);
      });
  }, []);
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
            checkboxSelection
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
