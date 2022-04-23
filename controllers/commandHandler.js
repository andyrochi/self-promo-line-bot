const data = require('../data/data.json');

function commandHandler(eventMessage) {
    let response = defaultMessage();
    if (eventMessage.type === 'text') {
        const command = eventMessage.text;
        if (command in data) {
            response = data[command];
        }
    }
    return response;
}

function defaultMessage() {
    return data['home'];
}

exports.commandHandler = commandHandler;