import {
	defineScheduler
} from './scheduler.js';

import {
	clockIn,
	clockOut
} from './attandance.js';

import { configuration } from './config.js';

const { timeClockIn, timeClockOut, email, password } = configuration;

if (timeClockIn && timeClockOut) {
	defineScheduler(timeClockIn, async () => {
		await clockIn({ email, password });
	});
	
	defineScheduler(timeClockOut, async () => {
		await clockOut({email, password});
	})
}

console.log('SCRIPT BERHASIL DI JALANKAN');
