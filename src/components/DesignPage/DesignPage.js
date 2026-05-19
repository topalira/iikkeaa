import './DesignPage.css';

import DesignHero from '../DesignHero/DesignHero';
import HomeGuides from '../HomeGuides/HomeGuides';
import DesiInfo from '../DesiInfo/DesiInfo';

export function DesignPage() {
  return (
    <div className="DesignPage" >
      <DesignHero/>
      <HomeGuides/>
      <DesiInfo/>
    </div>
  );
}

export default DesignPage;
