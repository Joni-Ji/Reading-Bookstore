import { IonButton,IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle, IonGrid, IonRow, IonCol } from '@ionic/react';
import React, { PureComponent } from 'react';
import { BarChart, Bar,  XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const data = [
    {
        time: "9/1",
            ThisMonth: 0,
            LastMonth: 12
            
        },
        {
            time: "15",
            ThisMonth: 36,
            LastMonth: 24
            
        },
        {
            time: "30",
            ThisMonth: 8,
            LastMonth : 79
        },
 
];

export default class Example extends PureComponent {
  static demoUrl = 'https://codesandbox.io/s/stacked-bar-chart-s47i2';

  render() {
    return (
      <IonCard>
          <IonCardHeader>
              <IonCardTitle>User</IonCardTitle>
              <IonCardSubtitle>Reading time · 2021.9</IonCardSubtitle>
              <br/>
              <IonCardSubtitle>This Month (xx) hour</IonCardSubtitle>
          </IonCardHeader>
        <BarChart width={480} height={300} data={data}
          margin={{ top: 20, left: -25,right:35, bottom: 20 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="time" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="ThisMonth" stackId="a" fill="#ffc658" />
          <Bar dataKey="LastMonth" stackId="a" fill="#8884d8" />
        </BarChart>
       <IonGrid>
           <IonRow>
               <IonCol>
                    <IonButton color="light" href="#">Reading summary</IonButton>
               </IonCol>
               <IonCol>
                    <IonButton color="warning" href="#">share duration</IonButton>
               </IonCol>
           </IonRow>
       </IonGrid>
        </IonCard>
    );
  }
}
