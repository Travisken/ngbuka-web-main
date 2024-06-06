import classnames from "classnames";
import { useEffect, useState } from "react";
import { FaCheck } from "react-icons/fa6";


const Checkbox = ({
  id,
  name,
  className,
  handleChange,
  isSelected = true,
  value,
  checkBoxLabel,
  hideLabel,
  checkBoxDisable = false,
  isError = false,
  checkBoxLabelPos = "right",
  labelClassName = "",
  checkboxStyle,
  onClick,
}) => {
  const [isChecked, setChecked] = useState(isSelected);

  const checkboxStyles = {
    outline: "checkMark2",
    filled: "checkMark",
  };

  useEffect(() => {
    setChecked(isSelected);
  }, [isSelected]);

  const handleCheckBoxChange = (e) => {
    setChecked(e.target.checked);
    handleChange(e);
  };

  return (
    <>
      <div
        className={`relative inline-flex items-center cursor-pointer space-x-[10px] mb-5 ${
          checkBoxLabelPos === "left" ? "flex-row-reverse" : ""
        } ${checkBoxDisable && "pointer-events-none"}`}
        onClick={onClick}
      >
        <input
          id={id}
          name={name}
          onChange={handleCheckBoxChange}
          value={value}
          type="checkbox"
          checked={isChecked}
          className={`absolute opacity-0 w-full h-full left-0 top-0 z-10 cursor-pointer ${className}`}
        />
        <span
          className={classnames(
            [className],
            "flex justify-center items-center relative w-4 h-4 rounded border",
            (isChecked && checkboxStyle) === "filled" && "bg-secondary-600",
            {
              "border-primary-400": !isChecked && !isError,
              "border-primary-600": isChecked && !checkBoxDisable,
              "bg-neutral-200 border-secondary-400 pointer-events-none":
                checkBoxDisable,
              "border-error-100 ": isError,
            }
          )}
        >
          {isChecked && !checkBoxDisable && (
            // <IcomoonIcon
            //   // icon={checkboxStyles[checkboxStyle]}
            //   icon=
            //   color="#0A0B0A"
            //   size={13}
            // />
            <FaCheck  size={13}  color="#0A0B0A" />
          )}
          {checkBoxDisable && isChecked && (
            // <IcomoonIcon
            //   icon={checkboxStyles[checkboxStyle]}
            //   color="#9c9caf"
            //   size={13}
            // />
            <FaCheck  size={13}   color="#0A0B0A" />
          )}
        </span>
        <span
          className={`text-sm text-neutral-900 ${labelClassName} ${
            checkBoxLabelPos === "left" ? "mr-2" : "ml-2"
          }`}
        >
          {!hideLabel ? checkBoxLabel : ""}
        </span>
      </div>
      {isError && (
        <div className="block text-xs text-error-100 mt-1">Error message</div>
      )}
    </>
  );
};

export default Checkbox;
