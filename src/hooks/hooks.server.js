import * as dotenv from 'dotenv';

if (process.env.NODE_ENV !== 'production') {
  const result = dotenv.config();
  if (result.error) {
    throw result.error;
  }
}

// Your server-side code here