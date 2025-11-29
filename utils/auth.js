import bcrypt from "bcrypt";

/**
 * Hashes a plaintext password using bcrypt.
 *
 * @param {string} password - The plaintext password to hash.
 * @returns {Promise<string>} A promise that resolves to the hashed password.
 */
export const hashPassword = (password) => {
  return new Promise((resolve, reject) => {
    bcrypt.genSalt(12, (err, salt) => {
      if (err) {
        reject(err);
      }
      bcrypt.hash(password, salt, (err, hash) => {
        if (err) {
          reject(err);
        }
        resolve(hash);
      });
    });
  });
};

/**
 * Compares a plaintext password with a hashed password.
 *
 * @param {string} password - The plaintext password to compare.
 * @param {string} hashed - The hashed password to compare against.
 * @returns {Promise<boolean>} A promise that resolves to true if they match, false otherwise.
 */
export const comparePassword = (password, hashed) => {
  return bcrypt.compare(password, hashed);
};
