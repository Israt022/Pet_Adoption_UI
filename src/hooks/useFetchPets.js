import { useEffect, useState } from "react"
import apiClient from "../services/api-client";

const useFetchPets = ({currentPage}) => {
    const [pets,setPets] = useState([]);
    const [loading, setLoading] = useState(false);

    // const [currentPage,setCurrentPage] = useState(1);
    const [totalPages,setTotalPages] = useState(0);

    useEffect(() => {
        const fetchPets = () => {
        setLoading(true)
        apiClient
            .get(`/pets/?page=${currentPage}`)
            .then((res) => {
                console.log(res.data);
                setPets(res.data.results)
                setTotalPages(
                    Math.ceil(res.data.count / res.data.results.length)
                );
            })
            .catch((err) => console.log(err.message))
            .finally(() => setLoading(false))
    }
    fetchPets();
    },[currentPage])
    
    return {pets,loading,totalPages}
}

export default useFetchPets;