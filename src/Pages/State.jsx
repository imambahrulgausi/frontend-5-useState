import { useState } from "react";

function State() {
    const [bilangan1, setBilangan1] = useState(0)
    const [bilangan2, setBilangan2] = useState(0)
    const [hasil, sethasil] = useState(0)

    const penambahan = () => {
        sethasil(bilangan1 + bilangan2)
    };
    const pengurangan = () => {
        sethasil(bilangan1 - bilangan2)
    };
    const perkalian = () => {
        sethasil(bilangan1 * bilangan2)
    };
    const pembagian = () => {
        sethasil(bilangan1 / bilangan2)
    };
    return ( 
        <>
            <div>
                <label>Bilangan 1 : </label>
                <input
                    type="text"
                    value={bilangan1}
                    onChange={(e) => setBilangan1(Number(e.target.value))}/>
            </div>
            <div>
                <label>Bilangan 2 : </label>
                <input
                    type="text"
                    value={bilangan2}
                    onChange={(e) => setBilangan2(Number(e.target.value))}/>
            </div>
            <div>
                <p>hasil : {hasil}</p>
            </div>

            <button type="button"
                className="mx-3 text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 "
                onClick={penambahan}>
                Tambah
            </button>
            <button type="button"
                className="mx-3 text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 "
                onClick={pengurangan}>
                Kurang
            </button>
            <button type="button"
                className="mx-3 text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 "
                onClick={perkalian}>
                Kali
            </button>
            <button type="button"
                className="mx-3 text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 "
                onClick={pembagian}>
                Bagi
            </button>
        </>
     );
}

export default State;