export default function Pagination() {
    return (
        <section className="pt-12">
            <div className="max-w-7xl mx-auto px-5 py-6 lg:px-0 flex gap-2 justify-end">
                <div className="bg-blue-600 text-white px-4 py-1 rounded-full cursor-pointer">
                    1
                </div>
                <div className="bg-blue-100 text-blue-600 px-4 py-1 rounded-full cursor-pointer">
                    2
                </div>
                <div className="bg-blue-100 text-blue-600 px-4 py-1 rounded-full cursor-pointer">
                    3
                </div>
                <div className="bg-blue-100 text-blue-600 px-4 py-1 rounded-full cursor-pointer">
                    4
                </div>
            </div>
        </section>
    );
}
