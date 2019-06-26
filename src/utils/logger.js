import chalk from 'chalk';

export const log = (string) => {
    console.log(chalk.blue.bgRed.bold(string));
};
