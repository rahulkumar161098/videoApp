import { IonContent, IonButton, IonToolbar, IonImg, IonCard } from '@ionic/react';
import { Camera, CameraResultType } from '@capacitor/camera';
import './Btn.css'
import { useState } from 'react';
const Btn: React.FC = () => {

  // save image
  const [image, setImage] = useState<any>("")
  // Camera function
  const takePicture = async () => {
    const image = await Camera.getPhoto({
      quality: 90,
      allowEditing: true,
      resultType: CameraResultType.Uri
    });

    // image.webPath will contain a path that can be set as an image src.
    // You can access the original file using image.path, which can be
    // passed to the Filesystem API to read the raw data of the image,
    // if desired (or pass resultType: CameraResultType.Base64 to getPhoto)
    setImage(image.webPath);

    // Can be set to the src of an image now
    // imageElement.src = imageUrl;
    console.log(setImage);

  };


  return (
    <div className="container">
      <IonCard>
        <IonImg src={image}></IonImg>
      </IonCard>
      <IonButton onClick={() => takePicture()} expand='block' className='btn'>Start Call</IonButton>
      <IonButton onClick={() => takePicture()} expand='block' className='btn'>Join Call</IonButton>
    </div>
  );
};

export default Btn;
