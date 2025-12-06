'use client';

import { useState } from 'react';
import LandingSection from '@/components/LandingSection';
import MemoryLane from '@/components/MemoryLane';
import FlowerGame from '@/components/FlowerGame';
import RoleQuest from '@/components/RoleQuest';
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
        <MemoryLane onComplete={() => setCurrentSection(2)} />
      )}
      
      {currentSection === 2 && (
        <FlowerGame onComplete={() => setCurrentSection(3)} />
      )}
      
      {currentSection === 3 && (
        <RoleQuest onComplete={() => setCurrentSection(4)} />
      )}
      
      {currentSection === 4 && (
        <BigQuestion onReveal={() => setCurrentSection(5)} />
      )}
      
      {currentSection === 5 && (
        <PersonalMessage 
          onAccept={() => {
            setHasAccepted(true);
            setCurrentSection(6);
          }} 
        />
      )}
      
      {currentSection === 6 && hasAccepted && (
        <BridesmaidPerks onContinue={() => setCurrentSection(7)} />
      )}
      
      {currentSection === 7 && (
        <ConfirmationPage />
      )}
    </main>
  );
}
