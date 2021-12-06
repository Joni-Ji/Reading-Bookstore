import{
  IonButton,
  IonIcon,
  IonToast,
  IonApp,
  IonContent,
  IonCard,
  IonItem,
  IonLabel,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonList,
  IonSearchbar,
  IonRow,
  IonCol,
  IonGrid,
  IonChip,
  IonText,
  IonListHeader,
  IonAvatar,
  IonDatetime,

}from '@ionic/react';
import React , {useState,useRef} from 'react';
import ReadingTime from '../components/ReadingTime';
import { chevronForward, play as playIcon} from 'ionicons/icons';
import './Read.css';

function Read() {
  const [showToast, setShowToast,] =useState(false);
  const handleClick = () =>{
    setShowToast(true);
    setTimeout(() => setShowToast(false),1500);
  };
  const [searchText, setSearchText] = useState('' );
  const [targetDate] = useState(new Date().toISOString());
  
  return (
    <IonApp>
      <IonContent>
      <IonSearchbar value={searchText} onIonChange={e => setSearchText(e.detail.value!)} showCancelButton="focus" cancelButtonText="Cancel">
      </IonSearchbar>
      <IonChip>
          <IonLabel color="Secondary">Classification
          <IonIcon icon={chevronForward} slot ="end"/>
          </IonLabel>
      </IonChip>
      <IonChip >
          <IonLabel color="Secondary">Free
          <IonIcon icon={chevronForward} slot ="end"/>
          </IonLabel>
      </IonChip>
      <IonChip >
          <IonLabel color="Secondary">New Books
          <IonIcon icon={chevronForward} slot ="end"/>
          </IonLabel>
      </IonChip>
      <IonChip >
          <IonLabel color="Secondary">Book List
          <IonIcon icon={chevronForward} slot ="end"/>
          </IonLabel>
      </IonChip>
      <IonCard>
          <IonCardHeader>
          <IonCardSubtitle>
            <IonDatetime className="datetime" displayFormat="D MMM YYYY" value={targetDate}/>
          </IonCardSubtitle>
            <IonCardTitle>
              <IonButton onClick={handleClick}  color="light">
              <IonIcon icon={playIcon} slot ="start"/> User, Welcome!
                </IonButton>
                <IonToast isOpen={showToast} message="WELCOME"></IonToast>
            </IonCardTitle>
          </IonCardHeader>
          <IonCardContent>
          If you want people to start reading, don't urge them to read the book. 
          What you should do is to arouse their yearning for reading, 
          or the regret of not reading.
          <IonDatetime className="datetime" displayFormat="DDDD" value={targetDate}/>
          </IonCardContent>
      </IonCard>
      <ReadingTime /> 

      <IonCard>
      <IonList>
        <IonListHeader className="listHeader">
          TOP 3 / Shoot Up
        </IonListHeader>
        <IonItem>
          <IonAvatar slot="start">
            <img src="https://antipodeonline.org/wp-content/uploads/2021/06/The-Last-Neoliberal-360x540.jpg"/>
          </IonAvatar>
          <IonLabel>
            <h2>1 The Last Neoliberal</h2>
            <h3>Stefano Palombarin</h3>
            <p>Recommended value 80.7%</p>
          </IonLabel>
        </IonItem>
        <IonItem>
          <IonAvatar slot="start">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZWQaQH_8k-5K3McNIyoE2c31rJlofXvCcUA&usqp=CAU"/>
          </IonAvatar>
          <IonLabel>
            <h2>2 Eastern Tales</h2>
            <h3>William Somerset Maugham</h3>
            <p>Recommended value 75.8%</p>
          </IonLabel>
        </IonItem>
        <IonItem>
          <IonAvatar slot="start">
            <img src="https://www.delphiniumbooks.com/cms/wp-content/uploads/2019/11/the-body-outside-the-kremlin-360x540.jpg"/>
          </IonAvatar>
          <IonLabel>
            <h2>3 The Body Outside the Kremlin</h2>
            <h3>JAMES L. MAY</h3>
            <p>Recommended value 63.7%</p>
          </IonLabel>
        </IonItem>
      </IonList>
      <IonButton href="#"expand="block" color="danger">Share · Get a Membership Card</IonButton>
      </IonCard>

      <IonCard>
      <IonCardHeader>
          <IonCardTitle className="readTitle">Recommended</IonCardTitle>
          <IonCardSubtitle className="RecommendedSub">Based on your reading history, updated daily</IonCardSubtitle>
        </IonCardHeader>
        <IonGrid>
          <IonRow>
            <IonCol>
              <IonCard className="bookImg">
              <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXJad38r77V26j6h0T2TjCySX0cmbhnvuPSQ&usqp=CAU' />Yoga Morality
              </IonCard>
            </IonCol>
            <IonCol>
              <IonCard>
              <img src='https://www.sarahglennmarsh.com/wp-content/uploads/2018/07/SONG-final-cover-1.jpg' />Song of the Dead
              </IonCard>
            </IonCol>
            <IonCol>
              <IonCard>
              <img src='https://res.cloudinary.com/bloomsbury-atlas/image/upload/w_360,c_scale/jackets/9780567687302.jpg' />The Voice of Judith
              </IonCard>
            </IonCol>
          </IonRow>
        </IonGrid>
        <IonButton href="#"expand="block" color="danger">
          <IonIcon icon={chevronForward} slot ="end"/>View More Books
        </IonButton>
      </IonCard>

      <IonCard className="ioncard">
        <IonCardHeader>
          <IonCardTitle className="text">
          Membership Day Every Monday
          </IonCardTitle>
          <br/>
          <IonCardSubtitle className="textSub">
          Annual card specials·Weekly Lottery
          </IonCardSubtitle>
          </IonCardHeader>
          <IonCardContent>
          <IonCard className="ioncard02">
            <IonGrid>
              <IonRow>
                <IonCol>
              <img src='https://s.alicdn.com/@sc04/kf/Hb4c67e6df04f4660ada4deb04a726930Y.jpg_300x300.jpg'/>
                </IonCol>
               
              </IonRow>
            </IonGrid>
          </IonCard>
          <IonButton fill="outline" expand="block" href="#">
          Start the Lottery
          </IonButton>
        </IonCardContent>
      </IonCard>
      
      <IonCard>
        <IonCardHeader>
          <IonCardTitle className="readTitle">Free Reading</IonCardTitle>
          <IonText className="textRead">
          <h3 ><IonButton size="small" color="success" fill="outline">
            <IonIcon icon={chevronForward} slot ="end"/>Get More Books for Free</IonButton></h3>
          </IonText>
        </IonCardHeader>
        <IonCardContent className="discoveryContent">
          <IonCard>
          <img src='https://res.cloudinary.com/bloomsbury-atlas/image/upload/w_360,c_scale/jackets/9780567687302.jpg' />
          </IonCard>
          <IonButton href="#"expand="block" >Free Reading</IonButton>
          <IonButton href="#"expand="block" color="" fill="outline">Change one</IonButton>
        </IonCardContent>
      </IonCard>

      <IonCard>
        <IonCardContent className="discoveryContent">
          <IonCard>
          <img src='https://www.delphiniumbooks.com/cms/wp-content/uploads/2019/11/the-body-outside-the-kremlin-360x540.jpg' />
          </IonCard>
        </IonCardContent>
        <IonCardHeader>
          <IonCardTitle className="readTitle">The Body Outside the Kremlin</IonCardTitle><br/>
          <IonCardSubtitle className="RecommendedSub">JAMES L. MAY </IonCardSubtitle>
          <IonCardSubtitle className="RecommendedSub">204 people are reading today | Recommended value 88.3% </IonCardSubtitle>
          <IonText className="textRead">
          <h3 ><IonButton size="small" color="success" fill="outline" href="#">Click to View Details</IonButton></h3>
          <IonButton fill="outline" expand="full" shape="round" href="#">
          <IonIcon icon={chevronForward} slot ="end"/>1 friend is reading
          </IonButton>
          </IonText>
        </IonCardHeader>
      </IonCard>

      <IonCard>
        <IonCardContent className="discoveryContent">
          <IonCard>
          <img src='https://antipodeonline.org/wp-content/uploads/2021/06/The-Last-Neoliberal-360x540.jpg' />
          </IonCard>
        </IonCardContent>
        <IonCardHeader>
          <IonCardTitle className="readTitle">The Last Neoliberal</IonCardTitle><br/>
          <IonCardSubtitle className="RecommendedSub">Stefano Palombarin </IonCardSubtitle>
          <IonCardSubtitle className="RecommendedSub">7 people are reading today | Recommended value 80.7% </IonCardSubtitle>
          <IonText className="textRead">
          <br/>
          <IonButton fill="outline" expand="full" shape="round" href="#">
          <IonIcon icon={chevronForward} slot ="end"/>2 friend is reading
          </IonButton>
          </IonText>
        </IonCardHeader>
      </IonCard>
      </IonContent>
    </IonApp>
  );
}

export default Read;