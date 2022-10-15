// create hook for firebase collection

import { useState, useEffect } from "react";
import { app } from "../firebase/initFirebase";
import {
  onSnapshot,
  query,
  collection,
  where,
  getFirestore,
  limit,
  orderBy,
} from "firebase/firestore";

const db = getFirestore(app);

export const useCollection = (collectionName, lim, date) => {
  const [docs, setDocs] = useState([]);

  useEffect(() => {
    const time = new Date(date);

    const q = query(
      collection(db, collectionName),
      where("timestamp", ">=", time),
      limit(lim),
      orderBy("timestamp", "desc")
    );

    const unsubscribe = onSnapshot(q, (snap) => {
      let documents = [];
      snap.forEach((doc) => {
        documents.push({ ...doc.data(), id: doc.id });
      });
      setDocs(documents);
    });

    return () => unsubscribe();
  }, [collectionName, lim, date]);

  return { docs };
};
