# cleanLogX

A simple, colorful console logger for Node.js developers with timestamps and optional prefixes.  
Built with [chalk](https://github.com/chalk/chalk) for beautiful terminal output.

## Features

- Color-coded log levels: success, error, info, warning  
- ISO 8601 timestamps on every log  
- Optional prefix to identify module or context  
- Lightweight, easy-to-use, and modern ES Module based  

## Installation

```bash
npm i cleanLogX
````

## Usage

```js
import CleanLog from 'cleanLogX';

// Create logger instance with optional prefix
const log = new CleanLog('MyApp');

log.success('Operation completed successfully.');
log.error('Unable to connect to server.');
log.info('Listening on port 8080.');
log.warn('Memory usage is high.');
```

## Methods

| Method         | Description            |
| -------------- | ---------------------- |
| `success(msg)` | Logs message in green  |
| `error(msg)`   | Logs message in red    |
| `info(msg)`    | Logs message in blue   |
| `warn(msg)`    | Logs message in yellow |

## Example Output

```
2025-06-14T09:30:00.123Z [MyApp] [SUCCESS] Operation completed successfully.
2025-06-14T09:31:00.456Z [MyApp] [ERROR] Unable to connect to server.
2025-06-14T09:32:00.789Z [MyApp] [INFO] Listening on port 8080.
2025-06-14T09:33:00.012Z [MyApp] [WARNING] Memory usage is high.
```

## Requirements

* Node.js v14 or current version
* Chalk 5.x

## License

Apache-2.0 License © Swaraj Mohite

## Author

[Swaraj Mohite](https://github.com/SwarajMohite)
