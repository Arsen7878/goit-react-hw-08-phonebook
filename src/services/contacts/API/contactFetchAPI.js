import { getURL, fetchCreator, BASE_URL } from '../../baseAPI';
import { endpointsContacts } from '../endpoits';

export function fetchGetContacts(token) {
  const options = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  };

  return fetchCreator(getURL(BASE_URL, endpointsContacts.contact), options);
}

export function fetchCreateContact(data, token) {
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(data),
  };

  return fetchCreator(getURL(BASE_URL, endpointsContacts.contact), options);
}

export function fetchDeleteContact(contactId, token) {
  const options = {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  };

  return fetchCreator(
    getURL(BASE_URL, `${endpointsContacts.contact}/${contactId}`),
    options,
  );
}

export function fetchUpdateContact(data, contactId, token) {
  const options = {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(data),
  };

  return fetchCreator(
    getURL(BASE_URL, `${endpointsContacts.contact}/${contactId}`),
    options,
  );
}
