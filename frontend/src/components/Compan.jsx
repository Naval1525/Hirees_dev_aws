import React from "react";
import { motion } from "framer-motion";
import {
  SiApple, SiGoogle, SiAmazon, SiFacebook, SiX,
  SiSpotify, SiSlack, SiPaypal, SiSnapchat,
  SiLinkedin, SiInstagram, SiAirbnb, SiYoutube,
  SiNvidia, SiAdobe, SiNetflix, SiUber,
  SiDropbox, SiTwitch, SiTesla, SiAsana,
  SiSamsung, SiVisa, SiSony, SiPinterest,
  SiShopify, SiHuawei, SiIntel, SiTiktok
} from "react-icons/si";

const Compan = () => {
  const companies = [
    { name: "Apple", icon: SiApple, color: "#000000" },
    { name: "Google", icon: SiGoogle, color: "#4285F4" },
    { name: "Amazon", icon: SiAmazon, color: "#FF9900" },
    { name: "Facebook", icon: SiFacebook, color: "#1877F2" },
    { name: "X", icon: SiX, color: "#000000" },
    { name: "Spotify", icon: SiSpotify, color: "#1DB954" },
    { name: "Slack", icon: SiSlack, color: "#4A154B" },
    { name: "PayPal", icon: SiPaypal, color: "#00457C" },
    { name: "Snapchat", icon: SiSnapchat, color: "#FFFC00" },
    { name: "LinkedIn", icon: SiLinkedin, color: "#0A66C2" },
    { name: "Instagram", icon: SiInstagram, color: "#E4405F" },
    { name: "Airbnb", icon: SiAirbnb, color: "#FF5A5F" },
    { name: "YouTube", icon: SiYoutube, color: "#FF0000" },
    { name: "NVIDIA", icon: SiNvidia, color: "#76B900" },
    { name: "Adobe", icon: SiAdobe, color: "#FF0000" },
    { name: "Netflix", icon: SiNetflix, color: "#E50914" },
    { name: "Uber", icon: SiUber, color: "#000000" },
    { name: "Dropbox", icon: SiDropbox, color: "#0061FF" },
    { name: "Twitch", icon: SiTwitch, color: "#9146FF" },
    { name: "Tesla", icon: SiTesla, color: "#CC0000" },
    { name: "Asana", icon: SiAsana, color: "#F06A6A" },
    { name: "Samsung", icon: SiSamsung, color: "#1428A0" },
    { name: "Visa", icon: SiVisa, color: "#1434CB" },
    { name: "Sony", icon: SiSony, color: "#000000" },
    { name: "Pinterest", icon: SiPinterest, color: "#E60023" },
    { name: "Shopify", icon: SiShopify, color: "#7AB55C" },
    { name: "Huawei", icon: SiHuawei, color: "#FF0000" },
    { name: "Intel", icon: SiIntel, color: "#0071C5" },
    { name: "TikTok", icon: SiTiktok, color: "#000000" },
    { name: "Apple", icon: SiApple, color: "#000000" },
    { name: "Google", icon: SiGoogle, color: "#4285F4" },
    { name: "Amazon", icon: SiAmazon, color: "#FF9900" },
    { name: "Facebook", icon: SiFacebook, color: "#1877F2" },
    { name: "X", icon: SiX, color: "#000000" },
    { name: "Spotify", icon: SiSpotify, color: "#1DB954" },
    { name: "Slack", icon: SiSlack, color: "#4A154B" },
    { name: "PayPal", icon: SiPaypal, color: "#00457C" },
    { name: "Snapchat", icon: SiSnapchat, color: "#FFFC00" },
    { name: "LinkedIn", icon: SiLinkedin, color: "#0A66C2" },
    { name: "Instagram", icon: SiInstagram, color: "#E4405F" },
    { name: "Airbnb", icon: SiAirbnb, color: "#FF5A5F" },
    { name: "YouTube", icon: SiYoutube, color: "#FF0000" },
    { name: "NVIDIA", icon: SiNvidia, color: "#76B900" },
    { name: "Adobe", icon: SiAdobe, color: "#FF0000" },
    { name: "Netflix", icon: SiNetflix, color: "#E50914" },
    { name: "Uber", icon: SiUber, color: "#000000" },
    { name: "Dropbox", icon: SiDropbox, color: "#0061FF" },
    { name: "Twitch", icon: SiTwitch, color: "#9146FF" },
    { name: "Tesla", icon: SiTesla, color: "#CC0000" },
    { name: "Asana", icon: SiAsana, color: "#F06A6A" },
    { name: "Samsung", icon: SiSamsung, color: "#1428A0" },
    { name: "Visa", icon: SiVisa, color: "#1434CB" },
    { name: "Sony", icon: SiSony, color: "#000000" },
    { name: "Pinterest", icon: SiPinterest, color: "#E60023" },
    { name: "Shopify", icon: SiShopify, color: "#7AB55C" },
    { name: "Huawei", icon: SiHuawei, color: "#FF0000" },
    { name: "Intel", icon: SiIntel, color: "#0071C5" },
    { name: "TikTok", icon: SiTiktok, color: "#000000" },
    { name: "Apple", icon: SiApple, color: "#000000" },
    { name: "Google", icon: SiGoogle, color: "#4285F4" },
    { name: "Amazon", icon: SiAmazon, color: "#FF9900" },
    { name: "Facebook", icon: SiFacebook, color: "#1877F2" },
    { name: "X", icon: SiX, color: "#000000" },
    { name: "Spotify", icon: SiSpotify, color: "#1DB954" },
    { name: "Slack", icon: SiSlack, color: "#4A154B" },
    { name: "PayPal", icon: SiPaypal, color: "#00457C" },
    { name: "Snapchat", icon: SiSnapchat, color: "#FFFC00" },
    { name: "LinkedIn", icon: SiLinkedin, color: "#0A66C2" },
    { name: "Instagram", icon: SiInstagram, color: "#E4405F" },
    { name: "Airbnb", icon: SiAirbnb, color: "#FF5A5F" },
    { name: "YouTube", icon: SiYoutube, color: "#FF0000" },
    { name: "NVIDIA", icon: SiNvidia, color: "#76B900" },
    { name: "Adobe", icon: SiAdobe, color: "#FF0000" },
    { name: "Netflix", icon: SiNetflix, color: "#E50914" },
    { name: "Uber", icon: SiUber, color: "#000000" },
    { name: "Dropbox", icon: SiDropbox, color: "#0061FF" },
    { name: "Twitch", icon: SiTwitch, color: "#9146FF" },
    { name: "Tesla", icon: SiTesla, color: "#CC0000" },
    { name: "Asana", icon: SiAsana, color: "#F06A6A" },
    { name: "Samsung", icon: SiSamsung, color: "#1428A0" },
    { name: "Visa", icon: SiVisa, color: "#1434CB" },
    { name: "Sony", icon: SiSony, color: "#000000" },
    { name: "Pinterest", icon: SiPinterest, color: "#E60023" },
    { name: "Shopify", icon: SiShopify, color: "#7AB55C" },
    { name: "Huawei", icon: SiHuawei, color: "#FF0000" },
    { name: "Intel", icon: SiIntel, color: "#0071C5" },
    { name: "TikTok", icon: SiTiktok, color: "#000000" }
  ];

  return (
    <div className=" p-9 rounded-lg mt-8 ">
      <div className="mb-5 text-center">
        <h2 className="text-3xl font-bold text-blue-700 mb-8">
          Top <span className="text-black">Companies</span>
        </h2>
      </div>
      <div className="overflow-hidden">
        <motion.div
          className="flex space-x-20 justify-center mt-10"
          animate={{ x: [-1500, 0, 1500] }}
          transition={{
            duration: 40,
            repeat: Infinity,
            repeatType: "loop",
            ease: "linear",
          }}
        >
          {companies.map((company, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-center justify-center space-y-4"
              initial={{ opacity: 1 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
            >
              <company.icon
                style={{
                  fontSize: "3rem",
                  color: company.color
                }}
              />
              <p className="text-sm text-gray-900 font-semibold">
                {company.name}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Compan;