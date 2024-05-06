import { useEffect, useState } from 'react';
import classes from './adminPage.module.css';
import { Link, useParams } from 'react-router-dom';
import { getAll, getById, deleteById } from '../../services/ComicService';
import Title from '../../components/Title/Title';
import Search from '../../components/Search/Search';

export default function FoodsAdminPage() {
  const [comics, setComics] = useState();
  const { searchTerm } = useParams();

  useEffect(() => {
    loadComics();
  }, [searchTerm]);

  const loadComics = async () => {
    const comics = await getAll();
    setComics(comics);
  };

  const deleteComic = async (comic) => {
    const confirmed = window.confirm(`Delete ${comic.name}?`);
    if (!confirmed) return;

    await deleteById(comic.id);
    alert(`"${comic.name}" Has Been Removed!`);
    setComics(comics.filter(c => c.id !== comic.id));
  };

  return (
    <div className={classes.container}>
      <div className={classes.list}>
        <Title title="Manage Comics" margin="1rem auto"/>
        
        <Link to="/admin/addComic" className={classes.add_comic}>
          Add New Comic +
        </Link>

        {comics &&
          comics.map(comic => (
            <div key={comic.id} className={classes.list_item}>
              <img src={`/comics/comic_` + comic.id + `.jpg`} alt={comic.name} />
              <div className={classes.comic_name}>
                <Link to={'/comic/' + comic.id}>{comic.name}</Link>
              </div>
              <div className={classes.price}>{comic.price} EUR</div>
              <div className={classes.actions}>
                <Link to={'/admin/editComic/' + comic.id}>Edit</Link>
                <button onClick={() => deleteComic(comic)}>Delete</button>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}