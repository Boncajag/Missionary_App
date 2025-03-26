"use client";

import * as React from "react";

interface FriendProfileProps {
    imageSrc: string;
    name: string;
    mission: string;
    email: string;
    homeCityState: string;
    birthday: string;
    postCount: number;
}

export const FriendProfile: React.FC<FriendProfileProps> = ({
                                                                imageSrc,
                                                                name,
                                                                mission,
                                                                email,
                                                                homeCityState,
                                                                birthday,
                                                                postCount,
                                                            }) => {
    return (
        <article
            className="bg-gray-200 rounded-xl p-6 shadow-md w-full max-w-[480px] mx-auto mt-6 mb-8 text-blue-950 transition duration-300 ease-in-out hover:bg-gray-300"
            style={{
                backgroundColor: "#E5E7EB",
                borderRadius: "12px",
                padding: "24px",
                boxShadow: "0px 2px 2px rgba(0, 0, 0, 0.1)",
                marginLeft: "12px",
                marginRight: "12px",
                marginBottom: "32px",
                transition: "background-color 0.3s ease-in-out", // Smooth transition
            }}
        >
            <div
                className="flex items-center gap-4"
                style={{ display: "flex", alignItems: "center", gap: "16px" }}
            >
                <div
                    style={{
                        width: "200px",
                        height: "200px",
                        borderRadius: "50%",
                        overflow: "hidden",
                        border: "0.1px solid #111111111",
                        position: "relative",
                    }}
                >
                    <img
                        src={imageSrc}
                        alt={`${name}'s avatar`}
                        style={{
                            width: "100%",
                            height: "100%",
                            objectFit: "cover",
                            position: "absolute",
                            top: "0",
                            left: "0",
                        }}
                    />
                </div>
                <div className="flex flex-col -mt-1 -space-y-1">
                    <h2 className="text-2xl font-bold text-blue-950 leading-tight">
                        {name}
                    </h2>
                    <p className="text-lg text-gray-600 leading-tight">{mission}</p>
                    <p className="text-md text-gray-500 leading-tight">{email}</p>
                    <p className="text-md text-gray-500 leading-tight">{homeCityState}</p>
                    <p className="text-md text-gray-500 leading-tight">Birthday: {birthday}</p>
                    <p className="text-md text-gray-500 leading-tight">{postCount} Posts</p>
                </div>
            </div>
        </article>
    );
};
