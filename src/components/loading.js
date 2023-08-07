import React, { useState, useEffect } from 'react'
import LoadingSpin from "react-loading-spin"

const Loading = () => {
    // const [count] = useState(1)

    // useEffect(() => {
    //     const timeout = setTimeout(() => {
    //         document.getElementsByClassName('ExampleOfUsage').style.display = "none";
    //     }, 1000)

    //     return () => clearTimeout(timeout)
    // }, [count])

    return (
        <div className={"ExampleOfUsage flex justify-center"}>
            <LoadingSpin
                duration="100s"
                width="10px"
                timingFunction="ease-in-out"
                direction="alternate"
                size="150px"
                primaryColor="white"
                secondaryColor="#333"
                numberOfRotationsInAnimation={3}
            />
        </div>
    );

};

export default Loading