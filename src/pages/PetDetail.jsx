import { Link, useParams } from "react-router";
import AddToCartButton from "../components/PetDetails/AddToCartButton";
import PetImageGallery from "../components/PetDetails/PetImageGallery";
import { ArrowLeft } from "lucide-react";
import { Suspense, useEffect, useState } from "react";
import apiClient from "../services/api-client";
import ReviewSection from "../components/Reviews/ReviewSection";


const PetDetail = () => {
    const [pet,setPet] = useState(null);
    const [loading, setLoading] = useState(false);
    const { petId } = useParams();
    // console.log("Pet availability:", pet.availability);

    useEffect(() => {
        setLoading(true);
        apiClient.get(`/pets/${petId}/`).then((res) => {
            setPet(res.data);
            console.log(res.data);
            setLoading(false);
        });
    }, [petId]);

    if (loading) return <div className="flex justify-center mt-27 mb-30">
            <span className="loading loading-spinner text-yellow-500"></span>
          </div>;
    if (!pet) return <div>Pet Not Found...</div>;
    return (
        <div
            className="w-3/4 mx-auto px-4 py-8"
        >   
            <div className="mb-6">
                <Link
                    to="/shop"
                    className="flex items-center text-sm text-base-content/70 hover:text-base-content transition-colors"
                >
                    <ArrowLeft className="mr-2 h-4 w-4" />
                    Back to pets
                </Link>
            </div>
            <div
                className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12"
            >
                <Suspense
                    fallback={
                        <div className="aspect-square bg-base-300 animate-pulse rounded-lg"></div>
                    }
                >
                    <PetImageGallery
                        images={pet.images}
                        PetName={pet.name}
                    />
                </Suspense>
                <div className="flex flex-col">
                    <div className="mb-4">
                        <div className="badge badge-outline mb-2">
                            Category {pet.category}
                        </div>
                        <h1 className="text-3xl font-bold tracking-tight">
                            {pet.name}
                        </h1>
                    </div>

                    <div className="mt-2 mb-6">
                        <div className="flex items-baseline gap-2">
                        <span className="text-3xl font-bold">${pet.cost}</span>
                        <span className="text-sm text-base-content/70">
                            {/* (${pet.price_with_tax} incl. tax) */}
                        </span>
                        </div>
                    </div>

                    <div className="prose prose-sm mb-6">
                        <p>{pet.description}</p>
                    </div>

                    <div className="mb-6">
                        <div className="flex items-center">
                        <div className="mr-2 text-sm font-medium">Availability:</div>
                        {pet.availability ? (
                            <div className="badge badge-outline bg-success/10 text-success border-success/20">
                            In Stock ({pet.availability} available)
                            </div>
                        ) : (
                            <div className="badge badge-outline bg-error/10 text-error border-error/20">
                            Out of Stock
                            </div>
                        )}
                        </div>
                    </div>

                    <div className="mt-auto">
                        <AddToCartButton pet={pet} setPet={setPet} />
                    </div>
                </div>
            </div>
            {/* <ReviewSection /> */}
            <ReviewSection/>
    </div>
    );
};

export default PetDetail;