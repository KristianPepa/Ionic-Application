import { IonHeader, IonPage, IonTitle, IonToolbar } from "@ionic/react";
import React from "react";

const Settings: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Settings</IonTitle>
        </IonToolbar>
      </IonHeader>
    </IonPage>
  );
};

export default Settings;
