import * as React from "react";
import { DataGrid } from "@material-ui/data-grid";
import { Link } from "react-router-dom";
import { apiCall } from "../../services/api";
const columns = [
  { field: "_id", headerName: "ID", width: 230 },
  { field: "user", headerName: "User", width: 230 },
  { field: "name", headerName: "Name", width: 250 },
  { field: "creator", headerName: "Creator", width: 150 },
  { field: "version", headerName: "Version", width: 120 },
  { field: "genre", headerName: "Genre", width: 200 },
  { field: "consoleType", headerName: "ConsoleType", width: 200 },
  { field: "state", headerName: "State", width: 150 },
  { field: "quantity", headerName: "Quantity", width: 150 },
  { field: "price", headerName: "Price", width: 150 },
  { field: "rating", headerName: "Quantity", width: 150 },
  { field: "description", headerName: "Desc", width: 150 },
  /* {
    field: "Edit",
    headerName: "Edit",
    width: 90,
    renderCell: ({ row }) => {
      return <Link to={`/admin/addGame/${row._id}`}>Edit</Link>;
    },
  }, */
];

export const Games = () => {
  const [games, setGames] = React.useState([]);

  React.useEffect(() => {
    apiCall
      .get("/games")
      .then((res) => {
        console.log(res);
        setGames(res.data);
      })
      .catch((e) => console.log(e));
  }, []);

  return (
    <div style={{ height: 400, width: "100%" }}>
      <DataGrid
        getRowId={(row) => row._id}
        rows={games}
        columns={columns}
        pageSize={5}
      />
    </div>
  );
};
