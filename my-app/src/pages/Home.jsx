import { movies } from '../data/data';
import MovieCard from '../components/MovieCard';
import MovieGallery from '../components/MovieGallery';

function Home() {
  return (
    <div className="min-h-screen bg-slate-100 p-8">

      {/* หัวข้อหน้า Home */}
      <div className="mb-8 text-center">
        <h1 className="text-3xl font-bold text-slate-800">
          🏠 หน้า Home
        </h1>

        <p className="mt-2 text-slate-500">
          ยินดีต้อนรับสู่ MovieHub 🎬
        </p>
      </div>

      {/* รายการหนัง */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {movies.map((movie) => (
          <MovieCard
            key={movie.id}
            title={movie.title}
            year={movie.year}
          />
        ))}
      </div>

      {/* หนังเพิ่มเติม */}
      <h2 className="mt-8 text-2xl font-bold text-slate-800">
        ดูหนังเพิ่มเติม
      </h2>

      <div className="mx-auto mt-8 max-w-md">
        <MovieGallery />
      </div>

    </div>
  );
}

export default Home;