import axios from "axios"

export const get = (url: string, params?: any, headers?: any) =>
  axios({ method: "get", params, url, headers });
export const post = (url: string, data: any, headers?: any) =>
  axios({ method: "post", data, url, headers });
export const del = (url: string, data?: any, headers?: any) =>
  axios({ method: "delete", url, data, headers });
export const patch = (url: string, data: any, headers?: any) =>
  axios({ method: "patch", data, url, headers });
