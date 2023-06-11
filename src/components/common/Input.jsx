export default function Input({ type, placeholder }) {
    return (
        <input className="focus:outline-none" type={type} placeholder={placeholder} />
    );
}
