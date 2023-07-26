export default function TitleFour({ className, children }) {
  return (
    <p
      className={`leading-7 font-medium tracking-tight text-gray-900 mb-5 ${className}`}
    >
      {children}
    </p>
  );
}
