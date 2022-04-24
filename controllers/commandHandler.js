const data = require('../data/data.json');
const { UserManager, UserInfo } = require('./userManager');

const manager = new UserManager();

/*
    Handles commands and maintains each user's history.
*/
function commandHandler(eventSource, eventMessage) {
    const user = handleUser(eventSource);
    let response = defaultMessage();
    if (eventMessage.type === 'text') {
        const command = eventMessage.text;
        if (command in data) {
            if (data[command] === 'back') {
                user.popHistory();
                const lastCommand = user.getLastMessage();
                response = data[lastCommand];
            } else {
                response = data[command];
                // to constant input of identical commands
                if (command !== user.getLastMessage())
                    user.saveHistory(command);
            }
        }
    } else {
        if ('home' !== user.getLastMessage())
            user.saveHistory('home');
    }

    return response;
}

/*
    Check if user is in userManager, if not, add new user.
    Returns the userInfo.
*/
function handleUser(eventSource) {
    const userId = eventSource.userId;
    const user = manager.getUser(userId) || manager.insertUser(new UserInfo(userId));
    return user;
}

function defaultMessage() {
    return data['home'];
}

exports.commandHandler = commandHandler;