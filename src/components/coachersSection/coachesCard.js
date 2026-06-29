import { Link } from "react-router-dom";

function CoachCard({ coach }) {
    return (
        <Link
            to={`/coach/${coach.slug}`}
            className="
        group
        overflow-hidden
        block
      "
        >
            <div className="relative">

                <img
                    src={coach.image}
                    alt={coach.name}
                    className="
            w-full
            h-105
            object-cover
            transition
            duration-500
            group-hover:scale-105
          "
                />

                <div
                    className="
            absolute
            inset-0
            bg-black/0
            group-hover:bg-black/20
            transition
          "
                />

            </div>
        </Link>
    );
}

export default CoachCard;