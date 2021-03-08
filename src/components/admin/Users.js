import { useState, useEffect } from "react";
import { DataGrid } from "@material-ui/data-grid";
import { Link } from "react-router-dom";
import { apiCall } from "../../services/api";

const columns = [
  { field: "_id", headerName: "ID", width: 230 },
  { field: "username", headerName: "Username", width: 200 },
  { field: "firstName", headerName: "First Name", width: 150 },
  { field: "lastName", headerName: "Last Name", width: 150 },
  { field: "email", headerName: "Email", width: 230 },
  { field: "password", headerName: "Password", width: 550 },
  { field: "location", headerName: "Location", width: 150 },
  { field: "rating", headerName: "Quantity", width: 150 },
  { field: "role", headerName: "Role", width: 100 },
];

export const Users = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    apiCall
      .get("/users")
      .then((res) => {
        console.log(res);
        setUsers(res.data);
      })
      .catch((e) => console.log(e));
  }, []);

  return (
    <div style={{ height: 400, width: "100%" }}>
      <DataGrid
        getRowId={(row) => row._id}
        rows={users}
        columns={columns}
        pageSize={5}
      />
    </div>
  );
};
