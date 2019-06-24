import logUpdate from 'log-update';
import chalk from 'chalk';

export const log = (string) => {
    logUpdate(chalk.blue.bgRed.bold(string));
};
