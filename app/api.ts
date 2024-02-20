import axios from "axios";
import { order } from "./types";

const server = process.env.SERVER_ENDPOINT;
export const getProducts = async () => {
  return axios.get(server + "/get_active_products");
};
export const getLocations = async () => {
  return axios.get(server + "/get_locations");
};
export const submitOrder = async (order: order) => {
  return axios.post(server + "/submit_order", { order });
};
export const getOrder = async (orderId: string) => {
  return axios.get(server + `/get_order/${orderId}`);
};
