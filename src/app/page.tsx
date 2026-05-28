import { RegistrationBanner } from "./components/CtaBanner";
import HeroEngineering from "./components/HeroEngineering";
import GridContent from "./components/GridContent";
import { ResourceDirectory } from "./components/ResourceDirectory";
import { ContentSection } from "./components/ContentSection";
import { BusinessPodcastSection } from "./components/BusinessPodcastSection";
import InternationalCreditManager from "./components/InternationalCreditManager";
import PETHero from "./components/PETHero";
import LoginGateway from "./components/(auth)/page";
import AgencySlider from "./components/AgencySlider";
import PETLocations from "./components/PETLocations";
import FutureCulvertComponent from "./components/FutureCulvertComponent";
import DeliverableUpgrade from "./components/DeliverableUpgrade";
import DotMatrixSlider from "./components/DotMatrixSlider";
import MeetAtShows from "./components/MeetAtShows";
import FuturisticCTA from "./components/FuturisticCTA";
import PrecastersGoDigital from "./components/PrecastersGoDigital";
import PrecasterManifesto from "./components/PrecasterManifesto";
import AdvancedEngineeringTech from "./components/AdvancedEngineeringTech";
import TargetAudience from "./components/TargetAudience";
import UnchallengedResources from "./components/UnchallengedResources";
import SeamlessConnection from "./components/SeamlessConnection";
import TrenchingSystem from "./components/TrenchingSystem";
import RetainingWallComponent from "./components/RetainingWallComponent";
import MarinaSystemComponent from "./components/MarinaSystemComponent";

export default function Home() {
  return (
    <main className="flex-1 flex flex-col items-center bg-slate-50">
      <HeroEngineering />
      <ResourceDirectory />
      <PrecasterManifesto />
      <FuturisticCTA />
      <AdvancedEngineeringTech />
      <TargetAudience />
      <UnchallengedResources />
      <SeamlessConnection />
      <TrenchingSystem />
      <RetainingWallComponent />
      <MarinaSystemComponent />
      <section id="portal" className="w-full bg-[#b72121] text-white overflow-hidden relative">
        <LoginGateway />
      </section>
      <DeliverableUpgrade />
      <section id="technical-vault" className="w-full bg-[#b72121] text-white overflow-hidden relative">
        <GridContent />
      </section>
      {/* <RegistrationBanner txtSrc={'Register now to save projects, bookmark favorites, and get the most out of PET'} btSrc="Join PET" /> */}
      {/* <RegistrationBanner txtSrc={'News and Updated Content'} btSrc="" /> */}
      {/* <BusinessPodcastSection/> */}
      <AgencySlider />
      <ContentSection />
      <PETHero />
      <DotMatrixSlider />
      <FutureCulvertComponent />
      <PETLocations />
      <PrecastersGoDigital />
      <MeetAtShows />
      <section id="contact-us" className="w-full bg-[#b72121] text-white overflow-hidden relative">
        {/* <ContactTerminal /> */}
      </section>
    </main>
  );
}

