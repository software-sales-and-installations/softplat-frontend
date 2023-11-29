import { API_BASE_URL } from '../../../../utils/constants';
import {
	ISignInData,
	ISignUpData,
} from '../../../../UI/Popup/PopupTypes';

const API_REG_URL = `${API_BASE_URL}/registration`;
const API_AUTH_URL = `${API_BASE_URL}/auth/login`;

const checkRes = (res: Response) => {
	if (res.ok) {
		return res;
	} else {
		return Promise.reject(res);
	}
};

export const fetchData = (
	url: string,
	method: string,
	data?:
		| ISignInData
		| ISignUpData
		| { email: string },
	token?: string
) => {
	return fetch(url, {
		method,
		headers: {
			'Content-Type': 'application/json',
			...(!!token && { Authorization: `Token ${token}` }),
		},
		...(!!data && { body: JSON.stringify(data) }),
	}).then((res) => checkRes(res));
};
export const fetchSignIn = (data: ISignInData): Promise<Response> => {
	return fetchData(`${API_AUTH_URL}`, 'POST', data).then((res) =>
		checkRes(res)
	);
};

export const fetchSignUp = (data: ISignUpData): Promise<Response> => {
	return fetchData(`${API_REG_URL}`, 'POST', data).then(
		(res) => checkRes(res)
	);
};

