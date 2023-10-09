import { useEffect, useState } from "react";
import TeamCard from "./TeamCard";

const Team = () => {
    const [teams, setTeams] = useState([]);

    useEffect(() => {
        fetch('/team.json')
            .then((res) => res.json())
            .then((data) => {
                setTeams(data)
            });
    }, []);

    return (
        <div className='my-10 px-4'>
            <div className='max-w-5xl text-center mx-auto'>
                <h3 className='text-cyan-500 text-5xl font-bold mb-5'>Meet Our Team</h3>
                <p className='text-lg mb-10'>With a team of dedicated professionals and a passion for perfection, we specialize in curating a wide range of social events, from weddings and birthdays to anniversaries and baby showers. No matter the occasion, we're here to make it truly remarkable.</p>
            </div>
            <div className='my-4 px-2 grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {teams.map((team) => (
                    <TeamCard key={team.id}team={team}></TeamCard>
                ))}
            </div>
        </div>
    );
};

export default Team;