import Nav from "../../ReusableComponent/Nav";
import Sidebar from "../../ReusableComponent/Sidebar";
import Footer from "../../ReusableComponent/Footer";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Swal from "sweetalert2";
import { useEffect, useState } from "react";
import * as ONLINENOOKING from "../../Services/ServiceOnlineBookingHead";
export default function OnlineBookingHead() {
  let status = 0;
  let apidata = "";
  let tableBody = "";
  let modelBody = "";
  const [modelShow, setModelShow] = useState(false);
  const [modelTitle, setModelTitle] = useState("Create Booking Head");
  const [modelBtnActionText, setModelBtnActionText] = useState("Create");
  const [showTable, setShowTable] = useState(false);
  const [onlineBooking, setOnlineBookings] = useState([]);
  const [onlineBookingId, setOnlineBookingId] = useState("");
  const [onlineBookingDesc, setOnlineBookingDesc] = useState("");

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
    OnlineBookingAPICall();
  }, [showTable]);

  const OnlineBookingAPICall = () => {
    ONLINENOOKING.GET_ONLINE_BOOKING_HEAD()
      .then((response) => {
        status = response.data.STATUS;
        apidata = response.data.DATA;
        if (status === 200) {
          setOnlineBookings(apidata);
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

  const CreateOnlineBookingAPICall = (onlineBookingDesc) => {
    ONLINENOOKING.CREATE_ONLINE_BOOKING_HEAD(onlineBookingDesc)
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
            text: "Online Booking Head Created Successfully !",
          }).then((result) => {
            if (result.isConfirmed) {
              setModelShow(false);
              OnlineBookingAPICall();
              setOnlineBookingDesc("");
              setModelTitle("Create Booking Head");
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

  const UpdateOnlineBookingAPICall = (itemdata) => {
    setModelShow(true);
    setModelBtnActionText("Update");
    ONLINENOOKING.UPDATE_ONLINE_BOOKING_HEAD(onlineBookingDesc, onlineBookingId)
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
              OnlineBookingAPICall();
              setOnlineBookingDesc("");
              setModelBtnActionText("Create");
              setModelTitle("Create Booking Head");
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

  const DeleteOnlineBookingAPICall = (itemdata) => {
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
        ONLINENOOKING.DELETE_ONLINE_BOOKING_HEAD(itemdata.ONBK_CODE)
          .then((response) => {
            if (response.data.STATUS == 400) {
              Swal.fire({
                icon: "error",
                title: "Server Response",
                text: "No Input Data Found !",
              });
              OnlineBookingAPICall();
            } else if (response.data.STATUS == 200) {
              Swal.fire({
                title: "Deleted!",
                text: "Deleted Successfully !",
                icon: "success",
              }).then((result) => {
                if (result.isConfirmed) {
                  OnlineBookingAPICall();
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
    setOnlineBookingDesc("");
    setModelTitle("Create Booking Head");
  };

  const onModelOpen = () => {
    setModelShow(true);
    setOnlineBookingDesc;
    setOnlineBookingId("");
  };

  const onModelAction = (itemData) => {
    if (modelBtnActionText == "Create") {
      CreateOnlineBookingAPICall(onlineBookingDesc);
    } else if (modelBtnActionText == "Update") {
      UpdateOnlineBookingAPICall(onlineBookingDesc, onlineBookingId);
    }
  };

  const onTableAction = (ACTION_TYPE, itemData) => {
    if (ACTION_TYPE === "Edit") {
      setModelShow(true);
      setModelBtnActionText("Update");
      setModelTitle("Update Booking Head");
      setOnlineBookingDesc(itemData.ONBK_DESC);
      setOnlineBookingId(itemData.ONBK_CODE);
    } else if (ACTION_TYPE === "Delete") {
      DeleteOnlineBookingAPICall(itemData);
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
              <Form.Label className="modelFormLabel">
                Online Booking Head
              </Form.Label>
              <Form.Control
                type="text"
                value={onlineBookingDesc}
                onChange={(e) => setOnlineBookingDesc(e.target.value)}
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
                      <th>Online Booking Head Id</th>
                      <th>Online Booking Head Desc</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {onlineBooking &&
                      onlineBooking.map((item, index) => {
                        return (
                          <tr key={index}>
                            <td>{item.ONBK_CODE}</td>
                            <td>{item.ONBK_DESC}</td>
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
                  Add Online Booking Head
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
