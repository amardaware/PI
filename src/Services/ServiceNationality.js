import axios from "axios";
export const GET_NATIONALITY_HEAD = async () => {
  return await axios.get(
    `http://online.pranaliinfotech.com/lodging/api/Nationality/GetNationality`
  );
};

export const CREATE_NATIONALITY_HEAD = async (natiDesc) => {
  return await axios({
    url: `http://online.pranaliinfotech.com/lodging/api/Nationality/CreateNationality`,
    method: "POST",
    data: {
      NATI_DESC: natiDesc,
    },
    headers: {
      "content-type": "application/json",
      "Access-Control-Allow-Origin": "*",
    },
  });
};

export const UPDATE_NATIONALITY_HEAD = async (natiDesc, natiCode) => {
  return await axios({
    url: `http://online.pranaliinfotech.com/lodging/api/Nationality/UpdateNationality`,
    method: "POST",
    data: {
      NATI_DESC: natiDesc,
      NATI_CODE: natiCode,
    },
    headers: {
      "content-type": "application/json",
      "Access-Control-Allow-Origin": "*",
    },
  });
};

export const DELETE_NATIONALITY_HEAD = async (natiCode) => {
  return await axios({
    url: `http://online.pranaliinfotech.com/lodging/api/Nationality/DeleteNationality`,
    method: "POST",
    data: {
      NATI_CODE: natiCode,
    },
    headers: {
      "content-type": "application/json",
      "Access-Control-Allow-Origin": "*",
    },
  });
};
