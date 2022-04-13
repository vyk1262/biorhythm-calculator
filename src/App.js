import {
  IonApp,
  IonContent,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonItem,
  IonLabel,
  // IonInput,
  IonDatetime,
} from '@ionic/react';
import React, { useState } from 'react';
import BiorhythmCard from './components/BiorhythmCard';
import { useLocalStorage } from './hooks';

function App() {
  // const[name, setName] = useState('');
  const[birthDate, setBirthDate] = useLocalStorage("birthDate", "") //('2 Feb 2021')
  // const targetDate = new Date().toISOString();
  const [targetDate, setTargetDate] = useState(new Date().toISOString())

  // const handleName = (event) => {
  //   setName(event.detail.value)
  // }
  const handleDate = (event) => {
    setBirthDate(event.detail.value)
  }
  const handleTargetChange = (event) => {
    setTargetDate(event.detail.value)
  }
  return (
    <IonApp>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Biorhythm calculator</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        {/* <IonItem>
          <IonLabel position='stacked'>Name: </IonLabel>
          <IonInput value={name}
            onIonChange={handleName}
          />
        </IonItem> */}
        <IonItem>
          <IonLabel position='stacked'>Date Of Birth:</IonLabel>
          <IonDatetime displayFormat='D MMM YYYY'
            value={birthDate}
            onIonChange={handleDate}
          />
        </IonItem>
        <IonItem>
          <IonLabel position='stacked'>Target Date</IonLabel>
          <IonDatetime displayFormat='D MMM YYYY'
            value={targetDate}
            onIonChange={handleTargetChange}
          />
        </IonItem>
        {birthDate && targetDate &&
          <BiorhythmCard birthDate={birthDate} targetDate={targetDate} />
        }
        {/* <p>Name: {name}</p> */}
        {/* <p>Date of Birth: {birthDate}</p> */}
        {/* <p>Target Date: {targetDate}</p> */}
      </IonContent>
    </IonApp>
  );
}

export default App;
