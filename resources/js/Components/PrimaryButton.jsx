export default function PrimaryButton({ className = '', disabled, children, ...props }) {
    return (
        <button
            {...props}
            style={{ backgroundColor:"#29a79b" }}
            className={
                `btn border-0 rounded-none text-white fw-bold w-1/3 ${
                    disabled && 'opacity-25'
                } ` + className
            }
            disabled={disabled}
        >
            {children}
        </button>
    );
}
