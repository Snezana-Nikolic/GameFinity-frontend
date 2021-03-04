import * as React from "react";
import { DataGrid } from "@material-ui/data-grid";
import { Link } from "react-router-dom";
import {apiCall} from '../../services/api'
const columns = [
  { field: "_id", headerName: "ID", width: 70 },
  { field: "user", headerName: "User", width: 130 },
  { field: "name", headerName: "Name", width: 130 },
  { field: "creator", headerName: "Creator", width: 130 },
  { field: "version", headerName: "Version", width: 130 },
  // { field: "genre", headerName: "Genre", width: 130 },
  // { field: "consoleType", headerName: "ConsoleType", width: 130 },
  { field: "state", headerName: "State", width: 130 },
  { field: "quantity", headerName: "Quantity", width: 130 },
  { field: "description", headerName: "Desc", width: 130 },
  {
    field: "age",
    headerName: "Age",
    type: "number",
    width: 90,
    renderCell: ({row}) => {
      return <Link to={`/admin/addGame/${row._id}`}>Edit</Link>;
    },
  },
  // {
  //   field: "fullName",
  //   headerName: "Full name",
  //   description: "This column has a value getter and is not sortable.",
  //   sortable: false,
  //   width: 160,
  //   valueGetter: (params) =>
  //     `${params.getValue("firstName") || ""} ${
  //       params.getValue("lastName") || ""
  //     }`,
  // },
];

//  const rows = [
//    { id: 1, lastName: "Snow", firstName: "Jon", age: 35 },
//    { id: 2, lastName: "Lannister", firstName: "Cersei", age: 42 },
//    { id: 3, lastName: "Lannister", firstName: "Jaime", age: 45 },
//    { id: 4, lastName: "Stark", firstName: "Arya", age: 16 },
//    { id: 5, lastName: "Targaryen", firstName: "Daenerys", age: null },
//    { id: 6, lastName: "Melisandre", firstName: null, age: 150 },
//    { id: 7, lastName: "Clifford", firstName: "Ferrara", age: 44 },
//    { id: 8, lastName: "Frances", firstName: "Rossini", age: 36 },
//    { id: 9, lastName: "Roxie", firstName: "Harvey", age: 65 },
//  ];

export const GamesTable = () => {
  const [games,setGames]=React.useState([])

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
      <DataGrid getRowId={(row) => row._id} rows={games} columns={columns} pageSize={5} />
    </div>
  );
};