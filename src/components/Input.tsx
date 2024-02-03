import { ChangeEventHandler } from "react";

interface InputProps {
  options: {
    inputType: string;
    inputName: string;
    inputPlaceholder: string;
    inputRequired?: boolean;
    inputTypeOnChange?: ChangeEventHandler<HTMLInputElement>;
    inputClassName?: string;
    containerClassName?: string;
    spellCheck?: boolean;
    inputAutofocus?: boolean
  };
}
function Input(props: InputProps) {
  const {
    inputType = "text",
    inputName,
    inputPlaceholder,
    inputRequired = true,
    inputTypeOnChange,
    containerClassName = "",
    inputClassName = "",
    spellCheck = false,
    inputAutofocus = false
  } = props.options;

  return (
    <div className={`w-full mx-auto grid place-items-center ` + containerClassName}>
      <input
        type={inputType}
        name={inputName}
        placeholder={inputPlaceholder}
        className={
          `bg-transparent max-w-[20rem] font-semibold appearance-none bg-white w-full rounded-xl border-solid border-b-2 border-2 focus:border-b-4 transition-all duration-75 border-[#5c5c5c] placeholder:font-semibold text-xl placeholder:text-[#494949] p-2 focus:-translate-y-1 mx-auto ` +
          inputClassName
        }
        required={inputRequired}
        autoComplete={inputName}
        autoFocus={inputAutofocus}
        onChange={inputTypeOnChange}
        id={inputName}
        aria-label={inputPlaceholder}
        aria-describedby={inputName}
        aria-required="true"
        spellCheck={spellCheck}
      />
    </div>
  );
}

export default Input;
