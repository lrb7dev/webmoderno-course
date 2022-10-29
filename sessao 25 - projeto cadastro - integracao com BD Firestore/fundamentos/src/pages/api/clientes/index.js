export default function handler(req, resp) {
    //resp.status(200).send() //importante mandar algo ex: .send()
    resp.status(200).json({
        id: 3,
        name: 'Walter',
        age: 32,
        human: true
    })


}
