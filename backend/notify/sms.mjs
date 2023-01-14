class SMSClient {
    constructor(twilioClient, phoneNumber) {
        this.client = twilioClient; 
        this.phoneNumber = phoneNumber
    }

    async sendMessage(message, recipient) {
        return await client.messages
        .create({
            body: message,
            from: this.phoneNumber,
            to: recipient,
        })
    }
}