const addToDB = (RegisterInfo) => {
  return new Promise(async (resolve, reject) => {
    if (RegisterInfo) {
      if (
        RegisterInfo.email === "" ||
        RegisterInfo.name === "" ||
        RegisterInfo.password === ""
      ) {
        alert("Name or Email or Password is Empty!!!");
        return;
      } else {
        const exist = await currentLocalStorageData();
        if (exist === null) {
          addToLocalStorage(RegisterInfo);
        } else {
          const parseExist = JSON.parse(exist);
          const checkingEmail = parseExist.find(
            (items) => items.email === RegisterInfo.email
          );
          if (checkingEmail) {
            return;
          } else {
            upDateLocalStorage(RegisterInfo);
          }
        }
      }
      resolve("success");
    } else {
      reject("failed");
    }
  });
};

const addToLocalStorage = (RegisterInfo) => {
  const locaStorage = [];
  locaStorage.push(RegisterInfo);
  localStorage.setItem("RegisterInfo", JSON.stringify(locaStorage));
};

const upDateLocalStorage = async (newLoginInfo) => {
  const exist = await currentLocalStorageData();
  const parseExist = JSON.parse(exist);
  parseExist.push(newLoginInfo);
  localStorage.setItem("RegisterInfo", JSON.stringify(parseExist));
};

const upDateLoalStorageAfterPC = async (newLoginInfo) => {
  const exist = await currentLocalStorageData();
  const parseExist = JSON.parse(exist);
  const rest = parseExist.filter((items) => items.email !== newLoginInfo.email);
  rest.push(newLoginInfo);
  localStorage.setItem("RegisterInfo", JSON.stringify(rest));
};

const authorization = (email, password) => {
  return new Promise(async (resolve, reject) => {
    if (email && password) {
      const exist = await currentLocalStorageData();
      const parseExist = JSON.parse(exist);
      if (parseExist) {
        const checkEmailAndPassword = parseExist.find(
          (items) => items.email === email && items.password === password
        );
        checkEmailAndPassword ? resolve("Succes") : reject("Reject");
      } else {
        alert("You does not have any account\n Please Register");
      }
    }
  });
};

const currentLocalStorageData = () => {
  return localStorage.getItem("RegisterInfo");
};

const currentLocalStorageUserData = () => {
  return localStorage.getItem("userInfo");
};

const changePassword = (email, password, confirmPassword) => {
  return new Promise(async (resolve, reject) => {
    if (password && confirmPassword) {
      const exist = await currentLocalStorageData();
      const parseExist = JSON.parse(exist);
      if (parseExist) {
        const checkingEmail = parseExist.find((items) => items.email === email);
        checkingEmail.password = confirmPassword;
        upDateLoalStorageAfterPC(checkingEmail);
        resolve("Success");
      }
    } else {
      reject("Error");
    }
  });
};

const setUserName = (email) => {
  return new Promise(async (resolve, reject) => {
    if (email) {
      const exist = await currentLocalStorageData();
      const parseExist = JSON.parse(exist);
      const foundEmail = parseExist.find((items) => items.email === email);
      resolve(foundEmail);
    }
  });
};

const savedLogedUser = (userInfo) => {
  const locaStorage = [];
  locaStorage.push(userInfo);
  localStorage.setItem("userInfo", JSON.stringify(locaStorage));
};

export {
  addToDB,
  currentLocalStorageData,
  authorization,
  changePassword,
  setUserName,
  savedLogedUser,
  currentLocalStorageUserData
};
