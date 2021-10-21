import Request from "@/apis/request";

interface ApisVO {
  http: Request | undefined;
}

class Apis implements ApisVO {
  http: Request | undefined;

  constructor() {
    if (!this.http) {
      this.http = new Request();
    }
  }

  getUserInfo = (params?: any) => {
    return this.http?.getD("/user/info", params);
  };

  postLogin = (params?: any) => {
    return this.http?.postD("/user/login", params);
  };
}

export default new Apis();
