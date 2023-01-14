class SMSClient {
    constructor(twilioClient, phoneNumber) {
        this.client = twilioClient; 
        this.phoneNumber = phoneNumber
    }

    async sendMessage(message, recipient) {
        return await this.client.messages
        .create({
            body: message,
            from: this.phoneNumber,
            to: recipient,
        })
    }
}

export default SMSClient