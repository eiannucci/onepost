interface InputProps {
    placeholder?: string;
    value?: string;
    type?: string;
    disabled?: boolean;
    onChange: (event:React.ChangeEvent<HTMLInputElement>) => void;
}

const Input: React.FC<InputProps> = ({
    placeholder,
    value,
    type,
    disabled,
    onChange
}) => {
    return (
        <input
            disabled={disabled}
            onChange={onChange}
            value={value}
            type={type}
            placeholder={placeholder}
            className="
            w-full
            p-4
            text-lg
            bg-black
            border-2
            text-white
            border-neutral-800
            focus:border-2
            transition
            disabled:bg-natural-900
            disabled:opacity-70
            disabled:cursor-not-allowed
            "
        />
    );
 }

 export default Input