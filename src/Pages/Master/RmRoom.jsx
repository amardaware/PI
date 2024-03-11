import Nav from "../../ReusableComponent/Nav";
import Sidebar from "../../ReusableComponent/Sidebar";
import Footer from "../../ReusableComponent/Footer";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Swal from "sweetalert2";
import { useEffect, useState } from "react";
import * as ROOM from "../../Services/ServiceRooms";
import * as CATEGORY from "../../Services/ServiceCategory";
export default function RmRoom() {
  let status = 0;
  let apidata = "";
  let tableBody = "";
  let modelBody = "";
  const [modelShow, setModelShow] = useState(false);
  const [modelTitle, setModelTitle] = useState("Create New Room");
  const [modelBtnActionText, setModelBtnActionText] = useState("Create");
  const [showTable, setShowTable] = useState(false);
  const [rooms, setRooms] = useState([]);
  const [categories, setCategories] = useState([]);
  const [rmnoCode, setRmnoCode] = useState("");
  const [rmnoDesc, setRmnoDesc] = useState("");
  const [rmctCode, setRmctCode] = useState("");

  useEffect(() => {
    $("#example1").DataTable().destroy();
    $("#example1")
      .DataTable({
        responsive: true,
        lengthChange: false,
        autoWidth: false,
        buttons: ["copy", "csv", "excel", "pdf", "print", "colvis"],
      })
      .buttons()
      .container()
      .appendTo("#example1_wrapper .col-md-6:eq(0)");
    RoomAPICall();
  }, [showTable]);

  const RoomAPICall = () => {
    ROOM.GET_ROOM()
      .then((response) => {
        status = response.data.STATUS;
        apidata = response.data.DATA;
        if (status === 200) {
          setRooms(apidata);
          setShowTable(true);
        } else {
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Response Error",
          });
        }
      })
      .catch((error) => {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: error,
        });
      });
  };

  const CategoryAPICall = () => {
    CATEGORY.GET_CATEGORY()
      .then((response) => {
        if (response.data.STATUS == 200) {
          setCategories(response.data.DATA);
        } else {
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Response Error",
          });
        }
      })
      .catch((error) => {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: error,
        });
      });
  };

  const CreateRoomAPICall = (rmnoDesc, rmctCode) => {
    ROOM.CREATE_ROOM(rmnoDesc, rmctCode)
      .then((response) => {
        if (response.data.STATUS == 400) {
          Swal.fire({
            icon: "error",
            title: "Server Response",
            text: "No Input Data Found !",
          });
        } else if (response.data.STATUS == 401) {
          Swal.fire({
            icon: "error",
            title: "Server Response",
            text: "Already Exist !",
          });
        } else if (response.data.STATUS == 200) {
          Swal.fire({
            icon: "success",
            title: "Server Response",
            text: "Room Created Successfully !",
          }).then((result) => {
            if (result.isConfirmed) {
              setModelShow(false);
              RoomAPICall();
            }
          });
        }
      })
      .catch((error) => {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Response Error",
        });
      });
  };

  const UpdateRoomAPICall = (itemdata) => {
    setModelShow(true);
    setModelBtnActionText("Update");
    ROOM.UPDATE_ROOM(rmnoDesc, rmctCode, rmnoCode)
      .then((response) => {
        if (response.data.STATUS == 400) {
          Swal.fire({
            icon: "error",
            title: "Server Response",
            text: "No Input Data Found !",
          });
        } else if (response.data.STATUS == 401) {
          Swal.fire({
            icon: "error",
            title: "Server Response",
            text: "Already Exist !",
          });
        } else if (response.data.STATUS == 200) {
          Swal.fire({
            icon: "success",
            title: "Server Response",
            text: "Updated Successfully !",
          }).then((result) => {
            if (result.isConfirmed) {
              setModelShow(false);
              RoomAPICall();
              setRmnoDesc("");
              setRmctCode("");
              setRmnoCode("");
              setModelBtnActionText("Create");
              setModelTitle("Create New Room");
            }
          });
        }
      })
      .catch((error) => {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Response Error",
        });
      });
  };

  const DeleteRoomAPICall = (itemdata) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        ROOM.DELETE_ROOM(itemdata)
          .then((response) => {
            if (response.data.STATUS == 400) {
              Swal.fire({
                icon: "error",
                title: "Server Response",
                text: "No Input Data Found !",
              });
              RoomAPICall();
            } else if (response.data.STATUS == 200) {
              Swal.fire({
                title: "Deleted!",
                text: "Deleted Successfully !",
                icon: "success",
              }).then((result) => {
                if (result.isConfirmed) {
                  RoomAPICall();
                }
              });
            }
          })
          .catch((error) => {
            Swal.fire({
              icon: "error",
              title: "Oops...",
              text: "Response Error",
            });
          });
      }
    });
  };

  const onModelClose = () => {
    setModelShow(false);
    setModelBtnActionText("Create");
    setRmnoDesc("");
    setRmctCode("");
    setRmnoCode("");
    setModelTitle("Create New Room");
  };

  const onModelOpen = () => {
    setModelShow(true);
    CategoryAPICall();
    setRmnoDesc("");
    setRmnoCode("");
    setRmctCode("");
  };

  const onModelAction = (itemData) => {
    if (modelBtnActionText == "Create") {
      CreateRoomAPICall(rmnoDesc, rmctCode);
    } else if (modelBtnActionText == "Update") {
      UpdateRoomAPICall(rmnoDesc, rmctCode, rmnoCode);
    }
  };

  const onTableAction = (ACTION_TYPE, itemData) => {
    if (ACTION_TYPE === "Edit") {
      setModelShow(true);
      setModelBtnActionText("Update");
      setModelTitle("Update Room");
      setRmnoDesc(itemData.RMNO_DESC);
      setRmctCode(itemData.RMCT_CODE);
      setRmnoCode(itemData.RMNO_CODE);
    } else if (ACTION_TYPE === "Delete") {
      DeleteRoomAPICall(itemData.RMNO_CODE);
    }
  };

  modelBody = (
    <>
      <Modal show={modelShow} onHide={onModelClose}>
        <Modal.Header>
          <Modal.Title className="modelTitle">{modelTitle}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label className="modelFormLabel">Room No Desc</Form.Label>
              <Form.Control
                type="text"
                value={rmnoDesc}
                onChange={(e) => setRmnoDesc(e.target.value)}
                autoFocus
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Select
                className="form-control"
                onClick={(e) => {
                  e.preventDefault();
                  setRmctCode(e.target.value);
                }}
              >
                <option>Select</option>
                {categories &&
                  categories.map((item, index) => {
                    return (
                      <option Value={item.RMCT_CODE} key={index}>
                        {item.RMCT_DESC}
                      </option>
                    );
                  })}
              </Form.Select>
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button className="btn btn-info" onClick={onModelClose}>
            Cancel
          </Button>
          <Button className="btn btn-info" onClick={onModelAction}>
            {modelBtnActionText}
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );

  if (showTable === true) {
    tableBody = (
      <>
        <div className="row">
          <div className="col-12">
            <div className="card ">
              <div className="card-body ">
                <table
                  id="example1"
                  className="table table-bordered table-striped "
                >
                  <thead className="bg-info">
                    <tr>
                      <th>Room Id</th>
                      <th>Room Desc</th>
                      <th>Category Desc</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {rooms &&
                      rooms.map((item, index) => {
                        return (
                          <tr key={index}>
                            <td>{item.RMNO_CODE}</td>
                            <td>{item.RMNO_DESC}</td>
                            <td>{item.RMCT_DESC}</td>
                            <td>
                              <div
                                className="btn-group"
                                role="group"
                                aria-label="Basic example"
                              >
                                <button
                                  type="button"
                                  className="btn btn-info"
                                  onClick={(e) => onTableAction("Edit", item)}
                                >
                                  Edit
                                </button>
                                <button
                                  type="button"
                                  className="btn btn-danger"
                                  onClick={(e) => onTableAction("Delete", item)}
                                >
                                  Delete
                                </button>
                              </div>
                            </td>
                          </tr>
                        );
                      })}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  } else {
    tableBody = (
      <>
        <div className="text-center text-danger display-3 my-5 center_loader">
          <div className="custom_loader mt-2"></div>
        </div>
      </>
    );
  }

  function alertM() {
    Swal.fire({
      title: "Do you want to save the changes?",
      html: formBody,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        Swal.fire("Saved!", "", "success");
      } else if (result.isDenied) {
        Swal.fire("Changes are not saved", "", "info");
      }
    });
  }

  return (
    <>
      <Nav />
      <Sidebar />
      <div className="content-wrapper">
        <div className="content-header">
          <div className="container-fluid">
            <div className="row mb-1">
              <div className="col-12">
                <Button
                  className=" btn btn-info text-bold  mx-3"
                  onClick={onModelOpen}
                >
                  Add New Room
                </Button>
              </div>
            </div>

            <section className="content mt-3">
              <div className="container-fluid">{tableBody}</div>
            </section>

            <div className="row">{modelBody}</div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
