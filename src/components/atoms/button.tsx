interface ButtonProps {
    level?: 'primary';
    label: string;
    size?: 'small' | 'medium' | 'large';
}

const Button = ({ label }: ButtonProps) => (
    <button className="bg-primary rounded border-0 text-white">{label}</button>
);

export default Button;
