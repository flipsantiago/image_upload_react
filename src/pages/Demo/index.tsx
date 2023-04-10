import React, { useCallback, useState } from 'react';
import ReactModal from 'react-modal';
import Cropper from 'react-easy-crop';
import { Button, Container, Image } from './styles';

const Demo: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [croppedImage, setCroppedImage] = useState<string | null>(null);
  const [crop, setCrop] = useState({ x: 0, y: 0 });
  const [save, setSave] = useState(false);
  const [zoom, setZoom] = useState(1);
  const [image, setImage] = useState<string | null>(null);

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    if (event.target.files && event.target.files.length > 0) {
      const reader = new FileReader();
      reader.onload = () => {
        if (reader.readyState === 2) {
          setImage(reader.result as string);
          setIsModalOpen(true);
        }
      };

      reader.readAsDataURL(event.target.files[0]);
    }
  };

  const onCropComplete = useCallback(
    (croppedArea, croppedAreaPixels) => {
      const canvas = document.createElement('canvas');
      const imageRef = document.createElement('img');

      if (!image) return;

      imageRef.src = image;

      const scaleX = imageRef.naturalWidth / imageRef.width;
      const scaleY = imageRef.naturalHeight / imageRef.height;
      const targetWidth = 256;
      const targetHeight = croppedAreaPixels.height * (targetWidth / croppedAreaPixels.width);
      canvas.width = targetWidth;
      canvas.height = targetHeight;
      const ctx = canvas.getContext('2d');

      if (ctx) {
        ctx.drawImage(
          imageRef,
          croppedAreaPixels.x * scaleX,
          croppedAreaPixels.y * scaleY,
          croppedAreaPixels.width * scaleX,
          croppedAreaPixels.height * scaleY,
          0,
          0,
          targetWidth,
          targetHeight,
        );

        const croppedImageDataURL = canvas.toDataURL('image/jpeg');
        setCroppedImage(croppedImageDataURL);
      }
    },
    [image],
  );

  const handleSaveImage = (): void => {
    setIsModalOpen(false);
    setSave(true);
  };

  const contentTypeImage = 'image/jpeg';
  const fileNameImage = `${Date.now()}.jpg`;

  const downloadBase64File = (contentType: string, base64Data: string, fileName: string): void => {
    const linkSource = `data:${contentType};${base64Data}`;
    const downloadLink = document.createElement('a');
    downloadLink.href = linkSource;
    downloadLink.download = fileName;
    downloadLink.click();
  };

  return (
    <Container>
      <div className="file-input-container">
        <input type="file" id="file-input" onChange={handleImageChange} />
        <label htmlFor="file-input">Choose File</label>
      </div>
      <ReactModal
        isOpen={isModalOpen}
        onRequestClose={() => setIsModalOpen(false)}
        contentLabel="Crop Modal"
        style={{
          overlay: {
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
          },
          content: {
            width: '700px',
            height: '600px',
            margin: 'auto',
            borderRadius: '4px',
            boxShadow: '0 0 10px rgba(0, 0, 0, 0.3)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
          },
        }}
      >
        {image && (
          <div style={{ flex: 1 }}>
            <Cropper
              image={image}
              crop={crop}
              zoom={zoom}
              aspect={4 / 3}
              onCropChange={setCrop}
              onCropComplete={onCropComplete}
              onZoomChange={setZoom}
            />
          </div>
        )}
        <Button type="button" onClick={handleSaveImage}>
          SAVE
        </Button>
      </ReactModal>
      {croppedImage && save && (
        <>
          <Image>
            <img src={croppedImage} alt="" />
          </Image>
          <Button
            type="button"
            onClick={() => downloadBase64File(contentTypeImage, croppedImage, fileNameImage)}
          >
            DOWNLOAD
          </Button>
        </>
      )}
    </Container>
  );
};

export default Demo;
