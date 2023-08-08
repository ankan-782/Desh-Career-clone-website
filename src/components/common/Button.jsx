export default function Button({ type, extraClasses, children }) {
    return (
        <button type={type} className={`bg-[#dc3545] text-white px-3 py-2 rounded ${extraClasses}`}>{children}</button>
    );
}
