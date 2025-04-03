const Select = ({
  data,
  value,
  onChange,
  placeholder,
  isAllowEmpty = false,
  disabled = false,
}) => {
  return (
    <div className="relative w-full">
      <select
        className="w-full p-2 border rounded-lg appearance-none focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:bg-gray-200"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        disabled={disabled}
      >
        {isAllowEmpty && (
          <option value="">{placeholder || "Select an option"}</option>
        )}
        {data.map((item) => (
          <option key={item.id} value={item.id}>
            {item.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Select;
