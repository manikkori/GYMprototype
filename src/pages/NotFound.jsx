import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="min-h-screen bg-dark flex flex-col items-center justify-center text-center px-4">
      <h1 className="font-bebas text-9xl text-primary leading-none">404</h1>
      <h2 className="font-bebas text-4xl text-light tracking-wide mb-8">
        PAGE NOT FOUND
      </h2>
      <Link
        to="/"
        className="bg-surface border border-border hover:border-primary text-light px-8 py-3 font-bebas text-xl tracking-widest transition-colors"
      >
        RETURN TO BASE
      </Link>
    </div>
  );
};

export default NotFound;
