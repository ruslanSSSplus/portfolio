import {useEffect, useState} from "react";




export const useCoordinates = () => {

    const [x, setX] = useState(0)
    const [y, setY] = useState(0)

    useEffect(() => {
        document.addEventListener('mousemove', getMouseCoordinates);
        return function () {
            document.removeEventListener('mousemove', getMouseCoordinates);
        }
    }, [])


    const getMouseCoordinates = (e) => {
        let _x = e.pageX;
        let _y = e.pageY;
        setX(_x)
        setY(_y)
    }

        return { x, y}
    }