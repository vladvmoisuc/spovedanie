const bcrypt = require("bcrypt");

async function encryptPassword(password) {
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);
  return hashedPassword;
}

function splitParamList(paramsObj, paramToExtract, paramToUse) {
  let paramsList = Object.keys(paramsObj);
  if (paramsList.length && paramToExtract && paramToUse) {
    const values = paramsObj[paramToExtract].split(",");
    return values.map(value => {
      return { [paramToUse]: value };
    });
  }
}

module.exports = {
  encryptPassword,
  splitParamList
};
