import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import LiveInsights from '@/components/LiveInsights';
import MeetingOutcomes from '@/components/MeetingOutcomes';
import RoleModes from '@/components/RoleModes';
import ConversationMemory from '@/components/ConversationMemory';
import Comparison from '@/components/Comparison';
import ComparisonTable from '@/components/ComparisonTable';
import Stats from '@/components/Stats';
import PrivacyTrust from '@/components/PrivacyTrust';
import FAQ from '@/components/FAQ';
import CTA from '@/components/CTA';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <LiveInsights />
      <MeetingOutcomes />
      <RoleModes />
      <ConversationMemory />
      <Comparison />
      <ComparisonTable />
      <Stats />
      <PrivacyTrust />
      <FAQ />
      <CTA />
      <Footer />
    </div>
  );
};

export default Index;
