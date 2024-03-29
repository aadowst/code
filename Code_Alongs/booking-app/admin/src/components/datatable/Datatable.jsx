import "./datatable.scss";
import { DataGrid } from "@mui/x-data-grid";
import { Link, useLocation } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import { useEffect, useState } from "react";
import axios from "axios";

const Datatable = ({columns, title}) => {
  const location = useLocation();
  const path = location.pathname.split("/")[1];
  const { data, loading, error } = useFetch(
    `http://localhost:8800/api/${path}/`
  );
  const [list, setList] = useState([]);


  useEffect(() => {
    setList(data);
  }, [data]);

  const handleDelete = async (id) => {
    let modPath = ""
    if(path === "hotels") modPath = "hotels/find"
    else modPath = path
    try {
      await axios.delete(`http://localhost:8800/api/${modPath}/${id}`);
      setList(list.filter((item) => item._id !== id));
    } catch (err) {}
  };

  const actionColumn = [
    {
      field: "action",
      headerName: "Action",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="cellAction">
            <Link to="/users/test" style={{ textDecoration: "none" }}>
              <div className="viewButton">View</div>
            </Link>
            <div
              className="deleteButton"
              onClick={() => handleDelete(params.row._id)}
            >
              
              Delete
            </div>
          </div>
        );
      },
    },
  ];
  return (<> 
    <div className="datatable">
      <div className="datatableTitle">
        Manage {path}
        <Link to={`new`} className="link">
          Add New
        </Link>
      </div>{loading? "loading" : 
      <DataGrid
        className="datagrid"
        rows={list}
        columns={columns.concat(actionColumn)}
        pageSize={9}
        rowsPerPageOptions={[9]}
        checkboxSelection
        getRowId={(row) => row._id}
      />}
    </div>
    </>
  );
};

export default Datatable;
