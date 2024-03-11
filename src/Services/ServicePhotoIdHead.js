import axios from "axios";
export const GET_PHOTOID_HEAD = async () => {
  return await axios.get(
    `http://online.pranaliinfotech.com/lodging/api/PhotoID/GetPhotoId`
  );
};

export const CREATE_PHOTOID_HEAD = async (phidDesc) => {
  return await axios({
    url: `http://online.pranaliinfotech.com/lodging/api/PhotoID/CreatePhotoId`,
    method: "POST",
    data: {
      PHID_DESC: phidDesc,
    },
    headers: {
      "content-type": "application/json",
      "Access-Control-Allow-Origin": "*",
    },
  });
};

export const UPDATE_PHOTOID_HEAD = async (phidDesc, phidCode) => {
  return await axios({
    url: `http://online.pranaliinfotech.com/lodging/api/PhotoID/UpdatePhotoId`,
    method: "POST",
    data: {
      PHID_DESC: phidDesc,
      PHID_CODE: phidCode,
    },
    headers: {
      "content-type": "application/json",
      "Access-Control-Allow-Origin": "*",
    },
  });
};

export const DELETE_PHOTOID_HEAD = async (phidCode) => {
  return await axios({
    url: `http://online.pranaliinfotech.com/lodging/api/PhotoID/DeletePhotoId`,
    method: "POST",
    data: {
      PHID_CODE: phidCode,
    },
    headers: {
      "content-type": "application/json",
      "Access-Control-Allow-Origin": "*",
    },
  });
};
