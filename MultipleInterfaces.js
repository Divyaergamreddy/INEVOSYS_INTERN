function getEmailDescription(email) {
    return `Email from ${email.sender}: ${email.subject}`;
}
function getTextMessageDescription(textMsg) {
    return `Text from ${textMsg.sender}: ${textMsg.text}`;
}
const email = {
    id: "E101",
    sender: "divya@gmail.com",
    subject: "Meeting",
    body: "Project discussion at 10 AM"
};
const text = {
    id: "T101",
    sender: "9876543210",
    text: "Hello Divya",
    carrier: "Jio"
};
console.log(getEmailDescription(email));
console.log(getTextMessageDescription(text));
export {};
