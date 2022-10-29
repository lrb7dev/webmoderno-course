export default function handler(req, resp) {
    resp.status(200).json({ 
        name: 'Teste API',
        metodo: req.method 
    })
}