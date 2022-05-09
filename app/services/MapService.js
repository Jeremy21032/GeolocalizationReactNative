import {
    doc,
    setDoc,
    deleteDoc,
    collection,
    query,
    where,
    getDocs,
    orderBy,
    collectionGroup,
    getDoc,
    updateDoc,
} from "firebase/firestore";
import React from "react";

export const getLocation = async (refreshFn,location) => {

    const queryLocation = collection(global.dbCon, "/Mapa/Direcciones",location)
    const querySnapshot = await getDocs(queryLocation);
    let locationTmp = [];
    querySnapshot.forEach((doc) => {
        locationTmp.push(doc.data());
    });
    refreshFn(locationTmp);
};


export const getDirections = async (refreshFn) => {

    const queryLocation = doc(global.dbCon, "Mapa/Direcciones")
    const docSnap = await getDoc (queryLocation);
    refreshFn(docSnap.data().Direcciones);
    console.log(docSnap.data().Direcciones.length);
};

