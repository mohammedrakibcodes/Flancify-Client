import FreelancerCard from "@/components/home/FreelancerCard";

export default function FreelancersGrid({ freelancers }) {
  return (
    <div className="grid gap-7 md:grid-cols-2 xl:grid-cols-3">
      {freelancers.map((freelancer) => (
        <FreelancerCard key={freelancer._id} freelancer={freelancer} />
      ))}
    </div>
  );
}
