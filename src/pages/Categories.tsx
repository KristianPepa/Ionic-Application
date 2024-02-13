import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from "@ionic/react"
import React from "react";

const Categories: React.FC = () => {
    return(

    <IonPage>
        <IonHeader>
            <IonToolbar>
                <IonTitle>Categories</IonTitle>
            </IonToolbar>
        </IonHeader>
        <IonContent>
            <h1>Categories Page</h1>
        </IonContent>
    </IonPage>
    ) 
}

export default Categories;