export default function TextButton({ children }) {
  return (
    <li className="relative group">
      <button className="hover:text-red-600 transition-all">{children}</button>
      <span className="absolute bottom-0 left-0 w-0 h-0.5  bg-red-600 transition-all group-hover:w-full" />
    </li>
  );
}
