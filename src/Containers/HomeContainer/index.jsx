import styled from 'styled-components';
import { useEffect, useContext, useState } from 'react';
import { Link, Router } from 'react-router-dom';
import { projectContext } from '../../Context/ProjectContext';
import QuienesSomos from '../../Components/QuienesSomos';
import Banners from '../../Components/Banners';
import ProximosCursos from '../../Components/Proximos cursos';

const HomeContainer = () => {
	const { course, setCourse, isLogin, setIsLogin } = useContext(projectContext);

	return (
		<>
			{isLogin ? (
				<Container>
					<div className='sesion'>
						<p>Estás logueado</p>
						<button className='boton' onClick={() => setIsLogin(false)}>
							Cerrar
						</button>
					</div>
				</Container>
			) : (
				<Container>
					<ProximosCursos />
					<QuienesSomos />
					<Banners />
				</Container>
			)}
		</>
	);
};

export default HomeContainer;

const Container = styled.div`
	height: auto;

	.sesion {margin-top: 30%;}
	
	}
`;
