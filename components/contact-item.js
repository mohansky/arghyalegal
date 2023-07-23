export default function ContactItem({
  name,
  title,
  href,
  arialabel,
  text,
  id,
  className,
}) {
  return (
    <>
      <div className="mb-5 w-fit">
        <a
          key={id}
          className={`${className}`}
          href={href}
          name={name}
          title={title}
          aria-label={arialabel}
          target="_blank"
          rel="noopener noreferrer"
        >
          {text.map((item, index) => {
            return <p key={index}>{item}</p>;
          })}
        </a>
      </div>
    </>
  );
}
