import Logo from "../Logo"

export default function About () {
    return (
        <div className="px-10">
            <h1>History of <Logo/></h1>
            <div className="text-left max-w-5xl mx-auto text-black py-10">
                <p className="pb-5">
                    The <Logo/> was incorporated in 1977 and was known as Eves Electric Inc. In 1986 the corporate name was changed to
                    the B.L. Murray Corp due to a buyout. In 2024 it has since been rebranded as <Logo/> In our decades of history,
                    we have been involved in Commercial, Industrial, and Residential Electrical. We have worked on all types of projects
                    ranging from schools, to waste water treatment plants, to offices, to manufacturing buildings, and storage buildings.
                    We have worked on High Voltage, Low Voltage, and Data wiring.
                </p>
                <p className="pb-5">
                    Currently we have specialized in Commercial and Industrial Electrical work. Our work can be found thousands of buildings 
                    across the state of Utah. While primarily working in Utah County, we have worked projects in most of Utah's major areas.
                    Noteworthy clients of ours have been Brigham Young University, Utah Valley University, the Church of Jesus Christ of Latter-day
                    Saints, the United States Air Force, and the Utah National Guard. We have worked on projects for city, county, and state 
                    buildings.
                </p>
                <p className="pb-5">
                    <Logo/> is committed to quality work and powering our community through its electrical work!
                </p>
            </div>
        </div>
    )
}