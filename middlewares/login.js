// login.js
const rbacMap = {
  joeli: {
    token: "5e4c9e0553ce2b001306fde8",
    userInfo: {
      id: 17,
      name: "abc2",
      permissions: ["BUSINESS_SYSTEM", "SUBSCRIBE_SYSTEM"],
      role: "SUPERADMIN",
      username: "joeli"
    }
  },
  alex: {
    token: "5e4c9e0553ce2b001306fde8",
    userInfo: {
      id: 17,
      name: "abc2",
      permissions: ["BUSINESS_SYSTEM", "SUBSCRIBE_SYSTEM"],
      role: "ADMIN",
      username: "alex"
    }
  },
  mark: {
    token: "5e4c9e0553ce2b001306fde8",
    userInfo: {
      id: 17,
      name: "abc2",
      permissions: ["PAGES"],
      role: "NORMAL",
      username: "mark"
    }
  },
  elena: {
    token: "5e4c9e0553ce2b001306fde8",
    userInfo: {
      id: 17,
      name: "abc2",
      permissions: [],
      role: "GUEST",
      username: "elena"
    }
  }
};

// Request Sample
// {
//   "username":"joeli",
//   "password":"123321"
// }

module.exports = (req, res, next) => {
  if (req.method == "POST" && req.path == "/authenticate") {
    // lowercase username
    const userName = req.body.username;
    console.log(userName);
    if (Object.keys(rbacMap).includes(userName)) {
      res.status(200).json(rbacMap[userName]);
    } else {
      res.status(400).json({ message: "wrong username" });
    }
  } else if (req.method == "POST" && req.path == "/login") {
    // uppercase username
    if (req.body.userName === "admin") {
      res
        .status(200)
        .json({ status: "ok", type: "account", currentAuthority: "admin" });
    } else {
      res
        .status(200)
        .json({ status: "ok", type: "account", currentAuthority: "guest" });
    }
  } else {
    next();
  }
};
