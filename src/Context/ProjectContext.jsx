import { collection, onSnapshot } from 'firebase/firestore';
import { createContext, useEffect, useState } from 'react';

import db from '../../src/Firebase';
import { sortArrayByNroOrden, sortArrayByOrdenValue } from '../Utils';

export const projectContext = createContext();

const ProjectContext = ({ children }) => {
  const [course, setCourse] = useState([]);
  const [courseCompleteList, setCourseCompleteList] = useState([]);
  const [nextCourses, setNextCourses] = useState([]);
  const [nextCoursessCompleteList, setnextCoursessCompleteList] = useState([]);
  const [nombres, setNombres] = useState([]);
  const [categories, setCategories] = useState([]);
  const [categoriesCompleteList, setcategoriesCompleteList] = useState([]);
  const [carousel, setCarousel] = useState([]);
  const [usuariosList, setUsuariosList] = useState([]);
  const [isLogin, setIsLogin] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [is404, setIs404] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    onSnapshot(
      collection(db, 'NuevosCursos'),
      (snapshot) => {
        const courseList = snapshot.docs.map((doc) => ({
          ...doc.data(),
          uuid: doc.id,
        }));

        setCourseCompleteList(sortArrayByNroOrden(courseList));
      },
      (error) => console.log('error', error)
    );

    onSnapshot(
      collection(db, 'NuevosCursos'),
      (snapshot) => {
        const courseList = snapshot.docs.map((doc) => ({
          ...doc.data(),
          uuid: doc.id,
        }));
        const filteredList = courseList.filter((elem) => !elem.isHidden);
        setCourse(sortArrayByNroOrden(filteredList));
      },
      (error) => console.log('error', error)
    );

    onSnapshot(
      collection(db, 'CarouselContent'),
      (snapshot) => setCarousel(snapshot.docs.map((doc) => doc.data())),
      (error) => console.log('error', error)
    );

    onSnapshot(
      collection(db, 'CategoriasCursos'),
      (snapshot) => {
        const catList = snapshot.docs.map((doc) => ({
          ...doc.data(),
          uuid: doc.id,
        }));

        setcategoriesCompleteList(sortArrayByOrdenValue(catList));
      },
      (error) => console.log('error', error)
    );

    onSnapshot(
      collection(db, 'CategoriasCursos'),
      (snapshot) => {
        const catList = snapshot.docs.map((doc) => ({
          ...doc.data(),
          uuid: doc.id,
        }));
        const filteredList = catList.filter((elem) => !elem.isHidden);
        setCategories(sortArrayByNroOrden(filteredList));
      },
      (error) => console.log('error', error)
    );

    onSnapshot(
      collection(db, 'ComisionesCursos'),
      (snapshot) => {
        const comisionsList = snapshot.docs.map((doc) => ({
          ...doc.data(),
          uuid: doc.id,
        }));

        setnextCoursessCompleteList(sortArrayByNroOrden(comisionsList));
      },
      (error) => console.log('error', error)
    );

    onSnapshot(
      collection(db, 'ComisionesCursos'),
      (snapshot) => {
        const comisionsList = snapshot.docs.map((doc) => ({
          ...doc.data(),
          uuid: doc.id,
        }));
        const filteredList = comisionsList.filter((elem) => !elem.isHidden);
        setNextCourses(sortArrayByNroOrden(filteredList));
      },
      (error) => console.log('error', error)
    );

    onSnapshot(
      collection(db, 'Usuarios'),
      (snapshot) =>
        setUsuariosList(
          snapshot.docs.map((doc) => ({
            ...doc.data(),
            uuid: doc.id,
          }))
        ),
      (error) => console.log('error', error)
    );
  }, []);

  useEffect(() => {
    let nombresCursos = [];
    course.map((course) => (nombresCursos = [...nombresCursos, course.nombre]));

    setNombres(nombresCursos);
  }, [course]);

  return (
    <projectContext.Provider
      value={{
        course,
        setCourse,
        courseCompleteList,
        categories,
        setCategories,
        categoriesCompleteList,
        setcategoriesCompleteList,
        setIsLogin,
        modalOpen,
        setModalOpen,
        carousel,
        setCarousel,
        usuariosList,
        setUsuariosList,
        nextCourses,
        setNextCourses,
        nextCoursessCompleteList,
        setnextCoursessCompleteList,
        nombres,
        setIs404,
        is404,
        isAdmin,
        setIsAdmin,
      }}
    >
      {children}
    </projectContext.Provider>
  );
};

export default ProjectContext;
