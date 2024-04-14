/* eslint react/prop-types: 0 */

export const Tags = ({ tags }) => {
  return (
    <div className="tags">
      {tags.map((tag, index) => (
        <p key={index}>{tag}</p>
      ))}
    </div>
  )
}
