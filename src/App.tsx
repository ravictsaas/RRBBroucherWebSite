import { useState } from 'react';
import Navbar from './components/Navbar';
import LiveUpdatesBanner from './components/LiveUpdatesBanner';
import Hero from './components/Hero';
import RRAOverview from './components/RRAOverview';
import KeyChanges from './components/KeyChanges';
import LandlordObligations from './components/LandlordObligations';
import LandlordDosAndDonts from './components/LandlordDosAndDonts';
import TenantRights from './components/TenantRights';
import OmbudsmanGuide from './components/OmbudsmanGuide';
import ComplianceQuiz from './components/ComplianceQuiz';
import NoticeCalculator from './components/NoticeCalculator';
import DocumentTemplates from './components/DocumentTemplates';
import Timeline from './components/Timeline';
import ExpertDirectory from './components/ExpertDirectory';
import FAQ from './components/FAQ';
import ContactForm from './components/ContactForm';
import Chatbot from './components/Chatbot';
import WhatsAppButton from './components/WhatsAppButton';
import Footer from './components/Footer';
import BackToTop from './components/BackToTop';

export type UserType = 'all' | 'landlord' | 'tenant';

export default function App() {
  const [userType, setUserType] = useState<UserType>('all');

  return (
    <div className="min-h-screen flex flex-col font-sans">
      <LiveUpdatesBanner />
      <Navbar />
      <main className="flex-grow">
        <Hero userType={userType} setUserType={setUserType} />
        <RRAOverview />
        <KeyChanges />
        
        {(userType === 'all' || userType === 'landlord') && (
          <>
            <LandlordObligations />
            <LandlordDosAndDonts />
            <ComplianceQuiz />
          </>
        )}

        {(userType === 'all' || userType === 'tenant') && (
          <>
            <TenantRights />
          </>
        )}

        <OmbudsmanGuide />
        <NoticeCalculator />
        <DocumentTemplates />
        <Timeline />
        <ExpertDirectory />
        <FAQ />
        <ContactForm />
        <Chatbot />
        <WhatsAppButton />
      </main>
      <Footer />
      <BackToTop />
    </div>
  );
}
