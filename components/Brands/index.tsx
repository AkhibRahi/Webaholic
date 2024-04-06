// import { Brand } from "@/types/brand";
// import Image from "next/image";
// import { FaWordpress } from "react-icons/fa";
// import { RiJavascriptFill } from "react-icons/ri";
// import { FaWix } from "react-icons/fa6";
// import IconReactjsLine from "../icons/IconsReacthjsLine";
// import { SiTsnode } from "react-icons/si";
// import { SiTailwindcss } from "react-icons/si";


// const Brands = () => {
//   return (
//     <section className="pt-16">
//       <div className="container">
//         <div className="-mx-4 flex flex-wrap">
//           <div className="w-full px-4">
//             <div
//               className="wow fadeInUp bg-gray-light dark:bg-gray-dark flex flex-wrap items-center justify-center rounded-sm px-8 py-8 sm:px-10 md:px-[50px] md:py-[40px] xl:p-[50px] 2xl:px-[70px] 2xl:py-[60px]"
//               data-wow-delay=".1s"
//               style={{
//                 display:"flex",
//                 gap:'30px',
//                 justifyContent:'space-around'
//               }}
//             >
//                 <FaWordpress  size={70}/>
//                 <RiJavascriptFill size={80}/>
//                 <FaWix  size={80}/>
//                 <IconReactjsLine  style={{fontSize:'80px'}} />
//                 <SiTsnode  size={70}/>
//                 <SiTailwindcss  size={70}/>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Brands;

// const SingleBrand = ({ brand }: { brand: Brand }) => {
//   const { href, image, name } = brand;

//   return (
//     <div className="mx-3 flex w-full max-w-[160px] items-center justify-center py-[15px] sm:mx-4 lg:max-w-[130px] xl:mx-6 xl:max-w-[150px] 2xl:mx-8 2xl:max-w-[160px]">
//       <a
//         href={href}
//         target="_blank"
//         rel="nofollow noreferrer"
//         className="relative h-10 w-full opacity-70 grayscale transition hover:opacity-100 hover:grayscale-0 dark:opacity-60 dark:hover:opacity-100"
//       >
//         <Image src={image} alt={name} fill />
//       </a>
//     </div>
//   );
// };
