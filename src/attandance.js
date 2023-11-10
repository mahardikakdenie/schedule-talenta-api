import axios from 'axios';
import FormData from 'form-data';
const url_talenta_attendance = 'http://schedule-api.mahardikakdenie.my.id';

const propertyForm = (object) => {
	console.log("🚀 ~ file: attandance.js:6 ~ propertyForm ~ object:", object)
	const {
		email,
        status,
        password,
    } = object;

	const data = FormData();
	const description = status === 'clockin' ? 'Haloo' : 'Byee';

	data.append('email', email);
	data.append('password', password);
	data.append('status', status);
	data.append('description', description);

	const config = {
		method: 'post',
		url: url_talenta_attendance,
		data: data,
	};

	return config;
};

const attendancePost = async (object) => {
    const configuration = propertyForm(object);
    // const response = await axios(configuration);
	const result = await axios.post(url_talenta_attendance, object);
	console.log("🚀 ~ file: attandance.js:34 ~ attendancePost ~ result:", result.data.data);

    return result.data;
};

export const clockIn = async (object) => {
    return await attendancePost({ ...object,description: '' ,type: 'clockin' });
};

export const clockOut = async (object) => {
    return await attendancePost({ ...object,description: '',type: 'clockout' });
};
