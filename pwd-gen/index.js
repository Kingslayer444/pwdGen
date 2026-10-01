'use stirct';

function generatePassword(length) {
  const chars =
    'qwertzuiopüasdfghjklöäyxcvbnmQWERTZUIOPÜSDFGHJKLÖÄYXCVBNM1234567890ß!"§$%&/()=?+#-.,;:-';
  let pwd = '';
  for (let i = 0; i < length; i++) {
    const index = Math.floor(Math.random() * chars.length);
    pwd += chars[index];
  }
  return pwd;
}

module.exports = generatePassword;
