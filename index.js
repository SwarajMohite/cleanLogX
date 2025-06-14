import chalk from 'chalk';

class cleanlog {
  constructor(prefix = '') {
    this.prefix = prefix;
  }

  getnow() {
    console.log(chalk.grey(Date.now()));
  }

  gettimestamp() {
    return new Date().toISOString();
  }

  formatlog(level, color, msg, isBold = false) {
    const timestamp = this.gettimestamp();
    const prefix = this.prefix;

    const plainLog = `${prefix ? `[${prefix}]` : ''} ${timestamp} ${msg}\n`;

    const coloredLevel = color.bold(level);
    const coloredMsg = isBold ? color.bold(msg) : color(msg);

    console.log(
      chalk.gray(timestamp),
      coloredLevel,
      coloredMsg
    );
  }

  success(msg) {
    this.formatlog('[SUCCESS]', chalk.green, msg);
  }

  error(msg) {
    this.formatlog('[ERROR]', chalk.red, msg);
  }

  info(msg) {
    this.formatlog('[INFO]', chalk.blue, msg);
  }

  warn(msg) {
    this.formatlog('[WARNING]', chalk.yellow, msg);
  }
}

export default cleanlog;
