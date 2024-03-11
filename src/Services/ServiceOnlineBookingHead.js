import axios from "axios";
export const GET_ONLINE_BOOKING_HEAD = async () => {
  return await axios.get(
    `http://online.pranaliinfotech.com/lodging/api/OnlineBookingHead/GetOnlineBookingHead`
  );
};

export const CREATE_ONLINE_BOOKING_HEAD = async (onbkDesc) => {
  return await axios({
    url: `http://online.pranaliinfotech.com/lodging/api/OnlineBookingHead/CreateOnlineBookingHead`,
    method: "POST",
    data: {
      ONBK_DESC: onbkDesc,
    },
    headers: {
      "content-type": "application/json",
      "Access-Control-Allow-Origin": "*",
    },
  });
};

export const UPDATE_ONLINE_BOOKING_HEAD = async (onbkDesc, onbkCode) => {
  return await axios({
    url: `http://online.pranaliinfotech.com/lodging/api/OnlineBookingHead/UpdateOnlineBookingHead`,
    method: "POST",
    data: {
      ONBK_DESC: onbkDesc,
      ONBK_CODE: onbkCode,
    },
    headers: {
      "content-type": "application/json",
      "Access-Control-Allow-Origin": "*",
    },
  });
};

export const DELETE_ONLINE_BOOKING_HEAD = async (onbkCode) => {
  return await axios({
    url: `http://online.pranaliinfotech.com/lodging/api/OnlineBookingHead/DeleteOnlineBookingHead`,
    method: "POST",
    data: {
      ONBK_CODE: onbkCode,
    },
    headers: {
      "content-type": "application/json",
      "Access-Control-Allow-Origin": "*",
    },
  });
};
