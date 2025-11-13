import LeftSidebar from '@/components/navigation/LeftSidebar'
import Navbar from '@/components/navigation/navbar'
import RightSidebar from '@/components/navigation/RightSidebar'
import React, { ReactNode } from 'react'

export const metadata = {
    title: "Dev Overflow",
    description:
        "Dev Overflow is a community-driven platform to ask and answer real-world programming questions. Learn, grow, and connect with developers around the world.",
    
    generator: "Next.js",
    applicationName: "Dev Overflow",
    referrer: "origin-when-cross-origin",

    keywords: [
        "Dev Overflow",
        "programming questions",
        "developer Q&A",
        "web development",
        "JavaScript",
        "React",
        "Node.js",
        "algorithms",
        "data structures",
        "developer community",
    ],

    authors: [
        { name: "Adrian" },
        { name: "Dev Overflow Team", url: "https://devoverflow.dev/team" },
    ],
    creator: "Adrian",
    publisher: "Dev Overflow",

    formatDetection: {
        email: false,
        address: false,
        telephone: false,
    },

    robots: {
        index: true,
        follow: true,
        nocache: false,
        googleBot: {
            index: true,
            follow: true,
            noimageindex: false,
            "max-video-preview": -1,
            "max-image-preview": "large",
            "max-snippet": -1,
        },
    },

    icons: {
        icon: "/images/site-logo.svg", // regular favicon
        shortcut: "/favicon.ico", // browser address bar icon
        apple: "/apple-touch-icon.png", // Apple devices
        other: [
            {
                rel: "mask-icon",
                url: "/safari-pinned-tab.svg",
                color: "#5bbad5",
            },
        ],
    },

    // Optional: Theme color for browser UI and mobile experience
    themeColor: "#18181b",

    // Optional: Color for Microsoft tiles and pinned sites
    msapplication: {
        TileColor: "#ffffff",
        TileImage: "/mstile-150x150.png",
    },
};

const RootLayout = ({ children }: { children: ReactNode }) => {
    return (
        <main className='background-light850_dark100 relative'>
            <Navbar />

            <div className='flex'>
                <LeftSidebar />

                <section className='flex min-h-screen flex-1 flex-col px-6 pb-6 pt-36 max-md:pb-14 sm:px-14 '>
                    <div className='mx-auto w-full max-w-5xl'>{ children }</div>
                </section>

                <RightSidebar />
            </div>
        </main>
    )
}

export default RootLayout