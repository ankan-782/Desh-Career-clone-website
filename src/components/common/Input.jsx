export default function Input({ ...attributes }) {
    return (
        <input className="focus:outline-none" {...attributes} />
    );
}
