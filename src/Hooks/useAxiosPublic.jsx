import axios from "axios";


const AxiosPublic = axios.create({
  baseURL:""
})

const UseAxiosPublic = () => {
  return AxiosPublic;
};

export default UseAxiosPublic;
