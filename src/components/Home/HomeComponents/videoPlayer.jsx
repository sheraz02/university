import React from "react";
import ReactPlayer from "react-player";
import video from '../../../assets/USPMultan.mp4'


function MyPlayer() {
    return (
        <div className="flex flex-col items-center justify-center bg-white text-white p-6 pb-20">
            <h1 className="text-left text-6xl pt-2 pb-10 text-black font-bold mb-6">What Campus life at USP looks like</h1>
            <div className="w-full max-w-7xl aspect-w-16 aspect-h-9 rounded-lg overflow-hidden shadow-lg">
                <ReactPlayer
                    url={video}
                    controls
                    width="100%"
                    height="100%"
                    playing={false}
                    loop={false}
                    volume={1}
                    pip={true}
                />
            </div>
        </div>
    );
}

export default MyPlayer;
