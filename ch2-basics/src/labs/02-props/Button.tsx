type Button = {
    label: string;
    onClick: () => void;
};

export default function Button({label, onClick}: Button) {
    return <button onClick={onClick}>{label}</button>;
}