import{
  IonButton,
  IonIcon,
  IonToolbar,
  IonTitle,
  IonContent,
  IonCard,
  IonItem,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonList,
  IonButtons,
  IonPage,
  IonMenuButton,
  IonText,
  IonPopover

}from '@ionic/react';
import './Discovery.css';
import React, { useState } from 'react';
import {radio,cart,wallet, heartCircle, apertureOutline, basketball, bookmark} from 'ionicons/icons';


const Discovery: React.FC = () => {
  const [popoverState, setShowPopover] = useState({ showPopover: false, event: undefined });

  return (
    <IonPage>
      <IonToolbar>
        <IonTitle>Discovery</IonTitle>
        
        <IonButtons slot="end" color="dark"onClick={
        (e: any) => {
          e.persist();
          setShowPopover({ showPopover: true, event: e })
        }}
      >
        <IonPopover
        cssClass='my-custom-class'
        event={popoverState.event}
        isOpen={popoverState.showPopover}
        onDidDismiss={() => setShowPopover({ showPopover: false, event: undefined })}
      >
       <IonList>
        <IonItem button>Moments</IonItem>
        <IonItem button>Channels</IonItem>
        <IonItem button>Scan</IonItem>
        <IonItem button>Shake</IonItem>
        <IonItem button>Search</IonItem>
        <IonItem button>Live Streams</IonItem>
        <IonItem button>Nearby</IonItem>
        <IonItem button>Mini Programs</IonItem>
      </IonList>
      </IonPopover>
          <IonMenuButton autoHide={false} />
        </IonButtons>
      </IonToolbar>

      <IonContent>
      <IonCard>
        <IonCardHeader>
          <IonCardSubtitle className="discoveryTitle">Friends' thoughts</IonCardSubtitle>
          <IonIcon className="discoveryIcon1" icon={apertureOutline}></IonIcon>
        </IonCardHeader>
      </IonCard>
      <IonCard>
        <IonCardHeader>
          <IonCardSubtitle className="discoveryTitle">Group</IonCardSubtitle>
          <IonIcon className="discoveryIcon2" icon={basketball}></IonIcon>
        </IonCardHeader>
      </IonCard>
      <IonCard>
        <IonCardHeader>
          <IonCardSubtitle className="discoveryTitle">Subscription</IonCardSubtitle>
          <IonIcon className="discoveryIcon3" icon={heartCircle}></IonIcon>
        </IonCardHeader>
      </IonCard>
      <IonCard>
        <IonCardHeader>
          <IonCardSubtitle className="discoveryTitle">Free books</IonCardSubtitle>
          <IonIcon className="discoveryIcon4" icon={bookmark}></IonIcon>
        </IonCardHeader>
      </IonCard>
      <IonCard>
        <IonCardHeader>
          <IonCardSubtitle className="discoveryTitle">Welfare</IonCardSubtitle>
          <IonIcon className="discoveryIcon5" icon={wallet}></IonIcon>
        </IonCardHeader>
      </IonCard>

      <IonCard>
        <IonCardHeader>
          <IonCardSubtitle className="discoveryTitle">E-Book Low price</IonCardSubtitle>
          <IonIcon className="discoveryIcon6" icon={cart}></IonIcon>
        </IonCardHeader>
        <IonCardContent className="discoveryContent">
          <IonCard>
            <img src='https://www.sarahglennmarsh.com/wp-content/uploads/2018/07/SONG-final-cover-1.jpg' />
          </IonCard>
          <IonText className="textName">
          <h3>Song of the Dead</h3>
          </IonText>
          <IonText className="textPrice">
          <h3> ฿ 499.00</h3>
          </IonText>
          <IonText className="textPrice">
          <h3 ><IonButton size="small" color="danger" fill="outline">Low Price</IonButton></h3>
          </IonText>
         
        </IonCardContent>
      </IonCard>
      <IonCard>
        <IonCardHeader>
          <IonCardSubtitle className="discoveryTitle">Audiobook</IonCardSubtitle>
          <IonIcon className="discoveryIcon7" icon={radio}></IonIcon>
        </IonCardHeader>
        <IonCardContent className="discoveryContent">
          <IonCard>
          <img src='https://res.cloudinary.com/bloomsbury-atlas/image/upload/w_360,c_scale/jackets/9780567687302.jpg' />
          </IonCard>
          <IonText className="textName">
          <h3>The Voice of Judith</h3>
          </IonText>
          <IonText className="textPrice">
          <h3 ><IonButton size="small" color="danger" fill="outline">Listening for Free</IonButton></h3>
          </IonText>
        </IonCardContent>
      </IonCard>
      </IonContent>
      
    </IonPage>
  );
};

export default Discovery;



