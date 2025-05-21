import Container from "@/components/container";
import { Button } from "@/components/ui/button";

import { ArrowLeftIcon } from "lucide-react";
import Link from 'next/link';

const NotFoundPage = () => {
    return (
        <main className="relative flex flex-col items-center justify-center px-4 h-dvh  bg-[#]  ">
            <div className="w-full mx-auto ">
                <Container className="flex flex-col items-center justify-center mx-auto py-16">
                    <div className="flex items-center justify-center h-full flex-col">
                        <span className="text-sm px-3.5 py-1 rounded-md bg-gradient-to-br from-sky-400 to-blue-600 text-neutral-50 custom-shadow">
                            404
                        </span>
                        <h1 className="text-3xl md:text-5xl font-bold mt-5 text-white">
                            Not Found
                        </h1>
                        <p className="text-base text-gray-500 mt-5 text-center mx-auto max-w-xl">
                            This page doesn&apos;t exist. Please check the URL and try again.
                        </p>
                        <Link href="/" className=" mt-8 h-8 text-white">
                            <Button variant={"subtle"} className="hover:scale-95  border-gray-500 bg-neutral-900 cursor-pointer">
                          
                                <ArrowLeftIcon className="size-4" />Back
                               
                            </Button>
                            </Link>
                    </div>
                </Container>
            </div>
        </main>
    )
};

export default NotFoundPage;
