import axios from "axios";
export const GET_ROOM_SERVICE_HEAD = async () => {
  return await axios.get(
    `http://online.pranaliinfotech.com/lodging/api/RoomServiceHead/GetRoomServiceHead`
  );
};

export const CREATE_ROOM_SERVICE_HEAD = async (roomSrDesc) => {
  return await axios({
    url: `http://online.pranaliinfotech.com/lodging/api/RoomServiceHead/CreateRoomServiceHead`,
    method: "POST",
    data: {
      RMSR_DESC: roomSrDesc,
    },
    headers: {
      "content-type": "application/json",
      "Access-Control-Allow-Origin": "*",
    },
  });
};

export const UPDATE_ROOM_SERVICE_HEAD = async (roomSrDesc, roomSrCode) => {
  return await axios({
    url: `http://online.pranaliinfotech.com/lodging/api/RoomServiceHead/UpdateRoomServiceHead`,
    method: "POST",
    data: {
      RMSR_DESC: roomSrDesc,
      RMSR_CODE: roomSrCode,
    },
    headers: {
      "content-type": "application/json",
      "Access-Control-Allow-Origin": "*",
    },
  });
};

export const DELETE_ROOM_SERVICE_HEAD = async (roomSrCode) => {
  return await axios({
    url: `http://online.pranaliinfotech.com/lodging/api/RoomServiceHead/DeleteRoomServiceHead`,
    method: "POST",
    data: {
      RMSR_CODE: roomSrCode,
    },
    headers: {
      "content-type": "application/json",
      "Access-Control-Allow-Origin": "*",
    },
  });
};
