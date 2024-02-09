import './Home.css';

const Home = () => {


    let supprtArray = [
        {
            company: "Lorem"
        },
        {
            company: "Ipsum"
        },
        {
            company: "Dolor"
        },
        {
            company: "Sit"
        },
        {
            company: "Dolor"
        },
        {
            company: "Sit"
        },
        {
            company: "Lorem"
        },
        {
            company: "Ipsum"
        }
    ]

    return ( 
        <>
            <div className="home">
            <div className="content mt-60 py-10 mb-100">
                <h2>
                  It doesn&lsquo;t matter what <span>JS FRAMEWORK</span> you work with.
                </h2>
                <h5 className='my-2'>Our boilerplates works with <span>out-of-the-box</span>.</h5>

                <div className="button mt-4">
                  <button className='me-2 py-1 px-4'>Get Started  <i className='bx bx-arrow-back bx-rotate-180'></i></button>
                  <a href="/" className='ms-2 me-2 py-1.5 px-4'>See repo <i className='bx bxl-github'></i></a>
                </div>
            </div>

            <div className="support my-60">
                <h2>Supported and backed by: </h2>
                <div className="gridded grid grid-cols-4 gap-4 my-8">
                    {
                        supprtArray.map((team, index) => {
                            return(
                                <div key={index} className='the-grid py-4 px-3'>
                                    {team.company}
                                </div>
                            )
                        })
                    }
                </div>

                <h2 className='h2'>Less code. More product.</h2>
                <p>
                    By using our UI Kit, we make sure you only get to <span>focus more</span><br /> on the other things that matter.
                </p>
            </div>

            </div>
        </>
     );
}
 
export default Home;