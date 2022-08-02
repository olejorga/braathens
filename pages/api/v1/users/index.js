export default function handleUsers(req, res) {
  switch (req.method) {
    case 'GET':
      res.status(200).json({name: 'John Travolta'})
      break
  
    default:
      res.status(405).json({error: 'Method Not Allowed!'})
      break
  }
}