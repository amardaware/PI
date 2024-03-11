import axios from "axios";
export const GET_LODGING_ITEM_HEAD = async () => {
  return await axios.get(
    `http://online.pranaliinfotech.com/lodging/api/LodgingItem/GetLodgingItem`
  );
};

export const CREATE_LODGING_ITEM_HEAD = async (ldstDesc) => {
  return await axios({
    url: `http://online.pranaliinfotech.com/lodging/api/LodgingItem/CreateLodgingItem`,
    method: "POST",
    data: {
      LDST_DESC: ldstDesc,
    },
    headers: {
      "content-type": "application/json",
      "Access-Control-Allow-Origin": "*",
    },
  });
};

export const UPDATE_LODGING_ITEM_HEAD = async (ldstDesc, ldstCode) => {
  return await axios({
    url: `http://online.pranaliinfotech.com/lodging/api/LodgingItem/UpdateLodgingItem`,
    method: "POST",
    data: {
      LDST_DESC: ldstDesc,
      LDST_CODE: ldstCode,
    },
    headers: {
      "content-type": "application/json",
      "Access-Control-Allow-Origin": "*",
    },
  });
};

export const DELETE_LODGING_ITEM_HEAD = async (ldstCode) => {
  return await axios({
    url: `http://online.pranaliinfotech.com/lodging/api/LodgingItem/DeleteLodgingItem`,
    method: "POST",
    data: {
      LDST_CODE: ldstCode,
    },
    headers: {
      "content-type": "application/json",
      "Access-Control-Allow-Origin": "*",
    },
  });
};
