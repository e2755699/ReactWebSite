import privilege from './privilege'

var islogIned = false;

export default {

    logIn(userState) {
        localStorage.username = userState['username'];
        localStorage.account = userState['account'];
        localStorage.email = userState['email'];
        localStorage.CID = userState['CID'];
        localStorage.level = userState['level'];
        islogIned = true;
    },

    getUserState() {
        let userState = {
            username : localStorage.username,
            account : localStorage.account,
            email : localStorage.email,
            CID : localStorage.CID,
            level : localStorage.level,
        }
        return userState;
    },

    getCIDByLevel(level) {
        if(level == '0'){
            return '0';
        }else{
          return localStorage.CID;
        }
    },


    logOut(cb) {
        delete localStorage.username;
        delete localStorage.account;
        delete localStorage.email;
        delete localStorage.CID;
        delete localStorage.level;
        islogIned = false;
        if (cb) cb()
            this.onChange(false)
    },

    loggedIn() {
        return !!islogIned;
    },

    onChange() {},

    getLevelTable() {
        return ["A", "B1", "B2", "C1"];
    },

    getPrivilegeTable(){
            return  privilege(parseInt(localStorage.level))();
    }
}
