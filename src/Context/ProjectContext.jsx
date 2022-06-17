import { collection, onSnapshot } from 'firebase/firestore';
import { createContext, useEffect, useState } from 'react';

import db from '../../src/Firebase';

export const projectContext = createContext();

const ProjectContext = ({ children }) => {
  const [course, setCourse] = useState([]);
  const [courseCompleteList, setCourseCompleteList] = useState([]);
  const [nextCourses, setNextCourses] = useState([]);
  const [nombres, setNombres] = useState([]);
  const [categories, setCategories] = useState([]);
  const [carousel, setCarousel] = useState([]);
  const [isLogin, setIsLogin] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [is404, setIs404] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    onSnapshot(
      collection(db, 'NuevosCursos'),
      (snapshot) =>
        setCourseCompleteList(snapshot.docs.map((doc) => doc.data())),
      (error) => console.log('error', error)
    );

    onSnapshot(
      collection(db, 'NuevosCursos'),
      (snapshot) => {
        const courseList = snapshot.docs.map((doc) => doc.data());
        setCourse(courseList.filter((elem) => !elem.isHidden));
      },
      (error) => console.log('error', error)
    );

    onSnapshot(
      collection(db, 'CategoriasCursos'),
      (snapshot) => setCategories(snapshot.docs.map((doc) => doc.data())),
      (error) => console.log('error', error)
    );

    onSnapshot(
      collection(db, 'FechasCursos'),
      (snapshot) => setNextCourses(snapshot.docs.map((doc) => doc.data())),
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
        nextCourses,
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
