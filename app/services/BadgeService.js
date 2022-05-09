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



export const getBadges = async (refreshFn) => {

    const queryBadges = collection(global.dbCon, "/Personas/" + global.cedula + "/Insignias")
    const querySnapshot = await getDocs(queryBadges);
    let badgesTmp = [];
    querySnapshot.forEach((doc) => {
        badgesTmp.push(doc.data());
    });
    refreshFn(badgesTmp);
};


export const getArrBadge = async () => {
    const queryLocation = doc(global.dbCon, "Personas/" + global.cedula)
    const docSnap = await getDoc(queryLocation);
    refreshFn(docSnap.data().badges);
    console.log(docSnap.data().badges.length);
};


export const assginBadge = async (state) => {

    const queryBadge = doc(global.dbCon, "Personas/" + global.cedula)
    const docSnap = await getDoc(queryBadge);
    let arrayFinal = docSnap.data().badges
    console.log(arrayFinal.length)


    const docRef = doc(global.dbCon, "/Personas/" + global.cedula);
    let badgesArr = []
    for (let i = 0; i < arrayFinal.length; i++) {

        badgesArr.push(arrayFinal[i]);
    }
    badgesArr.push(state)
    await updateDoc(docRef, {
        badges: badgesArr,
    });
}



export const consultBadges = async (refreshFn) => {

    const queryBadges = collection(global.dbCon, "/Insignias")
    const querySnapshot = await getDocs(queryBadges);
    let badgesTmp = [];
    querySnapshot.forEach((doc) => {
        badgesTmp.push(doc.data());
    });
    refreshFn(badgesTmp);
    console.log(badgesTmp);
};


export const getPersonalBadges = async () => {

    const queryBadge = doc(global.dbCon, "Personas/" + global.cedula)
    const docSnap = await getDoc(queryBadge);
    let arrayFinal = docSnap.data().badges
    console.log(arrayFinal.length)

    // for (let i = 0; i < arrayFinal.length; i++) {
    //     const q = query(
    //         collectionGroup(global.dbCon, "Insignias"),
    //         where("id", "==", arrayFinal[i].id)
    //     );
    //     console.log(q)
    // }


    // const queryBadges = collection(global.dbCon, "/Personas/" + global.cedula + "/Insignias")
    // const querySnapshot = await getDocs(queryBadges);
    // let badgesTmp = [];
    // querySnapshot.forEach((doc) => {
    //     badgesTmp.push(doc.data());
    // });
    // refreshFn(badgesTmp);
};
