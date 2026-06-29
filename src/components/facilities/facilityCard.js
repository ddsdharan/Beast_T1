function FacilityCard({ image, title }) {
    return (
        <div
            className="
        relative
        overflow-hidden
        group
        cursor-pointer
        h-280px
      "
        >
            <img
                src={image}
                alt={title}
                className="
          w-full
          h-full
          object-cover
          transition-transform
          duration-500
          group-hover:scale-110
        "
            />

            <div className="absolute inset-0 bg-black/20"></div>

            <div className="absolute bottom-0 left-0 p-1">
                <h3
                    className="
            text-white
            uppercase
            text-3xl
            text-left
            font-medium
            tracking-wide
          "
                >
                    {title}
                </h3>
            </div>
        </div>
    );
}

export default FacilityCard;