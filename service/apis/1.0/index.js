import ApiRequest from "../../request/ApiRequest";
import { urls } from "./urls";

class Apis {
  constructor() {}
  login = data => ApiRequest.post(urls.LOGIN, data);
  getUsers = () => ApiRequest.get(urls.USERS);
}

export default new Apis();
