import { IonButton, IonContent } from '@ionic/react';
import Btn from './btn/Btn';
import './ExploreContainer.css';

interface ContainerProps {
  name: string;
}

const ExploreContainer: React.FC = () => {
  return (    
      <IonContent>
        <Btn />
      </IonContent>
  )
};

export default ExploreContainer;
