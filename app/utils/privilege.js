import ajax from '../utils/ajax'
import userState from '../utils/userState'
import  {SERVERPATH, WS_APP, WS_VIEW, WS_ASSETS, WS_IMGS, WS_ICONS, WS_SRC, WS_API} from '../consts'

//function(){..} 和 object {}的差異 function不用{1:.. , } object要
//簡單講function就是oo的class喇～你有看過class在那邊...,的逆
//javascript容易搞混是因為他們可以把function or class當成變數傳遞而oo裡的class只能instance成object才能傳遞
/* ex
var object = {
    a : "A",   //string
    b : ["A","B"],  //array
    c : function (){    //function or class
        ....
    },
    d : {   //object
        ...
    }
}
*/
export default function privilege(level){
    switch(level){
        case 0:
            return levelA;
        case 1:
            return levelB1;
        case 2:
            return levelB2;
        case 3:
            return levelC1;
            
    }
}

//為啥阿 這樣會直接執行耶!?
/*
{
    getStationAry : getStationAry(level, CID), //這行射惹
    getStationAry : () => { getStationAry(level, CID)}, //這行才不會射 但是沒retrun
    getStationAry : () => getStationAry(level, CID) //這行跟上面插在可以return惹
    getStqationAry : () => { return getStation(level, CID)} //這行最標準惹
    getStationAry : function(){     //這跟上一行一樣 應該拉
        getStationAry(level, CID)}
    }
}
*/

function levelA(){
    let levelName = "A";
    let CID = localStorage.CID;
    let level = 0;

    return {
        level : level,
        levelName : levelName,
        getStationAry : () =>  getStationAry(0),   //記得要把function return 不能只有執行因為要回傳promise
        getCustomAry :  () =>  getCustomAry(0),
        getCustomAccountAry : (CID) => getCustomAccountAry(CID),
        navDisplay : {
            RealTime : true, 
            History : true, 
            SmartDetect :true, 
            CustomManagement : true, 
            StatiotManagement : true,
            StationInformation :true,
            StationParams : true,
            StationFixedRecord : true
        },
        mail : true,
        configPrivilege : {
            customInfo : {
                show : true,
                edit : true,
                new : true,
                del : true
            },
            customAccount : {
                show : true,
                edit : true,
                new : true,
                del : true                
            },
            stationInfo : {
                show : true,
                edit : true,
                new : true,
                del : true 
            },
            stationParams : {
                show : true,
                edit : true,
            },
            stationFixedRecord : {
                show : true,
                new : true
            }
        }
    }
}


function levelB1(){
    let levelName = "B1";
    let CID = localStorage.CID;
    let level = 1;

    return {
        level : level,
        levelName : levelName,
        getStationAry : () =>  getStationAry(CID),   //記得要把function return 不能只有執行因為要回傳promise
        getCustomAry :  () =>  getCustomAry(CID),
        getCustomAccountAry : (CID) => getCustomAccountAry(CID),
        navDisplay : {
            RealTime : true, 
            History : true, 
            SmartDetect :true, 
            CustomManagement : true, 
            StatiotManagement : true,
            StationInformation :true,
            StationParams : true,
            StationFixedRecord : true
        },
        mail : true,
        configPrivilege : {
            customInfo : {
                show : true,
                edit : true,
                new : false,
                del : false
            },
            customAccount : {
                show : true,
                edit : true,
                new : true,
                del : true                
            },
            stationInfo : {
                show : true,
                edit : true,
                new : true,
                del : true 
            },
            stationParams : {
                show : true,
                edit : true,
            },
            stationFixedRecord : {
                show : true,
                new : true
            }
        }
    }
}

function levelB2(){
    let levelName = "B2";
    let CID = localStorage.CID;
    let level = 2;

    return {
        level : level,
        levelName : levelName,
        getStationAry : () =>  getStationAry(CID),   //記得要把function return 不能只有執行因為要回傳promise
        getCustomAry :  () =>  getCustomAry(CID),
        getCustomAccountAry : (CID) => getCustomAccountAry(CID),
        navDisplay : {
            RealTime : true, 
            History : true, 
            SmartDetect :true, 
            CustomManagement : true, 
            StatiotManagement : true,
            StationInformation :true,
            StationParams : true,
            StationFixedRecord : true
        },
        mail : true,
        configPrivilege : {
            customInfo : {
                show : true,
                edit : false,
                new : false,
                del : false
            },
            customAccount : {
                show : true,
                edit : true,
                new : true,
                del : true                
            },
            stationInfo : {
                show : true,
                edit : true,
                new : false,
                del : false 
            },
            stationParams : {
                show : true,
                edit : true,
            },
            stationFixedRecord : {
                show : true,
                new : true
            }
        }
    }
}

function levelB2(){
    let levelName = "B2";
    let CID = localStorage.CID;
    let level = 2;

    return {
        level : level,
        levelName : levelName,
        getStationAry : () =>  getStationAry(CID),   //記得要把function return 不能只有執行因為要回傳promise
        getCustomAry :  () =>  getCustomAry(CID),
        getCustomAccountAry : (CID) => getCustomAccountAry(CID),
        navDisplay : {
            RealTime : true, 
            History : true, 
            SmartDetect :true, 
            CustomManagement : true, 
            StatiotManagement : true,
            StationInformation :true,
            StationParams : true,
            StationFixedRecord : true
        },
        mail : true,
        configPrivilege : {
            customInfo : {
                show : true,
                edit : false,
                new : false,
                del : false
            },
            customAccount : {
                show : false,
                edit : false,
                new : false,
                del : false                
            },
            stationInfo : {
                show : true,
                edit : false,
                new : false,
                del : false 
            },
            stationParams : {
                show : true,
                edit : true,
            },
            stationFixedRecord : {
                show : true,
                new : true
            }
        }
    }
}

const getStationAry = function(CID) {
    let url = WS_API + "PowerCenter.php?action=getStationGroup";
    let data = {CID : CID}
    return ajax(url, data);
}

const getCustomAry = function(CID){
    let url = WS_API + "PowerCenter.php?action=getCustomGroup";
    let data = {CID : CID}
    return ajax(url, data);
}

const getCustomAccountAry = function(CID){
    let url = WS_API + "PowerCenter.php?action=getCustomAccountGroup";
    let data = {
        CID : CID,
    }
    return ajax(url, data);
}


