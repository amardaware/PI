import Nav from "../../ReusableComponent/Nav";
import Sidebar from "../../ReusableComponent/Sidebar";
import Footer from "../../ReusableComponent/Footer";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Swal from "sweetalert2";
import { useEffect, useState } from "react";
import * as LODGINGITEM from "../../Services/ServiceLodgingItemHead";
export default function LodgingItem() {
  let status = 0;
  let apidata = "";
  let tableBody = "";
  let modelBody = "";
  const [modelShow, setModelShow] = useState(false);
  const [modelTitle, setModelTitle] = useState("Create Lodging Item");
  const [modelBtnActionText, setModelBtnActionText] = useState("Create");
  const [showTable, setShowTable] = useState(false);
  const [lodgingItem, setLodgingItems] = useState([]);
  const [lodgingItemId, setLodgingItemId] = useState("");
  const [lodgingItemDesc, setLodgingItemDesc] = useState("");

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
    LodgingItemAPICall();
  }, [showTable]);

  const LodgingItemAPICall = () => {
    LODGINGITEM.GET_LODGING_ITEM_HEAD()
      .then((response) => {
        status = response.data.STATUS;
        apidata = response.data.DATA;
        if (status === 200) {
          setLodgingItems(apidata);
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

  const CreateLodgingItemAPICall = (lodgingItemDesc) => {
    LODGINGITEM.CREATE_LODGING_ITEM_HEAD(lodgingItemDesc)
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
            text: "Lodging Item Created Successfully !",
          }).then((result) => {
            if (result.isConfirmed) {
              setModelShow(false);
              LodgingItemAPICall();
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

  const UpdateLodgingItemAPICall = (itemdata) => {
    setModelShow(true);
    setModelBtnActionText("Update");
    LODGINGITEM.UPDATE_LODGING_ITEM_HEAD(lodgingItemDesc, lodgingItemId)
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
              LodgingItemAPICall();
              setLodgingItemDesc("");
              setModelBtnActionText("Create");
              setModelTitle("Create Lodging Item");
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

  const DeleteLodgingItemAPICall = (itemdata) => {
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
        LODGINGITEM.DELETE_LODGING_ITEM_HEAD(itemdata.LDST_CODE)
          .then((response) => {
            if (response.data.STATUS == 400) {
              Swal.fire({
                icon: "error",
                title: "Server Response",
                text: "No Input Data Found !",
              });
              LodgingItemAPICall();
            } else if (response.data.STATUS == 200) {
              Swal.fire({
                title: "Deleted!",
                text: "Deleted Successfully !",
                icon: "success",
              }).then((result) => {
                if (result.isConfirmed) {
                  LodgingItemAPICall();
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
    setLodgingItemDesc("");
    setModelTitle("Create Lodging Item");
  };

  const onModelOpen = () => {
    setModelShow(true);
    setLodgingItemDesc("");
    setLodgingItemId("");
  };

  const onModelAction = (itemData) => {
    if (modelBtnActionText == "Create") {
      CreateLodgingItemAPICall(lodgingItemDesc);
    } else if (modelBtnActionText == "Update") {
      UpdateLodgingItemAPICall(lodgingItemDesc, lodgingItemId);
    }
  };

  const onTableAction = (ACTION_TYPE, itemData) => {
    if (ACTION_TYPE === "Edit") {
      setModelShow(true);
      setModelBtnActionText("Update");
      setModelTitle("Update Lodging Item");
      setLodgingItemDesc(itemData.LDST_DESC);
      setLodgingItemId(itemData.LDST_CODE);
    } else if (ACTION_TYPE === "Delete") {
      DeleteLodgingItemAPICall(itemData);
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
              <Form.Label className="modelFormLabel">Lodging Item</Form.Label>
              <Form.Control
                type="text"
                value={lodgingItemDesc}
                onChange={(e) => setLodgingItemDesc(e.target.value)}
                autoFocus
              />
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
                      <th>Lodging Item Id</th>
                      <th>Lodging Item Desc</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {lodgingItem &&
                      lodgingItem.map((item, index) => {
                        return (
                          <tr key={index}>
                            <td>{item.LDST_CODE}</td>
                            <td>{item.LDST_DESC}</td>
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
                  Add Lodging Item
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
