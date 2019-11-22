import Axios from "axios";

export const getProduk = () => {
  return {
    type: "GET_PRODUK",
    payload: Axios.get(`http://192.168.6.135:8000/produk`)
  };
};

export const getNewProduk = () => {
  return {
    type: "GET_NEW_PRODUK",
    payload: Axios.get(`http://192.168.6.135:8000/produk/new`)
  };
};
