"use client";

import Image from "next/image";

export default function UserAvatar({ user }) {
  if (user?.image) {
    return (
      <Image
        src={user.image}
        alt={user.name}
        className="h-10 w-10 rounded-full border object-cover"
      />
    );
  }

  const firstLetter =
    user?.name?.charAt(0)?.toUpperCase() ||
    user?.email?.charAt(0)?.toUpperCase() ||
    "?";

  return (
    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-green-600 font-semibold text-white">
      {firstLetter}
    </div>
  );
}
