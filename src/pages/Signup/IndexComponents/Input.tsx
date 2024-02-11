import { ChangeEventHandler, HTMLAttributes, InputHTMLAttributes } from "react";

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
    inputAutofocus?: boolean;
    inputSettings?: InputHTMLAttributes<HTMLInputElement>
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
    inputAutofocus = false,
    inputSettings
  } = props.options;

  return (
    <div className={`w-1/2 flex px-2 mt-2 flex-wrapaaqq max-[400px]:w-full ` + containerClassName}>
      <input
        type={inputType}
        name={inputName}
        placeholder={inputPlaceholder}
        className={
          `w-full bg-transparent font-semibold bg-white rounded-xl border-solid border-b-2 border-2 focus:border-b-4 transition-all duration-75 border-[#5c5c5c] placeholder:font-semibold text-xl placeholder:text-[#494949] p-2 focus:-translate-y-1 ` +
          inputClassName
        }
        required={inputRequired}
        autoFocus={inputAutofocus}
        onChange={inputTypeOnChange}
        id={inputName}
        aria-label={inputPlaceholder}
        aria-describedby={inputName}
        aria-required="true"
        spellCheck={spellCheck}
        {...inputSettings}
      />
    </div>
  );
}

export default Input;
