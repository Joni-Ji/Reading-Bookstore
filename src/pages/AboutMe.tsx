import { 
  IonContent, 
  IonHeader, 
  IonPage, 
  IonTitle, 
  IonToolbar ,
  IonGrid,
  IonRow,
  IonCol,
  IonButton,
  IonItem,
  IonList,
  IonLabel,
  IonAvatar,
  IonButtons,
  IonIcon,
  IonCard,
  IonCardHeader,
  IonCardContent,
  IonCardSubtitle,
  IonModal,
  IonInput,
  IonDatetime,
  IonActionSheet
} from '@ionic/react';
import './AboutMe.css';

import React, { useState } from 'react';
import { mail,settings,card,trash,wallet,share,document,cart, clipboard,eye,time,list, chevronForward, camera, images, closeCircle } from 'ionicons/icons';
import  {useLocalStorage}  from './hooks';

const AboutMe: React.FC = () => {
  const [showModal, setShowModal] = useState(false);
  const [showActionSheet, setShowActionSheet] = useState(false);
  const [name, setName] = useLocalStorage("name", "");
  const [birthDate, setBirthDate] = useLocalStorage('birthDate', '');
  const [ChangePassword, setChangePassword] = useLocalStorage("ChangePassword", "");
  const [ID, setID] = useLocalStorage('ID', '');
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
        <IonButtons slot="start">
          <IonButton>
            <IonIcon slot="icon-only" icon={mail}></IonIcon>
          </IonButton>
        </IonButtons>
        <IonButtons slot="end">
          <IonButton>
            <IonIcon slot="icon-only" icon={settings}></IonIcon>
          </IonButton>
        </IonButtons>
          <IonTitle>About Me</IonTitle>
        </IonToolbar>
      </IonHeader>
    
      <IonContent fullscreen>
         <IonList>
          <IonItem>
            <IonAvatar slot="start">
              <img src="http://placekitten.com/g/200/300"/>
            </IonAvatar>
            <IonLabel>
              <h2>User</h2>
              <h3>I'm a big deal</h3>
              <p>Listen, I've had a pretty messed up day...</p>
            </IonLabel>
          
            <IonModal isOpen={showModal} cssClass='my-custom-class'>
              <IonCard>
                <IonItem>
                  <IonButton onClick={() => setShowActionSheet(true)} size="small"color="dark" fill="outline" >
                  <IonIcon icon={chevronForward} slot ="end"/>Avatar</IonButton>
                    <IonActionSheet
                      isOpen={showActionSheet}
                      onDidDismiss={() => setShowActionSheet(false)}
                      cssClass='my-custom-class'
                      buttons={
                      [ {
                        text: 'Photograph',
                        icon: camera,
                        handler: () => {
                          console.log('Delete clicked');
                        }
                      }, {
                        text: 'Select from Album',
                        icon: images,
                        handler: () => {
                          console.log('Delete clicked');
                        }
                      },{
                        text: 'Delete',
                        role: 'destructive',
                        icon: trash,
                        handler: () => {
                          console.log('Delete clicked');
                        }
                      }, {
                        text: 'Share',
                        icon: share,
                        handler: () => {
                          console.log('Share clicked');
                        }
                      },{
                        text: 'Cancel',
                        icon: closeCircle,
                        role: 'cancel',
                        handler: () => {
                          console.log('Cancel clicked');
                        }
                      }]}
                      >
                    </IonActionSheet>
                </IonItem>
                <IonItem>
                  <IonLabel position="floating">Name:</IonLabel>
                  <IonInput type="text" value={name}
                    onIonChange={(event) => setName(event.detail.value)}/>
                </IonItem>
                <IonItem>
                  <IonLabel position="floating">Date of Birth:</IonLabel>
                    <IonDatetime displayFormat="D MMM YYYY" value={birthDate}
                      onIonChange={(event) => setBirthDate(event.detail.value)}/>
                </IonItem><br/>
                <IonItem>
                  <IonLabel position="floating">Change Password:</IonLabel>
                  <IonInput type="password" value={ChangePassword}
                    onIonChange={(event) => setChangePassword(event.detail.value)}/>
                </IonItem>
                <IonItem>
                  <IonLabel position="floating">ID:</IonLabel>
                  <IonInput type="number" value={ID}
                    onIonChange={(event) => setID(event.detail.value)}/>
                <h6>Long press to copy</h6>
                </IonItem>
                
              </IonCard>

            <IonButton onClick={() => setShowModal(false)}>Finished</IonButton>
            </IonModal>
            <IonButton onClick={() => setShowModal(true)}>Profile</IonButton>
       
          </IonItem>
        </IonList>
      <IonCard className="ioncard1">
        <IonGrid className="grid">
          <IonRow>
            <IonCol>
              <IonCardHeader>
                <IonCardSubtitle className="aboutMeTitle">Account</IonCardSubtitle>
                <IonIcon className="iconAccount" icon={wallet}></IonIcon>
              </IonCardHeader>
              <IonCardContent className="content">Balance:20.00฿</IonCardContent>
            </IonCol>
            <IonCol>
            <IonCardHeader>
              <IonCardSubtitle className="aboutMeTitle">Card</IonCardSubtitle>
              <IonIcon className="iconAccount1" icon={card}></IonIcon>
            </IonCardHeader>
            <IonCardContent className="content">50฿/month</IonCardContent>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonCard>

      <IonCard className="ioncard1">
        <IonGrid>
          <IonRow>
            <IonCol>
              <IonCardHeader>
                <IonCardSubtitle className="aboutMeTitle">Cart</IonCardSubtitle>
                <IonIcon className="iconAccount2" icon={cart}></IonIcon>
              </IonCardHeader>
              <IonCardContent className="content">Add Books</IonCardContent>
            </IonCol>
            <IonCol>
            <IonCardHeader>
              <IonCardSubtitle className="aboutMeTitle">Order</IonCardSubtitle>
              <IonIcon className="iconAccount3" icon={document}></IonIcon>
            </IonCardHeader>
            <IonCardContent className="content">Manage orders</IonCardContent>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonCard>

      <IonCard className="ioncard2">
        <IonGrid>
          <IonRow>
            <IonCol>
            <IonCardHeader>
                <IonCardSubtitle className="aboutMeTitle">rankings</IonCardSubtitle>
                <IonIcon className="iconAccount4" icon={list}></IonIcon>
            </IonCardHeader>
            </IonCol>
            <IonCol>
            <IonCardContent className="content">Not yet started reading this week</IonCardContent>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol>
            <IonCardHeader>
                <IonCardSubtitle className="aboutMeTitle">Follows</IonCardSubtitle>
                <IonIcon className="iconAccount5" icon={eye}></IonIcon>
            </IonCardHeader>
            </IonCol>
            <IonCol>
            <IonCardContent className="content">20 people follow me(Following 5 people)</IonCardContent>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonCard>

      <IonCard className="ioncard2">
        <IonGrid>
          <IonRow>
            <IonCol>
            <IonCardHeader>
                <IonCardSubtitle className="aboutMeTitle">Notes</IonCardSubtitle>
                <IonIcon className="iconAccount6" icon={clipboard}></IonIcon>
            </IonCardHeader>
            </IonCol>
            <IonCol>
          
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol>
            <IonCardHeader>
                <IonCardSubtitle className="aboutMeTitle">subscription</IonCardSubtitle>
                <IonIcon className="iconAccount7" icon={time}></IonIcon>
            </IonCardHeader>
            </IonCol>
            <IonCol>
            <IonCardContent className="content">42 reading records</IonCardContent>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonCard>
      </IonContent>
    </IonPage>
    
  );
};

export default AboutMe;
