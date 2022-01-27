import { toast } from 'react-toastify';

export const BASE_URL = 'https://connections-api.herokuapp.com';

export function getURL(BASE_URL, endpoint) {
  return BASE_URL + endpoint;
}

export async function fetchCreator(url = '', options = {}) {
  try {
    const res = await fetch(url, options);

    if (res.ok) {
      const data = res.json();

      return data;
    } else {
      toast('Something wrong');
    }
  } catch (error) {
    console.log(error);
  }
}
