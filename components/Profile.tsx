import Image from "next/image";
import React from "react";

const Profile = () => {
    return (
        <div className="flex gap-x-4">
            <div className="flex items-center">
                <Image
                    src="/CrpMyImage.jpg"
                    alt="rehan-ahmed-image"
                    width={70}
                    height={70}
                />
            </div>

            <div>
                <h1 className="text-3xl font-semibold tracking-wide leading-normal">
                    Rehan Ahmed
                </h1>
                <div className="text-xl text-gray-400 tracking-normal">
                    <div>Software Engineer</div>
                    <div>Full Stack Developer</div>
                </div>
            </div>
        </div>
    );
};

export default Profile;
