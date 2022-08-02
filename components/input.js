/**
 * A reusable and universal input.
 * 
 * @param {Object} props All.
 * 
 * @returns {JSX.Element}
 */
export default function Input(props) {
  const { className, ...rest } = props

  return (
    <label className="relative text-black -mb-24">
      <span className="absolute z-10 top-2 left-14">
        <small>To</small>
      </span>
      <span>
      <span className="material-symbols-rounded absolute z-10 top-6 left-4 font-bold">
        flight_land
      </span>
      </span>
      <input className="text-black py-2 px-4 rounded-md border-2 border-black w-72 pt-8 pl-14 uppercase font-bold" type="text" placeholder="..." />
    </label>
  )
}