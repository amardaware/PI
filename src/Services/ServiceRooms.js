import axios from "axios";
export const getRoomNumbers = async () => {
  return await axios.get(
    `http://online.pranaliinfotech.com/lodging/api/RoomNumber/GetRoomNos`
  );
};

export const createRoom = async (roomDesc, rmctCode) => {
  return await axios({
    url: `http://online.pranaliinfotech.com/lodging/api/RoomNumber/CreateRoom`,
    method: "POST",
    data: {
      RMNO_DESC: roomDesc,
      RMCT_CODE: rmctCode,
    },
    headers: {
      "content-type": "application/json",
      "Access-Control-Allow-Origin": "*",
    },
  });
};

export const updateRoom = async (catName, fare, extraFare, rmctCode) => {
  return await axios({
    url: `http://online.pranaliinfotech.com/lodging/api/RoomCategory/UpdateCategory`,
    method: "POST",
    data: {
      RMCT_DESC: catName,
      ROOM_FARE: fare,
      EXTRA_PERSON_FARE: extraFare,
      RMCT_CODE: rmctCode,
    },
    headers: {
      "content-type": "application/json",
      "Access-Control-Allow-Origin": "*",
    },
  });
};

export const deleteRoom = async (rmnoCode) => {
  return await axios({
    url: `http://online.pranaliinfotech.com/lodging/api/RoomCategory/DeleteCategory`,
    method: "POST",
    data: {
      RMNO_CODE: rmnoCode,
    },
    headers: {
      "content-type": "application/json",
      "Access-Control-Allow-Origin": "*",
    },
  });
};
