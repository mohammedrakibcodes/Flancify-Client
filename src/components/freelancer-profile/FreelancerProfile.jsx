"use client";

import useFreelancer from "@/hooks/useFreelancer";
import ProfileHeader from "./ProfileHeader";
import ProfileInfo from "./ProfileInfo";
import SkillsSection from "./SkillsSection";
import ContactCard from "./ContactCard";

export default function FreelancerProfile({ id }) {
  const { data: freelancer, isError } = useFreelancer(id);

  if (isError) {
    return (
      <section className="py-24 text-center">
        <h2 className="text-2xl font-bold text-red-600">
          Failed to load freelancer.
        </h2>
      </section>
    );
  }

  if (!freelancer) return null;

  return (
    <section className="bg-gray-50 py-16">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 lg:grid-cols-3 lg:px-8">
        <div className="space-y-6 lg:col-span-2">
          <ProfileHeader freelancer={freelancer} />
          <ProfileInfo freelancer={freelancer} />
          <SkillsSection freelancer={freelancer} />
        </div>

        <div>
          <ContactCard freelancer={freelancer} />
        </div>
      </div>
    </section>
  );
}
