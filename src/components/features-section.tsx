
import {Card, CardHeader, CardBody, CardFooter} from "@heroui/card";

export function FeatureSection() {

// AN ARRAY OF FEATURE CARDS
const features = [
    {
        title: "Assessments & Evaluation",
        description: "Take a self assessment test and analyse your behaviour",

    },
    {
        title: "Schedule Appointments",
        description: "Take a self assessment test and analyse your behaviour",

    },
    {
        title: "Mental Health",
        description: "Take a self assessment test and analyse your behaviour",

    },
];

    return (
        <section  className=" py-16m  md:py-24 lg:py-20 mb-32 px-12">
            <div className=" bg-gray-50 px-4 md:px-20 py-10 pb-20">
                <div className="flex flex-col items-center  text-center">
                    <div className="inline-block rounded-lg bg-gray-100 px-5 py-2 text-sm">Our features</div>
                    <h2 className="text-3xl mt-10 font-bold tracking-tighter text-[#00584D] sm:text-4xl md:text-5xl">
                        Discover the Lively Difference
                    </h2>
                    <p className="mx-auto max-w-[700px] mt-2 text-gray-500 md:text-md/relaxed ">
                        Explore the features that we have built to enhance your experience
                    </p>
                </div>

                {/* // to stick the cards on the bottom was using margin (m) and increasing the top padding */}
                <div className="mx-auto max-w grid grid-cols-1  md:grid-cols-3 lg:gap-14 mt-96">
                    {features.map((feature) => (
                        <Card key={feature.title} className="relative overflow-hidden">
                            <CardHeader className="flex flex-col items-start">
                                <CardHeader className="text-xl text-start">{feature.title}</CardHeader>
                            </CardHeader>
                            <CardBody>
                                <p className="text-gray-500 text-start">{feature.description}</p>
                            </CardBody>
                            <CardFooter className="flex justify-start">
                                <button className="text-[#00584D] p-0">
                                    Learn More
                                </button>
                            </CardFooter>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );

    
}