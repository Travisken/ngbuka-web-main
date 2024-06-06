import React from "react";
import Image from "next/image";

const Avatar = ({
  badge = "normal",
  shape = "circle",
  size = "large",
  imgSrc,
  width = 64,
  height = 64,
  firstLetter,
  fontSize = "text-xl",
  fontWeight = "font-medium",
  onClick = () => { },
  badgeTxt = "",
}) => {
  const badgeType = {
    normal: "hidden",
    badge: "px-2 py-0.5 -top-2 border-2 border-white",
    dot: "w-1.5 h-1.5 rounded-full -indent-40 mt-2.5 mr-5 -top-2",
  };

  const avatarShape = {
    normal: "rounded-none",
    square: "rounded-lg",
    circle: "rounded-full",
  };

  const avatarSize = {
    normal: "",
    small: "w-6 h-6",
    medium: "w-8 h-8",
    large: "w-9 h-9",
    extraLarge: "w-16 h-16",
  };
  return (
    <div
      badge={badge}
      shape={shape}
      size={size}
      className={`relative ${avatarSize[size]}`}
    >
      <div
        className={`flex justify-center items-center text-center bg-primary-600 overflow-hidden text-white text-xl ${avatarSize[size]} ${avatarShape[shape]}`}
      >
        {badgeTxt ? (
          <div
            className={`absolute bg-error-100 text-white text-xs flex items-center justify-center overflow-hidden rounded-xl ${badgeType[badge]
              } ${avatarSize[size] === avatarSize["small"] && "py-0 -right-6"}  ${avatarSize[size] === avatarSize["medium"] && "-right-5"
              } ${avatarSize[size] === avatarSize["large"] && "-right-4"} ${avatarSize[size] === avatarSize["extraLarge"] && "-right-2"
              }`}
          >
            {badgeTxt}
          </div>
        ) : (
          ""
        )}
        {imgSrc ? (
          <Image
            onClick={onClick}
            src={imgSrc}
            width={width}
            height={height}
            className="w-full h-full object-cover"
            alt="avatar"
          />
        ) : (
          <span className={`${fontSize} ${fontWeight} capitalize text-white`}>{firstLetter}</span>
        )}
      </div>
    </div>
  );
};

export default Avatar;