import cleanlog from './index.js'

const log = new cleanlog()

log.success("🎉 Server started successfully!");
log.info("User login detected.");
log.warn("Memory usage is at 85%");
log.error("Database connection failed.");