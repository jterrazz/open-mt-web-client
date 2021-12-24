import Button from '../atoms/button';

interface TheNavbarProps {
    title: string;
    mainLinks: { name: string; url: string }[];
    user?: {
        avatarUrl: string;
        name: string;
    };
}

const TheNavbar = ({ title, mainLinks, user }: TheNavbarProps) => {
    const loggedInSection = () => {
        return <div>{user?.name}</div>;
    };

    const loggedOutSection = () => (
        <ul className="d-flex align-items-center">
            <li className="mx-2">
                <Button label="Login" />
            </li>
            <li className="me-2">
                <Button label="Register" />
            </li>
        </ul>
    );

    return (
        <nav className="d-flex align-items-center bg-white justify-content-between">
            <div className="h3 m-0 p-2">{title}</div>

            <ul className="d-flex align-items-center">
                {mainLinks.map(({ name, url }) => (
                    <a href={url} key={name}>
                        <li>{name}</li>
                    </a>
                ))}
            </ul>

            <input title="ok" />

            {user ? loggedInSection() : loggedOutSection()}
        </nav>
    );
};

export default TheNavbar;
