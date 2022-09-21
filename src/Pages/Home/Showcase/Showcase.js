import React from "react";
// import integra1 from "./../../../Assets/showcase/integra1.jpg";
// import tlx1 from "./../../../Assets/showcase/tlx1.jpg";
// import rdx1 from "./../../../Assets/showcase/rdx1.jpg";
// import mdx1 from "./../../../Assets/showcase/mdx1.jpg";
// import nsx1 from "./../../../Assets/showcase/nsx1.jpg";

const Showcase = () => {
  return (
<>
<div className="text-center my-10">
          <span className="text-lg uppercase font-bold border-b-2 border-accent pb-1">Full Model Line</span>
          <div className="my-6">
            <h1 className="text-4xl font-light">Exhilaration Takes Many Forms</h1>
          </div>
        </div>
<div className="container mx-auto overflow-hidden grid grid-cols-3">
      <div className="bg-[url('https://i.ibb.co/pzPv2GN/integra1.jpg')] bg-cover bg-center bg-no-repeat md:w-[427px] md:h-[330px] 2xl:w-[530px] 2xl:h-[415px] hover:bg-[url('https://i.ibb.co/Rv7cVHB/integra2.jpg')]"></div>
      <div className="bg-[url('https://i.ibb.co/JCPsy16/tlx1.jpg')] bg-cover bg-center bg-no-repeat md:w-[427px] md:h-[330px] 2xl:w-[530px] 2xl:h-[415px] hover:bg-[url('https://i.ibb.co/8x00cdg/tlx2.jpg')]"></div>
      <div className="bg-[url('https://i.ibb.co/42SpcKK/rdx1.jpg')] bg-cover bg-center bg-no-repeat md:w-[427px] md:h-[330px] 2xl:w-[530px] 2xl:h-[415px] hover:bg-[url('https://i.ibb.co/xCHG42k/rdx2.jpg')]"></div>
    </div>
    <div className="container mx-auto overflow-hidden grid grid-cols-2">
      <div className="bg-[url('https://i.ibb.co/4TrCZQd/mdx1.jpg')] bg-cover bg-center bg-no-repeat md:w-[641px] md:h-[330px] 2xl:w-[800px] 2xl:h-[415px] hover:bg-[url('https://i.ibb.co/kgjPb62/mdx2.jpg')]"></div>
      <div className="bg-[url('https://i.ibb.co/Jmtr3mk/nsx1.jpg')] bg-cover bg-center bg-no-repeat md:w-[641px] md:h-[330px] 2xl:w-[800px] 2xl:h-[415px] hover:bg-[url('https://i.ibb.co/vcCKzx8/nsx2.jpg')]"></div>
    </div>
</>
  );
};

export default Showcase;
