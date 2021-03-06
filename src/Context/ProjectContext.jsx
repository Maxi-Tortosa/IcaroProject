import { collection, onSnapshot } from 'firebase/firestore';
import { createContext, useEffect, useState } from 'react';

import db from '../../src/Firebase';
import { sortArrayByNroOrden } from '../Utils';

export const projectContext = createContext();

const ProjectContext = ({ children }) => {
  const [course, setCourse] = useState([]);
  const [courseCompleteList, setCourseCompleteList] = useState([]);
  const [nextCourses, setNextCourses] = useState([]);
  const [nombres, setNombres] = useState([]);
  const [categories, setCategories] = useState([]);
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
        const courseList = snapshot.docs.map((doc) => doc.data());
        setCourseCompleteList(sortArrayByNroOrden(courseList));
      },
      (error) => console.log('error', error)
    );

    onSnapshot(
      collection(db, 'NuevosCursos'),
      (snapshot) => {
        const courseList = snapshot.docs.map((doc) => doc.data());
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
      (snapshot) => setCategories(snapshot.docs.map((doc) => doc.data())),
      (error) => console.log('error', error)
    );

    onSnapshot(
      collection(db, 'ComisionesCursos'),
      (snapshot) => setNextCourses(snapshot.docs.map((doc) => doc.data())),
      (error) => console.log('error', error)
    );

    onSnapshot(
      collection(db, 'Usuarios'),
      (snapshot) => setUsuariosList(snapshot.docs.map((doc) => doc.data())),
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
        isLogin,
        setIsLogin,
        modalOpen,
        setModalOpen,
        carousel,
        setCarousel,
        usuariosList,
        setUsuariosList,
        nextCourses,
        setNextCourses,
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
