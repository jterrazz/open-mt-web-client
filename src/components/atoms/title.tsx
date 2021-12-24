interface TitleProps {
    title: string;
    subtitle?: string;
    size?: 'small' | 'medium' | 'large';
}

const Title = ({ title, subtitle }: TitleProps) => (
    <span>
        <h1>{title}</h1>
        {subtitle && <h2>{subtitle}</h2>}
    </span>
);

export default Title;
