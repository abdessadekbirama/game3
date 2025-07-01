export default function Question({ a, b, operator }) {
  return (
    <h2 className="text-4xl font-extrabold text-gray-100 mb-8 select-none">
      What is {a} {operator} {b}?
    </h2>
  );
}
