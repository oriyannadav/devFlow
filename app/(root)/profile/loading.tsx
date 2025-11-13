import { Skeleton } from "@/components/ui/skeleton"

const loading = () => {
    return (
        <>
            <section className="flex flex-col-reverse items-start justify-between sm:flex-row">
                <div className="flex flex-col items-start gap-4 lg:flex-row">
                    <Skeleton className="size-[140px] rounded-full" />
                </div>

                <div className="flex justify-end max-sm:mb-5 max:sm:w-full sm:mt-3">
                    <Skeleton className="min-h-12 min-w-44 px-4 py-3" />
                </div>
            </section>

            <section className="mt-3">
                <h4 className="h3-semibold teaxt-dark200_light900">Stats</h4>

                <div className="mt-5 grid grid-cols-1 gap-5 xs:grid-cols-2 md:grid-cols-4">
                    {[1, 2, 3, 4].map((item) => (
                        <Skeleton 
                            key={item}
                            className="h-40 w-40 rounded-2xl"
                        />
                    ))}
                </div>
            </section>

            <section className='mt-10 flex gap-10'>
                <div className="mt-5 flex w-full flex-col gap-6">
                    <Skeleton className="h-10 w-36" />

                    {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item) => (
                        <Skeleton 
                            key={item}
                            className="flex h-50 w-full flex-col gap-6"
                        />
                    ))}
                </div>

                <div className="flex w-full min-w-[250px] flex-1 flex-col max-lg:hidden">
                    <h3 className="h3-bold text-dark200_light900">Top Tech</h3>

                    <div className="mt-7 flex flex-col gap-4">
                        {[1, 2, 3, 4].map((item) => (
                            <Skeleton 
                                key={item}
                                className="h-8 w-20"
                            />
                        ))}
                    </div>
                </div>
            </section>
        </>
    )
}

export default loading