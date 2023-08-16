import states from "@/components/state.json";

const handler = (req, res) => {
    if (req.method === "GET") {
        res.status(200).json(states);
    } else {
        res.status(400).json({ message: "bad request" });
    }
};

export default handler;
