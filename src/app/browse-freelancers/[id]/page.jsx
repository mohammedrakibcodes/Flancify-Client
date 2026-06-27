import FreelancerProfile from "@/components/freelancer-profile/FreelancerProfile";

export default async function FreelancerProfilePage({ params }) {
  const { id } = await params;

  return <FreelancerProfile id={id} />;
}
