const {
    PutObjectCommand,
    S3Client
} = require('@aws-sdk/client-s3')

module.exports.save = async (name, data) => {
    const params = {
        Bucket: 'pizza-luvrs-prill.tylertech',
        Key: `pizzas/${name}.png`,
        Body: Buffer.from(data, 'base64'),
        ContentEncoding: 'base64',
        ContentType: 'image/png'
    }

    const client = new S3Client({ region: 'us-east-1' })
    const command = new PutObjectCommand(params)
    await client.send(command)

    return `//s3.amazonaws.com/pizza-luvrs-prill.tylertech/pizzas/${params.Key}`
}