export default function Container({ children, className }) {
  return <div className={`w-[95%] sm:w-[85%] mx-auto ${className}`}>{children}</div>;
}
