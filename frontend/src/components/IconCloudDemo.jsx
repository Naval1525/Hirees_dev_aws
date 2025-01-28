
// // // import { useEffect, useMemo, useState } from "react";
// // // import { Cloud, fetchSimpleIcons, renderSimpleIcon } from "react-icon-cloud";
// // // import {
// // //   SiApple,
// // //   SiGoogle,
// // //   SiAmazon,
// // //   SiFacebook,
// // //   SiX,
// // //   SiSpotify,
// // //   SiSlack,
// // //   SiPaypal,
// // //   SiSnapchat,
// // //   SiLinkedin,
// // //   SiInstagram,
// // //   SiAirbnb,
// // //   SiYoutube,
// // //   SiNvidia,
// // //   SiAdobe,
// // //   SiNetflix,
// // //   SiUber,
// // //   SiDropbox,
// // //   SiTwitch,
// // //   SiTesla,
// // //   SiAsana,
// // //   SiSamsung,
// // //   SiVisa,
// // //   SiSony,
// // //   SiPinterest,
// // //   SiShopify,
// // //   SiHuawei,
// // //   SiIntel,
// // //   SiTiktok,
// // // } from "react-icons/si";

// // // // Props for the cloud display configuration
// // // export const cloudProps = {
// // //   containerProps: {
// // //     style: {
// // //       display: "flex",
// // //       justifyContent: "center",
// // //       alignItems: "center",
// // //       width: "100%",
// // //       paddingTop: 40,
// // //     },
// // //   },
// // //   options: {
// // //     reverse: true,
// // //     depth: 1,
// // //     wheelZoom: false,
// // //     imageScale: 2,
// // //     activeCursor: "default",
// // //     tooltip: "native",
// // //     initial: [0.1, -0.1],
// // //     clickToFront: 500,
// // //     tooltipDelay: 0,
// // //     outlineColour: "#0000",
// // //     maxSpeed: 0.04,
// // //     minSpeed: 0.02,
// // //   },
// // // };

// // // // Function to render a custom icon with original colors
// // // export const renderCustomIcon = (icon) => {
// // //   return renderSimpleIcon({
// // //     icon,
// // //     size: 42,
// // //     bgHex: "#0000", // Transparent background to retain original logo color
// // //     aProps: {
// // //       href: undefined,
// // //       target: undefined,
// // //       rel: undefined,
// // //       onClick: (e) => e.preventDefault(),
// // //     },
// // //   });
// // // };

// // // export default function IconCloud({ iconSlugs }) {
// // //   const [data, setData] = useState(null);

// // //   useEffect(() => {
// // //     fetchSimpleIcons({ slugs: iconSlugs }).then(setData);
// // //   }, [iconSlugs]);

// // //   const renderedIcons = useMemo(() => {
// // //     if (!data) return null;

// // //     return Object.values(data.simpleIcons).map((icon) =>
// // //       renderCustomIcon(icon)
// // //     );
// // //   }, [data]);

// // //   return (
// // //     // @ts-ignore
// // //     <Cloud {...cloudProps}>
// // //       <>{renderedIcons}</>
// // //     </Cloud>
// // //   );
// // // }

// // // // Example usage
// // // const companyLogos = [
// // //   "apple",
// // //   "google",
// // //   "amazon",
// // //   "facebook",
// // //   "x",
// // //   "spotify",
// // //   "slack",
// // //   "paypal",
// // //   "snapchat",
// // //   "linkedin",
// // //   "instagram",
// // //   "airbnb",
// // //   "youtube",
// // //   "nvidia",
// // //   "adobe",
// // //   "netflix",
// // //   "uber",
// // //   "dropbox",
// // //   "twitch",
// // //   "tesla",
// // //   "asana",
// // //   "samsung",
// // //   "visa",
// // //   "sony",
// // //   "pinterest",
// // //   "shopify",
// // //   "huawei",
// // //   "intel",
// // //   "tiktok",
// // // ];

// // // export function IconCloudDemo() {
// // //   return (
// // //     <div className="">
// // //       <IconCloud iconSlugs={companyLogos} />
// // //     </div>
// // //   );
// // // }
// // // import React from 'react';
// // // import { IconCloud } from './ui/icon-cloud';
// // // import {
// // //   SiApple,
// // //   SiGoogle,
// // //   SiAmazon,
// // //   SiFacebook,
// // //   SiX,
// // //   SiSpotify,
// // //   SiSlack,
// // //   SiPaypal,
// // //   SiSnapchat,
// // //   SiLinkedin,
// // //   SiInstagram,
// // //   SiAirbnb,
// // //   SiYoutube,
// // //   SiNvidia,
// // //   SiAdobe,
// // //   SiNetflix,
// // //   SiUber,
// // //   SiDropbox,
// // //   SiTwitch,
// // //   SiTesla,
// // //   SiAsana,
// // //   SiSamsung,
// // //   SiVisa,
// // //   SiSony,
// // //   SiPinterest,
// // //   SiShopify,
// // //   SiHuawei,
// // //   SiIntel,
// // //   SiTiktok
// // // } from "react-icons/si";

// // // const IconCloudDemo = () => {
// // //   const icons = [
// // //     <SiApple  color="#000000" />,
// // //     <SiGoogle  color="#4285F4" />,
// // //     <SiAmazon  color="#FF9900" />,
// // //     <SiFacebook  color="#1877F2" />,
// // //     <SiX  color="#000000" />,
// // //     <SiSpotify  color="#1DB954" />,
// // //     <SiSlack  color="#4A154B" />,
// // //     <SiPaypal  color="#00457C" />,
// // //     <SiSnapchat  color="#FFFC00" />,
// // //     <SiLinkedin  color="#0A66C2" />,
// // //     <SiInstagram  color="#E4405F" />,
// // //     <SiAirbnb  color="#FF5A5F" />,
// // //     <SiYoutube color="#FF0000" />,
// // //     <SiNvidia  color="#76B900" />,
// // //     <SiAdobe color="#FF0000" />,
// // //     <SiNetflix  color="#E50914" />,
// // //     <SiUber color="#000000" />,
// // //     <SiDropbox  color="#0061FF" />,
// // //     <SiTwitch  color="#9146FF" />,
// // //     <SiTesla  color="#CC0000" />,
// // //     <SiAsana  color="#F06A6A" />,
// // //     <SiSamsung  color="#1428A0" />,
// // //     <SiVisa color="#1A1F71" />,
// // //     <SiSony  color="#000000" />,
// // //     <SiPinterest  color="#E60023" />,
// // //     <SiShopify  color="#7AB55C" />,
// // //     <SiHuawei  color="#FF0000" />,
// // //     <SiIntel  color="#0071C5" />,
// // //     <SiTiktok color="#000000" />
// // //   ];

// // //   return (
// // //     <div className="">

// // //         {/* <h2 className="text-2xl font-bold text-center mb-6 text-gray-800 dark:text-white">
// // //           Tech Companies Logo Cloud
// // //         </h2> */}

// // //           <IconCloud
// // //             icons={icons}
// // //           />

// // //     </div>
// // //   );
// // // };

// // // export default IconCloudDemo;
// // import React from 'react';
// // import { IconCloud } from './ui/icon-cloud';
// // import {
// //   SiApple,
// //   SiGoogle,
// //   SiAmazon,
// //   SiFacebook,
// //   SiX,
// //   SiSpotify,
// //   SiSlack,
// //   SiPaypal,
// //   SiSnapchat,
// //   SiLinkedin,
// //   SiInstagram,
// //   SiAirbnb,
// //   SiYoutube,
// //   SiNvidia,
// //   SiAdobe,
// //   SiNetflix,
// //   SiUber,
// //   SiDropbox,
// //   SiTwitch,
// //   SiTesla,
// //   SiAsana,
// //   SiSamsung,
// //   SiVisa,
// //   SiSony,
// //   SiPinterest,
// //   SiShopify,
// //   SiHuawei,
// //   SiIntel,
// //   SiTiktok
// // } from "react-icons/si";

// // const IconCloudDemo = () => {
// //   const iconSize = 64; // Define a uniform size for the icons
// //   const icons = [
// //     <SiApple color="#000000" size={iconSize} />,
// //     <SiGoogle color="#4285F4" size={iconSize} />,
// //     <SiAmazon color="#FF9900" size={iconSize} />,
// //     <SiFacebook color="#1877F2" size={iconSize} />,
// //     <SiX color="#000000" size={iconSize} />,
// //     <SiSpotify color="#1DB954" size={iconSize} />,
// //     <SiSlack color="#4A154B" size={iconSize} />,
// //     <SiPaypal color="#00457C" size={iconSize} />,
// //     <SiSnapchat color="#FFFC00" size={iconSize} />,
// //     <SiLinkedin color="#0A66C2" size={iconSize} />,
// //     <SiInstagram color="#E4405F" size={iconSize} />,
// //     <SiAirbnb color="#FF5A5F" size={iconSize} />,
// //     <SiYoutube color="#FF0000" size={iconSize} />,
// //     <SiNvidia color="#76B900" size={iconSize} />,
// //     <SiAdobe color="#FF0000" size={iconSize} />,
// //     <SiNetflix color="#E50914" size={iconSize} />,
// //     <SiUber color="#000000" size={iconSize} />,
// //     <SiDropbox color="#0061FF" size={iconSize} />,
// //     <SiTwitch color="#9146FF" size={iconSize} />,
// //     <SiTesla color="#CC0000" size={iconSize} />,
// //     <SiAsana color="#F06A6A" size={iconSize} />,
// //     <SiSamsung color="#1428A0" size={iconSize} />,
// //     <SiVisa color="#1A1F71" size={iconSize} />,
// //     <SiSony color="#000000" size={iconSize} />,
// //     <SiPinterest color="#E60023" size={iconSize} />,
// //     <SiShopify color="#7AB55C" size={iconSize} />,
// //     <SiHuawei color="#FF0000" size={iconSize} />,
// //     <SiIntel color="#0071C5" size={iconSize} />,
// //     <SiTiktok color="#000000" size={iconSize} />
// //   ];

// //   return (
// //     <div className="flex justify-center items-center w-full h-full">
// //       <IconCloud icons={icons} />
// //     </div>
// //   );
// // };

// // export default IconCloudDemo;
// import React from 'react';
// import { IconCloud } from './ui/icon-cloud';
// import {
//   SiApple,
//   SiGoogle,
//   SiAmazon,
//   SiFacebook,
//   SiX,
//   SiSpotify,
//   SiSlack,
//   SiPaypal,
//   SiSnapchat,
//   SiLinkedin,
//   SiInstagram,
//   SiAirbnb,
//   SiYoutube,
//   SiNvidia,
//   SiAdobe,
//   SiNetflix,
//   SiUber,
//   SiDropbox,
//   SiTwitch,
//   SiTesla,
//   SiAsana,
//   SiSamsung,
//   SiVisa,
//   SiSony,
//   SiPinterest,
//   SiShopify,
//   SiHuawei,
//   SiIntel,
//   SiTiktok
// } from "react-icons/si";

// const IconCloudDemo = () => {
//   // Increased icon size for larger appearance
//   const iconSize = 96;

//   const icons = [
//     <SiApple color="#000000" size={iconSize} />,
//     <SiGoogle color="#4285F4" size={iconSize} />,
//     <SiAmazon color="#FF9900" size={iconSize} />,
//     <SiFacebook color="#1877F2" size={iconSize} />,
//     <SiX color="#000000" size={iconSize} />,
//     <SiSpotify color="#1DB954" size={iconSize} />,
//     <SiSlack color="#4A154B" size={iconSize} />,
//     <SiPaypal color="#00457C" size={iconSize} />,
//     <SiSnapchat color="#FFFC00" size={iconSize} />,
//     <SiLinkedin color="#0A66C2" size={iconSize} />,
//     <SiInstagram color="#E4405F" size={iconSize} />,
//     <SiAirbnb color="#FF5A5F" size={iconSize} />,
//     <SiYoutube color="#FF0000" size={iconSize} />,
//     <SiNvidia color="#76B900" size={iconSize} />,
//     <SiAdobe color="#FF0000" size={iconSize} />,
//     <SiNetflix color="#E50914" size={iconSize} />,
//     <SiUber color="#000000" size={iconSize} />,
//     <SiDropbox color="#0061FF" size={iconSize} />,
//     <SiTwitch color="#9146FF" size={iconSize} />,
//     <SiTesla color="#CC0000" size={iconSize} />,
//     <SiAsana color="#F06A6A" size={iconSize} />,
//     <SiSamsung color="#1428A0" size={iconSize} />,
//     <SiVisa color="#1A1F71" size={iconSize} />,
//     <SiSony color="#000000" size={iconSize} />,
//     <SiPinterest color="#E60023" size={iconSize} />,
//     <SiShopify color="#7AB55C" size={iconSize} />,
//     <SiHuawei color="#FF0000" size={iconSize} />,
//     <SiIntel color="#0071C5" size={iconSize} />,
//     <SiTiktok color="#000000" size={iconSize} />
//   ];

//   return (
//     <div className="flex justify-center items-center w-full h-full min-h-[600px]">
//       <div className="w-[600px] h-[600px]">
//         <IconCloud icons={icons} />
//       </div>
//     </div>
//   );
// };

// export default IconCloudDemo;
import React from 'react';
import { IconCloud } from './ui/icon-cloud';
import {
  SiApple,
  SiGoogle,
  SiAmazon,
  SiFacebook,
  SiX,
  SiSpotify,
  SiSlack,
  SiPaypal,
  SiSnapchat,
  SiLinkedin,
  SiInstagram,
  SiAirbnb,
  SiYoutube,
  SiNvidia,
  SiAdobe,
  SiNetflix,
  SiUber,
  SiDropbox,
  SiTwitch,
  SiTesla,
  SiAsana,
  SiSamsung,
  SiVisa,
  SiSony,
  SiPinterest,
  SiShopify,
  SiHuawei,
  SiIntel,
  SiTiktok
} from "react-icons/si";

const IconCloudDemo = () => {
  const iconSize = 96;

  const icons = React.useMemo(() => [
    <SiApple key="apple" color="#000000" size={iconSize} />,
    <SiGoogle key="google" color="#4285F4" size={iconSize} />,
    <SiAmazon key="amazon" color="#FF9900" size={iconSize} />,
    <SiFacebook key="facebook" color="#1877F2" size={iconSize} />,
    <SiX key="x" color="#000000" size={iconSize} />,
    <SiSpotify key="spotify" color="#1DB954" size={iconSize} />,
    <SiSlack key="slack" color="#4A154B" size={iconSize} />,
    <SiPaypal key="paypal" color="#00457C" size={iconSize} />,
    <SiSnapchat key="snapchat" color="#FFFC00" size={iconSize} />,
    <SiLinkedin key="linkedin" color="#0A66C2" size={iconSize} />,
    <SiInstagram key="instagram" color="#E4405F" size={iconSize} />,
    <SiAirbnb key="airbnb" color="#FF5A5F" size={iconSize} />,
    <SiYoutube key="youtube" color="#FF0000" size={iconSize} />,
    <SiNvidia key="nvidia" color="#76B900" size={iconSize} />,
    <SiAdobe key="adobe" color="#FF0000" size={iconSize} />,
    <SiNetflix key="netflix" color="#E50914" size={iconSize} />,
    <SiUber key="uber" color="#000000" size={iconSize} />,
    <SiDropbox key="dropbox" color="#0061FF" size={iconSize} />,
    <SiTwitch key="twitch" color="#9146FF" size={iconSize} />,
    <SiTesla key="tesla" color="#CC0000" size={iconSize} />,
    <SiAsana key="asana" color="#F06A6A" size={iconSize} />,
    <SiSamsung key="samsung" color="#1428A0" size={iconSize} />,
    <SiVisa key="visa" color="#1A1F71" size={iconSize} />,
    <SiSony key="sony" color="#000000" size={iconSize} />,
    <SiPinterest key="pinterest" color="#E60023" size={iconSize} />,
    <SiShopify key="shopify" color="#7AB55C" size={iconSize} />,
    <SiHuawei key="huawei" color="#FF0000" size={iconSize} />,
    <SiIntel key="intel" color="#0071C5" size={iconSize} />,
    <SiTiktok key="tiktok" color="#000000" size={iconSize} />
  ], [iconSize]);

  return (
    <div className="flex justify-center items-center w-full h-full min-h-[600px]">
      <div className="w-[600px] h-[600px]">
        <IconCloud
          icons={icons}
          className="w-full h-full"
        />
      </div>
    </div>
  );
};

export default IconCloudDemo;