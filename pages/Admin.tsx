import React, { useState } from 'react';
import { SUBSCRIPTION_FORM_URL, FREE_RESOURCES_FORM_URL } from '../constants';
import { storage, db } from '../firebaseConfig';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';

const Admin: React.FC = () => {
  const [uploading, setUploading] = useState(false);
  const [status, setStatus] = useState<string>('');

  // Function to convert images to WebP for performance
  const convertToWebP = (file: File): Promise<Blob> => {
    return new Promise((resolve, reject) => {
      const img = new Image();
      img.onload = () => {
        const canvas = document.createElement('canvas');
        canvas.width = img.width;
        canvas.height = img.height;
        const ctx = canvas.getContext('2d');
        if (!ctx) { reject('Canvas error'); return; }
        ctx.drawImage(img, 0, 0);
        canvas.toBlob((blob) => {
          if (blob) resolve(blob);
          else reject('Conversion failed');
        }, 'image/webp', 0.8); // 0.8 quality
      };
      img.onerror = reject;
      img.src = URL.createObjectURL(file);
    });
  };

  const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    try {
      setUploading(true);
      setStatus('Converting to WebP...');

      // 1. Convert to WebP
      const webpBlob = await convertToWebP(file);
      const filename = `gallery/${Date.now()}_${file.name.split('.')[0]}.webp`;

      // 2. Upload to Firebase Storage
      setStatus('Uploading to Storage...');
      const storageRef = ref(storage, filename);
      const snapshot = await uploadBytes(storageRef, webpBlob);
      const downloadURL = await getDownloadURL(snapshot.ref);

      // 3. Save reference to Firestore Database
      setStatus('Saving to Database...');
      await addDoc(collection(db, 'photos'), {
        url: downloadURL,
        originalName: file.name,
        createdAt: serverTimestamp(),
        type: 'webp'
      });

      setStatus(`Success! Image uploaded: ${filename}`);
      console.log('File available at', downloadURL);
    } catch (error) {
      console.error('Error uploading:', error);
      setStatus('Error uploading image. Check console.');
    } finally {
      setUploading(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-100 p-4 md:p-8">
      <div className="max-w-4xl mx-auto space-y-8">
        <div className="bg-slate-900 text-white p-8 rounded-2xl shadow-xl flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div>
            <h1 className="text-2xl font-bold">Bhuk Foods Owner Dashboard</h1>
            <p className="text-slate-400 text-sm mt-1">Manage your business and website from here.</p>
          </div>
        </div>

        {/* Firebase Photo Uploader */}
        <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
          <div className="bg-slate-50 p-4 border-b border-slate-200">
            <h2 className="font-bold text-slate-800 flex items-center gap-2">
              <span className="text-xl">📸</span> Photo Database (WebP)
            </h2>
          </div>
          <div className="p-6">
             <div className="mb-4 text-sm text-slate-600">
               Upload any JPG/PNG. We will automatically convert it to <strong>.webp</strong> (High Performance) and save it to your Firebase Cloud.
             </div>
             
             <div className="flex items-center gap-4">
               <label className={`block cursor-pointer bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition-colors ${uploading ? 'opacity-50 cursor-not-allowed' : ''}`}>
                 {uploading ? 'Processing...' : 'Select Photo to Upload'}
                 <input 
                   type="file" 
                   accept="image/*" 
                   onChange={handleFileUpload} 
                   disabled={uploading}
                   className="hidden" 
                 />
               </label>
               {status && (
                 <span className={`text-sm font-medium ${status.includes('Success') ? 'text-green-600' : 'text-slate-500'}`}>
                   {status}
                 </span>
               )}
             </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
          <div className="bg-slate-50 p-4 border-b border-slate-200">
            <h2 className="font-bold text-slate-800 flex items-center gap-2">
              <span className="text-xl">📊</span> Live Orders & Leads
            </h2>
          </div>
          <div className="p-6 grid md:grid-cols-2 gap-6">
            <div className="border border-orange-100 rounded-xl p-6 bg-[#FFF8E1] hover:shadow-md transition-shadow">
              <h3 className="font-bold text-lg mb-2 text-slate-900">Subscription Orders</h3>
              <a href={SUBSCRIPTION_FORM_URL} target="_blank" rel="noopener noreferrer" className="inline-block w-full text-center bg-[#D32F2F] text-white font-bold py-2 rounded-lg hover:bg-[#b71c1c] transition-colors">Open Order Sheet ↗</a>
            </div>
            
            <div className="border border-blue-100 rounded-xl p-6 bg-blue-50 hover:shadow-md transition-shadow">
              <h3 className="font-bold text-lg mb-2 text-slate-900">Lead Generation</h3>
              <a href={FREE_RESOURCES_FORM_URL} target="_blank" rel="noopener noreferrer" className="inline-block w-full text-center bg-blue-600 text-white font-bold py-2 rounded-lg hover:bg-blue-700 transition-colors">Open Leads Sheet ↗</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Admin;