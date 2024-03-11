import axios from "axios";
export const GET_PROFESSION_HEAD = async () => {
  return await axios.get(
    `http://online.pranaliinfotech.com/lodging/api/Profession/GetProfession`
  );
};

export const CREATE_PROFESSION_HEAD = async (profDesc) => {
  return await axios({
    url: `http://online.pranaliinfotech.com/lodging/api/Profession/CreateProfession`,
    method: "POST",
    data: {
      PROF_DESC: profDesc,
    },
    headers: {
      "content-type": "application/json",
      "Access-Control-Allow-Origin": "*",
    },
  });
};

export const UPDATE_PROFESSION_HEAD = async (profDesc, profCode) => {
  return await axios({
    url: `http://online.pranaliinfotech.com/lodging/api/Profession/UpdateProfession`,
    method: "POST",
    data: {
      PROF_DESC: profDesc,
      PROF_CODE: profCode,
    },
    headers: {
      "content-type": "application/json",
      "Access-Control-Allow-Origin": "*",
    },
  });
};

export const DELETE_PROFESSION_HEAD = async (profCode) => {
  return await axios({
    url: `http://online.pranaliinfotech.com/lodging/api/Profession/DeleteProfession`,
    method: "POST",
    data: {
      PROF_CODE: profCode,
    },
    headers: {
      "content-type": "application/json",
      "Access-Control-Allow-Origin": "*",
    },
  });
};
