"use client";
const Text = ({
    variant = "standard",
    fontSize = "",
    fontWeight = "font-normal",
    children,
    className = '',
    textColor = 'text-neutral-500',
    onClick,
}) => {
    const TextType = {
        standard: "standard",
        large: "large",
        largeText: "largeText",
        extraLarge: "extra-large",
        medium: "medium",
        small: "small",
        extraSmall: "extra-small",
        label: "label",
    };

    const TextStyle = {
        standard: "text-base",
        large: "text-[17px]",
        largeText: "text-lg",
        extraLarge: "text-xl",
        medium: "text-sm",
        small: "text-[13px]",
        extraSmall: "text-xs",
        label: "text-[11px]",
    };
    return (
        <p
            variant={TextType[variant]}
            className={`${fontSize || TextStyle[variant]} ${fontWeight} ${className} ${textColor}`}
            onClick={onClick}>
            {children}
        </p>
    );
};

export default Text;