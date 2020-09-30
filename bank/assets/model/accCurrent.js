import { Account } from "./account";

class Current extends (Account) {
    constructor(Account, limit) {
        super(Account);
        this.limit = limit;
    }
}