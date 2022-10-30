export default function handler(req, resp) {
    
    if(req.method === "GET") {
        handlerGet(req, resp) 
    } else {
        req.status(405).send()
    }
    
    function handleGet(req, resp) {
        resp.status(200).json({
            id: 3,
            name: 'Walter',
            age: 32,
            human: true
        })
    }


}
