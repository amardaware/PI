import Nav from "../../ReusableComponent/Nav";
import Sidebar from "../../ReusableComponent/Sidebar";
import Footer from "../../ReusableComponent/Footer";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Swal from "sweetalert2";
import { useEffect, useState } from "react";
import * as CATEGORY from "../../Services/ServiceCategory";

export default function RmCategory() {
  let status = 0;
  let apidata = "";
  let tableBody = "";
  let modelBody = "";
  const [modelShow, setModelShow] = useState(false);
  const [modelTitle, setModelTitle] = useState("Create New Category");
  const [modelBtnActionText, setModelBtnActionText] = useState("Create");
  const [showTable, setShowTable] = useState(false);
  const [categories, setCategories] = useState([]);
  const [categoryId, setCategoryId] = useState("");
  const [categoryDesc, setCategoryDesc] = useState("");
  const [categoryFare, setCategoryFare] = useState("");
  const [categoryExtra, setCategoryExtra] = useState("");

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
    CategoryAPICall();
  }, [showTable]);

  const CategoryAPICall = () => {
    CATEGORY.GET_CATEGORY()
      .then((response) => {
        status = response.data.STATUS;
        apidata = response.data.DATA;
        if (status === 200) {
          setCategories(apidata);
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

  const CreateCategoryAPICall = (categoryDesc, categoryFare, categoryExtra) => {
    CATEGORY.CREATE_CATEGORY(categoryDesc, categoryFare, categoryExtra)
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
            text: "Category Created Successfully !",
          }).then((result) => {
            if (result.isConfirmed) {
              setModelShow(false);
              CategoryAPICall();
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

  const UpdateCategoryAPICall = (itemdata) => {
    setModelShow(true);
    setModelBtnActionText("Update");
    CATEGORY.UPDATE_CATEGORY(
      categoryDesc,
      categoryFare,
      categoryExtra,
      categoryId
    )
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
              CategoryAPICall();
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

  const DeleteCategoryAPICall = (itemdata) => {
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
        CATEGORY.DELETE_CATEGORY(itemdata.RMCT_CODE)
          .then((response) => {
            if (response.data.STATUS == 400) {
              Swal.fire({
                icon: "error",
                title: "Server Response",
                text: "No Input Data Found !",
              });
              CategoryAPICall();
            } else if (response.data.STATUS == 200) {
              Swal.fire({
                title: "Deleted!",
                text: "Deleted Successfully !",
                icon: "success",
              }).then((result) => {
                if (result.isConfirmed) {
                  CategoryAPICall();
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
  };

  const onModelOpen = () => {
    setModelShow(true);
    setCategoryDesc("");
    setCategoryFare("");
    setCategoryExtra("");
    setCategoryId("");
  };

  const onModelAction = (itemData) => {
    if (modelBtnActionText == "Create") {
      CreateCategoryAPICall(categoryDesc, categoryFare, categoryExtra);
    } else if (modelBtnActionText == "Update") {
      UpdateCategoryAPICall(
        categoryDesc,
        categoryFare,
        categoryExtra,
        categoryId
      );
    }
  };

  const onTableAction = (ACTION_TYPE, itemData) => {
    if (ACTION_TYPE === "Edit") {
      setModelShow(true);
      setModelBtnActionText("Update");
      setCategoryDesc(itemData.RMCT_DESC);
      setCategoryFare(itemData.ROOM_FARE);
      setCategoryExtra(itemData.EXTRA_PERSON_FARE);
      setCategoryId(itemData.RMCT_CODE);
    } else if (ACTION_TYPE === "Delete") {
      DeleteCategoryAPICall(itemData);
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
              <Form.Label className="modelFormLabel">Category</Form.Label>
              <Form.Control
                type="text"
                value={categoryDesc}
                onChange={(e) => setCategoryDesc(e.target.value)}
                autoFocus
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label className="modelFormLabel">Room Fare</Form.Label>
              <Form.Control
                type="number"
                value={categoryFare}
                onChange={(e) => setCategoryFare(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label className="modelFormLabel">
                Extra Person Fare
              </Form.Label>
              <Form.Control
                type="number"
                value={categoryExtra}
                onChange={(e) => setCategoryExtra(e.target.value)}
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
                      <th>Category Id</th>
                      <th>Room Category</th>
                      <th>Fare</th>
                      <th>Extra Person Fare</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {categories &&
                      categories.map((item, index) => {
                        return (
                          <tr key={index}>
                            <td>{item.RMCT_CODE}</td>
                            <td>{item.RMCT_DESC}</td>
                            <td>{item.ROOM_FARE}</td>
                            <td>{item.EXTRA_PERSON_FARE}</td>
                            <td>
                              <div
                                class="btn-group"
                                role="group"
                                aria-label="Basic example"
                              >
                                <button
                                  type="button"
                                  class="btn btn-info"
                                  onClick={(e) => onTableAction("Edit", item)}
                                >
                                  Edit
                                </button>
                                <button
                                  type="button"
                                  class="btn btn-danger"
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
                  Add New Category
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
