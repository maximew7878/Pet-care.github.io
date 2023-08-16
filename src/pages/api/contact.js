import { db } from "@/components/firebase";
import { addDoc, collection } from "firebase/firestore";

const handler = async (req, res) => {
    if (req.method === "POST") {
        const { input } = req.body;
        const Col = collection(db, "Contact");
        const docRef = addDoc(Col, input);
        res.status(200).json({ success: true });
    } else {
        res.status(400).json({ message: "something went wrong" });
    }
};

export default handler;
