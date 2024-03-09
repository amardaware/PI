import axios from "axios";

export const GET_CATEGORY = async () => {
  return await axios.get(
    `http://online.pranaliinfotech.com/lodging/api/RoomCategory/GetCategories`
  );
};

export const CREATE_CATEGORY = async (
  categoryDesc,
  categoryFare,
  categoryExtra
) => {
  return await axios({
    url: `http://online.pranaliinfotech.com/lodging/api/RoomCategory/CreateCategory`,
    method: "POST",
    data: {
      RMCT_DESC: categoryDesc,
      ROOM_FARE: categoryFare,
      EXTRA_PERSON_FARE: categoryExtra,
    },
    headers: {
      "content-type": "application/json",
      "Access-Control-Allow-Origin": "*",
    },
  });
};

export const UPDATE_CATEGORY = async (catName, fare, extraFare, rmctCode) => {
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

export const DELETE_CATEGORY = async (rmctCode) => {
  return await axios({
    url: `http://online.pranaliinfotech.com/lodging/api/RoomCategory/DeleteCategory`,
    method: "POST",
    data: {
      RMCT_CODE: rmctCode,
    },
    headers: {
      "content-type": "application/json",
      "Access-Control-Allow-Origin": "*",
    },
  });
};
