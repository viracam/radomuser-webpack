const fs = require('fs');

fs.writeFileSync('./.env', `APPI = ${process.env.APPI}\n`)