'use client';

import { useState } from 'react';
import LandingSection from '@/components/LandingSection';
import FlowerGame from '@/components/FlowerGame';
import FilipinianaTrivia from '@/components/FilipinianaTrivia';
import BigQuestion from '@/components/BigQuestion';
import PersonalMessage from '@/components/PersonalMessage';
import BridesmaidPerks from '@/components/BridesmaidPerks';
import ConfirmationPage from '@/components/ConfirmationPage';

export default function Home() {
  const [currentSection, setCurrentSection] = useState(0);
  const [hasAccepted, setHasAccepted] = useState(false);

  return (
    <main className="min-h-screen bg-gray-50">
      
      {currentSection === 0 && (
        <LandingSection onBegin={() => setCurrentSection(1)} />
      )}
      
      {currentSection === 1 && (
        <FlowerGame onComplete={() => setCurrentSection(2)} />
      )}
      
      {currentSection === 2 && (
        <FilipinianaTrivia onComplete={() => setCurrentSection(3)} />
      )}
      
      {currentSection === 3 && (
        <BigQuestion onReveal={() => setCurrentSection(4)} />
      )}
      
      {currentSection === 4 && (
        <PersonalMessage 
          onAccept={() => {
            setHasAccepted(true);
            setCurrentSection(5);
          }} 
        />
      )}
      
      {currentSection === 5 && hasAccepted && (
        <BridesmaidPerks onContinue={() => setCurrentSection(6)} />
      )}
      
      {currentSection === 6 && (
        <ConfirmationPage />
      )}
    </main>
  );
}
