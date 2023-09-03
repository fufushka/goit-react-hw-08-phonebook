import axios from 'axios';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com/';

export const getAllContacts = () => {
  const data = axios.get('contacts');
  return data;
};
export const addNewContact = async contactData => {
  const data = await axios({
    method: 'post',
    url: 'contacts',
    data: contactData,
  });
  console.log(data);
  return data.data;
};
export const deleteContact = async id => {
  const data = await axios.delete(`contacts/${id}`);
  return data.data;
};
