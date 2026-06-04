/* eslint-disable react/prop-types */
import { useState } from 'react';
import { T } from '../../i18n/translations';
import Header from './Header';
import Modal from './Modal';


export default function DocumentRetrieval({ currentLang = 'en' }) {
  const t = T[currentLang];
  const [results, setResults] = useState(null);
  const [curSym, setCurSym] = useState('');
  const [modalOpen, setModalOpen] = useState(false);




 




  return (
    <>
      <Header lang={currentLang} />
      <Modal lang={currentLang} isOpen={modalOpen} onClose={() => setModalOpen(false)} results={results} curSym={curSym} />
    </>
  );
}
