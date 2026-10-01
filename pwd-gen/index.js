'use strict';

function generatePassword(length, withSpecialCharacters = true) {
  const chars = withSpecialCharacters
    ? 'qwertzuiopüasdfghjklöäyxcvbnmQWERTZUIOPÜSDFGHJKLÖÄYXCVBNM1234567890ß!"§$%&/()=?+#-.,;:-'
    : 'qwertzuiopüasdfghjklöäyxcvbnmQWERTZUIOPÜSDFGHJKLÖÄYXCVBNM1234567890';
  let pwd = '';
  for (let i = 0; i < length; i++) {
    const index = Math.floor(Math.random() * chars.length);
    pwd += chars[index];
  }
  return pwd;
}

module.exports = generatePassword;
