export default function TitleTwo({ className, children }) {
  return (
    <h2
      className={`text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl mb-10 ${className}`}
    >
      {children}
    </h2>
  );
}
