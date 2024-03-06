import { useContext, useEffect } from "react";
import GithubContext from "../context/github/GithubContext";
import Card from "../components/layout/Card";

function Movies({ children }) {
  const { loading, fetchTrendingMovies, movies } = useContext(GithubContext);
  console.log(movies);

  useEffect(() => {
    fetchTrendingMovies();
  }, []);

  return (
    <>
      {loading ? (
        movies?.results?.map((movie) => (
          //   <div
          //     key={movie.id}
          //     className="flex flex-wrap items-center justify-center gap-2 mt-4"
          //   >
          //     <Card className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 gap-3">
          //       <a href="#">
          //         <img
          //           className="rounded-t-lg"
          //           src={`http://image.tmdb.org/t/p/w500/${movie.backdrop_path}`}
          //           alt={movie.title}
          //         />
          //         {console.log(movie.backdrop_path)}
          //       </a>
          //       <div className="p-5">
          //         <a href="#">
          //           <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          //             {movie.title}
          //           </h5>
          //         </a>
          //         <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          //           {/* {movie.overview} */}
          //           {/* truncate overview */}
          //           {movie.overview.length > 10
          //             ? movie.overview.substring(0, 150) + "..."
          //             : movie.overview}
          //         </p>
          //         <a
          //           href="#"
          //           className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          //         >
          //           Read more
          //           <svg
          //             className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
          //             aria-hidden="true"
          //             xmlns="http://www.w3.org/2000/svg"
          //             fill="none"
          //             viewBox="0 0 14 10"
          //           >
          //             <path
          //               stroke="currentColor"
          //               strokeLinecap="round"
          //               strokeLinejoin="round"
          //               strokeWidth="2"
          //               d="M1 5h12m0 0L9 1m4 4L9 9"
          //             />
          //           </svg>
          //         </a>
          //       </div>
          //     </Card>
          //     <Card />
          //   </div>
          <div
            key={movie.id}
            className="flex flex-wrap items-center justify-center gap-2 mt-4"
          >
            <div className="flex flex-wrap -mx-1 lg:-mx-4">
              <div className="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
                {/* <!-- Article --> */}
                <article className="overflow-hidden rounded-lg shadow-lg">
                  <a href="#">
                    <img
                      alt="Placeholder"
                      className="block h-auto w-full"
                      // {movie.backdrop_path == null ? '' : 'src={`http://image.tmdb.org/t/p/w500/${movie.backdrop_path}`}'}
                      src={`http://image.tmdb.org/t/p/w500/${movie.backdrop_path}`}
                    />
                  </a>

                  <header className="flex items-center justify-between leading-tight p-2 md:p-4">
                    <h1 className="text-lg">
                      <a
                        className="no-underline hover:underline text-black"
                        href="#"
                      >
                        {movie.title}
                      </a>
                    </h1>
                    <p className="text-grey-darker text-sm">11/1/19</p>
                  </header>

                  <footer className="flex items-center justify-between leading-none p-2 md:p-4">
                    <a
                      className="flex items-center no-underline hover:underline text-black"
                      href="#"
                    >
                      <img
                        alt="Placeholder"
                        className="block rounded-full"
                        src="https://picsum.photos/32/32/?random"
                      />
                      <p className="ml-2 text-sm">Author Name</p>
                    </a>
                    <a
                      className="no-underline text-grey-darker hover:text-red-dark"
                      href="#"
                    >
                      <span className="hidden">Like</span>
                      <i className="fa fa-heart"></i>
                    </a>
                  </footer>
                </article>
                {/* <!-- END Article --> */}
              </div>
              {/* <!-- END Column --> */}
            </div>
          </div>
        ))
      ) : (
        <p>Loading...</p>
      )}

      {/* test di bawah */}
      {/* <div className="flex flex-col gap-4">
        <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <a href="#">
            <img
              className="rounded-t-lg"
              src="/docs/images/blog/image-1.jpg"
              alt=""
            />
          </a>
          <div className="p-5">
            <a href="#">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Noteworthy technology acquisitions 2021
              </h5>
            </a>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              Here are the biggest enterprise technology acquisitions of 2021 so
              far, in reverse chronological order.
            </p>
            <a
              href="#"
              className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Read more
              <svg
                className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M1 5h12m0 0L9 1m4 4L9 9"
                />
              </svg>
            </a>
          </div>
        </div>
        <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <a href="#">
            <img
              className="rounded-t-lg"
              src="/docs/images/blog/image-1.jpg"
              alt=""
            />
          </a>
          <div className="p-5">
            <a href="#">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Noteworthy technology acquisitions 2021
              </h5>
            </a>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              Here are the biggest enterprise technology acquisitions of 2021 so
              far, in reverse chronological order.
            </p>
            <a
              href="#"
              className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Read more
              <svg
                className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M1 5h12m0 0L9 1m4 4L9 9"
                />
              </svg>
            </a>
          </div>
        </div>
      </div> */}
    </>
  );
}

export default Movies;
