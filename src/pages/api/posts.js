import { db } from "@/components/firebase";
import { collection, getDocs } from "firebase/firestore";

const handler = async (req, res) => {
    if (req.method === "POST") {
        const { state } = req.body;
        const postCol = collection(db, state);
        const snapShot = await getDocs(postCol);
        const ans = snapShot.docs.map((item) => item.data());
        res.status(200).json(ans);
    } else {
        res.status(400).json({ message: "Bad request" });
    }
};

export default handler;
