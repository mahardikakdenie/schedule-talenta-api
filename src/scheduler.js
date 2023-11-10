import cron from 'node-cron';

const parseTime = (time) => time.split(':');

export const defineScheduler = async (time, callback) => {
    const [hour, min] = parseTime(time);

    const task = cron.schedule(`${min} ${hour} * * 1-5`, async () => {
        console.log(await callback());
    });

    return task;
};
