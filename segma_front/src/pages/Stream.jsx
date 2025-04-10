import React from "react";
import Layout from "../components/Layout";

const Stream = () => {
return (
    <Layout>
        <div className="flex flex-col items-center gap-8 p-8 relative top-10">
            <div className="w-full h-[500px] flex">
                <div className="w-full md:w-2/3">
                    <iframe
                        className="aspect-video w-full h-full"
                        src="https://www.youtube.com/watch?v=kn7CLPPlPzM&t=539s"
                    ></iframe>
                </div>
                <div className="w-full md:w-1/3">info stream</div>
            </div>
            <div></div>
        </div>
    </Layout>
);
};

export default Stream;
