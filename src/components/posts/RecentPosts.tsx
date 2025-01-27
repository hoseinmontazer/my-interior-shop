
const RecentPosts = () => {
    return (
        <div className="py-24 text-wrap">
            <div className="text-3xl font-bold">Recent Posts</div>
            <div className="flex flex-row py-3 items-center">
                <img src={'https://res.cloudinary.com/dxjjsfami/image/upload/v1737877036/rec1_lk9cg2.jpg'} className="max-w-24 max-h-24 object-cover object-center rounded-xl mr-3" />
                <div>
                    <div className="text-base mb-1 font-medium">Going all-in with millenial design</div>
                    <div className="text-sm text-gray-400">03 Aug 2022</div>
                </div>
            </div>
            <div className="flex flex-row py-3 items-center">
                <img src={'https://res.cloudinary.com/dxjjsfami/image/upload/v1737877051/rec2_bt0fur.jpg'} className="max-w-24 max-h-24 object-cover object-center rounded-xl mr-3" />
                <div>
                    <div className="text-base mb-1 font-medium">Exploring new ways of decorating</div>
                    <div className="text-sm text-gray-400">03 Aug 2022</div>
                </div>
            </div>
            <div className="flex flex-row py-3 items-center">
                <img src={'https://res.cloudinary.com/dxjjsfami/image/upload/v1737877055/rec3_hm24hu.jpg'} className="max-w-24 max-h-24 object-cover object-center rounded-xl mr-3" />
                <div>
                    <div className="text-base mb-1 font-medium">Handmade pieces that took time to make</div>
                    <div className="text-sm text-gray-400">03 Aug 2022</div>
                </div>
            </div>
            <div className="flex flex-row py-3 items-center">
                <img src={'https://res.cloudinary.com/dxjjsfami/image/upload/v1737877056/rec4_jna3na.jpg'} className="max-w-24 max-h-24 object-cover object-center rounded-xl mr-3" />
                <div>
                    <div className="text-base mb-1 font-medium">Modern home in Milan</div>
                    <div className="text-sm text-gray-400">03 Aug 2022</div>
                </div>
            </div>
            <div className="flex flex-row py-3 items-center">
                <img src={'https://res.cloudinary.com/dxjjsfami/image/upload/v1737877057/rec5_kluiw1.jpg'} className="max-w-24 max-h-24 object-cover object-center rounded-xl mr-3" />
                <div>
                    <div className="text-base mb-1 font-medium">Colorful office redsign</div>
                    <div className="text-sm text-gray-400">03 Aug 2022</div>
                </div>
            </div>
        </div>
    )
};
export default RecentPosts