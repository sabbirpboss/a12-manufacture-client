import { useEffect, useState } from "react";

const useServices = () => {
    const [services, setServices] = useState([]);
    const [spinner, setSpinner] = useState(false)

    useEffect(() => {
        fetch("Parts.json")
            .then((res) => res.json())
            .then((data) => {
                setServices(data)
                setSpinner(data)
            })

    }, []);


    return [services, spinner];
};

export default useServices;
