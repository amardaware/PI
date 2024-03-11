import { useState, useEffect } from "react";
import Nav from "../../ReusableComponent/Nav";
import Sidebar from "../../ReusableComponent/Sidebar";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { Col, Container, Row } from "react-bootstrap";
import Swal from "sweetalert2";
import "react-datepicker/dist/react-datepicker.css";
import * as PROFESSION from "../../Services/ServiceProfession";
import * as NATIONALITY from "../../Services/ServiceNationality";
import * as ROOM from "../../Services/ServiceRooms";
import * as BOOKINGHEAD from "../../Services/ServiceOnlineBookingHead";
import * as PHOTOID from "../../Services/ServicePhotoIdHead";
export default function RmBookEntry() {
  let tableBody = "";
  let modelBody = "";
  const [modelShow, setModelShow] = useState(false);
  const [modelTitle, setModelTitle] = useState("Book Room Now!");
  const [modelBtnActionText, setModelBtnActionText] = useState("Book");
  const [profession, setProfession] = useState([]);
  const [nationality, setNationality] = useState([]);
  const [room, setRoom] = useState([]);
  const [bookingProvider, setBookingProvider] = useState([]);
  const [photoIdType, setPhotoIdType] = useState([]);
  const [filterRoomType, setFilterRoomType] = useState("");
  const [selectedRoomType, setSelectedRoomType] = useState("");
  const [checkInDt, setCheckInDt] = useState(new Date());

  useEffect(() => {
    FillComboData();
  }, []);

  const CalculateDate = () => {};

  const RoomAlloted = (e) => {};

  const FillComboData = () => {
    PROFESSION.GET_PROFESSION_HEAD()
      .then((res) => {
        setProfession(res.data.DATA);
      })
      .catch((err) => {
        Swal.fire({
          icon: "error",
          title: "Server Response",
          text: "No API Data Found !",
        });
      });

    NATIONALITY.GET_NATIONALITY_HEAD()
      .then((res) => {
        setNationality(res.data.DATA);
      })
      .catch((err) => {
        Swal.fire({
          icon: "error",
          title: "Server Response",
          text: "No API Data Found !",
        });
      });
    ROOM.GET_ROOM()
      .then((res) => {
        setRoom(res.data.DATA);
      })
      .catch((err) => {
        Swal.fire({
          icon: "error",
          title: "Server Response",
          text: "No API Data Found !",
        });
      });
    BOOKINGHEAD.GET_ONLINE_BOOKING_HEAD()
      .then((res) => {
        setBookingProvider(res.data.DATA);
      })
      .catch((err) => {
        Swal.fire({
          icon: "error",
          title: "Server Response",
          text: "No API Data Found !",
        });
      });
    PHOTOID.GET_PHOTOID_HEAD()
      .then((res) => {
        setPhotoIdType(res.data.DATA);
      })
      .catch((err) => {
        Swal.fire({
          icon: "error",
          title: "Server Response",
          text: "No API Data Found !",
        });
      });
  };
  const onBooking = () => {
    alert(checkInDt);
  };
  const onModelClose = () => {
    setModelShow(false);
  };
  const onModelOpen = () => {
    setModelShow(true);
  };

  //   body = (
  //     <>
  //       <div className="col-md-6 col-sm-6 mt-2">
  //         <div className="row">
  //           {" "}
  //           <div className="col-md-6">
  //             <div className="mb-1 mt-1">
  //               <label htmlFor="exampleFormControlInput1" className="form-label">
  //                 Check In Date
  //               </label>
  //               <input type="date" className="form-control form-control-sm" />
  //             </div>
  //           </div>
  //           <div className="col-md-6">
  //             <div className="mb-1 mt-1">
  //               <label htmlFor="exampleFormControlInput1" className="form-label">
  //                 Check In Time
  //               </label>
  //               <input
  //                 type="text"
  //                 className="form-control form-control-sm"
  //                 readOnly
  //               />
  //             </div>
  //           </div>
  //         </div>
  //         <div className="mb-1 mt-1">
  //           <label htmlFor="exampleFormControlInput1" className="form-label">
  //             Customer Name
  //           </label>
  //           <input type="text" className="form-control form-control-sm" />
  //         </div>
  //         <div className="mb-1 mt-1">
  //           <label htmlFor="exampleFormControlInput1" className="form-label">
  //             Address
  //           </label>
  //           <input type="text" className="form-control form-control-sm" />
  //         </div>
  //         <div className="row">
  //           <div className="col-md-4 col-sm-4">
  //             <div className="mb-1 mt-1">
  //               <label htmlFor="exampleFormControlInput1" className="form-label">
  //                 Contact No
  //               </label>
  //               <input type="number" className="form-control form-control-sm" />
  //             </div>
  //           </div>
  //           <div className="col-md-4 col-sm-4">
  //             <div className="mb-1 mt-1">
  //               <label htmlFor="exampleFormControlInput1" className="form-label">
  //                 Age
  //               </label>
  //               <input type="number" className="form-control form-control-sm" />
  //             </div>
  //           </div>
  //           <div className="col-md-4 col-sm-4">
  //             <div className="mb-1 mt-1">
  //               <label htmlFor="exampleFormControlInput1" className="form-label">
  //                 No Of Persons
  //               </label>
  //               <input type="number" className="form-control form-control-sm" />
  //             </div>
  //           </div>
  //         </div>
  //         <div className="row">
  //           <div className="col-md-6 col-sm-6">
  //             <div className="mb-1 mt-1">
  //               <label htmlFor="exampleFormControlInput1" className="form-label">
  //                 Arrival From
  //               </label>
  //               <input type="text" className="form-control form-control-sm" />
  //             </div>
  //           </div>
  //           <div className="col-md-6 col-sm-6">
  //             <div className="mb-1 mt-1">
  //               <label htmlFor="exampleFormControlInput1" className="form-label">
  //                 Going To
  //               </label>
  //               <input type="text" className="form-control form-control-sm" />
  //             </div>
  //           </div>
  //         </div>
  //         <div className="row">
  //           <div className="col-md-6 col-sm-6">
  //             <div className="mb-1 mt-1">
  //               <label htmlFor="exampleFormControlInput1" className="form-label">
  //                 Purpose
  //               </label>
  //               <input type="text" className="form-control form-control-sm" />
  //             </div>
  //           </div>
  //           <div className="col-md-6 col-sm-6">
  //             <div className="mb-1 mt-1">
  //               <label htmlFor="exampleFormControlInput1" className="form-label">
  //                 Stay (Approx.In Days)
  //               </label>
  //               <input type="text" className="form-control form-control-sm" />
  //             </div>
  //           </div>
  //         </div>
  //         <div className="row">
  //           <div className="col-md-6 col-sm-6">
  //             <div className="mb-1 mt-1">
  //               <label htmlFor="exampleFormControlInput1" className="form-label">
  //                 Profession
  //               </label>
  //               <select
  //                 className="form-select form-control form-control-sm"
  //                 aria-label="Default select example"
  //               >
  //                 <option selected>Select Profession</option>
  //                 <option value="1">One</option>
  //                 <option value="2">Two</option>
  //                 <option value="3">Three</option>
  //               </select>
  //             </div>
  //           </div>
  //           <div className="col-md-6 col-sm-6">
  //             <div className="mb-1 mt-1">
  //               <label htmlFor="exampleFormControlInput1" className="form-label">
  //                 Nationality
  //               </label>
  //               <select
  //                 className="form-select form-control form-control-sm"
  //                 aria-label="Default select example"
  //               >
  //                 <option selected>Select Nationality</option>
  //                 <option value="1">One</option>
  //                 <option value="2">Two</option>
  //                 <option value="3">Three</option>
  //               </select>
  //             </div>
  //           </div>
  //         </div>
  //         <div className="row">
  //           <div className="col-md-6 col-sm-6">
  //             <div className="mb-1 mt-1">
  //               <label htmlFor="exampleFormControlInput1" className="form-label">
  //                 Room Alloted
  //               </label>
  //               <select
  //                 className="form-select form-control form-control-sm"
  //                 aria-label="Default select example"
  //               >
  //                 <option selected>Select Profession</option>
  //                 <option value="1">One</option>
  //                 <option value="2">Two</option>
  //                 <option value="3">Three</option>
  //               </select>
  //             </div>
  //           </div>
  //           <div className="col-md-6 col-sm-6">
  //             <div className="mb-1 mt-1">
  //               <label htmlFor="exampleFormControlInput1" className="form-label">
  //                 Room Type
  //               </label>
  //               <input
  //                 type="text"
  //                 className="form-control form-control-sm"
  //                 readOnly
  //               />
  //             </div>
  //           </div>
  //         </div>
  //         <div className="row">
  //           <div className="col-md-4 col-sm-4">
  //             <label htmlFor="exampleFormControlInput1" className="form-label">
  //               Room Fare
  //             </label>
  //             <select
  //               className="form-select form-control form-control-sm mb-1"
  //               aria-label="Default select example"
  //             >
  //               <option selected>Select Fare</option>
  //               <option value="1">2000</option>
  //               <option value="2">3000</option>
  //               <option value="3">1500</option>
  //             </select>
  //           </div>
  //           <div className="col-md-4 col-sm-4">
  //             <label htmlFor="exampleFormControlInput1" className="form-label">
  //               Extra Person Fare
  //             </label>
  //             <input
  //               type="text"
  //               className="form-control form-control-sm mb-1"
  //               readOnly
  //             />
  //           </div>
  //           <div className="col-md-4 col-sm-4">
  //             <label htmlFor="exampleFormControlInput1" className="form-label">
  //               Extra Persons
  //             </label>
  //             <input type="text" className="form-control form-control-sm" />
  //           </div>
  //         </div>
  //         <div className="row">
  //           <div className="col-md-4 col-sm-4">
  //             <div className="mb-1 mt-1">
  //               <label htmlFor="exampleFormControlInput1" className="form-label">
  //                 Bill Payment By
  //               </label>
  //               <select
  //                 className="form-select form-control form-control-sm"
  //                 aria-label="Default select example"
  //               >
  //                 <option selected>Select Profession</option>
  //                 <option value="1">One</option>
  //                 <option value="2">Two</option>
  //                 <option value="3">Three</option>
  //               </select>
  //             </div>
  //           </div>
  //           <div className="col-md-4 col-sm-4">
  //             <div className="mb-1 mt-1">
  //               <label htmlFor="exampleFormControlInput1" className="form-label">
  //                 Advance Paid
  //               </label>
  //               <input type="text" className="form-control form-control-sm" />
  //             </div>
  //           </div>
  //           <div className="col-md-4 col-sm-4">
  //             <div className="mb-1 mt-1">
  //               <label htmlFor="exampleFormControlInput1" className="form-label">
  //                 Vehicle No
  //               </label>
  //               <input type="text" className="form-control form-control-sm" />
  //             </div>
  //           </div>
  //         </div>
  //         <div className="row">
  //           <div className="col-md-12 col-sm-12">
  //             <div className="mb-1 mt-1">
  //               <label htmlFor="exampleFormControlInput1" className="form-label">
  //                 GST. No
  //               </label>
  //               <input type="text" className="form-control form-control-sm" />
  //             </div>
  //           </div>
  //         </div>
  //         <div className="row">
  //           <div className="col-md-12 col-sm-12">
  //             <div className="mb-1 mt-1">
  //               <label htmlFor="exampleFormControlInput1" className="form-label">
  //                 Booking By
  //               </label>
  //               <select
  //                 className="form-select form-control form-control-sm"
  //                 aria-label="Default select example"
  //               >
  //                 <option selected>Select Provider</option>
  //                 <option value="1">One</option>
  //                 <option value="2">Two</option>
  //                 <option value="3">Three</option>
  //               </select>
  //             </div>
  //           </div>
  //         </div>
  //       </div>
  //       <div className="col-md-6 col-sm-6 mt-2">
  //         <div className="row">
  //           <div className="col-md-12 col-sm-12">
  //             <div className="mb-1 mt-1">
  //               <label htmlFor="exampleFormControlInput1" className="form-label">
  //                 Photo Id Type
  //               </label>
  //               <select
  //                 className="form-select form-control form-control-sm"
  //                 aria-label="Default select example"
  //               >
  //                 <option selected>Select Provider</option>
  //                 <option value="1">One</option>
  //                 <option value="2">Two</option>
  //                 <option value="3">Three</option>
  //               </select>
  //             </div>
  //           </div>
  //         </div>
  //         <div className="row">
  //           <div className="col-md-12 col-sm-12">
  //             <div className="mt-1">
  //               <label htmlFor="exampleFormControlInput1" className="form-label">
  //                 Photo Id No
  //               </label>
  //               <input type="text" className="form-control form-control-sm" />
  //             </div>
  //           </div>
  //         </div>
  //         <div className="row">
  //           <div className="col-md-12 col-sm-12">
  //             <div className="mt-1">
  //               <label htmlFor="exampleFormControlInput1" className="form-label">
  //                 Select File
  //               </label>
  //               <input
  //                 type="file"
  //                 className="form-control form-control-sm mb-3"
  //               />
  //             </div>
  //           </div>
  //         </div>
  //         <div className="row">
  //           <div className="col-md-12 col-sm-12">
  //             <div className="mb-1">
  //               <input
  //                 type="button"
  //                 value="Book"
  //                 className=" btn btn-info btn-sm form-control  mt-4"
  //               />
  //             </div>
  //           </div>
  //         </div>
  //       </div>
  //     </>
  //   );

  modelBody = (
    <>
      <Modal
        dialogClassName="my-modal"
        show={modelShow}
        onHide={onModelClose}
        fullscreen="xl-down"
      >
        <Modal.Header closeButton>
          <Modal.Title style={{ fontWeight: 800, color: "#17A2B8" }}>
            {modelTitle}
          </Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <Container>
            <Row>
              <Col xs={6} md={6}>
                <Row>
                  <Col md={6}>
                    <div className="mb-1 mt-1">
                      <label
                        htmlFor="exampleFormControlInput1"
                        className="form-label"
                      >
                        Check In Date
                      </label>
                      <input
                        type="date"
                        className="form-control form-control-sm"
                      />
                    </div>
                  </Col>
                  <Col md={6}>
                    <div className="mb-1 mt-1">
                      <label
                        htmlFor="exampleFormControlInput1"
                        className="form-label"
                      >
                        Check In Time
                      </label>
                      <input
                        type="text"
                        className="form-control form-control-sm"
                        readOnly
                      />
                    </div>
                  </Col>
                </Row>
                <Row>
                  <Col md={6}>
                    <label
                      htmlFor="exampleFormControlInput1"
                      className="form-label"
                    >
                      Customer Name
                    </label>
                    <input
                      type="text"
                      className="form-control form-control-sm"
                    />
                  </Col>
                  <Col md={6}>
                    <div className="mb-1 mt-1">
                      <label
                        htmlFor="exampleFormControlInput1"
                        className="form-label"
                      >
                        Address
                      </label>
                      <input
                        type="text"
                        className="form-control form-control-sm"
                      />
                    </div>
                  </Col>
                </Row>
                <Row>
                  <Col md={4}>
                    <div className="mb-1 mt-1">
                      <label
                        htmlFor="exampleFormControlInput1"
                        className="form-label"
                      >
                        Contact No
                      </label>
                      <input
                        type="number"
                        className="form-control form-control-sm"
                      />
                    </div>
                  </Col>
                  <Col md={4}>
                    <div className="mb-1 mt-1">
                      <label
                        htmlFor="exampleFormControlInput1"
                        className="form-label"
                      >
                        Age
                      </label>
                      <input
                        type="number"
                        className="form-control form-control-sm"
                      />
                    </div>
                  </Col>
                  <Col md={4}>
                    <div className="mb-1 mt-1">
                      <label
                        htmlFor="exampleFormControlInput1"
                        className="form-label"
                      >
                        No Of Persons
                      </label>
                      <input
                        type="number"
                        className="form-control form-control-sm"
                      />
                    </div>
                  </Col>
                </Row>
                <Row>
                  <Col md={6}>
                    <div className="mb-1 mt-1">
                      <label
                        htmlFor="exampleFormControlInput1"
                        className="form-label"
                      >
                        Arrival From
                      </label>
                      <input
                        type="text"
                        className="form-control form-control-sm"
                      />
                    </div>
                  </Col>
                  <Col md={6}>
                    <div className="mb-1 mt-1">
                      <label
                        htmlFor="exampleFormControlInput1"
                        className="form-label"
                      >
                        Going To
                      </label>
                      <input
                        type="text"
                        className="form-control form-control-sm"
                      />
                    </div>
                  </Col>
                </Row>
                <Row>
                  <Col md={6}>
                    <div className="mb-1 mt-1">
                      <label
                        htmlFor="exampleFormControlInput1"
                        className="form-label"
                      >
                        Purpose
                      </label>
                      <input
                        type="text"
                        className="form-control form-control-sm"
                      />
                    </div>
                  </Col>
                  <Col md={6}>
                    <div className="mb-1 mt-1">
                      <label
                        htmlFor="exampleFormControlInput1"
                        className="form-label"
                      >
                        Stay (Approx.In Days)
                      </label>
                      <input
                        type="text"
                        className="form-control form-control-sm"
                      />
                    </div>
                  </Col>
                </Row>
                <Row>
                  <Col md={6}>
                    <div className="mb-1 mt-1">
                      <label
                        htmlFor="exampleFormControlInput1"
                        className="form-label"
                      >
                        Profession
                      </label>
                      <select
                        className="form-select form-control form-control-sm"
                        aria-label="Default select example"
                      >
                        <option selected>Select Profession</option>
                        {profession &&
                          profession.map((item, index) => {
                            return (
                              <option value={item.PROF_CODE}>
                                {item.PROF_DESC}
                              </option>
                            );
                          })}
                      </select>
                    </div>
                  </Col>
                  <Col md={6}>
                    <div className="mb-1 mt-1">
                      <label
                        htmlFor="exampleFormControlInput1"
                        className="form-label"
                      >
                        Nationality
                      </label>
                      <select
                        className="form-select form-control form-control-sm"
                        aria-label="Default select example"
                      >
                        <option selected>Select Nationality</option>
                        {nationality &&
                          nationality.map((item, index) => {
                            return (
                              <option value={item.NATI_CODE}>
                                {item.NATI_DESC}
                              </option>
                            );
                          })}
                      </select>
                    </div>
                  </Col>
                </Row>
                <Row>
                  <Col md={6}>
                    <div className="mb-1 mt-1">
                      <label
                        htmlFor="exampleFormControlInput1"
                        className="form-label"
                      >
                        Room Alloted
                      </label>
                      <select
                        className="form-select form-control form-control-sm"
                        aria-label="Default select example"
                        onChange={(e) => RoomAlloted(e)}
                      >
                        <option selected>Select Room</option>
                        {room &&
                          room.map((item, index) => {
                            return (
                              <option value={item.RMNO_CODE}>
                                {item.RMNO_DESC}
                              </option>
                            );
                          })}
                      </select>
                    </div>
                  </Col>
                  <Col md={6}>
                    <div className="mb-1 mt-1">
                      <label
                        htmlFor="exampleFormControlInput1"
                        className="form-label"
                      >
                        Room Type
                      </label>
                      <input
                        type="text"
                        className="form-control form-control-sm"
                        value={setFilterRoomType}
                        readOnly
                      />
                    </div>
                  </Col>
                </Row>
                <Row>
                  <Col md={4}>
                    <div className="mb-1 mt-1">
                      <label
                        htmlFor="exampleFormControlInput1"
                        className="form-label"
                      >
                        Room Fare
                      </label>
                      <select
                        className="form-select form-control form-control-sm mb-1"
                        aria-label="Default select example"
                      >
                        <option selected>Select Fare</option>
                        <option value="1">2000</option>
                        <option value="2">3000</option>
                        <option value="3">1500</option>
                      </select>
                    </div>
                  </Col>
                  <Col md={4}>
                    <div className="mb-1 mt-1">
                      <label
                        htmlFor="exampleFormControlInput1"
                        className="form-label"
                      >
                        Extra Person Fare
                      </label>
                      <input
                        type="text"
                        className="form-control form-control-sm mb-1"
                        readOnly
                      />
                    </div>
                  </Col>
                  <Col md={4}>
                    <div className="mb-1 mt-1">
                      <label
                        htmlFor="exampleFormControlInput1"
                        className="form-label"
                      >
                        Extra Persons
                      </label>
                      <input
                        type="text"
                        className="form-control form-control-sm"
                      />
                    </div>
                  </Col>
                </Row>
                <Row>
                  <Col md={4}>
                    <div className="mb-1 mt-1">
                      <label
                        htmlFor="exampleFormControlInput1"
                        className="form-label"
                      >
                        Bill Payment By
                      </label>
                      <select
                        className="form-select form-control form-control-sm"
                        aria-label="Default select example"
                      >
                        <option selected>Select Profession</option>
                        <option value="SELF">Self</option>
                        <option value="COMPANY">Company</option>
                      </select>
                    </div>
                  </Col>
                  <Col md={4}>
                    <div className="mb-1 mt-1">
                      <label
                        htmlFor="exampleFormControlInput1"
                        className="form-label"
                      >
                        Advance Paid
                      </label>
                      <input
                        type="text"
                        className="form-control form-control-sm"
                      />
                    </div>
                  </Col>
                  <Col md={4}>
                    <div className="mb-1 mt-1">
                      <label
                        htmlFor="exampleFormControlInput1"
                        className="form-label"
                      >
                        Vehicle No
                      </label>
                      <input
                        type="text"
                        className="form-control form-control-sm"
                      />
                    </div>
                  </Col>
                </Row>
                <Row>
                  <Col md={12}>
                    <div className="mb-1 mt-1">
                      <label
                        htmlFor="exampleFormControlInput1"
                        className="form-label"
                      >
                        GST. No
                      </label>
                      <input
                        type="text"
                        className="form-control form-control-sm"
                      />
                    </div>
                  </Col>
                </Row>
                <Row>
                  <Col md={12}>
                    <div className="mb-1 mt-1">
                      <label
                        htmlFor="exampleFormControlInput1"
                        className="form-label"
                      >
                        Booking By
                      </label>
                      <select
                        className="form-select form-control form-control-sm"
                        aria-label="Default select example"
                      >
                        <option selected>Select Provider</option>
                        {bookingProvider &&
                          bookingProvider.map((item, index) => {
                            return (
                              <option value={item.ONBK_CODE}>
                                {item.ONBK_DESC}
                              </option>
                            );
                          })}
                      </select>
                    </div>
                  </Col>
                </Row>
              </Col>
              <Col xs={6} md={6}>
                <Row>
                  <Col md={12}>
                    <div className="mb-1 mt-1">
                      <label
                        htmlFor="exampleFormControlInput1"
                        className="form-label"
                      >
                        Photo Id Type
                      </label>
                      <select
                        className="form-select form-control form-control-sm"
                        aria-label="Default select example"
                      >
                        <option selected>Select Photo Id</option>
                        {photoIdType &&
                          photoIdType.map((item, index) => {
                            return (
                              <option value={item.PHID_CODE}>
                                {item.PHID_DESC}
                              </option>
                            );
                          })}
                      </select>
                    </div>
                  </Col>
                </Row>
                <Row>
                  <Col md={12}>
                    <div className="mt-1">
                      <label
                        htmlFor="exampleFormControlInput1"
                        className="form-label"
                      >
                        Photo Id No
                      </label>
                      <input
                        type="text"
                        className="form-control form-control-sm"
                      />
                    </div>
                  </Col>
                </Row>
                <Row>
                  <Col md={12}>
                    <div className="mt-1">
                      <label
                        htmlFor="exampleFormControlInput1"
                        className="form-label"
                      >
                        Select File
                      </label>
                      <input
                        type="file"
                        className="form-control form-control-sm mb-3"
                      />
                    </div>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Container>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="danger" onClick={onModelClose}>
            Cancel
          </Button>
          <Button variant="info" onClick={onBooking}>
            {modelBtnActionText}
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );

  return (
    <>
      <Nav />
      <Sidebar />
      <div className="content-wrapper">
        <div className="content-header">
          <div className="container-fluid">
            <div className="row mb-1">
              <div className="col-sm-6 col-md-6">
                <Button
                  variant="info"
                  className="btn btn-md text-bold"
                  onClick={onModelOpen}
                >
                  New Room Booking
                </Button>
              </div>
            </div>
            <div className="row">
              <div className="col-md-10">
                <div className="row">
                  <div className="col-md-6">
                    <div className="mb-1 mt-4">
                      <label
                        htmlFor="exampleFormControlInput1"
                        className="form-label"
                      >
                        From Date
                      </label>
                      <input type="date" className="form-control " />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="mb-1 mt-4">
                      <label
                        htmlFor="exampleFormControlInput1"
                        className="form-label"
                      >
                        To Date
                      </label>
                      <input type="date" className="form-control" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-2">
                <div className="mb-1 mt-5">
                  <input
                    type="button"
                    value="Search Bookings"
                    className=" btn btn-info form-control mt-1 "
                  />
                </div>
              </div>
            </div>
            <div className="row">{modelBody}</div>
          </div>
        </div>
      </div>
    </>
  );
}
