import Select from "react-select";

const Dropdown = ({
  options,
  name,
  isDisabled,
  isClearable,
  defaultValue,
  className,
  isError,
  errorMessage,
  dbName,
  register,
  setValue,
  outerClass,
  value,
  isMulti,
  label,
  id,
  onChange = () => { },
  ...properties
}) => {

  let selectedOption = "";
  if (isMulti) {
    selectedOption = options.filter((option) => {
      return value.includes(option.value)
    })
  }
  else {
    selectedOption = options?.find((option) => option.value === value);
  }

  const errorClass = 'text-error-100 pl-0.5 text-sm pt-2 font-normal leading-[21px]';
  return (
    <div className={`misc-select w-full ${outerClass}`}>
        {label && <label htmlFor={id} className="mb-2">{label}</label>}
      <Select
        {... (register && {...register(dbName)})}
        classNamePrefix={`${className} ${isError && 'isError'} select`}
        placeholder={`${properties.placeholder ? properties.placeholder : "Select property type"}`}
        value={selectedOption}
        isDisabled={isDisabled}
        isClearable={isClearable}
        name={name}
        isMulti={isMulti}
        closeMenuOnSelect={true}
        options={options}
        theme={(theme) => ({ ...theme, colors: { ...theme.colors, primary25: "#F4F6F8", primary: "#F4F6F8" }, })}
        styles={{
          dropdownIndicator: (provided, state) => ({
            ...provided, transition: "all .2s ease", transform: state.selectProps.menuIsOpen && "rotate(180deg)"
          }),
          option: (base) => ({ ...base, color: '#201F1F', ':active': { backgroundColor: '#F4F6F8' }, cursor: 'pointer' }),
        }}
        onChange={(e) => {
          let val = ""
          if (isMulti) {
            val = e.map(x => x.value);
            setValue(dbName, val)
          }
          else {
            val = e
            setValue(dbName, e.value, { shouldValidate: true })
          }
          onChange(val);
        }}
        {...properties}
      />
      {isError ? <span className={`${errorClass} select-none`}> {errorMessage} </span> : ''}
    </div>
  );
};
export default Dropdown;