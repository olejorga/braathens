/**
 * A reusable and universal input.
 * 
 * @param {Object} props All.
 * @param {String} props.label Input label.
 * @param {String} props.icon Input icon (Google Material Icons identifier).
 * @param {String} props.className CSS classes applied to the outermost element.
 * 
 * @returns {JSX.Element}
 */
export default function Input(props) {
  const { label, icon, className, ...rest } = props

  return (
    <label className={`relative inline-block text-black ${className}`}>
      {label &&
        <span className={`absolute z-10 top-2 ${icon ? 'left-14' : 'left-4'}`}>
          <small>{label}</small>
        </span>
      }
      {icon &&
        <span className="material-symbols-rounded absolute z-10 top-6 left-4 font-bold">
          {icon}
        </span>
      }
      <input className={`text-black py-2 px-4 rounded-md border-2 border-black w-72 font-bold ${label && 'pt-8'} ${icon && 'pl-14'}`} {...rest} />
    </label>
  )
}