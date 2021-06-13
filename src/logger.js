import { Logger } from '@ttfb/aliasgame';
const host = process.env.LOGGER_HOST;
const service = 'notify.server';

export default new Logger(host, service);
