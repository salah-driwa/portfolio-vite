// ProjectSection.js
import { useSearchParams } from 'react-router-dom';
import { MdWeb, MdDraw } from 'react-icons/md';
import { FaGamepad } from 'react-icons/fa';
import { LuPenTool } from 'react-icons/lu';
import { BiSolidCube } from 'react-icons/bi';
import Carousel from './Carousel';







const tabs = [
  { name: 'Website', icon: <MdWeb size={24} /> },
  { name: 'Games', icon: <FaGamepad size={24} /> },
  { name: 'Illustration', icon: <MdDraw size={24} /> },

  { name: 'Design', icon: <LuPenTool size={24} /> },
  { name: 'Animation', icon: <BiSolidCube size={24} /> },
];

// eslint-disable-next-line react/prop-types
function ProjectSection({digitalIllustration, images2, Logos, Website, games,Animation}) {
  const [searchParams, setSearchParams] = useSearchParams();
  const activeTab = searchParams.get('tab') || 'Website';

  const handleTabChange = (tabName) => {
    setSearchParams({ tab: tabName });
  };

  return (
    <body className="  w-full mb-36  ">
      {/* Scrollable Tabs */}
      <div className="flex gap-3  py-2  w-screen overflow-x-auto custom-scrollbar justify-start">
        {tabs.map((tab) => (
          <button
            key={tab.name}
            className={`flex items-center  font-small-display gap-2 px-4 py-2 
              ${activeTab === tab.name ? 'border-b-2 dark:border-white border-black' : 'text-gray-500'}`}
            onClick={() => handleTabChange(tab.name)}
          >
            {tab.icon}
            <span className="block">{tab.name}</span>
          </button>
        ))}
      </div>

      {/* Render Content Based on Active Tab */}
      <div className="">
      {activeTab === 'Website' && <Carousel datas={Website} text="Website" />}
      {activeTab === 'Games' && <Carousel datas={games} text="Games" />}
      {activeTab === 'Illustration' && <Carousel datas={digitalIllustration} text="Illustration" />}
      {activeTab === 'Splashart' && <Carousel datas={images2} text="Splashart" />}
      {activeTab === 'Design' && <Carousel datas={Logos} text="Design" />}
      {activeTab === 'Animation' && <Carousel datas={Animation} text="Animation" />}
      </div>
    </body>
  );
}

export default ProjectSection;

