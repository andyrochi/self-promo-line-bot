/*
    class UserManager:
        Managers a user dictionary userDict, where userIds are
        used as keys, and the values are UserInfo.
    
    methods:
        insertUser(userInfo: UserInfo):
            inserts a new user into the userDict if the userId does not exists.
        
        getUser(userId: String):
            returns the UserInfo of the userId if it exists in the userDict,
                otherwise returns null.
*/
class UserManager {
    constructor() {
        this.userDict = {};
    }
    
    insertUser(userInfo) {
        if (!(userInfo.userId in this.userDict)){
            this.userDict[userInfo.userId] = userInfo;
        }
        return this.userDict[userInfo.userId];
    }

    getUser(userId) {
        if (!(userId in this.userDict)){
            return null;
        }
        return this.userDict[userId];
    }
}

/*
    UserInfo:
        A single entry in the UserManager.
    
    members:
        userId: String
        messageHistory: Array
    
    methods:
        getLastMessage:
            returns the last message in messageHistory if it is not empty,
            otherwise returns 'home'.
    
        popHistory:
            Removes the last message.
        
        saveHistory(command: String):
            Saves the command.
            If there are over 50 messages in the message history, we clear 40 messages.
*/
class UserInfo {
    constructor(userId) {
        this.userId = userId;
        this.messageHistory = [];
        console.log('New user added:', userId);
    }

    getLastMessage() {
        if (this.messageHistory.length === 0) {
            return 'home';
        }
        return this.messageHistory[this.messageHistory.length - 1];
    }

    popHistory() {
        if (this.messageHistory) this.messageHistory.pop();
    }

    saveHistory(command) {
        if(this.messageHistory >= 50) {
            let times = 40;
            while(times--) this.messageHistory.shift();
        }
        this.messageHistory.push(command);
    }
}

module.exports = { 
    UserInfo: UserInfo, 
    UserManager: UserManager 
};