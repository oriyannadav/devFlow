import { Skeleton } from "@/components/ui/skeleton"

const loading = () => {
    return (
        <section>
            <div className="flex w-full flex-col-reverse justify-between gap-4 sm:flex-row sm:items-center">
                <h1 className="h1-bold text-dark100_light900">All Questions</h1>

                <Skeleton className="h-12 w-36" />
            </div>

            <div className="mt-11 flex justify-between gap-5 max-sm:flex-col sm:items-center">
                <Skeleton className="h-14 flex-1" /> 
            </div>

            <div className="mt-10 hidden flex-wrap gap-3 sm:flex">
                {[1, 2, 3, 40].map((item) => (
                    <Skeleton 
                        key={item}
                        className="h-10 w-30 body-medium rounded-lg px-6 py-3 shadow-none"
                    />
                ))}
            </div>

            <div className="mt-10 flex w-full flex-col gap-6">
                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item) => (
                    <Skeleton 
                        key={item}
                        className="h-50 w-full"
                    />
                ))}
            </div>
        </section>
    )
}

export default loading