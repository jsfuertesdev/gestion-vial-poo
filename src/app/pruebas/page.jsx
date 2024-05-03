'use client'
import React, { useState } from 'react';

function MyTableCell() {
 const [photoSrc, setPhotoSrc] = useState(null);

 const takePhoto = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true });
      const track = stream.getVideoTracks()[0];
      const imageCapture = new ImageCapture(track);
      const bitmap = await imageCapture.takePhoto();
      const canvas = document.createElement('canvas');
      canvas.width = bitmap.width;
      canvas.height = bitmap.height;
      const context = canvas.getContext('2d');
      context.drawImage(bitmap, 0, 0);
      const dataUrl = canvas.toDataURL('image/jpeg');
      setPhotoSrc(dataUrl);
    } catch (error) {
      console.error('Error taking photo:', error);
    }
 };

 return (
    <td className="border px-4 py-2">
      <button onClick={takePhoto} className="form-input block w-full mt-1">Tomar foto</button>
      {photoSrc && <img src={photoSrc} alt="Foto capturada" className="mt-2" />}
    </td>
 );
}

export default MyTableCell;
