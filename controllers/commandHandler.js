
function commandHandler(eventMessage) {
    let response = defaultMessage();
    if (eventMessage.type === 'text') {
        response = eventMessage.text;
    }
    return {
        type: 'text',
        text: response
    };
}

function defaultMessage() {
    return 'Hello!';
}

exports.commandHandler = commandHandler;