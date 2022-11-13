import Header from "./utility/Header"
import { useState } from "react";

function service() {

    const [darkMode, setDarkMode] = useState(false);

    function switchMode() {
      setDarkMode(!darkMode)
    }

    return (
        <div className={darkMode ? "dark" : ""}>
        <main className='bg-white px-10 md:px-20 lg:px-40 dark:bg-gray-700' >
          <section className='min-h-screen'>
            
            <Header switchMode ={switchMode}/>
            </section>
        </main>

        </div>
    )
}

export default service