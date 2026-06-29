function ScheduleCard({
    image,
    day,
    date,
    activities,
}) {
    return (
        <div
            className="
        relative
        overflow-hidden
        group
        h-70
        w-auto
        cursor-pointer
      "
        >
            <img
                src={image}
                alt={day}
                className="
          absolute
          inset-0
          w-full
          h-full
          object-cover
          transition-transform
          duration-700
          group-hover:scale-110
        "
            />
            <div className="absolute inset-0 bg-black/45" />
            <div
                className="
          relative
          h-full
          p-6
          flex
          flex-col
          justify-between
        "
            >
                <h3
                    className="
            text-white
            uppercase
            text-lg
            text-right
            leading-none
            font-semibold
          "
                >
                    {day},
                    <span className="ml-2">
                        {date}
                    </span>
                </h3>

                <div>
                    {activities.map((item) => (
                        <p
                            key={item}
                            className="
                text-white
                uppercase
                text-lg
                text-left
                font-semibold
                mb-1
              "
                        >
                            {item}
                        </p>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default ScheduleCard;