/* eslint react/prop-types: 0 */

export const Button = ({ url, className, icon, text }) => {
  return (
    <>
      <a
        href={url}
        className={className}
        target="_blank"
        rel="noopener noreferrer">
        {icon}
        {text}
      </a>
    </>
  )
}
