import { reference } from "@/components/firebase";
import { getDownloadURL, uploadBytes } from "firebase/storage";

const handler = async (req, res) => {
    if (req.method === "POST") {
        const { input } = req.body;
        const storageRef = reference(input.Name, input.URL.name);
        const uploadTask = await uploadBytes(storageRef, input.URL);
        const url = await getDownloadURL(uploadTask.ref);
        res.status(200).json(url);
    } else {
        res.status(400).json({ message: "Something went wrong" });
    }
};

export default handler;
