import * as React from "react";
import { StatusBar } from "../Components/StatusBar";
import { FriendProfile } from "../Components/FriendProfile";
import { User } from "../types/User"; // Import the User type

const FriendsPage: React.FC = () => {
  const [friends, setFriends] = React.useState<User[]>([]);

  React.useEffect(() => {
    fetch("http://localhost:5000/api/Missionary/allData")
      .then((response) => response.json())
      .then((data) => {
        // Assuming the API returns an object with a `users` array
        setFriends(data.users);
      })
      .catch((error) => console.error("Error fetching friends:", error));
  }, []);

  return (
    <main className="flex flex-col items-center mx-auto w-full bg-white max-w-[480px]">
      <StatusBar />
      <h1 className="z-10 mt-0 text-3xl font-semibold text-slate-100">
        Friends
      </h1>
      <img
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/d3a7d00675114a9bf2ca39835903c760505e63b61a91443155e84940e5ad4d9f?placeholderIfAbsent=true&apiKey=a90227eb987c4a7db18d4ddf65aaf737"
        alt="Friends icon"
        className="object-contain self-start -mt-5 ml-6 aspect-square w-[30px]"
      />
      <section className="flex flex-col gap-4 mt-7">
        {friends.map((friend) => (
          <FriendProfile
            key={friend.user_id}
            imageSrc={friend.profile_picture} // Use the profile picture from the database
            title={friend.first_name} // Assuming you want first name as title
            name={`${friend.first_name} ${friend.last_name}`} // Full name
            mission={friend.mission} // Mission field
            postCount={21} // Placeholder, you might need to get this dynamically later
          />
        ))}
      </section>
    </main>
  );
};

export default FriendsPage;
