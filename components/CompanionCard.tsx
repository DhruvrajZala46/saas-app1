import React from "react";
import Image from "next/image";
import Link from "next/link";

interface CompanionCardProps {
  id: string;
  name: string;
  topic: string;
  subject: string;
  duration: number;
  color: string;
}

const CompanionCard = ({
  id,
  name,
  topic,
  subject,
  duration,
  color,
}: CompanionCardProps) => {
  return (
    <article
      className="companion-card rounded-2xl border-2 border-red-500 p-3 m-4"
      style={{ backgroundColor: color }}
    >
      <div className="flex justify-between items-center ">
        <div className="subject-badge p-1 px-2 bg-black text-white rounded-full m-2">
          {subject}
        </div>
        <button className="companion-bookmark">
          <Image
            src="/icons/bookmark.svg"
            alt="bookmark"
            className=" filter invert-0 brightness-0 m-3"
            width={12.5}
            height={15}
          />
        </button>
      </div>

      <h2 className="text-2xl font-bold">{name}</h2>
      <p className="text-sm">{topic}</p>
      <div className="flex items-center gap-2">
        <Image
          src="/icons/clock.svg"
          alt="duration"
          width={13.5}
          height={13.5}
        />

        <p className="texsm">{duration} minutes</p>
      </div>
      <Link
        href={`/companions/${id}`}
        className="bg-black hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-2xl justify-center flex m-3"
      >
        Launch Lesson
      </Link>
    </article>
  );
};

export default CompanionCard;
