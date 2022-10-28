const fs = require(fs);

fs.writeFileSync('./.env', `API = ${process.env.APPI}\n`)