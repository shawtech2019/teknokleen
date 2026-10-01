import axios from "axios";
import _ from "lodash";
export const APP_API_URL = window.location.host.includes("localhost")
  ? "https://tekno.onrender.com/api" :
    "https://tekno.onrender.com/api";

export const validatePasswordRegex = /^(?=.*?[A-Z])(?=(.*[a-z]){1,})(?=(.*[\d]){1,})(?=(.*[\W]){1,})(?!.*\s).{8,}$/;

export const httpPostWithoutToken = async (url, data) => {
  return await axios
    .post(`${APP_API_URL}/${url}`, data)
    .then((resp) => {
      return resp.data;
    })
    .catch(function (error) {
      if (error.code === "ERR_NETWORK") {
        return { error: "An error occurred, please try again later" };
      }
      const msg =
        _.get(error, "response?.data?.message") ||
        error?.response?.data?.message;
      return {
        error: msg,
        status: error?.response?.data.status,
        statusCode: error?.response?.data.statusCode,
      };
    });
};
export const httpGetWithoutToken = async (url) => {
    return await axios
      .get(`${APP_API_URL}/${url}`, {
      })
      .then((resp) => {
        return resp.data;
      })
      .catch(function (error) {
        if (error.code === "ERR_NETWORK") {
          return { error: "An error occurred, please try again later" };
        }
        const msg =
          _.get(error, "response?.data?.message") ||
          error?.response?.data?.message;
        return { error: msg };
      });
  };
export const httpPostWithToken = async (url, data) => {
  const token = sessionStorage.getItem("sj_token");
  // const token = ls.get("sj_token", { decrypt: true });
  return await axios
    .post(`${APP_API_URL}/${url}`, data, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .then((resp) => {
      return resp.data;
    })
    .catch(function (error) {
      if (error.code === "ERR_NETWORK") {
        return { error: "An error occurred, please try again later" };
      }
      const msg =
        _.get(error, "response?.data?.message") ||
        error?.response?.data?.message;
      return { error: msg };
    });
};

export const httpPatchWithoutToken = async (url, data) => {
  return await axios
    .patch(`${APP_API_URL}/${url}`, data)
    .then((resp) => {
      return resp.data;
    })
    .catch(function (error) {
      if (error.code === "ERR_NETWORK") {
        return { error: "An error occurred, please try again later" };
      }
      const msg =
        _.get(error, "response?.data?.message") ||
        error?.response?.data?.message;
      return { error: msg };
    });
};

export const httpDeleteWithToken = async (url, data) => {
  const token = sessionStorage.getItem("sj_token");
  // const token = ls.get("sj_token", { decrypt: true });
  return await axios
    .delete(`${APP_API_URL}/${url}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .then((resp) => {
      return resp.data;
    })
    .catch(function (error) {
      if (error.code === "ERR_NETWORK") {
        return { error: "An error occurred, please try again later" };
      }
      const msg =
        _.get(error, "response?.data?.message") ||
        error?.response?.data?.message;
      return { error: msg };
    });
};

export const httpWithTokenRest = async (url, data) => {
  const token = sessionStorage.getItem("sj_token");
  // const token = ls.get("sj_token", { decrypt: true });
  return await axios
    .post(
      `${APP_API_URL}/${url}`,
      { data },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    )
    .then((resp) => {
      return resp.data;
    })
    .catch(function (error) {
      const msg =
        _.get(error, "response?.data?.message") ||
        error?.response?.data?.message;
      return { error: msg };
    });
};

export const httpPatch2WithTokenRest = async (url, data) => {
  const token = sessionStorage.getItem("sj_token");
  // const token = ls.get("sj_token", { decrypt: true });
  return await axios
    .patch(`${APP_API_URL}/${url}`, data, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .then((resp) => {
      return resp.data;
    })
    .catch(function (error) {
      const msg =
        _.get(error, "response?.data?.message") ||
        error?.response?.data?.message;
      return { error: msg };
    });
};

export const httpPutWithTokenRest = async (url, data) => {
  const token = sessionStorage.getItem("sj_token");
  // const token = ls.get("sj_token", { decrypt: true });
  return await axios
    .put(`${APP_API_URL}/${url}`, data, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .then((resp) => {
      return resp.data;
    })
    .catch(function (error) {
      const msg =
        _.get(error, "response?.data?.message") ||
        error?.response?.data?.message;
      return { error: msg };
    });
};

export const httpPatchWithTokenRest = async (url, data) => {
  const token = sessionStorage.getItem("sj_token");
  // const token = ls.get("sj_token", { decrypt: true });
  return await axios({
    method: "PATCH",
    url: `${APP_API_URL}/${url}`,
    data: data,
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "multipart/form-data",
    },
  })
    .then(function (resp) {
      return resp.data;
    })
    .catch(function (error) {
      if (error.code === "ERR_NETWORK") {
        return { error: "An error occurred, please try again later" };
      }
      const msg =
        _.get(error, "response?.data?.message") ||
        error?.response?.data?.message;
      return { error: msg };
    });
}
export const httpGetWithTokenRest = async (url) => {
  const token = sessionStorage.getItem("sj_token");
  // const token = ls.get("sj_token", { decrypt: true });
  return await axios
    .get(`${APP_API_URL}/${url}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .then((resp) => {
      return resp.data;
    })
    .catch(function (error) {
      if (error.code === "ERR_NETWORK") {
        return { error: "An error occurred, please try again later" };
      }
      const msg =
        _.get(error, "response?.data?.message") ||
        error?.response?.data?.message;
      return { error: msg };
    });
};



export const isValidUrl = (str) => {
  const pattern = new RegExp(
    "^([a-zA-Z]+:\\/\\/)?" + // protocol
      "((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|" + // domain name
      "((\\d{1,3}\\.){3}\\d{1,3}))" + // OR IP (v4) address
      "(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*" + // port and path
      "(\\?[;&a-z\\d%_.~+=-]*)?" + // query string
      "(\\#[-a-z\\d_]*)?$", // fragment locator
    "i"
  );
  return pattern.test(str);
};

export const alpha = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
