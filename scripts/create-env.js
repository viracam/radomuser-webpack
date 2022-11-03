const fs = require('fs');

fs.writeFileSync('./.env', `CI = ${process.env.CI}\n`)