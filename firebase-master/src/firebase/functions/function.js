import { collection, doc, getDocs, setDoc } from "firebase/firestore";
import { firestore } from "../config";

export const saveItem = async (data) => {
  console.log(data);
  await setDoc(doc(firestore, "test", `${Date.now()}`), data, { merge: true });
};

export const getAllData = async () => {
  const allItems = await getDocs(collection(firestore, "test"));
  allItems.docs.map((doc) => console.log(doc.data()));
};



