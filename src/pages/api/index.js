import { db } from "@/components/firebase";
import { addDoc, collection } from "firebase/firestore";

const handler = async (req, res) => {
    if (req.method === "POST") {
        try {
            const { input } = req.body;
            const { state, ...value } = input;
            const Col = collection(db, state);
            const docRef = await addDoc(Col, value);
            res.status(200).json({ success: true, id: docRef.id });
        } catch (err) {
            console.log(err);
            res.status(400).json({ message: "Something went wrong" });
        }
    } else {
        res.status(400).json({ message: "bad request" });
    }
};

export default handler;
