export default async function handler(req, res) {
    try {
        if (req.method === "POST") {
            console.log("Posting")
            let data = await fetch("http://127.0.0.1:8000/contact/message/", req.body);
            const json = await data.json
            console.log(data.status)
            console.log
            return res.status(201).json(data);

        }
    } catch (error) {
        console.log(error);
        return res.status(error.status || 500).end(error.message);
    }
}