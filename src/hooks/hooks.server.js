if (process.env.NODE_ENV !== 'production') {
  const result = require('dotenv-safe').config();
  if (result.error) {
    throw result.error;
  }
}

// Your server-side code here