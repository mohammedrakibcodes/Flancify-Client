"use client";

import { useEffect, useState } from "react";

import useFreelancers from "@/hooks/useFreelancers";
import useDebounce from "@/hooks/useDebounce";

import SearchBar from "./SearchBar";
import SkillsFilter from "./SkillsFilter";
import FreelancersGrid from "./FreelancersGrid";
import Pagination from "./Pagination";
import EmptyState from "./EmptyState";
import BrowseFreelancersSkeleton from "./BrowseFreelancersSkeleton";

export default function BrowseFreelancers() {
  const [search, setSearch] = useState("");
  const [skill, setSkill] = useState("all");
  const [page, setPage] = useState(1);

  const debouncedSearch = useDebounce(search);

  useEffect(() => {
    setPage(1);
  }, [debouncedSearch, skill]);

  const { data, isLoading, isError } = useFreelancers({
    search: debouncedSearch,
    skill,
    page,
  });

  if (isLoading || isError) {
    return <BrowseFreelancersSkeleton />;
  }

  const freelancers = data?.result || [];

  return (
    <section className="bg-gray-50 py-16">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="mb-10">
          <h1 className="text-4xl font-bold text-[#111827]">
            Browse Freelancers
          </h1>

          <p className="mt-3 text-gray-600">
            Find skilled freelancers for your next project.
          </p>
        </div>

        <div className="mb-8 grid gap-4 md:grid-cols-2">
          <SearchBar search={search} setSearch={setSearch} />

          <SkillsFilter skill={skill} setSkill={setSkill} setPage={setPage} />
        </div>

        {freelancers.length === 0 ? (
          <EmptyState />
        ) : (
          <>
            <FreelancersGrid freelancers={freelancers} />

            <Pagination
              currentPage={data.currentPage}
              totalPages={data.totalPages}
              setPage={setPage}
            />
          </>
        )}
      </div>
    </section>
  );
}
