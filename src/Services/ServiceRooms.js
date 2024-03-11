import axios from "axios";
export const GET_ROOM = async () => {
  return await axios.get(
    `http://online.pranaliinfotech.com/lodging/api/RoomNumber/GetRoomNos`
  );
};

export const CREATE_ROOM = async (roomDesc, rmctCode) => {
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

export const UPDATE_ROOM = async (rmnoDesc, rmctCode, rmnoCode) => {
  return await axios({
    url: `http://online.pranaliinfotech.com/lodging/api/RoomNumber/UpdateRoom`,
    method: "POST",
    data: {
      RMNO_DESC: rmnoDesc,
      RMCT_CODE: rmctCode,
      RMNO_CODE: rmnoCode,
    },
    headers: {
      "content-type": "application/json",
      "Access-Control-Allow-Origin": "*",
    },
  });
};

export const DELETE_ROOM = async (rmnoCode) => {
  return await axios({
    url: `http://online.pranaliinfotech.com/lodging/api/RoomNumber/DeleteRoom`,
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
