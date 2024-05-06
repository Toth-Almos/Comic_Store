import { useParams } from 'react-router-dom';
import classes from './adminEditPage.module.css';
import { useForm } from 'react-hook-form';
import { useEffect, useState } from 'react';
import { addNewComic, getById, updateComic } from '../../services/ComicService';
import Title from '../../components/Title/Title';
import InputContainer from '../../components/InputContainer/InputContainer';
import Input from '../../components/Input/Input';
import { useNavigate } from 'react-router-dom';

export default function FoodEditPage() {
  const { comicId } = useParams();
  const isEditMode = !!comicId;
  const navigate = useNavigate();

  const {
    handleSubmit,
    register,
    formState: { errors },
    reset,
  } = useForm();

  useEffect(() => {
    if (!isEditMode) return;

    getById(comicId).then(comic => {
      if (!comic) return;
      reset(comic);
    });
  }, [comicId]);

  const submit = async (comicData) => {
    const comic = { ...comicData };

    if (isEditMode) {
      await updateComic(comic);
      alert(`Comic "${comic.name}" updated successfully!`);
      return;
    }

    const newComic = await addNewComic(comic);
    alert(`Comic: "${comic.name}" added successfully!`);
    navigate('/admin/editComic/' + newComic.id, { replace: true });
  };

  return (
    <div className={classes.container}>
      <div className={classes.content}>
        <Title title={isEditMode ? 'Edit Comic' : 'Add New Comic'} />
        <form
          className={classes.form}
          onSubmit={handleSubmit(submit)}
          noValidate
        >
          <Input
            type="text"
            label="Name"
            {...register('name', { required: true, minLength: 5 })}
            error={errors.name}
          />

          <Input
            type="number"
            label="Price"
            {...register('price', { required: true })}
            error={errors.price}
          />

          <Input
            type="text"
            label="Creators(separated with ';')"
            {...register('creators')}
            error={errors.creators}
          />

          <Input
            type="number"
            label="Release Year"
            {...register('releaseYear', { required: true })}
            error={errors.releaseYear}
          />

          <Input
            type="text"
            label="Studio"
            {...register('studio', { required: true })}
            error={errors.studio}
          />

          <button type="submit">{isEditMode ? 'Update' : 'Create'}</button>
        </form>
      </div>
    </div>
  );
}