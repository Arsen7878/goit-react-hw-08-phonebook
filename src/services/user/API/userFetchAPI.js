import { fetchCreator, BASE_URL, getURL } from '../../baseAPI';
import { endpoitsUsers } from '../endpoints';

// запрос на вход в существующий аккаунт
export function fetchLogin(data) {
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  };

  return fetchCreator(getURL(BASE_URL, endpoitsUsers.login), options);
}

// запрос на выход с аккаунта
export function fetchLogout(token) {
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  };

  return fetchCreator(getURL(BASE_URL, endpoitsUsers.logout), options);
}

// запрос на регистрацию пользователя
export function fetchRegisterUser(data) {
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  };

  return fetchCreator(getURL(BASE_URL, endpoitsUsers.signup), options);
}

// запрос на получение пользователя по токену
export function fetchGetUser(token) {
  const options = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  };

  return fetchCreator(getURL(BASE_URL, endpoitsUsers.current), options);
}
