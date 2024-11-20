import { db } from "../_utils/firebase";
import { collection, getDocs, addDoc, query } from "firebase/firestore";

export async function getItems({ userId }) {
  try {
    console.log("userId:", userId);
    const itemsRef = collection(db, "users", userId, "items");
    const q = query(itemsRef);
    const querySnapshot = await getDocs(q);

    const items = [];

    querySnapshot.forEach((doc) => {
      items.push({
        id: doc.id,
        ...doc.data(),
      });
    });
    return items;
  } catch (error) {
    console.error("Error fetching items:", error.message);
    throw error;
  }
}

export async function addItem(userId, item) {
  try {
    const itemRef = collection(db, "users", userId, "items");
    const docRef = await addDoc(itemRef, item);
    return docRef.id;
  } catch (error) {
    console.error("Error adding item:", error.message);
    throw error;
  }
}
