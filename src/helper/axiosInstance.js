import axios from 'axios';

const handleRequestError = (e) => {

  if (e.response && e.response.data && e.response.data.message)
    return { error: e.response.data.message, status: e.response.status, ...e.response.data };

  if (e.response && e.response.data && e.response.data.errors)
    return { error: e.response.data.errors, status: e.response.status, ...e.response.data };

  if(e.response)
    return { error: 'Something went wrong!', status: e.response.status, ...e.response.data };

  return { error: 'Something went wrong!', status: 503 };
};

const axiosInstance = axios.create({
  baseURL:'https://api-mainnet.magiceden.io/idxv2',
});

// adding interceptors for request
axiosInstance.interceptors.request.use(
  async (config) => config ,
  (error)=>{
    // for any request return promise reject with error
    return Promise.reject(handleRequestError(error));
  }
);

axiosInstance.interceptors.response.use(
  (response)=>{
    return response;
  },
  (err)=>{
    return Promise.reject(handleRequestError(err));
  });

export default axiosInstance;